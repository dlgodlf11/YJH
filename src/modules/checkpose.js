function checkpose(pose_u, pose_r) {
  const leftpart = [5, 7, 9, 11, 13, 15];
  const rightpart = [6, 8, 10, 12, 14, 16];
  var angle_u = 0,
    angle_r = 0,
    alldis = 0,
    detectparts = 0;

  for (var index = 0; index < 6; index += 2) {
    if (pose_u[0].keypoints[leftpart[index]].score > 0.4 && pose_u[0].keypoints[leftpart[index + 1]].score > 0.4) {
      angle_u = getangle(pose_u[0].keypoints[leftpart[index]].position, pose_u[0].keypoints[leftpart[index + 1]].position);
      angle_r = getangle(pose_r[0].keypoints[leftpart[index]].position, pose_r[0].keypoints[leftpart[index + 1]].position);
      detectparts += 1;
      alldis += Math.abs(Math.abs(angle_u) - Math.abs(angle_r));
    }
    if (pose_u[0].keypoints[rightpart[index]].score > 0.4 && pose_u[0].keypoints[rightpart[index + 1]].score > 0.4) {
      angle_u = getangle(pose_u[0].keypoints[rightpart[index]].position, pose_u[0].keypoints[rightpart[index + 1]].position);
      angle_r = getangle(pose_r[0].keypoints[rightpart[index]].position, pose_r[0].keypoints[rightpart[index + 1]].position);
      detectparts += 1;
      alldis += Math.abs(Math.abs(angle_u) - Math.abs(angle_r));
    }
  }
  alldis = alldis * 100;
  if (alldis > 200) {
    alldis = 200;
  }
  //console.log(alldis, detectparts);
  if (detectparts > 4) {
    return Math.round(200 - alldis) * 2;
  } else {
    return 0;
  }
}
function getangle(from, to) {
  if (from.x == 0 || to.x == 0) {
    return 90;
  }
  var angle = Math.atan((from.y - to.y) / (from.x - to.x));
  return angle;
}
export default checkpose;

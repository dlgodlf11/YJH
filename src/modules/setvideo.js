import { isMobile } from "./util";
async function setupCamera(video) {
  const mobile = isMobile();

  const stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
      facingMode: "environment",
      width: mobile ? undefined : video.width,
      height: mobile ? undefined : (video.width / 16) * 9,
    },
  });
  video.srcObject = stream;
}
export default setupCamera;

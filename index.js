"use strict";

$(".request_permission").on("click", function() {
  console.log("DeviceMotionEvent :", DeviceMotionEvent);
  console.log("DeviceOrientationEvent :", DeviceOrientationEvent);
  if (
    DeviceMotionEvent &&
    DeviceMotionEvent.requestPermission &&
    typeof DeviceMotionEvent.requestPermission === "function"
  ) {
    DeviceMotionEvent.requestPermission();
  }
  if (
    DeviceOrientationEvent &&
    DeviceOrientationEvent.requestPermission &&
    typeof DeviceOrientationEvent.requestPermission === "function"
  ) {
    DeviceOrientationEvent.requestPermission();
  }
});

// AFRAME.registerComponent("rotation-reader", {
//   tick: function() {
//     var position = new THREE.Vector3();
//     var quaternion = new THREE.Quaternion();

//     return function() {
//       this.el.object3D.getWorldPosition(position);
//       this.el.object3D.getWorldQuaternion(quaternion);
//       // position and rotation now contain vector and quaternion in world space.
//     };
//   }
// });

window.addEventListener("devicemotion", function(event) {
  console.log(event.acceleration.x + " m/s2");
  let camera = document.getElementById("camera");

  if (camera) {
    let position = camera.getAttribute("position");
    let rotation = camera.getAttribute("rotation");

    position.x += event.acceleration.x;
    position.z += event.acceleration.y;
    camera.setAttribute("position", position);
  }
});

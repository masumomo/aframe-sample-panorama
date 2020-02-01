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

const something = document.body.querySelector("#something");
window.addEventListener("devicemotion", function(event) {
  console.log(event.acceleration.x + " m/s2");
  let camera = document.getElementById("camera");

  if (camera) {
    let position = camera.getAttribute("position");
    let rotation = camera.getAttribute("rotation");
    something.value = `${event.acceleration.x} / ${event.acceleration.y} / ${event.acceleration.z}`;
    position.x += event.acceleration.x;
    position.z += event.acceleration.y;
    camera.setAttribute("position", position);
  }
});
console.log("START :");
console.log("START :", something.value);
something.value = `START ${event.acceleration.x} / ${event.acceleration.y} / ${event.acceleration.z}`;

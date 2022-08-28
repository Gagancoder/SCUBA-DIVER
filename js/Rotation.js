AFRAME.registerComponent("diver-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
    speedOfMovement: { type: "number", default: 0 }
  },
  init: function () {
    window.addEventListener("keydown", (e) => {

      //get the data from the attributes
      this.data.speedOfRotation = this.el.getAttribute("rotation");      
      this.data.speedOfMovement = this.el.getAttribute("position");

      var diverRotation = this.data.speedOfRotation;      
      var diverPosition = this.data.speedOfMovement;

      //control the attributes with the Arrow Keys
      if (e.key === "ArrowUp") {
        if (diverPosition.z < 20) {
          diverPosition.z += 0.1;
          this.el.setAttribute("position", diverPosition);
        }
      }
      if (e.key === "ArrowDown") {
        if (diverPosition.z> -10) {
          diverPosition.z -= 0.1;
          this.el.setAttribute("position", diverPosition);
        }
      }
      if (e.key === "w") {
        if (diverPosition.y<10) {
          diverPosition.y += 0.1;
          this.el.setAttribute("position", diverPosition);
        }
        if (diverRotation.x < 120) {
          diverRotation.x -= 0.25;
          this.el.setAttribute("rotation", diverRotation);
        }
      }
      if (e.key === "s") {
        if (diverPosition.y> -10) {
          diverPosition.y -= 0.1;
          this.el.setAttribute("position", diverPosition);
        }
        if (diverRotation.x > -70) {
          diverRotation.x += 0.25;
          this.el.setAttribute("rotation", diverRotation);
        }
      }
      if (e.key === "ArrowRight") {
        if (diverRotation.y < -30) {
          diverRotation.y += 0.25;
          this.el.setAttribute("rotation", diverRotation);
        }
        if (diverPosition.x < 20) {
          diverPosition.x += 0.05;
          this.el.setAttribute("position", diverPosition);
        }
      }
      if (e.key === "ArrowLeft") {
        if (diverRotation.y <360) {
          diverRotation.y += 0.5;
          this.el.setAttribute("rotation", diverRotation);
        }
        if (diverPosition.x > -20) {
          diverPosition.x -= 0.05;
          this.el.setAttribute("position", diverPosition);
        }
      }
    });
  }
});
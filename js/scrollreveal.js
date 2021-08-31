$(document).ready(function () {
  window.sr = ScrollReveal({ reset: true, viewFactor: 0.2 });
  sr.reveal(".aparece", { duration: 1000 }, 300);
  sr.reveal(".aparece-fondo", { duration: 1000 });
  sr.reveal(".aparece-derecha", {
    duration: 1000,
    origin: "right",
    distance: "100px"
  });
  sr.reveal(".aparece-izquierda", {
    duration: 1000,
    origin: "left",
    distance: "100px"
  });
  sr.reveal(".aparece-arriba", {
    duration: 1000,
    origin: "top",
    distance: "100px"
  });
  sr.reveal(".aparece-abajo", {
    duration: 1000,
    origin: "bottom",
    distance: "100px"
  });
  sr.reveal(".gira", {
    duration: 1000,
    rotate: { x: 360, y: 0, z: 0 },
    distance: "100px"
  });
  sr.reveal(".escala", { duration: 1000, scale: 0.4, distance: "100px" });
});

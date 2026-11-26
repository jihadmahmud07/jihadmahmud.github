
// Mobile navigation
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
  });

  navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
    });
  });
}

// Animated background particles
const canvas = document.getElementById("particles");
const ctx = canvas ? canvas.getContext("2d") : null;

if (canvas && ctx) {
  let particles = [];
  let width = 0;
  let height = 0;

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;

    const ratio = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = width * ratio;
    canvas.height = height * ratio;

    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    const count = Math.min(
      Math.floor(width / 13),
      65
    );

    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      speed: Math.random() * 0.35 + 0.1,
      opacity: Math.random() * 0.5 + 0.2
    }));
  }

  function drawParticles() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(particle => {
      ctx.beginPath();
      ctx.arc(
        particle.x,
        particle.y,
        particle.size,
        0,
        Math.PI * 2
      );

      ctx.fillStyle =
        `rgba(69, 214, 173, ${particle.opacity})`;

      ctx.fill();

      if (!reducedMotion) {
        particle.y -= particle.speed;

        if (particle.y < -5) {
          particle.y = height + 5;
          particle.x = Math.random() * width;
        }
      }
    });

    if (!reducedMotion) {
      requestAnimationFrame(drawParticles);
    }
  }

  window.addEventListener("resize", resizeCanvas);

  resizeCanvas();
  drawParticles();
}

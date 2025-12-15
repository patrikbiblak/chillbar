<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("snow-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let snowflakes = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resize);
  resize();

  function createSnowflakes(count = 80) {
    snowflakes = [];
    for (let i = 0; i < count; i++) {
      snowflakes.push({
        x: Math.random() * width,
        y: Math.random() * -height, // 👈 ZAČÍNAJÚ NAD OBRAZOVKOU
        r: Math.random() * 3 + 2,    // 2–5px
        speed: Math.random() * 1 + 0.2,
        drift: Math.random() * 0.3
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "white";
    ctx.beginPath();

    for (let flake of snowflakes) {
      ctx.moveTo(flake.x, flake.y);
      ctx.arc(flake.x, flake.y, flake.r / 2, 0, Math.PI * 2);
    }

    ctx.fill();
    update();
    requestAnimationFrame(draw);
  }

  function update() {
    for (let flake of snowflakes) {
      flake.y += flake.speed;
      flake.x += Math.sin(flake.y * 0.01) * flake.drift;

      if (flake.y > height) {
        flake.y = Math.random() * -100; // znovu padá zhora
        flake.x = Math.random() * width;
      }
    }
  }

  createSnowflakes();
  draw();
});
</script>
<!-- end Simple Custom CSS and JS -->

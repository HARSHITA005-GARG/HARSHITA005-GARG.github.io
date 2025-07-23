const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
let w = window.innerWidth, h = window.innerHeight;
canvas.width = w; canvas.height = h;
let stars = Array.from({length: 80}, () => ({
  x: Math.random() * w,
  y: Math.random() * h,
  r: Math.random() * 1.5 + 0.2,
  dy: Math.random() * 0.5 + 0.3
}));
function drawStars() {
  ctx.clearRect(0, 0, w, h);
  for (const s of stars) {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
    ctx.fillStyle = "#9CFFFBcc";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "#9CFFFB";
    ctx.fill();
    s.y += s.dy;
    if (s.y > h) { s.x = Math.random() * w; s.y = 0; }
  }
  requestAnimationFrame(drawStars);
}
drawStars();
window.onresize = function() {
  w = window.innerWidth; h = window.innerHeight;
  canvas.width = w; canvas.height = h;
};

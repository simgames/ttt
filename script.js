window.addEventListener("load", function() {
  const canvas = document.getElementById("board");
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = 'green';
  ctx.fillRect(10, 10, 100, 100);
});

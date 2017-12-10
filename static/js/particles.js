var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var xmax = canvas.width = window.innerWidth;
var ymax = canvas.height = window.innerHeight;
var centerx = xmax / 2;
var centery = ymax /2;

var rmax = 2.7;
var rmin  = 0.9;
var count = 0;

var particles = [];
var numParticles = 150;
var maxv = 1;

function initParticles() {
  for(var i = 0; i < numParticles; i++){
    addParticle();
  }
}

function circle(x ,y, r, color, vx, vy) {
  var cir = new Object();
  cir.x = x;
  cir.y = y;
  cir.r = r;
  cir.color = color;
  cir.vx = vx;
  cir.vy = vy;
  return cir;
}

function addParticle() {
  var color = new Object();
  color.r = Math.random() * (255 - 50) + 205;
  color.r = Math.round(color.r);
  color.g = Math.random() * (255 - 50) + 205;
  color.g = Math.round(color.g);
  color.b = Math.random() * (255 - 50) + 205;
  color.b = Math.round(color.b);
  color.a = Math.random() * 0.40;

  var x0 = xmax * Math.random();
  var y0 = ymax * Math.random();
  var vx = (x0 - centerx) / 240;
  var vy = (y0 - centery) / 240;

  var c = circle(x0, y0, rmin + rmax * (Math.random() ** 2), color, vx, vy);
  particles.push(c);
}

function resetParticle(i) {
  var x0 = Math.random() * (0.65 * xmax - 0.35 * xmax) + (0.35 * xmax);
  var y0 = Math.random() * (0.65 * ymax - 0.35 * ymax) + (0.35 * ymax);
  var vx = (x0 - centerx) / 200;
  var vy = (y0 - centery) / 200;
  if(count % 30 == 0) {
    vx *= 3;
    vy *= 3;
  }
  particles[i].x = x0;
  particles[i].y = y0;
  particles[i].vx = vx;
  particles[i].vy = vy;
  particles[i].color.a = Math.random() * 0.01;
  count++;
 }

function colorToStr(r, g, b, a){
  return 'rgba(' + r + ',' + g + ','+ b + ','+ a + ')';
}

function update() {
  if(xmax != window.innerWidth) {
    xmax = canvas.width = window.innerWidth;
  }
  if(ymax != window.innerHeight) {
    ymax = canvas.height = window.innerHeight;
  }
  for(var i = 0; i < numParticles; i++){
    particles[i].x += particles[i].vx;
    particles[i].y += particles[i].vy;

    var x = particles[i].x;
    var y = particles[i].y;
    var r = particles[i].r;

    if(particles[i].color.a < 0.4) {
      particles[i].color.a += Math.random() * 0.001;
    }

    if(x + r < 0 || y + r < 0 || x - r > canvas.width || y - r > canvas.height) {
      resetParticle(i);
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function draw() {
  for(var i = 0; i < numParticles; i++){
    ctx.beginPath();
    ctx.fillStyle = colorToStr(particles[i].color.r, particles[i].color.g, particles[i].color.b, particles[i].color.a);
    ctx.arc(particles[i].x, particles[i].y, particles[i].r, 0, 2 * Math.PI);
    ctx.fill();
  }
}

function render() {
  update();
  draw();
  requestAnimationFrame(render);
}

initParticles();
requestAnimationFrame(render);

const rndmArrI = (a) => a[Math.floor(Math.random() * a.length)];
const colors = ['#990000', '#009900', '#000099', '#999900', '#009999', '#990099'];
function pixelCreate(x, y) {
  let dot = `<div class="dot" style="left: ${x}px; top: ${y}px; background:${rndmArrI(colors)}"></div>`;
  $(dot).appendTo("#area").fadeOut(1000).queue(function(next) {
    $(this).remove();
    next();
  });
}

function right(x, y) {
  if ((x > 0 && x < 100) && (y > 0 && y < 50)) {
    pixelCreate(x, y);
    setTimeout(right, 200, x + 1, y);
  }
}

function left(x, y) {
  if ((x > 0 && x < 100) && (y > 0 && y < 50)) {
    pixelCreate(x, y);
    setTimeout(left, 200, x - 1, y);
  }
}

function up(x, y) {
  if ((x > 0 && x < 100) && (y > 0 && y < 50)) {
    pixelCreate(x, y);
    setTimeout(up, 200, x, y - 1);
  }
}

function down(x, y) {
  if ((x > 0 && x < 100) && (y > 0 && y < 50)) {
    pixelCreate(x, y);
    setTimeout(down, 200, x, y + 1);
  }
}

function ur(x, y) {
  if ((x > 0 && x < 100) && (y > 0 && y < 50)) {
    pixelCreate(x, y);
    setTimeout(ur, 200, x + 1, y - 1);
  }
}

function ul(x, y) {
  if ((x > 0 && x < 100) && (y > 0 && y < 50)) {
    pixelCreate(x, y);
    setTimeout(ul, 200, x - 1, y - 1);
  }
}

function dr(x, y) {
  if ((x > 0 && x < 100) && (y > 0 && y < 50)) {
    pixelCreate(x, y);
    setTimeout(dr, 200, x + 1, y + 1);
  }
}

function dl(x, y) {
  if ((x > 0 && x < 100) && (y > 0 && y < 50)) {
    pixelCreate(x, y);
    setTimeout(dl, 200, x - 1, y + 1);
  }
}

function burst(x, y) {
  right(x + 1, y);
  left(x - 1, y);
  up(x, y - 1);
  down(x, y + 1);
  ur(x + 1, y - 1);
  ul(x - 1, y - 1);
  dr(x + 1, y + 1);
  dl(x - 1, y + 1);
}

function mousePos(e) {
  const cursorX = Math.round(((e.pageX) - ($('#area').offset().left * 3))/3);
  const cursorY = Math.round(((e.pageY) - ($('#area').offset().top * 3))/3);
  pixelCreate(cursorX, cursorY);
  burst(cursorX, cursorY);
}
document.getElementById("area").addEventListener("click", mousePos);

var canvas = document.querySelector('canvas');

canvas.width = 1000;
canvas.height = 1125;

var c = canvas.getContext("2d");
// moon
c.fillStyle = "rgb(196, 191, 191)";
c.beginPath();
c.arc(750, 250, 230, 0, 2 * Math.PI);
c.fill()

c.fillStyle = "#2F3131";
c.fillRect(295, 100, 400, 1000);

//yellow
c.fillStyle = "rgb(255, 255, 0)"
c.fillRect(340, 150, 125, 100);
c.fillRect(525, 150, 125, 100);
c.fillRect(340, 350, 125, 100);
c.fillRect(525, 350, 125, 100);
c.fillRect(525, 550, 125, 100);
c.fillRect(340, 550, 125, 100);
c.fillRect(340, 750, 125, 100);
c.fillRect(525, 750, 125, 100);
c.fillRect(340, 950, 125, 100);
c.fillRect(525, 950, 125, 100);

//windows
c.fillStyle = "#2F3131";
c.fillRect(340, 200, 125, 10);
c.fillRect(525, 200, 125, 10);
c.fillRect(397.5, 150, 10, 100);
c.fillRect(582.5, 150, 10, 100);
c.fillRect(340, 400, 125, 10);
c.fillRect(525, 400, 125, 10);
c.fillRect(397.5, 350, 10, 100);
c.fillRect(582.5, 350, 10, 100);
c.fillRect(340, 600, 125, 10);
c.fillRect(525, 600, 125, 10);
c.fillRect(397.5, 550, 10, 100);
c.fillRect(582.5, 550, 10, 100);
c.fillRect(340, 800, 125, 10);
c.fillRect(525, 800, 125, 10);
c.fillRect(397.5, 750, 10, 100);
c.fillRect(582.5, 750, 10, 100);
c.fillRect(340, 1000, 125, 10);
c.fillRect(525, 1000, 125, 10);
c.fillRect(397.5, 950, 10, 100);
c.fillRect(582.5, 950, 10, 100);

c.fillStyle = "gray"
c.fillRect(0, 1100, 1000, 100);





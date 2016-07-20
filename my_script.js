var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height
});

var layer = new Konva.Layer();

var rectangle = new Konva.Rect({

  width: 100,
  height: 100,
  fill: 'red',
  strokeWidth: 4
});

layer.add(rectangle);
stage.add(layer);

var yPos = rectangle.getAttr('y'),
    xPos = rectangle.getAttr('x'),
    maxX = 365,
    maxY = 365,
    speed = 10,
    yIncrease = true,
    xIncrease = true;

var anim = new Konva.Animation(function(frame) {

    if (xPos < maxX && xIncrease)  {

        rectangle.setX((xPos++)*speed);
      }
else {

  if (xPos < 1) {

      xIncrease = true;
      rectangle.setX((xPos++)*speed);
    }

      else {

      xIncrease = false;
      rectangle.setX((xPos--)*speed);

      }

  }


    if (yPos < maxY && yIncrease) {

        rectangle.setY((yPos++)*speed);

    } else {

      if (yPos < 1 ) {

          yIncrease = true;
          rectangle.setY(speed*(yPos++));
      }
      else {
         rectangle.setY((yPos--)*speed);
         yIncrease = false;
        }
    }


}, layer);

anim.start();

/*
var speed = 100;
var period = 5000;
var start_pos_X = 100;
var start_pos_Y = 100;
var center_x = stage.getWidth();
var center_y = stage.getHeight();


var anim = new Konva.Animation(function(frame){

     rectangle.setX(start_pos_X + (speed * Math.sin(frame.time * 2 * Math.PI/period)));
     rectangle.setY(start_pos_Y + (speed * Math.sin(frame.time * 2 * Math.PI/period)));
},layer);

anim.start();
*/

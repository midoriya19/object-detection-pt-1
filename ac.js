img = "";
status = "";
objects = [] ;

function preload()
{
   img = loadImage("ac.jpg");
   
}

function setup()
{
  canvas = createCanvas(600,480);
  canvas.center();
  objectDetector = ml5.objectDetector("cocossd",modelloaded);
  document.getElementById("status").innerHTML = " Status;Detecting object ";
}
 function modelloaded()
{
 status = true;
 console.log("model is loaded");
 objectDetector.detect(img,gotResult);
}


function draw()
{
  image(img,0,0,600,480);
  if (status != "") 
  {
    for (i = 0; i < objects.length; i++) 
    {
      document.getElementById("status").innerHTML = "status:object detected";
      
      fill('#FF0000');
      percent = floor(objects[i].confidence * 100);
      text(objects[i].label + " " + percent + " % ",objects[i].x , objects[i].y);
      noFill();
      stroke('#FF0000');
      rect(objects[i].x , objects[i].y,objects[i].width,objects[i].height);
    }
  }
  
 
}

function gotResult(error,results)
{
  if (error) 
  {
   console.log(error);
  }
  console.log(results);
  objects = results;

}
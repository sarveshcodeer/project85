//Create a reference for canvas 
canvas = document.getElementById("mc");
ctx = canvas.getContext("2d");
//Give specific height and width to the car image

carw = 75 ; 
carh= 100 ; 
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
carx = 5 ; 
cary = 225 ; 
function add() {
	bimg = new Image() ; 
	bimg.onload = uploadBackground ; 
	bimg.src = background_image ;
	cimg = new Image() ; 
	cimg.onload = uploadgreencar ; 
	cimg.src = greencar_image ;  
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(bimg , 0 , 0 , 800 , 400)
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(cimg , carx , cary , carw , carh )
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(cary>=0) {

cary = cary-10 ; 
uploadBackground();
uploadgreencar();
	}
}

function down()
{
	//Define function to move the car downward
	if(cary<=390) {

		cary = cary+10 ; 
		uploadBackground();
		uploadgreencar();
			}
}

function left()
{
	//Define function to move the car left side
	if(carx>=0) {

		carx = carx-10 ; 
		uploadBackground();
		uploadgreencar();
			}
}

function right()
{
	//Define function to move the car right side
	if(carx<=790) {

		carx = carx+10 ; 
		uploadBackground();
		uploadgreencar();
			}
}

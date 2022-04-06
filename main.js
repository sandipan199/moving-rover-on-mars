
canvas = document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=100;
nasamarsimagearray=["https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/ncam/NRB_486270860EDR_F0481570NCAM00323M_.JPG","https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631300503690E01_DXXX.jpg","https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631220503682E01_DXXX.jpg","https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RLB_486265291EDR_F0481570RHAZ00323M_.JPG"];
randomnumber=Math.floor(Math.random()*4);
backgroundimage=nasamarsimagearray[randomnumber];
rover_image="rover.png";
roverx=10;
rovery=10;
function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadbackground;
    background_imgtag.src=backgroundimage;

    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_image;

    
}
function uploadbackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
} 
function uploadrover(){
    ctx.drawImage(rover_imgtag,roverx,rovery,rover_width,rover_height);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypressed=e.keyCode;
    if(keypressed=='37'){
        left();
        console.log("left")
    }
    if(keypressed=='38'){
        up();
        console.log("up")
    }
    if(keypressed=='39'){
        right();
        console.log("right")
    
    }
    if(keypressed=='40'){
        down();
        console.log("down")
    }
}
function up(){
    if(rovery>=0){
        rovery=rovery-10;
        console.log("when up arrow is pressed x="+roverx+" y ="+rovery);
        uploadbackground();
        uploadrover();
    }
}
function down(){
    if(rovery<=500){
        rovery=rovery+10;
        console.log("when down arrow is pressed x="+roverx+" y ="+rovery);
        uploadbackground();
        uploadrover();
    }
}
function left(){
    if(roverx>=0){
        roverx=roverx-10;
        console.log("when left arrow is pressed x="+roverx+" y ="+rovery);
        uploadbackground();
        uploadrover();
    }
}
function right(){
    if(roverx<=700){
        roverx=roverx+10;
        console.log("when right arrow is pressed x="+roverx+" y ="+rovery);
        uploadbackground();
        uploadrover();
    }
}
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
color="pink";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=10;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("color").value;
    console.log(color);

    Mouse_x=e.clientX-canvas.offsetLeft;
    Mouse_y=e.clientY-canvas.offsetTop;
    circle(Mouse_x,Mouse_y);
}
function circle(Mouse_x,Mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=10;
    ctx.arc(Mouse_x,Mouse_y,40,0,2*Math.PI);
    ctx.stroke();
}
{
ctx.beginPath();
ctx.-strokeStyle-pink
ctx.lineWidth=10;
ctx.rect(150, 143, 430, 200);
ctx.stroke();
}
{
canvas-
Document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
}
ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        
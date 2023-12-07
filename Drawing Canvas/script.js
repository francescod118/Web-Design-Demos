const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeBrush = document.getElementById('size');
const colorSelect = document.getElementById('color');
const clearBtn = document.getElementById('clear');
const ctx = canvas.getContext('2d');

let size = 12
let color = 'black';
let isPressed = false;
let x;
let y;

//Detect mouse click
canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX
    y = e.offsetY

    console.log(isPressed, x, y)
})

//Detect mouse unclicked
canvas.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined
    y = undefined

    console.log(isPressed, x, y)
})

//Track mouse movements while clicked
canvas.addEventListener('mousemove', (e) => {
    if (isPressed){
        const x2 = e.offsetX
        const y2 = e.offsetY
        

        drawLine(x,y,x2,y2)
        drawCircle(x2,y2)
        
        x = x2
        y = y2
    }

})

function drawCircle(x,y) {
    ctx.beginPath();
    ctx.arc(x,y,size,0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

/*
function drawRect(x,y,x2,y2) {
    ctx.beginPath();
    ctx.rect(x,y,x2,y2)
    ctx.fillStyle = color;
    ctx.fill();
}
*/

function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke();
}

function sizeUpdate(){
    sizeBrush.innerText = size
}

colorSelect.addEventListener('change', (e) => color = e.target.value) 
increaseBtn.addEventListener('click', () => {
    size += 1
    if(size > 50){
        size = 50
    }

    sizeUpdate()
})

decreaseBtn.addEventListener('click', () => {
    size -= 1
    if(size < 1){
        size = 1
    }

    sizeUpdate()
})

clearBtn.addEventListener('click', () => ctx.clearRect(0,0,canvas.width,canvas.height))


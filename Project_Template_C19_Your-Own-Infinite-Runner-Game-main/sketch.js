var fundo
//naves
var i1
var i2
var i3
//bixos
var i5
var i6
var navezinha
var tiro
var contagemTiro = 0
var ginimigo
var gtiro






function preload(){
    fundo = loadImage("imagens/funddo.png")
i1 = loadImage("imagens/download(2).png")
i2 = loadImage("imagens/download(3).png")
i3 = loadImage("imagens/download(5).png")
//.
i5 = loadImage("imagens/download(6).png")
i6 = loadImage("imagens/download(7).png")
navezinha = loadImage("imagens/download.png")

}

function setup() {
    createCanvas(windowWidth,windowHeight)

    navesinha = createSprite(width/2,height-100)
    navesinha . addImage(navezinha)
    navesinha . rotation = 180
    
}

function draw() {
 background(fundo)
drawSprites()
textSize(30)
stroke("red")
strokeWeight(5)
fill("Yellow")
text(contagemTiro,width-70,100)

if (frameCount%30==0){
    obstaculo()
}
if (frameCount%150==0){
    obstaculo2()
}
navesinha.x = mouseX
navesinha.y = mouseY

        if(keyDown("SPACE")){


if(contagemTiro<=5){
    tiro = createSprite(navesinha.x,navesinha.y,10,70)
    tiro.velocityY = -5
        tiro.lifetime = 700
    contagemTiro++
    tiro.shapeColor = "#574169"
}


}
if (contagemTiro==6){
    console.log("oi")    
    if (frameCount%30==0){
            contagemTiro=0

        }
      
}
        }

    


function obstaculo(){
var obs
obs = createSprite(Math.round(random(0,windowWidth-100)),50)
switch(Math.round(random(1,3))){

    case 1 :obs.addImage(i1)
break
    case 2 :    obs.addImage(i2)
break                               
    case 3 :        obs.addImage(i3)
break
}

obs.velocityY = 2
obs.lifetime = 700
}
function obstaculo2(){
var obs2
obs2 = createSprite(Math.round(random(0,windowWidth)),50)
switch(Math.round(random(1,2))){

    case 1 :obs2.addImage(i5)
break
    case 2 :    obs2.addImage(i6)
break                               

}
obs2.scale = 0.3
obs2.velocityY = 5
obs2.lifetime = 700
} 
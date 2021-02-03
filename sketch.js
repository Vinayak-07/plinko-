var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
  const Render = Matter.Render;
var particles = [];
var plinkos = [];

var divisions = [];

var divisionHeight=300;
var score =0;

var  gamestate;
var PLAY = 1;
var END = 0;

gamestate = PLAY;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1500,
		  height: 700,
		  wireframes: false
		}
	  });
  
  
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight))
   }
   console.log(divisions.Bodies);

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    Render.run(render);
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }*/
   
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particles !== null){

    particles[0].display();

      if(particles.body.position.y>760){
        score = score + 500;
        particles = null;
      }
   }

}

function  mousePressed(){
  if(gamestate !== "end"){
    particles = new Particles(mouseX,10,10,10);
  }
  particles[0].display();
}
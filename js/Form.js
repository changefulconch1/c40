class Form {

  constructor() {
    this.title = createElement('h2')
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.reset = createButton('reset')
    this.greeting = createElement('h2');
    this.end =createElement('h3')
  }
  hide(){
    this.title.hide();
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){

    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 25, 0);
    this.reset.position(displayWidth/2-500,displayHeight/2-500)
    this.input.position(displayWidth/2,displayHeight/2-250);
    this.button.position(displayWidth/2+75,displayHeight/2-200);
    
    /* => is used to give the ownership to someone else 
    which mean the particular thing is belonging to someone else.*/
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2,displayHeight/2);
    });
     function ending () {
      this.end.html("the game has ended")
      this.end.position(displayWidth/2,displayHeight/2);
     }
    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });
  }
}

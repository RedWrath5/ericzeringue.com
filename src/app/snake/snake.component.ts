import { Component, OnInit } from '@angular/core';
import { cCircle } from './cCircle';
import { SnakeHead } from './SnakeHead';
import { SnakeSegment } from './SnakeSegment';
import { Food } from './Food';
import { Direction } from './Direction';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css']
})
export class SnakeComponent implements OnInit {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  score = 0;
  snakeHead: SnakeHead;
  snakeTail: SnakeSegment;
  food: Food;
  
  constructor() {
    
  }

  gameLoop() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, 400, 200);
    this.ctx.fillStyle = "yellow";
    this.ctx.fillText("Score: " + this.score, 330, 20);
    this.snakeHead.move();
    this.checkFood();
    this.snakeHead.draw();
    this.food.draw();
    if(this.checkLoss()){ 
      this.ctx.font="42px monospace";
      this.ctx.fillStyle = "yellow";
      this.ctx.fillText("You Lose", 100, 100);
    } else {
      requestAnimationFrame(this.gameLoop.bind(this));
    }
  }

  //setup game when window.ready
  ngOnInit() {
    this.canvas = <HTMLCanvasElement>document.getElementById('cnvs');
    this.ctx = this.canvas.getContext("2d");
    this.ctx.font="12px monospace";
    this.snakeHead = new SnakeHead(this.ctx, 20, 20);
    this.food = new Food(this.ctx, Math.floor(Math.random() * 380) + 10, Math.floor(Math.random() * 180) + 10)
    document.addEventListener('keydown', this.keyboardInput.bind(this));
    this.gameLoop();

  }

  checkLoss(): boolean {
    let holdx = this.snakeHead.x;
    let holdy = this.snakeHead.y;
    if(holdx<=0 || holdx>=400 || holdy<=0 || holdy>=200) return true;
    if(this.snakeHead.prevPart 
      && this.snakeHead.prevPart.prevPart 
      && this.snakeHead.prevPart.prevPart.prevPart 
      && this.snakeHead.prevPart.prevPart.prevPart.colRecurse(this.snakeHead)) return true;
    return false;
  }

  checkFood(){
    if(this.snakeHead.collision(this.food)){
      this.food = new Food(this.ctx, Math.floor(Math.random() * 380) + 10, Math.floor(Math.random() * 180) + 10)
      this.score++;
      if(this.snakeHead.prevPart){
        this.snakeTail.prevPart = new SnakeSegment(this.ctx, this.snakeTail.direction, this.snakeTail.x, this.snakeTail.y);
        this.snakeTail = this.snakeTail.prevPart;
        this.snakeTail.prevPart = new SnakeSegment(this.ctx, this.snakeTail.direction, this.snakeTail.x, this.snakeTail.y);
        this.snakeTail = this.snakeTail.prevPart;
        this.snakeTail.prevPart = new SnakeSegment(this.ctx, this.snakeTail.direction, this.snakeTail.x, this.snakeTail.y);
        this.snakeTail = this.snakeTail.prevPart;
        this.snakeTail.prevPart = new SnakeSegment(this.ctx, this.snakeTail.direction, this.snakeTail.x, this.snakeTail.y);
        this.snakeTail = this.snakeTail.prevPart;
        this.snakeTail.prevPart = new SnakeSegment(this.ctx, this.snakeTail.direction, this.snakeTail.x, this.snakeTail.y);
        this.snakeTail = this.snakeTail.prevPart;
        this.snakeTail.prevPart = new SnakeSegment(this.ctx, this.snakeTail.direction, this.snakeTail.x, this.snakeTail.y);
        this.snakeTail = this.snakeTail.prevPart;
        this.snakeTail.prevPart = new SnakeSegment(this.ctx, this.snakeTail.direction, this.snakeTail.x, this.snakeTail.y);
        this.snakeTail = this.snakeTail.prevPart;
      } else {
        this.snakeHead.prevPart = new SnakeSegment(this.ctx, this.snakeHead.direction, this.snakeHead.x, this.snakeHead.y, true);
        this.snakeTail = this.snakeHead.prevPart;
      }
      
    }
  }

  keyboardInput(event: KeyboardEvent) {
    // PRESS LEFT ARROW
    if (event.keyCode == 37 && this.snakeHead.direction != Direction.Right) {
        this.snakeHead.setDirection(Direction.Left);
    }
    // PRESS UP ARROW
    else if (event.keyCode == 38 && this.snakeHead.direction != Direction.Down) {
        this.snakeHead.setDirection(Direction.Up);
    }
    // PRESS RIGHT ARROW
    else if (event.keyCode == 39 && this.snakeHead.direction != Direction.Left) {
        this.snakeHead.setDirection(Direction.Right);
    }
    // PRESS DOWN ARROW
    else if (event.keyCode == 40 && this.snakeHead.direction != Direction.Up) {
        this.snakeHead.setDirection(Direction.Down);
    }
  }

}
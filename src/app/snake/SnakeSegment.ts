import { SnakePart } from './SnakePart'
import { Direction } from './Direction'
import { DirectionQueue } from './DirectionQueue'

const COLOR = "blue";
export class SnakeSegment extends SnakePart {
  prevPart: SnakeSegment;
  directionQueue = new DirectionQueue();

  constructor(ctx: CanvasRenderingContext2D, direction: Direction, x:number, y:number, firstTail = false) {
    super(ctx, COLOR);
    this.direction = direction;
    this.x = x;
    this.y = y;
    switch (direction) {
      case Direction.Up: {
        this.y += SnakePart.HEIGHT;
        break;
      }
      case Direction.Down: {
        this.y -= SnakePart.HEIGHT;
        break;
      }
      case Direction.Left: {
        this.x += SnakePart.WIDTH;
        break;
      }
      case Direction.Right: {
        this.x -= SnakePart.WIDTH;
        break;
      }
    }
    if(firstTail) {
      for (var _i = 0; _i < SnakePart.RATIO_HEIGHT; _i++){
        this.directionQueue.push(direction);
      }
    } else {
      for (var _i = 0; _i < SnakePart.RATIO_HEIGHT - 1; _i++){
        this.directionQueue.push(direction);
      }
    }
  }

  move = (direction: Direction): void =>  {
    this.directionQueue.push(direction);
    if (this.prevPart) {
      this.prevPart.move(this.direction);
    }
    this.direction = this.directionQueue.pop();
    switch (this.direction) {
      case Direction.Up: {
        this.y -= SnakePart.SPEED;
        break;
      }
      case Direction.Down: {
        this.y += SnakePart.SPEED;
        break;
      }
      case Direction.Left: {
        this.x -= SnakePart.SPEED;
        break;
      }
      case Direction.Right: {
        this.x += SnakePart.SPEED;
        break;
      }
    }
  }

  private superDraw = this.draw;
  draw = (): void => {
    this.superDraw();
    if (this.prevPart) this.prevPart.draw();
  }

  colRecurse = (snakeHead: SnakePart): boolean => {
    if (this.prevPart) {
      if (this.collision(snakeHead)) return true;
      return this.prevPart.colRecurse(snakeHead);
    } else {
      return false;
    }
  }
}
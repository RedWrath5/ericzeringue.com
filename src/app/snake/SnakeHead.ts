import { SnakeSegment } from './SnakeSegment'
import { SnakePart } from './SnakePart'
import { Direction } from './Direction'

const COLOR = "red";
export class SnakeHead extends SnakePart {
  direction = Direction.Down;
  
  prevPart: SnakeSegment;

  constructor(ctx: CanvasRenderingContext2D, x: number, y: number) {
    super(ctx, COLOR);
    this.x = x;
    this.y = y;
  }

  move = (): void => {
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
    this.directionalCounter--;
    if (this.prevPart) {
      // if (this.directionalCounter >= 0){
      //   this.prevPart.move(this.prevDirection);
      // } else {
        this.prevPart.move(this.direction);
      //}
    }
  }

  private superDraw = this.draw;
  draw = (): void => {
    this.superDraw();
    if (this.prevPart) this.prevPart.draw();
  }

  setDirection = (direction: Direction): void => {
    this.prevDirection = this.direction;
    this.direction = direction;
    this.directionalCounter = SnakePart.RATIO_HEIGHT;
  }
}
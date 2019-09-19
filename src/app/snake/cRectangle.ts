import { iShape } from './iShape';

export class cRectangle implements iShape {
  public ctx: CanvasRenderingContext2D;
  public x: number = 0;
  public y: number = 0;
  public lineWidth: number = 5;
  public width: number = 0;
  public height: number = 0;
  public color: string = "blue";

  constructor(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, color: string = "blue", lineWidth: number = 2) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.lineWidth = lineWidth;
  }

  public draw = (): void => {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.stroke();
    this.ctx.restore();
  }

  collision = (other: cRectangle): boolean => {
    let xoverlap: boolean = false;
    let yoverlap: boolean = false;
    if (this.x <= other.x) {
      if (this.x + this.width >= other.x) {
        xoverlap = true;
      }
    }
    else {
      if (other.x + other.width >= this.x) {
        xoverlap = true;
      }
    }

    if (this.y <= other.y) {
      if (this.y + this.height >= other.y) {
        yoverlap = true;
      }
    }
    else {
      if (other.y + other.height >= this.y) {
        yoverlap = true;
      }
    }

    if (xoverlap == true && yoverlap == true) {
      return true;
    }

    return false;
  }



}
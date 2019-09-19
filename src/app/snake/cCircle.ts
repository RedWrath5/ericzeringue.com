import { iShape } from './iShape';

export class cCircle implements iShape {
  public ctx: CanvasRenderingContext2D;
  public x: number = 0;
  public y: number = 0;
  public radius: number = 10;
  public lineWidth: number = 2;
  public color: string = "red";
  

  constructor( ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, color: string = "red", line_width: number = 2) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.lineWidth = line_width;
  }
  public draw = (): void => {
    this.ctx.save();
    this.ctx.beginPath();
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.ctx.stroke();
    this.ctx.restore();
    }
  }
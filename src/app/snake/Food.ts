import { cRectangle } from './cRectangle'

const WIDTH = 5;
const HEIGHT = 5;
const COLOR = "green";
const LINE_WIDTH = 2;
export class Food extends cRectangle {
    constructor(ctx: CanvasRenderingContext2D, x: number, y: number) {
      super(ctx, x, y, WIDTH, HEIGHT, COLOR, LINE_WIDTH);
   }
}
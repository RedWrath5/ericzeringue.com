import {cRectangle} from './cRectangle'
import { Direction } from './Direction'

export class SnakePart extends cRectangle {
    static readonly SPEED = 2;
    static readonly WIDTH = 10;
    static readonly HEIGHT = 10;
    static readonly LINE_WIDTH = 1;
    static readonly RATIO_WIDTH = SnakePart.WIDTH / SnakePart.SPEED;
    static readonly RATIO_HEIGHT = SnakePart.HEIGHT / SnakePart.SPEED;
    public direction: Direction;
    public prevDirection : Direction;
    public directionalCounter = 0;
    constructor(ctx: CanvasRenderingContext2D, color: string) {
      super(ctx, 0, 0, SnakePart.WIDTH, SnakePart.HEIGHT, color, SnakePart.LINE_WIDTH);
    }
}
import { Direction } from './Direction'

//Code taken from Forrest Thomas on github and modified by Eric Zeringue
export class Node {
  value: Direction;
  pointer: Node;
  constructor(value: Direction) {
    this.value = value;
  }
}

export class DirectionQueue {
  pointer: any;
  rear: any;

  constructor() {
    this.pointer = null;
    this.rear = null;
  }

  push(value: Direction) {
    let pushedNode = new Node(value);
    let previousRear = this.rear;
    if (!this.rear) {
      this.pointer = pushedNode;
      this.rear = pushedNode;
    } else {
      this.rear = pushedNode;
      previousRear.pointer = pushedNode;
    }
  }

  pop() {
    let poppedValue = this.pointer.value;
    this.pointer = this.pointer.pointer;
    if (!this.pointer) {
      this.rear = null;
    }
    return poppedValue;
  }

  peek() {
    if (this.pointer) {
      return this.pointer.value;
    } else {
      return undefined;
    }
  }
  isEmpty() {
    return this.rear === null;
  }
}
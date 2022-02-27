/**
 * Define Size for storing the dimensions of the window
 *
 * Define a class (constructor function) named Size. It should have two fields width and height that store the window's current dimensions. The constructor function should accept initial values for these fields. The width is provided as the first parameter, the height as the second one. The default width and height should be 80 and 60, respectively.
 *
 * Additionally, define a method resize(newWidth, newHeight) that takes a new width and height as parameters and changes the fields to reflect the new size.
 *
 */
export class Size {
  constructor(width = 80, height = 60) {
    this.resize(width, height);
  }
  resize(width, height) {
    this.width = width;
    this.height = height;
  }
}

/**
 * Define Position to store a window position
 *
 * Define a class (constructor function) named Position with two fields, x and y that store the current horizontal and vertical position, respectively, of the window's upper left corner. The constructor function should accept initial values for these fields. The value for x is provided as the first parameter, the value for y as the second one. The default value should be 0 for both fields.
 *
 * The position (0, 0) is the upper left corner of the screen with x values getting larger as you move right and y values getting larger as you move down.
 *
 * Also define a method move(newX, newY) that takes new x and y parameters and changes the properties to reflect the new position.
 *
 */
export class Position {
  constructor(x = 0, y = 0) {
    this.move(x, y);
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
}

/**
 * Define a ProgramWindow class with the following fields:
 * screenSize: holds a fixed value of type Size with width 800 and height 600
 * size : holds a value of type Size, the initial value is the default value of the Size instance
 * position : holds a value of type Position, the initial value is the default value of the Position instance
 *
 * When the window is opened (created), it always has the default size and position in the beginning.
 */
export class ProgramWindow {
  constructor() {
    this.size = new Size();
    this.position = new Position();
    this.screenSize = new Size(800, 600);
  }

  resize(newSize) {
    if (newSize.width < 1) newSize.width = 1;
    if (newSize.height < 1) newSize.height = 1;
    if (newSize.width > this.screenSize.width)
      newSize.width = this.screenSize.width - this.position.x;
    if (newSize.height > this.screenSize.height)
      newSize.height = this.screenSize.height - this.position.y;
    this.size = newSize;
  }
  move(newPosition) {
    if (newPosition.x < 0) newPosition.x = 0;
    if (newPosition.y < 0) newPosition.y = 0;
    if (newPosition.x + this.size.width > this.screenSize.width)
      newPosition.x = this.screenSize.width - this.size.width;
    if (newPosition.y + this.size.height > this.screenSize.height)
      newPosition.y = this.screenSize.height - this.size.height;
    this.position = newPosition;
  }
}

/**
 * The ProgramWindow class should include a method resize. It should accept a parameter of type Size as input and attempts to resize the window to the specified size.
 *
 * However, the new size cannot exceed certain bounds.
 *
 * The minimum allowed height or width is 1. Requested heights or widths less than 1 will be clipped to 1.
 * The maximum height and width depend on the current position of the window, the edges of the window cannot move past the edges of the screen. Values larger than these bounds will be clipped to the largest size they can take. E.g. if the window's position is at x = 400, y = 300 and a resize to height = 400, width = 300 is requested, then the window would be resized to height = 300, width = 300 as the screen is not large enough in the y direction to fully accommodate the request.
 *
 * Implement a changeWindow function that accepts a ProgramWindow instance as input and changes the window to the specified size and position. The function should return the ProgramWindow instance that was passed in after the changes were applied.
 *
 * The window should get a width of 400, a height of 300 and be positioned at x = 100, y = 150.
 *
 */
export function changeWindow(programWindow) {
  const newSize = new Size(400, 300);
  const newPosition = new Position(100, 150);

  programWindow.resize(newSize);
  programWindow.move(newPosition);

  return programWindow;
}

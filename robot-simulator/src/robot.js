class Robot {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.facing = null; // NORTH/SOUTH/EAST/WEST
    this.placed = false;
  }

  place(x, y, facing) {
    if (this.isValidPosition(x, y)) {
      this.x = x;
      this.y = y;
      this.facing = facing;
      this.placed = true;
    }
  }

  isValidPosition(x, y) {
    return x >= 0 && x <= 4 && y >= 0 && y <= 4;
  }

  move() {
    if (!this.placed) return;

    let newX = this.x;
    let newY = this.y;

    switch (this.facing) {
      case "NORTH":
        newY++;
        break;
      case "SOUTH":
        newY--;
        break;
      case "EAST":
        newX++;
        break;
      case "WEST":
        newX--;
        break;
    }

    if (this.isValidPosition(newX, newY)) {
      this.x = newX;
      this.y = newY;
    }
  }

  left() {
    if (!this.placed) return;

    const dirs = ["NORTH", "WEST", "SOUTH", "EAST"];
    this.rotate(dirs);
  }

  right() {
    if (!this.placed) return;

    const dirs = ["NORTH", "EAST", "SOUTH", "WEST"];
    this.rotate(dirs);
  }

  rotate(directions) {
    const idx = directions.indexOf(this.facing);
    this.facing = directions[(idx + 1) % 4];
  }

  report() {
    if (!this.placed) return null;
    return `${this.x},${this.y},${this.facing}`;
  }
}

module.exports = Robot;

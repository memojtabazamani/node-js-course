const Robot = require("./robot");

class CommandProcessor {
  constructor() {
    this.robot = new Robot();
  }

  execute(line) {
    const trimmed = line.trim();
    if (!trimmed) return;

    if (trimmed.startsWith("PLACE")) {
      const args = trimmed.replace("PLACE", "").trim();
      const [x, y, f] = args.split(",");
      this.robot.place(parseInt(x), parseInt(y), f);
      return;
    }

    switch (trimmed) {
      case "MOVE":
        this.robot.move();
        break;

      case "LEFT":
        this.robot.left();
        break;

      case "RIGHT":
        this.robot.right();
        break;

      case "REPORT":
        const report = this.robot.report();
        if (report) console.log(report);
        break;
    }
  }
}

module.exports = CommandProcessor;

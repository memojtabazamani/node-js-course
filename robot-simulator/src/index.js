const fs = require("fs");
const path = require("path");
const CommandProcessor = require("./commands");

function runCommandsFile(fileName) {
  const filePath = path.join(__dirname, "..", fileName);

  if (!fs.existsSync(filePath)) {
    console.error("File not found:", filePath);
    return;
  }

  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");

  const processor = new CommandProcessor();
  lines.forEach((line) => {
    processor.execute(line);
  });
}

// اجرای پیش‌فرض فایل commands.txt
runCommandsFile("commands.txt");

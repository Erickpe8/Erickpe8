const fs = require("fs");

// Datos generados por la Action
const data = JSON.parse(fs.readFileSync("streak-data.json", "utf8"));

// Cargar template
let svg = fs.readFileSync("assets/streak-template.svg", "utf8");

// Reemplazar variables
svg = svg
  .replace("{{total_contributions}}", data.total)
  .replace("{{first_date}}", data.firstDate)
  .replace("{{current_streak}}", data.currentStreak)
  .replace("{{current_streak_start}}", data.currentStreakStart)
  .replace("{{current_streak_end}}", data.currentStreakEnd)
  .replace("{{longest_streak}}", data.longestStreak)
  .replace("{{longest_streak_start}}", data.longestStreakStart)
  .replace("{{longest_streak_end}}", data.longestStreakEnd);

// Guardar SVG final
fs.writeFileSync("assets/streak.svg", svg);

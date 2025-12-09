const fs = require("fs");

// Leer datos
const data = JSON.parse(fs.readFileSync("streak-data.json", "utf8"));

// Leer template
let svg = fs.readFileSync("assets/streak-template.svg", "utf8");

// Reemplazar variables
svg = svg
  .replace(/{{total_contributions}}/g, data.total)
  .replace(/{{first_date}}/g, data.firstDate)
  .replace(/{{current_streak}}/g, data.currentStreak)
  .replace(/{{current_streak_start}}/g, data.currentStreakStart)
  .replace(/{{current_streak_end}}/g, data.currentStreakEnd)
  .replace(/{{longest_streak}}/g, data.longestStreak)
  .replace(/{{longest_streak_start}}/g, data.longestStreakStart)
  .replace(/{{longest_streak_end}}/g, data.longestStreakEnd);

// Guardar SVG final
fs.writeFileSync("assets/streak.svg", svg);

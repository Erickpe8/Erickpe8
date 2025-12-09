const fs = require("fs");
const fetch = require("node-fetch");

const token = process.env.METRICS_TOKEN;

async function main() {
  const user = "Erickpe8";

  const query = `
    query ($user: String!) {
      user(login: $user) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
              }
            }
          }
        }
        createdAt
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query,
      variables: { user }
    })
  });

  const data = await response.json();

  const days = data.data.user.contributionsCollection.contributionCalendar.weeks
    .flatMap(week => week.contributionDays)
    .map(d => ({
      date: d.date,
      count: d.contributionCount
    }));

  let longest = 0;
  let longestStart = null;
  let longestEnd = null;

  let current = 0;
  let currentStart = null;
  let currentEnd = null;

  let tempStreak = 0;
  let tempStart = null;

  for (let i = 0; i < days.length; i++) {
    if (days[i].count > 0) {
      tempStreak++;

      if (tempStart === null) tempStart = days[i].date;

      // Actualizar racha actual si es el último día
      if (i === days.length - 1) {
        current = tempStreak;
        currentStart = tempStart;
        currentEnd = days[i].date;
      }

    } else {
      if (tempStreak > longest) {
        longest = tempStreak;
        longestStart = tempStart;
        longestEnd = days[i - 1].date;
      }

      tempStreak = 0;
      tempStart = null;
    }
  }

  const output = {
    total: data.data.user.contributionsCollection.contributionCalendar.totalContributions,
    firstDate: data.data.user.createdAt.split("T")[0],
    currentStreak: current,
    currentStreakStart: currentStart,
    currentStreakEnd: currentEnd,
    longestStreak: longest,
    longestStreakStart: longestStart,
    longestStreakEnd: longestEnd
  };

  fs.writeFileSync("streak-data.json", JSON.stringify(output, null, 2));
}

main();

import { EXPERIENCE_START_ISO } from "../components/experience-config.js";

export { EXPERIENCE_START_ISO };

export function todayInTimeZone(timeZone = "America/Bogota") {
  const formatted = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
  const [year, month, day] = formatted.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function formatExperienceEs(
  startIso = EXPERIENCE_START_ISO,
  now = todayInTimeZone(),
) {
  const [year, month, day] = startIso.split("-").map(Number);
  const start = new Date(year, month - 1, day);

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (now.getDate() < start.getDate()) months -= 1;
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const parts = [];
  if (years > 0) parts.push(years === 1 ? "1 año" : `${years} años`);
  if (months > 0) parts.push(months === 1 ? "1 mes" : `${months} meses`);

  return parts.length ? parts.join(" y ") : "menos de 1 mes";
}

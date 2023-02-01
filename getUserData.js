import { JSDOM } from "jsdom";

const getUserData = (userId) => {
  return fetch(`https://www.codewars.com/users/${userId}`)
    .then((response) => response.text())
    .then((html) => new JSDOM(html).window.document)
    .then((document) => {
      const data = {};
      document
        .querySelectorAll(".stat-category .stat-box > .stat")
        .forEach((stat) => {
          const [rawKey, value] = stat.textContent.split(":");
          const key = {
            Rank: "rank",
            Honor: "honor",
            "Leaderboard Position": "leaderboardPosition",
            "Honor Percentile": "honorPercentile",
            "Total Completed Kata": "totalCompletedKata",
          }[rawKey];
          if (!key) return;
          data[key] = value;
        });
      return data;
    });
};

export default getUserData;

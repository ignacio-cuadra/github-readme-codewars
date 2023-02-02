import { JSDOM } from "jsdom";

const getUserData = (userId) => {
  return fetch(`https://www.codewars.com/users/${userId}`)
    .then((response) => response.text())
    .then((html) => {
      const document = new JSDOM(html).window.document;
      const data = {};
      document
        .querySelectorAll(
          ".stat-category .stat-box > .stat, .user-profile .stat"
        )
        .forEach((stat) => {
          const [rawKey, value] = stat.textContent.split(":");
          const key = {
            Name: "name",
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

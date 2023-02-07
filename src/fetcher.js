const fetcher = ({ username }) => {
  if (!username) throw new Error("username is required");
  return fetch(`https://www.codewars.com/users/${username}`)
    .then((response) => response.text())
    .then((html) => {
      // const name = getDataFormLabel(html, "Name");
      const rank = getDataFormLabel(html, "Rank") || "8 Kyu";
      const honor = getDataFormLabel(html, "Honor") || "0";
      const leaderboardPosition =
        getDataFormLabel(html, "Leaderboard Position") || "unknow";
      const honorPercentile =
        getDataFormLabel(html, "Honor Percentile") || "unknow";
      const totalCompletedKata =
        getDataFormLabel(html, "Total Completed Kata") || "0";
      return {
        // name,
        rank,
        honor,
        leaderboardPosition,
        honorPercentile,
        totalCompletedKata,
      };
    });
};

const getDataFormLabel = (html, label) => {
  const regex = new RegExp(`<b>${label}:<\/b>([a-zA-Z0-9 ,.%#])+<\/div>`, "g");
  const matches = html.match(regex);
  if (!Array.isArray(matches) || matches.length === 0) return undefined;
  return matches[0].replace(/(<b>.*<\/b>)|(<\/div>)/g, "");
};

export default fetcher;

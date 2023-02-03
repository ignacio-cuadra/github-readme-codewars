import card from "../src/card.js";
export default async function handler(req, res) {
  res.send(card());
}

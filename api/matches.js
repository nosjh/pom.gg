export default async function handler(req, res) {
  const params = new URLSearchParams(req.query);
  const response = await fetch(
    `https://api.pandascore.co/lol/matches?${params}&filter[status]=finished`,
    { headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` } }
  );
  const data = await response.json();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(data);
}
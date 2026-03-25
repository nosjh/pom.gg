export default async function handler(req, res) {
  const response = await fetch(
    `https://api.pandascore.co/lol/series/9164/teams`,
    { headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` } }
  );
  const data = await response.json();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(data);
}
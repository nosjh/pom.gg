export default async function handler(req, res) {
  const { teamId } = req.query;
  const response = await fetch(
    `https://api.pandascore.co/lol/players?filter[team_id]=${teamId}`,
    { headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` } }
  );
  const data = await response.json();
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(data);
}

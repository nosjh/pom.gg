export default async function handler(req, res) {
  const { teamId } = req.query;
  const response = await fetch(
    `https://api.pandascore.co/lol/players?filter[team_id]=${teamId}&per_page=10`,
    { headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` } }
  );
  const players = await response.json();

  // 각 선수의 상세 정보 별도 조회
  const detailedPlayers = await Promise.all(
    players.map(async (player) => {
      const detailRes = await fetch(
        `https://api.pandascore.co/lol/players/${player.id}`,
        { headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` } }
      );
      return detailRes.json();
    })
  );

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(detailedPlayers);
}
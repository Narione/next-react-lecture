import executeQuery from "../../../database";

export default async function handler(req, res) {
  const { id } = req.query;
  const query = `select id,name from test_table where id = ?`;
  console.log(query);

  const result = await executeQuery(query, [id]);
  console.log(result);
  res.status(200).json(result);
}

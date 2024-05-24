import axios from "axios";

export default async function handler(req, res) {
  // api 공공데이터

  //포스트 방식
  const { method, query } = req;
  console.log("method= ", method);
  console.log("query= ", query);

  const serviceKey =
    "DfUnBEe9np3eYiWp4Egg5yje0jnUV%2BVSXLBBcDGNW3t0DkcrbtnIdmoPly38qE5PAtW2FPbeIdXNHQ0T9bZuWw%3D%3D";
  const url = `https://apis.data.go.kr/6300000/openapi2022/restrnt/getrestrnt?serviceKey=${serviceKey}&pageNo=${req.query.pageNo}&numOfRows=${req.query.numOfRows}`;
  console.log(url);
  try {
    const restRes = await axios.get(url);
    // console.log("data===>", restRes.data.response.body);

    res.status(200).json(restRes.data.response.body); // 응답, 보내는 것
  } catch (err) {
    console.log("err==>", err);
    res.status(500).json({ message: "server error" });
  }
}

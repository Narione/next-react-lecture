import axios from "axios";
import { useEffect } from "react";

export default function ApiSend() {
  /* Api 통신해서 Data를 가져와 화면에 뿌려주는 작업
        1. Client-side
        2. Server-side: Api routes 
    */
  const serviceKey =
    "DfUnBEe9np3eYiWp4Egg5yje0jnUV%2BVSXLBBcDGNW3t0DkcrbtnIdmoPly38qE5PAtW2FPbeIdXNHQ0T9bZuWw%3D%3D";
  const url = `http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=${serviceKey}&numOfRows=10&pageNo=1&regId=11B00000&tmFc=202405221800&dataType=JSON`;

  /* version1. client - fetch api */
  const getData = async () => {
    // const res = await fetch(url); //get방식으로 전송
    // const result = await res.json();
    // console.log(result);

    // const res2 = await axios.get(url); //axios 의 장점 알아서 parse, .data에 담아줌
    // const result2 = res2.data; //응답데이터가 담긴 위치

    /* version3. api routes-server단 */
    // const res3 = await fetch("/api/weather"); //response 객체
    // const result3 = await res3.json(); // 응답객체 -> obj
    // console.log(result3);

    // const res4 = await axios.get("/api/weather?test=123");
    // const result4 = res4.data;
    // console.log(result4);

    const res5 = await axios.post("/api/weather", { text: 123 });
  };

  /* version2. client- axios */

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>API 통신</h1>
    </>
  );
}

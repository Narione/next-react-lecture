import axios from "axios";
import { useEffect } from "react";

export default function dbConnection() {
  //데이터 조회
  const getData = async () => {
    const res = await axios.get("/api/dbConnection?id=1");
    console.log(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return <></>;
}

import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  /* a태그: href="#" >> 페이지 전체 렌더링 --> e.preventDefault
    Link태그 / useRouter >> 페이지 이동
    >> 전체페이지를 로드하지 않고 부분업데이트
    next.js안에서 쓸 수 있음
  
  */
  const router = useRouter();
  console.log(router);

  return (
    <>
      <p>lecture 메뉴</p>
      <ul>
        <li>
          {/* <Link href="/lecture/apiSend">APi 통신 페이지 이동</Link> */}
          <Link
            href={{ pathname: "lecture/routerTest", query: { param: "파람1" } }}
          >
            API 통신 페이지 이동
          </Link>
        </li>
        <li
          onClick={() =>
            router.push({
              pathname: "/lecture/routerTest",
              query: { param: "파람1" },
            })
          }
        >
          <span>API 통신 페이지 이동2</span>
        </li>
      </ul>

      <p>mission 메뉴</p>
      <ul>
        <li>
          <Link href="/lecture/apiSend">APi 통신 설명</Link>
        </li>
        <li onClick={() => router.push("/mission/apiSend")}>
          <span>API 통신 미션</span>
        </li>
        <li>
          <Link href="/lecture/dbConnection">DB dbConnection 페이지</Link>
        </li>
      </ul>
    </>
  );
}

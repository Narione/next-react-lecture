import { useRouter } from "next/router";

export default function () {
  const router = useRouter();
  console.log(router);
  const { param } = router.query;
  console.log(param);
  return <>router text 페이지</>;
}

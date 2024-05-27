import axios from "axios";
import { useEffect, useState } from "react";

const ApiSend = () => {
  //routes...?
  const [result, setResult] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const numOfRows = 9;
  const getData = async () => {
    const res = await axios.get(
      `/api/restaurant?pageNo=${pageNo}&numOfRows=${numOfRows}`
    );
    if (res.data) {
      /* 사용자에게 error화면을 노출시키면 안됨! 에러처리! */
      setResult(res.data.items || []);
      setTotalCount(Number(res.data.totalCount || 0));
    }
  };

  useEffect(() => {
    getData();
  }, [pageNo]);

  /* 페이지 이동 */
  const pageUp = () => {
    if (pageNo == Math.ceil(totalCount / numOfRows)) {
      alert("마지막페이지입니다.");
    } else {
      setPageNo(pageNo + 1);
    }
  };
  const pageOne = () => {
    setPageNo(1);
  };
  const pageDown = () => {
    if (pageNo == 1) {
      alert("첫 페이지 입니다.");
    } else {
      setPageNo(pageNo - 1);
    }
  };

  return (
    <>
      <section>
        <div className="dark:bg-violet-600">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50">
              대전광역시 모범음식점
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">
              대전광역시 문화관광 모범음식점입니다.
              <br />
              2022년 대전광역시 기업매칭 지원사업 결과물입니다.
            </p>
            <div className="flex flex-wrap justify-center">
              {/* 리스트 div */}

              <div className="p-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                  {result &&
                    result.map((v, i) => {
                      return (
                        <div
                          className="overflow-hidden rounded-2xl bg-gray-50"
                          key={i}
                        >
                          <div className="flex items-center h-[180px] overflow-hidden">
                            <img
                              src={`https://source.unsplash.com/random/400x300/?food&${Math.random()}`}
                              alt="Hamburger"
                            />
                          </div>

                          <div className="p-6">
                            <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                              <div>
                                <p className="text-gray-400">{v.restrntSumm}</p>
                                <h2 className="mt-2 text-lg font-semibold text-gray-800">
                                  {v.restrntNm}
                                </h2>
                                <p className="text-gray-400">{v.restrntAddr}</p>
                              </div>
                            </div>

                            <hr className="mt-4 mb-4" />

                            <div className="flex flex-wrap justify-between">
                              <p className="inline-flex items-center">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5 stroke-orange-400"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>

                                <span className="ml-2 text-gray-600">
                                  {v.salsTime}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              {/* 리스트 div 끝 */}
              <button
                type="button"
                className="text-white bg-blue-500"
                onClick={pageDown}
              >
                이전
              </button>
              <button
                type="button"
                className="text-white bg-blue-500"
                onClick={pageOne}
              >
                초기화
              </button>
              <button
                type="button"
                className="text-white bg-blue-500"
                onClick={pageUp}
              >
                다음
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ApiSend;

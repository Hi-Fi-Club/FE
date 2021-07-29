// 메인 페이지
// - 헤더 / 푸터
const MainPage = () => {
  return (
    //  margin: 0 auto
    <div>
      <div>
        <button>스터디 모집</button>
        <button>스터디 룸 예약</button>
      </div>

      <div>
        <p>내가 관심있을 만한 스터디 모집 최신 글</p>
        <div>
          <div>캐러셀 아이템</div>
          <button>{"<-"}</button>
          <button>{"->"}</button>
        </div>
      </div>
      <div>
        <p>우리집 | 우리팀 근처 스터디룸 추천</p>
        <div>
          <div>캐러셀 아이템</div>
          <button>{"<-"}</button>
          <button>{"->"}</button>
        </div>
      </div>
    </div>
  );
};
export default MainPage;

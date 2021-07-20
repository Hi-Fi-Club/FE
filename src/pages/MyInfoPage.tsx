// 마이페이지
// - 헤더
const MyInfoPage = () => {
  return (
    // margin: 0 auto
    <div>
      {' '}
      {/* or form 태그  */}
      <div>
        <p>이메일</p>
        {/* bold : 수정불가 */}
        <p>email@email.com</p>
      </div>
      <div>
        <p>별명</p>
        {/* bold */}
        <p>
          <span>"멜이"</span>
          <button>수정하기</button>
        </p>
      </div>
      <div>
        <p>비밀번호</p>
        {/* bold */}
        <p>
          <span>*******</span>
          <button>수정하기</button>
        </p>
      </div>
      <div>
        <p>관심사</p>
        {/* bold */}
        <p>
          <ul>
            <li>프론트엔드</li>
            <li>웹개발</li>
            <li>영어</li>
          </ul>
          <button>수정하기</button>
        </p>
      </div>
      <div>
        <p>지역</p>
        {/* bold */}
        <p>
          <ul>
            <li>부천</li>
            <li>서울 문래동</li>
          </ul>
          <button>수정하기</button>
        </p>
      </div>
    </div>
  );
};
export default MyInfoPage;

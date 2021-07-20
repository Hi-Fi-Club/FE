// 스터디모집 페이지
const RecruitmentsPage = () => {
  return (
    <div>
      <input type="text" placeholder="검색창" />
      <div>
        <div>
          <button>지역 ▼</button>
          <button>분야 ▼</button>
          <button>모집중 ▼</button>
        </div>
        <button>글쓰기</button>
      </div>

      <div>현재 OO 지역의 N 개의 OO 스터디가 모집중입니다</div>
      <table>
        <tbody>
          <tr>
            <td>제목1</td>
            <td>날짜1</td>
            <td>이름2</td>
          </tr>
          <tr>
            <td>제목2</td>
            <td>날짜2</td>
            <td>이름2</td>
          </tr>
          <tr>
            <td>제목3</td>
            <td>날짜3</td>
            <td>이름3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default RecruitmentsPage;

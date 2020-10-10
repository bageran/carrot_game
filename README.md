# carrot_game 🥕🐰

### 깃허브 연결하는 것 부터가 챌린지

---------------------------------------

### 20201006
* 미루고 미루다 html 마크업, CSS 작업 시작

### 20201007 새벽
* 벌레와 당근 화면에 1개씩 보이게 함
  * 검색 4시간 걸린듯?
  * canvas tag로 일단 넣었다. 맞는지 틀린 건지도 모르겠음
  * 문제점
    * 벌레와 당근 이미지가 원본 사이즈보다 크게 보임. 이미지를 줄이면 뿌옇게 됨. 환장 하겠네? -> 해결 html canvas width,hight가 CSS style의 width, hight와 값이 같아야 한다.
    
### 20201007 저녁
* 벌레와 당근 화면에 20개씩 랜덤으로 보이게 함 -> 못 할 줄 알았는데 삽질 끝에 성공
  * for문 이용
* 플레이 버튼 클릭하면 벌레와 당근 새로 셋팅 되게 함
* 게임 시간(현재는 10초) 셋팅
  * .setInterval() 메소드 이용
  
### 20201008
* 게임 끝나면 나오는 리플레이 팝업 작업
* canvas 안의 object는 addEventListener를 못 쓴 다는 것을 알게 되었다.
  * 그렇다면 벌레와 당근을 캔버스에 뿌리는게 아라 그냥 랜덤으로 뿌렸어야 하는데 어떻게 하는지 아무리 찾아봐도 모르겠다...🤯
  
### 20201009
* 벌레와 당근 랜덤으로 보이는 영역 새로 코딩
  * canvas 태그 포기하고 div에 innerHtml 넣는 것으로 작업 함 -> 안 될 줄 알았는데 됐다. 이맛에 코딩 하는건가?
* 당근 클릭 하면 삭제 되게 기능 추가
* 효과음 추가
* 카운터 추가
  * 당근 클릭하면 숫자 1씩 빼기
* 게임 죽거나 이기면 팝업 보여주기
* 크롬과 파이어폭스에서는 배경음악 오토플레이가 안된다. 사용자 배려라나 뭐라나...-_- 사파리에서만 잘 나옴.

앞으로 남은 것
- 벌레,당근 영역만 리프레시 되게 수정
- 플레이 버튼 클릭 하면 스톱 버튼으로 바뀌게 수정
- 스톱버튼 클릭하면 타이머 멈추고 다시 플레이 버튼 나오게
 

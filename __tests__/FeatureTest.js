//입력 예외사항: 알파벳, 알파벳+숫자, 한글 특문 영어 + 숫자, 숫자만, 정수, 실수, 0포함 자연수
//+입력 길이, 자연수이지만 중복되는 수가 있을 때
//볼 스트라이크 낫싱 제대로 나오는지
//예외 사항 입력시 잘 throw되는지

//require로 app.js play가져온다음에 실행시켜서 뭘 어떻게 해야할 듯
//특히 예외사항에서 throw하는건 toThrow()메서드, app.js에서 console.print는 spyon으로 모킹하자
//모킹한 console.print로 볼 스트라이크 낫싱, 게임종료 확인,
//toThrow와 모킹한 함수들로 예외사항 확인
//예외사항: app.js에서 예외함수 빼와서 여기서 expect랑 toequal로 확인
//볼 스트라이크 낫싱도 똑같이.

//일단 각 기능을 구현한 함수들을 모듈로 분리하고, require로 호출해서 확인하는 식으로 해야 할 듯.

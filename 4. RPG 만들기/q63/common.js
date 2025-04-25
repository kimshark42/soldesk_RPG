// 자주쓰는것들을 함수로 만들어 놓음
// 나중에는 <script src="common.js"> 하나만 더 넣으면 됨
// 순서가 중요하니 가능하면 맨 위에 적을것 (css/common/js 순이면 됨)

// 엔터
function br(){
    document.write("<br>");
}
// 가로로 긴 줄
function hr(){
    document.write("<hr>");
}
function dw(ste){
    document.write(str);
}
// document.write를 쓰면 html이 싹 날아가서 dw를 쓰지 않는 방향으로 변경
function tx(str){
    var screenString = screenMessageBox.value;
    screenString = screenString + str;
    screenMessageBox.value = screenString;
}
// 플레이어 정보 출력용
function txPlayerInfo(str){
    var screenString = screenPlayerInfo.value;
    // screenString = screenString + str;
    // screenPlayerInfo.value =screenString;
    screenPlayerInfo.value = str;
}
// 적 정보 출력용
function txGameObject(str){
    var screenString = screenGameObject.value;
    screenGameObject.value = str;
}
// 시계 출력용
function txGameClock(str){  // 계속 텍스트를 집어넣는 친구들은 value 를 넣어야 되는데, innner
    gameClock.innerHTML = str
}

// 텍스트 지우기
function txClear(){
    screenMessageBox.value = "";
}

function txPlayerInfoClear(){
    screenPlayerInfo.value = "";
}

function txGameObjectClear(){
    screenGameObject.value = "";
}
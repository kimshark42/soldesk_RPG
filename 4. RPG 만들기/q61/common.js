// 자주쓰는것들을 함수로 만들어 놓음
// 나중에는 <script src="common.js"> 하나만 더 넣으면 됨
// 순서가 중요하니 가능하면 맨 위에 적을것 (css/common/js 순이면 됨)

// 엔터
function br(){
    document.write("<br>")
}
// 가로로 긴 줄
function hr(){
    document.write("<hr>")
}
// document.write를 쓰면 html이 싹 날아가서 dw를 쓰지 않는 방향으로 변경
function tx(str){
    var screenString = screenMessageBox.value;
    screenString = screenString + str;
    screenMessageBox.value = screenString;
}

function txPlayerInfo(str){
    var screenString = screenPlayerInfo.value;
    // screenString = screenString + str;
    // screenPlayerInfo.value =screenString;
    screenPlayerInfo.value = str;
}

function txGameObject(str){
    var screenString = screenGameObject.value;
    screenGameObject.value =str;
}
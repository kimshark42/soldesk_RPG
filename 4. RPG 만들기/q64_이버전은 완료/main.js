// 모든 정보 출력을 textarea에 출력하도록 변경

// 기본 구성요소
var screenMessageBox;
var screenGameObject;
var screenPlayerInfo;
var gameClock;

// 몬스터 및 플레이어
var slime = new Monster("슬라링",12,1);
var redDreagon = new BossMonster("짱짱 쌘 레드 드래곤",300,120);
var player = new Character("김상어",100,10);

// 턴 관련
var turnCount = 0;
var inTurn;
var currentMode = "전투"; // 현재 플레이 상태를 표시하는 변수 (비전투, 전투)

window.onload = function () {
  screenMessageBox = document.getElementById("screen_message_box");
  screenGameObject = document.getElementById("screen_game_object");
  screenPlayerInfo = document.getElementById("screen_player_info");
  inTurn = document.getElementById("input_txt_turn");
  gameClock = document.getElementById("game_clock");
  displayCharactersInfo();
  
  // 전투 장면
  tx("전투시작\n");
  tx(slime.name + "과 조우했다!!!" + "-" + slime.attack + "!!!\n");
  player.currenthp = player.maxhp - slime.attack
   // 몬스터와의 조우시 조우 데미지

  //  // 전투 무한루프 처리
  //  var loop = true;

  //  while(loop){
  //    loop = procBattleTurn();
  //  }

  }
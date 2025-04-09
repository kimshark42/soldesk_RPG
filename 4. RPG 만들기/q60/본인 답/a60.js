// 캐릭터의 정보 출력을 한꺼번에 출력되도록 수정하였습니다 ex) [엠피스(50/100)][오크전사(30/100)]
function displayCharactersInfo(){
  player.info();
  slime.info();
  tx("\n");
}

// 보상 획득 처리
function getReward(){
  player.money = player.money + slime.money;
  tx(slime.money + "안을 획득하였습니다.\n")
}

// 각 객체의 공격력을 랜덤으로 변경
function getRandomAttackValue(attack){
  attack = attack + 1;
  var random = Math.floor(Math.random()*attack)
  return random;
}

// 전투 종료 처리(종료메세지 출력, 경험치 획득)
function endBattle(){
  if(player.currenthp >= 0){
    tx("빰빠카빰~ 전투에서 승리하셨습니다\n");
    player.exp = player.exp + slime.exp;
    tx(slime.name + "을 물리쳤다!" + "당신의 경험치가" + slime.exp + "만큼 올랐습니다.\n");
    getReward();
    return false;
  } if(player.currenthp <= 0){
    tx("이런...너무 강하잖아!\n");
    tx("당신은" + slime.name + "에게 패배했다!");
    return true;
  }
}

// 공격 메세지 출력 추가
function procBattleTurn(){
  var slimeDamage = getRandomAttackValue(slime.attack);
  // 슬라임의 공격시 공격력을 랜덤값으로 변경 
  var playerDamage = getRandomAttackValue(player.attack);
  // 플레이어의 공격시 공격력을 랜덤값으로 변경
  
  slime.currenthp = slime.currenthp - playerDamage;
  // 플레이어의 데미지 표시
  tx("당신의 공격!" + playerDamage + "의 데미지를 주었습니다\n");
  player.currenthp = player.currenthp - slimeDamage;
  // 몬스터의 데미지 표시
  tx(slime.name + "이 당신에게" + slimeDamage + "의 데미지를 주었습니다\n");

  // 남은 hp 검사하기
  if(player.currenthp <= 0 || slime.currenthp <= 0){
    endBattle();
    displayCharactersInfo();
    return false;
  } else {
    displayCharactersInfo();
    return true;
  }
  }

  // 몇 턴쨰인지 세기
  function turn(){
    console.log("현재 턴은? :" +turnCount);
    turnCount++;
    inTurn.value = turnCount;
  }

// 모든 정보 출력을 textarea에 출력하도록 변경

var screenMessageBox;
var screenGameObject;
var screenPlayerInfo;


var slime = new Monster("슬라링",12,1);
var player = new Character("김상어",100,10);

var turnCount = 0;
var inTurn;

window.onload = function () {
  screenMessageBox = document.getElementById("screen_message_box");
  screenGameObject = document.getElementById("screen_game_object");
  screenPlayerInfo = document.getElementById("screen_player_info");
  inTurn = document.getElementById("input_txt_turn");
  
  displayCharactersInfo();
  
  // 전투 장면
  tx("전투시작\n");
  tx(slime.name + "과 조우했다!!!" + "-" + slime.attack + "!!!\n");
  player.currenthp = player.maxhp - slime.attack
   // 몬스터와의 조우시 조우 데미지

   // 전투 무한루프 처리
   var loop = true;

   while(loop){
     loop = procBattleTurn();
   }

  }

  
  
  
  

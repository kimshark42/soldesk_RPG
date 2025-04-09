/*************************************************
 RPG v0.7.0
 [기존내용]
 -몬스터 클래스 생성
 -플레이어 클래스 생성
 -몬스터 객체 생성
 -플레이어 객체 생성
 -전투 시작 메세지를 출력하게 되었습니다
 -공격력을 각 객체의 공격력 수치 ~ 0사이의 랜덤한 값으로 나오도록 수정하였습니다
 -몬스터와 조우시 고정뎀이 추가되었습니다
 -체력 표기를 [현재체력/최대체력] 식으로 변경하였습니다
 -캐릭터 정보표시를 수정하였습니다. ex) [엠피스(70/100)]
 -캐릭터 정보표시에서 공격력 수치를 제거하였습니다
 -캐릭터 정보출력을 한꺼번에 출력되도록 수정하였습니다 ex)[엠피스(50/100)][오크전사(30/100)]
 -클래스 선언을 별도의 파일로 옮기고 연결했습니다
 -전투 처리부분과 캐릭터들의 상태 정보를 출력하는 부분을 하나의 함수로 묶어 처리하였습니다
 -전투 무한루프 처리: 전투시 플레이어나 적의 currenthp가 0 이하가 될때까지 (엘리전) 전투 반복처리

 RPG v0.7.0 Update
 -전투 종료 처리(종료 메세지 출력, 경험치 획득 등)를 추가하였습니다
 -캐릭터 클래스에 현재 경험치, 다음 레벨업에 필요한 경험치 두 변수를 추가하였습니다
 -플레이어 간략 정보 표시에 현재 경험치/다음 레벨업 필요 경험치 표시를 추가하였습니다 ex) [엠피스(70/100)]{exp: 100/300}
 (다만 레벨업 경험치 기획은 현재 미정. 300값만 하드 코딩)
 ************************************************/

   // 각 객체의 공격력을 랜덤으로 변경
   function getRandomAttackValue(attack){
      attack = attack + 1;
      var random = Math.floor(Math.random()*attack)
      return random;
   }

   // 위 Class 에서 안에 변수를 넣었던 이유 밑 작업을 거치지 않고 바로 괄호안에 넣을수 있음
   //  slime.name = "슬라링"
   //  slime.hp = 12;
   //  slime.attack = 1;
 var slime = new Monster("슬라링",12,10000000);
 var slimeDamage = getRandomAttackValue(slime.attack);
 // 슬라임의 공격시 공격력을 랜덤값으로 변경
 
 
 //  player.name = "김상어";
 //  player.hp = 100;
 //  player.attack = 10;
 var player = new Character("김상어",100,10);
 var playerDamage = getRandomAttackValue(player.attack);
 // 플레이어의 공격시 공격력을 랜덤값으로 변경
 
 // 캐릭터의 정보 출력을 한꺼번에 출력되도록 수정하였습니다 ex) [엠피스(50/100)][오크전사(30/100)]
 function displayCharactersInfo(){
   hr();
   player.info();
   slime.info();
   hr();
  }
  
  //  slime.info();
  //  br();br();
  //  player.info();
  displayCharactersInfo();
  
  // 전투 장면
  
  hr();
  dw("전투시작");
  hr();
  
  hr();
  dw(slime.name + "과 조우했다!!!" + "-" + slime.attack + "!!!");
  hr();
  player.currenthp = player.maxhp - slime.attack
  // 몬스터와의 조우시 조우 데미지
  
  // 전투 무한루프 처리
  var loop = true;
  while(loop){
    loop = procBattleTurn();
  }
  
  function procBattleTurn(){
    var slimeDamage = getRandomAttackValue(slime.attack);
    var playerDamage = getRandomAttackValue(player.attack);

    slime.currenthp = slime.currenthp - playerDamage;
    // 플레이어의 데미지 표시
    dw("당신의 공격!" + playerDamage + "의 데미지를 주었습니다");
    player.currenthp = player.currenthp - slimeDamage;
    // 몬스터의 데미지 표시
    dw(slime.name + "이 당신에게" + slimeDamage + "의 데미지를 주었습니다");

    displayCharactersInfo();

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

  // 전투 종료 처리(종료메세지 출력, 경험치 획득)
  function endBattle(){
    if(player.currenthp > 0){
      dw("빰빠카빰~ 전투에서 승리하셨습니다")
      br();
      player.exp = player.exp + slime.exp;
      dw("당신의 경험치가" + slime.exp + "만큼 올랐습니다")
      return false;
    } else {
      return true;
    }
  }
  
  
  
  

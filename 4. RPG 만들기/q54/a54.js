/*************************************************
 RPG v0.5.0
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

 RPG v0.5.0 Update
 -캐릭터 정보출력을 한꺼번에 출력되도록 수정하였습니다 ex)[엠피스(50/100)][오크전사(30/100)]
 -클래스 선언을 별도의 파일로 옮기고 연결했습니다

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
 var slime = new Monster("슬라링",12,1);
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

 player.currenthp = player.currenthp - slimeDamage;
 slime.currenthp = slime.maxhp - playerDamage;

 // 플레이어의 데미지 표시
 dw("당신의 공격!" + playerDamage + "의 데미지를 주었습니다")
 // 몬스터의 데미지 표시
 dw(slime.name + "이 당신에게" + slimeDamage + "의 데미지를 주었습니다")

 

 displayCharactersInfo();
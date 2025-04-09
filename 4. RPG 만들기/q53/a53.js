/*************************************************
 RPG v0.4.0
 [기존내용]
 -몬스터 클래스 생성
 -플레이어 클래스 생성
 -몬스터 객체 생성
 -플레이어 객체 생성
 -전투 시작 메세지를 출력하게 되었습니다
 -공격력을 각 객체의 공격력 수치 ~ 0사이의 랜덤한 값으로 나오도록 수정하였습니다
 -몬스터와 조우시 고정뎀이 추가되었습니다

 RPG v0.4.0 Update
 -체력 표기를 [현재체력/최대체력] 식으로 변경하였습니다
 -캐릭터 정보표시를 수정하였습니다. ex) [엠피스(70/100)]
 -캐릭터 정보표시에서 공격력 수치를 제거하였습니다

 ************************************************/

 // 몬스터 클래스 생성 (몬스터의 기본 설계도)
 
 function Monster(name,hp,attack){
    // 속성, 프로퍼티
    this.name = name // 몬스터의 이름
    this.currenthp = hp // 현재 체력
    this.maxhp = hp // 최대 체력
    this.attack = attack

    this.info = function(){
        hr();
        // -캐릭터 정보표시를 수정하였습니다. ex) [엠피스(70/100)]
        // -캐릭터 정보표시에서 공격력 수치를 제거하였습니다
        dw("[" + this.name + "]HP(" + this.currenthp + "/" + this.maxhp + ")");
        hr();
    }
 }

 function Character(){
    // 속성, 프로퍼티
    this.name;
    this.currenthp;
    this.maxhp;
    this.attack;

    this.info =function(){
        hr();
        dw("[" + this.name + "]HP(" + this.currenthp + "/" + this.maxhp + ")");
        hr();
    }
   }
   
   // 각 객체의 공격력을 랜덤으로 변경
   function getRandomAttackValue(attack){
      attack = attack + 1;
      var random = Math.floor(Math.random()*attack)
      return random;
   }

 var slime = new Monster("슬라링",12,1);
 // 위 Class 에서 안에 변수를 넣었던 이유 밑 작업을 거치지 않고 바로 괄호안에 넣을수 있음
 //  slime.name = "슬라링"
 //  slime.hp = 12;
 //  slime.attack = 1;
 var slime_attack = getRandomAttackValue(slime.attack);
 // 슬라임의 공격시 공격력을 랜덤값으로 변경
 
 
 var player = new Character();
 player.name = "김상어";
 player.hp = 100;
 player.attack = 10;
 var player_attack = getRandomAttackValue(player.attack);
 // 플레이어의 공격시 공격력을 랜덤값으로 변경

 slime.info();
 br();br();
 player.info();
 
// 전투 장면

 hr();
 dw("전투시작");
 hr();

 player.hp =player.hp - slime.attack
 // 몬스터와의 조우시 조우 데미지
 hr();
 dw(slime.name + "과 조우했다!!!" + "-" + slime.attack + "!!!");
 hr();

 var player_attack = player.attack;
 var slime_attack = slime.attack;


 // 플레이어의 데미지 표시
 dw("당신의 공격!" + player_attack + "의 데미지를 주었습니다")
 // 몬스터의 데미지 표시
 dw(slime.name + "이 당신에게" + slime_attack + "의 데미지를 주었습니다")

 player.hp = player.hp - slime_attack;
 slime.hp = slime.hp - player_attack;

 slime.info();
 br();br();
 player.info();
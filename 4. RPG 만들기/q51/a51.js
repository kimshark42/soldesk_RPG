/*************************************************
 RPG v0.2.0
 [기존내용]
 -몬스터 클래스 생성
 -플레이어 클래스 생성
 -몬스터 객체 생성
 -플레이어 객체 생성

 RPG v0.1.0 Update
 -전투 시작 메세지를 출력하게 되었습니다

 ************************************************/

 // 몬스터 클래스 생성 (몬스터의 기본 설계도)
 
 function Monster(name,hp,attack){
    // 속성, 프로퍼티
    this.name = name // 몬스터의 이름
    this.hp = hp // 몬스터의 체력 (hp[Helth Point])
    this.attack = attack

    this.info = function(){
        hr();
        dw("[이름:"+this.name+"][HP:"+this.hp+"][공격력:"+this.attack+"]");
        hr();
    }
 }

 function Character(){
    // 속성, 프로퍼티
    this.name;
    this.hp;
    this.attack;

    this.info =function(){
        hr();
        dw("[이름:"+this.name+"][HP:"+this.hp+"]"+"[공격력:"+this.attack+"]");
        hr();
    }
 }

 var slime = new Monster("슬라링",12,1);
 // 위 Class 에서 안에 변수를 넣었던 이유 밑 작업을 거치지 않고 바로 괄호안에 넣을수 있음
 //  slime.name = "슬라링"
 //  slime.hp = 12;
 //  slime.attack = 1;
 
 
 var player = new Character();
 player.name = "김상어";
 player.hp = "100"
 player.attack = "10"

 slime.info();
 br();br();
 player.info();

// 전투 장면

 hr();
 dw("전투시작");
 hr();

 player.hp = player.hp - slime.attack;
 slime.hp = slime.hp - player.attack;

 slime.info();
 br();br();
 player.info();
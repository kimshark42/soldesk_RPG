/*************************************************
 RPG v0.1.0
 [기존내용]

 RPG v0.1.0 Update
 -몬스터 클래스 생성
 -플레이어 클래스 생성
 -몬스터 객체 생성
 -플레이어 객체 생성
 ************************************************/

 // 몬스터 클래스 생성 (몬스터의 기본 설계도)
 
 function Monster(){
    // 속성, 프로퍼티
    this.name; // 몬스터의 이름
    this.hp; // 몬스터의 체력 (hp[Helth Point])
    this.attack;

    this.info = function(){
        hr();
        dw("["+this.name+"]["+this.hp+"][atk:"+this.attack+"]");
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
        dw("["+this.name+"["+this.hp+"]"+"["+this.attack+"]");
        hr();
    }
 }

 var slime = new Monster();
 var player = new Character();

 slime.name = "슬라링"
 slime.hp = 12;
 slime.attack = 1;

 player.name = "김상어";
 player.hp = "100"
 player.attack = "10"

 slime.info();
 player.info();
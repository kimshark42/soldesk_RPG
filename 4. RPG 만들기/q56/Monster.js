 // 몬스터 클래스 생성 (몬스터의 기본 설계도)

function Monster(name,hp,attack){
    // 속성, 프로퍼티
    this.name = name; // 몬스터의 이름
    this.currenthp = hp; // 현재 체력
    this.maxhp = hp; // 최대 체력
    this.attack = attack;
    this.exp = 100; // 잡았을시 주는 경험치

    this.info = function(){
        hr();
        dw("[" + this.name + "]HP(" + this.currenthp + "/" + this.maxhp + ")");
        hr();
    }
 }
function Character(name,hp,attack){
    // 속성, 프로퍼티
    this.name = name; // 이름
    this.currenthp = hp; // 현재 체력
    this.maxhp = hp;  // 최대 체력
    this.attack = attack; // 공격력
    this.exp = 0; // 경험치
    this.money = 0; // 돈

    this.info =function(){
        // ex) [엠피스(70/100)]<exp) 0/300>
        txPlayerInfo("[" + this.name + "]HP(" + this.currenthp + "/" + this.maxhp + ") <exp)" + this.exp + "/300>\n");
    }
   }

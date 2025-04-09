function Character(name,hp,attack){
    // 속성, 프로퍼티
    this.name = name
    this.currenthp = hp
    this.maxhp = hp
    this.attack = attack

    this.info =function(){
        hr();
        dw("[" + this.name + "]HP(" + this.currenthp + "/" + this.maxhp + ")");
        hr();
    }
   }

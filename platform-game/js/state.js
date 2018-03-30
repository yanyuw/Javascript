function overlap(actor1, actor2) {
    return actor1.pos.x + actor1.size.x > actor2.pos.x &&
           actor1.pos.x < actor2.pos.x + actor2.size.x &&
           actor1.pos.y + actor1.size.y > actor2.pos.y &&
           actor1.pos.y < actor2.pos.y + actor2.size.y;
  }
  //若重叠了则返回true

export class State {
    constructor(level, actors, status) {
      this.level = level;
      this.actors = actors;
      this.status = status;
    }
  
    static start(level) {
      return new State(level, level.startActors, "playing");
    }
  //更新游戏状态
    get player() {
      return this.actors.find(a => a.type == "player"); //找游戏角色
    }

    update(time, keys){
    //time：按住的时间？keys：一个告诉它那些键被按住的数组结构
    let actors = this.actors
      .map(actor => actor.update(time, this, keys));
      //调用所有活动元素的update方法生成更新后的活动元素，并获得时间步长，按键和状态。
    let newState = new State(this.level, actors, this.status);
  
    if (newState.status != "playing") return newState;
  
    let player = newState.player;
    if (this.level.touches(player.pos, player.size, "lava")) {
      return new State(this.level, actors, "lost");
    }
  //用touch方法来确定玩家是否碰到了岩浆，来更新状态
    for (let actor of actors) {
      if (actor != player && overlap(actor, player)) {
        newState = actor.collide(newState);
      }
    }
    return newState;
    }
  }
  //使用一个状态(state)类跟踪运行游戏的状态。
  
  
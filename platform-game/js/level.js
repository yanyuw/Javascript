//类声明：http://es6.ruanyifeng.com/#docs/class
//在constructor中的相当于原来构造函数中的声明，在constructor之外相当于原型链上的。

export class Level {
    constructor(plan) {
      let rows = plan.trim().split("\n").map(l => [...l]);
      //trim方法删除字符串前后的空格，split方法根据换行符分割字符串成一个数组，再通过map分割每个字符 形成二维数组
      this.height = rows.length;
      this.width = rows[0].length;
      //可以从rows中得到关卡的长宽。
      this.startActors = []; //活动元素
  
      this.rows = rows.map((row, y) => {
        return row.map((ch, x) => {
          let touches = function(pos, size, type) {
            var xStart = Math.floor(pos.x);
            var xEnd = Math.ceil(pos.x + size.x);
            var yStart = Math.floor(pos.y);
            var yEnd = Math.ceil(pos.y + size.y);
          
            for (var y = yStart; y < yEnd; y++) {
              for (var x = xStart; x < xEnd; x++) {
                let isOutside = x < 0 || x >= this.width ||
                                y < 0 || y >= this.height; //不去理关卡外面的元素
                let here = isOutside ? "wall" : this.rows[y][x];
                if (here == type) return true;
              }
            }
            return false;
          };
          
          //可以找物理引擎，模拟二维或三维的物理对象之间的交互
          //在移动之前，测试移动是否会碰到墙，若是则取消移动，而反应取决于活动元素的类型
          //这个方法告诉我们一个位置和大小指定的举行是否碰到了给定类型的网格元素。
          //该方法通过将一个盒子的侧面四舍五入，得到了盒子所触及的背景方块的范围
          type = levelChars[ch];
          if (typeof type == "string") return type;
          this.startActors.push(
            type.create(new Vec(x, y), ch));
          return "empty";
        });
      });
      //对rows的每一行row的每一个字符确定其代表的type，如果是字符串（空、墙、岩浆），返回其type
      //如果不是则加入活动元素素组中，并创建矢量来跟踪该元素。（左上角为(0,0)），最后返回空
      //levelChars 将背景元素映射到字符串，活动字符到类。
    }
    touches(pos, size, type) {
      var xStart = Math.floor(pos.x);
      var xEnd = Math.ceil(pos.x + size.x);
      var yStart = Math.floor(pos.y);
      var yEnd = Math.ceil(pos.y + size.y);
    
      for (var y = yStart; y < yEnd; y++) {
        for (var x = xStart; x < xEnd; x++) {
          let isOutside = x < 0 || x >= this.width ||
                          y < 0 || y >= this.height; //不去理关卡外面的元素
          let here = isOutside ? "wall" : this.rows[y][x];
          if (here == type) return true;
        }
      }
      return false;
    };
    
    //可以找物理引擎，模拟二维或三维的物理对象之间的交互
    //在移动之前，测试移动是否会碰到墙，若是则取消移动，而反应取决于活动元素的类型
    //这个方法告诉我们一个位置和大小指定的举行是否碰到了给定类型的网格元素。
    //该方法通过将一个盒子的侧面四舍五入，得到了盒子所触及的背景方块的范围
    
  }


  var Vec = class Vec {
    constructor(x, y) {
      this.x = x; this.y = y;
    }
    plus(other) {
      return new Vec(this.x + other.x, this.y + other.y);
    }
    times(factor) {
      return new Vec(this.x * factor, this.y * factor);
    }//缩放向量
  }
  /*
    活动元素的pos属性拥有元素左上角的坐标，size属性拥有其大小
    并有一个更新的方法用于计算给定的时间步长后的新状态和位置。
    它模仿演员做的事情 — — 以回应玩家的箭头键，来回弹跳，然后返回一个新的，更新的演员对象。
    还有一个静态的create方法，由level构造函数使用来创建一个角色。
  */
  var Player = class Player {
    constructor(pos, speed) {
      this.pos = pos;
      this.speed = speed;
    }
    //存储当前速度的speed属性，用以模拟动量和重力。
  
    get type() { return "player"; }
  
    static create(pos) {
      return new Player(pos.plus(new Vec(0, -0.5)),new Vec(0, 0));
    }
    // 因为玩家的高度是1.5个格子，所以初始位置要高出半个格子，让角色的底部可以和其出现的方格底部对齐
  }
  Player.prototype.size = new Vec(0.8, 1.5);
  // 所有的玩家大小相同，所以存储在原型上
  
  var Lava = class Lava {
    constructor(pos, speed, reset) {
      this.pos = pos;
      this.speed = speed;
      this.reset = reset;// 只会回到原来位置，如无则弹回
    }
  
    get type() { return "lava"; }
  
    static create(pos, ch) {
      if (ch == "=") {
        return new Lava(pos, new Vec(2, 0));
      } else if (ch == "|") {
        return new Lava(pos, new Vec(0, 2));
      } else if (ch == "v") {
        return new Lava(pos, new Vec(0, 3), pos);
      }
    }
    //根据不同的岩浆字符生成不同的岩浆
  }
  
  Lava.prototype.size = new Vec(1, 1);
  
  
  var Coin = class Coin {
    constructor(pos, basePos, wobble) {
      this.pos = pos;
      this.basePos = basePos;
      this.wobble = wobble; //硬币跳动的幅度
    }
  
    get type() { return "coin"; }
  
    static create(pos) {
      let basePos = pos.plus(new Vec(0.2, 0.1));
      return new Coin(basePos, basePos, Math.random() * Math.PI * 2);
      // 避免所有硬币同步摆动来用random使各硬币初始阶段随机
    }
  }
  
  Coin.prototype.size = new Vec(0.6, 0.6);
  
  var levelChars = {
    ".": "empty", "#": "wall", "+": "lava",
    "@": Player, "o": Coin,
    "=": Lava, "|": Lava, "v": Lava
  };
  //将字符与其构造函数关联起来
  
  // var simpleLevel = new Level(simpleLevelPlan);
  
  

  
  Lava.prototype.collide = function(state) {
    return new State(state.level, state.actors, "lost");
  };
  //碰撞岩浆的状态更新
  
  Coin.prototype.collide = function(state) {
    let filtered = state.actors.filter(a => a != this);
    let status = state.status;
    if (!filtered.some(a => a.type == "coin")) status = "won";
    //如果收集完则赢了
    return new State(state.level, filtered, status);
  };
  //碰到硬币的状态更新
  
  Lava.prototype.update = function(time, state) {
    let newPos = this.pos.plus(this.speed.times(time));
    if (!state.level.touches(newPos, this.size, "wall")) {
      return new Lava(newPos, this.speed, this.reset);
    } else if (this.reset) {
      return new Lava(this.reset, this.speed, this.reset);
    } else {
      return new Lava(this.pos, this.speed.times(-1));//乘以-1来向相反的方向运动
    }
  };
  //岩浆的更新，省略了keys
  var wobbleSpeed = 8, wobbleDist = 0.07;
  //抖动的速度
  Coin.prototype.update = function(time) {
    let wobble = this.wobble + time * wobbleSpeed;
    let wobblePos = Math.sin(wobble) * wobbleDist;
    return new Coin(this.basePos.plus(new Vec(0, wobblePos)),
                    this.basePos, wobble);
  };
  
  var playerXSpeed = 7;
  var gravity = 30;
  var jumpSpeed = 17;
  // 设置运动的速度，重力
  
  Player.prototype.update = function(time, state, keys) {
    let xSpeed = 0;
    if (keys.ArrowLeft) xSpeed -= playerXSpeed; 
    if (keys.ArrowRight) xSpeed += playerXSpeed;
    //向左向右移动
    let pos = this.pos;
    let movedX = pos.plus(new Vec(xSpeed * time, 0));
    if (!state.level.touches(movedX, this.size, "wall")) {
      pos = movedX;
    }//如果没有撞上墙的话更新位置
  
    let ySpeed = this.speed.y + time * gravity; //考虑重力
    let movedY = pos.plus(new Vec(0, ySpeed * time));
    if (!state.level.touches(movedY, this.size, "wall")) {
      pos = movedY;
    } else if (keys.ArrowUp && ySpeed > 0) {
      ySpeed = -jumpSpeed;
    } else {
      ySpeed = 0;
    }
    return new Player(pos, new Vec(xSpeed, ySpeed));
  };

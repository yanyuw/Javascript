
function elt(name, attrs, ...children) {
    let dom = document.createElement(name); //创建元素
    for (let attr of Object.keys(attrs)) {
      dom.setAttribute(attr, attrs[attr]);//添加制定的属性并为其赋指定的值
    }
    for (let child of children) {
      dom.appendChild(child);
      /*
      appendchild方法可向节点的子节点列表的末尾添加新的子节点
      从一个列表向另一个列表中移动列表项
      child是节点？children是节点的一个数组?
      */
    }
    return dom;
  }
  
  export class DOMDisplay {
    constructor(parent, level) {
      this.dom = elt("div", {class: "game"}, drawGrid(level));
      this.actorLayer = null;//用来跟踪控制玩家的元素，来让他们容易被移除和替换
      parent.appendChild(this.dom);
    }
  
    clear() { this.dom.remove(); }
  }
  //背景网格不变化，只绘制一次，而玩家每次都被重新绘制
  var scale = 20;//比例
  
  function drawGrid(level) {
    return elt("table", {
      class: "background",
      style: `width: ${level.width * scale}px`
    }, ...level.rows.map(row =>
      elt("tr", {style: `height: ${scale}px`},
          ...row.map(type => elt("td", {class: type})))
    ));
  }
  //缩放坐标
  
  function drawActors(actors) {
    return elt("div", {}, ...actors.map(actor => {
      let rect = elt("div", {class: `actor ${actor.type}`});
      rect.style.width = `${actor.size.x * scale}px`;
      rect.style.height = `${actor.size.y * scale}px`;
      rect.style.left = `${actor.pos.x * scale}px`;
      rect.style.top = `${actor.pos.y * scale}px`;
      return rect;
    }));
  }
  // 画活动元素
  
  DOMDisplay.prototype.setState = function(state) {
    if (this.actorLayer) this.actorLayer.remove();
    this.actorLayer = drawActors(state.actors);
    this.dom.appendChild(this.actorLayer);
    this.dom.className = `game ${state.status}`;
    this.scrollPlayerIntoView(state);
  };
  //移除玩家的旧位置的图形，再重新绘制新位置的玩家
  
  DOMDisplay.prototype.scrollPlayerIntoView = function(state) {
    let width = this.dom.clientWidth;
    let height = this.dom.clientHeight;
    let margin = width / 3;
  
    // The viewport
    let left = this.dom.scrollLeft, right = left + width;
    let top = this.dom.scrollTop, bottom = top + height;
  
    let player = state.player;
    let center = player.pos.plus(player.size.times(0.5))
                           .times(scale);
    //计算中心位置
  
    if (center.x < left + margin) {
      this.dom.scrollLeft = center.x - margin;
    } else if (center.x > right - margin) {
      this.dom.scrollLeft = center.x + margin - width;
    }
    if (center.y < top + margin) {
      this.dom.scrollTop = center.y - margin;
    } else if (center.y > bottom - margin) {
      this.dom.scrollTop = center.y + margin - height;
    }
    //检查玩家的位置在不在允许的范围内来调整滚动条
  };
  // 我们不能保证关卡和视口匹配，所以需要调用ScrollayerinToView
  // 来确保关卡超出了视口，就会滚动视口来保证玩家靠近其中心
  
  // 在该方法中，找到玩家的位置并更新了滚动位置，当玩家靠近边缘时，
  // 操作滚动条和滚动条属性来改变滚动条位置
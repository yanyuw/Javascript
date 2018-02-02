function rowHeights(rows) {
    return rows.map(function(row) {
      return row.reduce(function(max, cell) { //遍历内部数组中的每个对象，并返回该行中最高单元格的高度（以行为单位）
        return Math.max(max, cell.minHeight());
      }, 0);
    });
} 
//行高

function colWidths(rows) {
    return rows[0].map(function(_, i) { // 表面不会使用_参数
      return rows.reduce(function(max, row) {
        return Math.max(max, row[i].minWidth());
      }, 0);
    });
}
//列宽

function drawTable(rows) {
  var heights = rowHeights(rows);
  var widths = colWidths(rows); 
  //得到表格的宽高 
  function drawLine(blocks, lineNo) {
    return blocks.map(function(block) {
      return block[lineNo];
    }).join(" ");
  }
  
  function drawRow(row, rowNum) {
    var blocks = row.map(function(cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    });
    return blocks[0].map(function(_, lineNo) {
      return drawLine(blocks, lineNo);
    }).join("\n");
  }
  //
  return rows.map(drawRow).join("\n");
}

function repeat(string, times) {
    var result = "";
    for (var i = 0; i < times; i++)
      result += string;
    return result;
}
  
function TextCell(text) {
    this.text = text.split("\n");
}
//根据换行符 分割字符串 变成一个数组

TextCell.prototype.minWidth = function() {
    return this.text.reduce(function(width, line) {
      return Math.max(width, line.length);
    }, 0);
};
//
TextCell.prototype.minHeight = function() {
    return this.text.length;
};

TextCell.prototype.draw = function(width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
      var line = this.text[i] || "";
      result.push(line + repeat(" ", width - line.length));
    }
    return result;
};

function UnderlinedCell(inner) {
    this.inner = inner;
}

UnderlinedCell.prototype.minWidth = function() {
    return this.inner.minWidth();
};
UnderlinedCell.prototype.minHeight = function() {
    return this.inner.minHeight() + 1;
};
UnderlinedCell.prototype.draw = function(width, height) {
    return this.inner.draw(width, height - 1)
      .concat([repeat("-", width)]);
};

function dataTable(data) {
    var keys = Object.keys(data[0]); //遍历data[0]的属性（名字身高国家）
    var headers = keys.map(function(name) {
      return new UnderlinedCell(new TextCell(name));
    });
    var body = data.map(function(row) {
      return keys.map(function(name) {
        return new TextCell(String(row[name]));
      });
    });
    return [headers].concat(body);
}
var MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
    {name: "Everest", height: 8848, country: "Nepal"},
    {name: "Mount Fuji", height: 3776, country: "Japan"},
    {name: "Mont Blanc", height: 4808, country: "Italy/France"},
    {name: "Vaalserberg", height: 323, country: "Netherlands"},
    {name: "Denali", height: 6168, country: "United States"},
    {name: "Popocatepetl", height: 5465, country: "Mexico"}
];
  console.log(drawTable(dataTable(MOUNTAINS)));

//参考详解：https://codient.blogspot.com/2015/11/laying-out-table-eloquent-javascript.html
var XLSX = require("xlsx");
var path = require("path");
const readFile = (filename) => {
  var workbook = XLSX.readFile(path.join(__dirname, filename));
  var sheet_name_list = workbook.SheetNames;
  let result = null;
  sheet_name_list.forEach(function (y) {
    var worksheet = workbook.Sheets[y];

    var headers = {};
    var data = [];
    for (let z in worksheet) {
      if (z[0] === "!") continue;
      var col = z.substring(0, 1);
      var row = parseInt(z.substring(1));
      var value = worksheet[z].v;
      if (row == 1) {
        headers[col] = value;
        continue;
      }

      if (!data[row]) data[row] = {};
      data[row][headers[col]] = value;
    }
    data.shift();
    data.shift();
    result = data;
  });
  //   console.log(result);
  return result;
};
export default readFile;

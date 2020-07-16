Date.prototype.format = function (str) {
    var res = str;
    var time = {
      "Y+": this.getFullYear(),
      "M+": this.getMonth() + 1,
      "D+": this.getDate(),
      "H+": this.getHours(),
      "F+": this.getMinutes(),
      "S+": this.getSeconds(),
    };
    for (var x in time) {
      var reg = new RegExp(`(${x})`); //  ./(Y+)/
      if (reg.test(res)) {
        // 把匹配到内容替换为 时间
        var newVal = time[x] >= 10 ? time[x] : "0" + time[x];

        res = res.replace(RegExp.$1, newVal);
      }
    }

    return res;
  };


  function formatDate(date, str) {
    var res = str;
    var time = {
      "Y+": date.getFullYear(),
      "M+": date.getMonth() + 1,
      "D+": date.getDate(),
      "H+": date.getHours(),
      "F+": date.getMinutes(),
      "S+": date.getSeconds(),
    };

    for (var x in time) {
      var reg = new RegExp(`(${x})`); //  ./(Y+)/
      if (reg.test(res)) {
        // 把匹配到内容替换为 时间
        var newVal = time[x] >= 10 ? time[x] : "0" + time[x];

        res = res.replace(RegExp.$1, newVal);
      }
    }

    return res;
  }
// Generated by CoffeeScript 1.9.1
module.exports = function(robot) {
  robot.hear(/おはよう/i, function(msg) {
    var d, hour, minute, second, str;
    d = new Date;
    hour = d.getHours() + 9;
    minute = d.getMinutes();
    second = d.getSeconds();
    str = hour + "時 " + minute + "分 " + second + "秒！";
    if (hour < 12) {
      return msg.send(str + "\nおはよう！早起きは三文の得！");
    } else if (hour >= 12) {
      return msg.send(str + "\nおそよう！今日も一日頑張るぞい！");
    }
  });
  return robot.adapter.on('connected', function() {
    return robot.send({
      room: 'hubot-dev'
    }, "再起動中… あとでスクリプト読み込んでね");
  });
};

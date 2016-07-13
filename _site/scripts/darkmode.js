var date = new Date();
var bedtime = 20, wakeup = 7; // 8pm, 7am
if (date.getHours() > bedtime || date.getHours() < wakeup) {
  var body = $('body');
  body.toggleClass('darkmode');
}

var clock = setInterval(clockTiming, 1000);
function clockTiming() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  document.getElementById("ampm").innerHTML = h >= 12 ? "PM" : "AM";
  h = h > 12 ? h - 12 : h;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  document.getElementById("hour").innerHTML =h;
  document.getElementById("min").innerHTML = m;
  document.getElementById("sec").innerHTML = s;

}

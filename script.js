document.body.style.backgroundColor = "red";
document.querySelector("h1").style.backgroundColor = "blue";
document.body.style.fontFamily = "sans-serif";
document.getElementById("nickname").innerHTML = "Lancelot Link"
document.getElementById("favorites").innerHTML = "Bikes, Backpacking, Gardening, Tacos"
document.getElementById("hometown").innerHTML = "Minneapolis, MN"

var list = document.getElementsByTagName("li");
  for (i = 0; i < list.length; i ++) {
  list[i].className = "listitem";
  document.getElementsByClassName("listitem")[i].style.color = "white";
  }

var lance = document.createElement("img");
lance.src = ("http://i.imgur.com/zQE8DXU.jpg");
lance.alt = ("Hello World!");
lance.style.height = "50%";
lance.style.width = "50%";
document.body.appendChild(lance);
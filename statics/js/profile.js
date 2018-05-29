 window.onload = function(){
     var times = user.getTimes();
     document.getElementById("name").innerText = user.getName();
     document.getElementById("times-add").innerText = times + 1;
     document.getElementById("times").innerText = times;
     document.getElementById("duration").innerText = user.getDuration();
     document.getElementById("level").innerText = user.getLevel();
     document.getElementById("avatar").src = user.getAvatar();
 }

 function logout() {
     user.suicide();
     gotoPage("register.html")
 }

 function start() {
     gotoPage("level" + user.getLevel() + ".html")
 }

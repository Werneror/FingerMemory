function register() {
    var name = document.getElementById("user-name").value;
    var qq = document.getElementById("user-qq").value;
    if (name != '') {
        user.setName(name);
        if (qq != '') {
            user.setQQ(qq);
        }
        gotoPage("profile.html")
    } else {
        alert("昵称是必填的。");
    }
}

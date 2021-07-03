/* 页面跳转函数 */
function gotoPage(newUrl) {
    window.location.href = newUrl;
}

/* 根据时间计算不熟练度 */
function unskilled(duration) {
    return parseFloat(Math.sqrt(duration).toFixed(2));
}

/* 训练元随机发生器 */
function producer(trains) {
    var cache = new Array;
    for(train of trains) {
        cache.push(train);
    }
    // 按不熟练度降序排列
    cache.sort(function(a, b) {return b.unskilled - a.unskilled});
    var accumulative = new Array;
    var total = 0;
    for(train of cache.slice(0, 100)) {    // 只在最不熟练的前 100 中取训练元
        var start = total;
        total += train.unskilled;
        accumulative.push({'start': start,
                           'end': total,
                           'display': train.display,
                           'target': train.target})
    }
    var random = Math.floor(Math.random() * total * 100) / 100;
    for(item of accumulative) {
        if(item.start <= random && random <= item.end){
            return {'display': item.display, 'target': item.target};
        }
    }
}

/* 用户类 */
function User() {
    this.getName = function() {
        if (this.name == undefined) {
            this.name = localStorage.name;
        }
        return this.name;
    };
    this.setName = function(newName) {
        this.name = newName;
        localStorage.name = newName;
    };
    this.getQQ = function() {
        if (this.qq == undefined) {
            this.qq = localStorage.qq;
        }
        return this.qq;
    };
    this.setQQ = function(newQQ) {
        this.qq = newQQ;
        localStorage.qq = newQQ;
    };
    this.getLevel = function() {
        // 取当前关卡
        var level = localStorage.level;
        if (level == undefined) {
            return 0;
        } else {
            return level;
        }
    };
    this.addLevel = function() {
        // 进入到下一关
        localStorage.level = parseInt(this.getLevel()) + 1;
    };
    this.getTimes = function() {
        // 取训练总次数
        var times = localStorage.times;
        if (times == undefined) {
            return 0;
        } else {
            return times;
        }
    };
    this.addTimes = function() {
        // 给训练总次数加 1
        localStorage.times = parseInt(this.getTimes()) + 1;
    };
    this.getDuration = function() {
        // 取训练总时长（单位：秒）
        var duration = localStorage.duration;
        if (duration == undefined) {
            return 0;
        } else {
            return duration;
        }
    };
    this.addDuration = function(newDuration) {
        // 给取训练总时长增加值（单位：秒）
        localStorage.duration = parseFloat(this.getDuration()) + newDuration;
    };
    this.isNewMember = function() {
        if (this.getName() == undefined) {
            return true;
        } else {
            return false;
        }
    };
    this.getAvatar = function() {
        // 返回用户头像的 url
        var qq = this.getQQ();
        if (qq != undefined) {
            return `http://q3.qlogo.cn/g?b=qq&nk=${qq}&s=640`;
        } else {
            return "statics/img/avatar.jpg"
        }
    }
    this.suicide = function(){
        // 自杀，即清除所有数据
        this.name = undefined;
        this.qq = undefined;
        localStorage.clear();
    };
}

/* 自定义关卡类 */
function CustomLevel() {
    this.NewLevel = function(name, characters) {
        var custom = JSON.parse(localStorage.getItem("custom"));
        if (custom == null) {
            custom = {};
        }
        var d = new Date();
        var level = {
            "name": name,
            "characters": characters,
            "date": d.toLocaleString(),
            "size": characters.length,
        }
        custom[name] = level;
        localStorage.setItem("custom", JSON.stringify(custom));
    };
    this.DelLevel = function(name) {
        var custom = JSON.parse(localStorage.getItem("custom"));
        if (custom == null) {
            return;
        }
        delete custom[name];
        localStorage.setItem("custom", JSON.stringify(custom));
    }
    this.GetAllLevel = function() {
        var custom = JSON.parse(localStorage.getItem("custom"));
        if (custom == null) {
            custom = {};
        }
        var customLevels = new Array();
        for (var key in custom) {
            customLevels.push(custom[key]);
        }
        // 按时间倒序排序
        customLevels.sort(function(a, b) {
            if (a.date > b.date) {
                return -1;
            } else if (a.date < b.date) {
                return 1;
            }
            return 0;
        });
        return customLevels;
    }
    this.GetLevel = function(name) {
        var custom = JSON.parse(localStorage.getItem("custom"));
        if (custom == null) {
            custom = {};
        }
        return custom[name];
    }
}

/* 关卡类 */
function Level(number, maxTime, condition) {

    this.number = number;
    this.maxTime = maxTime;
    this.condition = condition;

    this.getCondition = function() {
        return this.condition;
    }

    this.getMaxTime = function() {
        return this.maxTime;
    }

    this.getTrains = function() {
        return JSON.parse(localStorage.getItem("level" + this.number));
    }

    this.saveTrains = function(trains) {
        localStorage.setItem("level" + this.number, JSON.stringify(trains));
    }

    this.initTrains = function() {
        var trains = new Array();
        var data = levels[this.number].data;
        var maxUnskilled = unskilled(this.maxTime);
        for(item of data) {
            if (item.target != undefined) {
                var target = item.target;
            } else {
                var target = item.display;
            }
            trains.push({"display": item.display,
                         "target": target,
                         "unskilled": maxUnskilled});
        }
        this.saveTrains(trains);
    }

    this.updateUnskilled = function(item, unskilled) {
        var trains = this.getTrains();
        for (train of trains) {
            if(train.display === item.display && train.target === item.target){
                train.unskilled = unskilled;
            }
        }
        this.saveTrains(trains);
    }

    if (this.getTrains() == undefined) {
        this.initTrains();
    }
}

/* 页面切换 */
function setTitle(title) {
    document.getElementById("title").innerText = title;
}

function showSection(sectionId) {
    var sections = document.getElementsByTagName('section');
    for (section of sections) {
        section.style.display = "none";
    }
    document.getElementById(sectionId).style.display = "block";
    if (sectionId === "profile") {
        initProfile();
    } else if (sectionId === "setting"){
        initSetting();
    } else if (sectionId === "custom"){
        initCustom();
    } else if (sectionId === "AddCustom"){
        initAddCustom();
    } else if (sectionId === "ground"){
        initGround();
    }
}

/* 按钮点击动作函数 */
function openProfile() {
    setTitle("个人中心");
    showSection("profile");
}

function start() {
    if(user.getLevel() < levels.length) {
        user.addTimes();
        setTitle(levels[user.getLevel()].name);
        showSection("ground");
    }
}

function setting() {
    setTitle("设置用户信息");
    showSection("setting");
}

function custom() {
    setTitle("自定义练习");
    showSection("custom");
    document.getElementById("new-name").value = "";
    document.getElementById("new-characters").value = "";
}

function addCustom() {
    setTitle("新增自定义练习");
    showSection("add-custom");
    document.getElementById("new-name").disabled = false;
}

function logout() {
    user.suicide();
    setTitle("注册新用户");
    showSection("setting");
}

function submit() {
    var name = document.getElementById("user-name").value;
    var qq = document.getElementById("user-qq").value;
    if (name != '') {
        user.setName(name);
        if (qq != '') {
            user.setQQ(qq);
        }
        openProfile();
    } else {
        alert("昵称是必填的。");
    }
}

var chinesePattern = new RegExp("[\u4E00-\u9FA5]+");
function newCustom() {
    var name = document.getElementById("new-name").value;
    var characters = new Set(document.getElementById("new-characters").value);
    var chineseCharacters = new Array();
    characters.forEach(function(value) {
        if (chinesePattern.test(value)) {
            chineseCharacters.push(value);
        }
    });
    if (name == '') {
        alert("名称是必填的。");
        return;
    }
    if (chineseCharacters.length == 0) {
        alert("输入的有效字符为空。");
        return;
    }
    customLevel.NewLevel(name, chineseCharacters);
    custom();
}

/* 填充函数 */
function humanTime(seconds) {
    var humanRead = "";
    var second = seconds % 60;
    var minute = parseInt((seconds % 3600) / 60);
    var hour = parseInt(seconds / 3600);
    if(hour != 0) {
        humanRead = hour + "小时";
    }
    if(minute != 0) {
        humanRead += minute;
        if(second == 0) {
            humanRead += "分钟";
        } else {
            humanRead += "分";
        }
    }
    if(humanRead == "") {
        humanRead = second + "秒";
    } else if (second != 0) {
        humanRead += second + "秒";
    }
    return humanRead;
}

function levelChange() {
    var levelSelector = document.getElementById("level-selector");
    var selectedLevel =  levelSelector.options[levelSelector.selectedIndex].value;
    var r = confirm(`是否确定要跳转到第 ${selectedLevel} 关？`);
    if (r == true) {
        localStorage.level = parseInt(selectedLevel);
    } else {
        var level = user.getLevel();
        levelSelector.value = level;
    }
}

function deleteCustom(name) {
    customLevel.DelLevel(name);
    custom();
}

function editCustom(name) {
    setTitle("编辑自定义练习："+name);
    showSection("add-custom");
    var level = customLevel.GetLevel(name);
    var characters = "";
    if (typeof(level) != "undefined") {
        for (char of level.characters) {
            characters += char;
        }
    }
    document.getElementById("new-name").disabled = true;
    document.getElementById("new-name").value = name;
    document.getElementById("new-characters").value = characters;
}

function initProfile() {
    var times = user.getTimes();
    var level = user.getLevel();
    document.getElementById("name").innerText = user.getName();
    document.getElementById("times").innerText = times;
    document.getElementById("duration").innerText = humanTime(parseInt(user.getDuration()));
    if(level < levels.length) {
        document.getElementById("start-button").innerText = "开始你的第" + (parseInt(times) + 1) + "次练习";
    } else {
        document.getElementById("start-button").innerText = "您已通关";
    }
    var select = '<select  onchange="levelChange()" id="level-selector">';
    for(var i=0; i<levels.length; i++) {
        if (i == level) {
            select += `<option value="${i}" selected>${i}</option>`;
        } else {
            select += `<option value="${i}">${i}</option>`;
        }
    }
    select += '</select>';
    document.getElementById("level").innerHTML = select;
    document.getElementById("avatar").src = user.getAvatar();
    var html = "";
    for(var i=0; i<levels.length; i++) {
        html +=  `<li>第 ${i} 关：${levels[i].name}</li>`;
    }
    document.getElementById("list").innerHTML = html;
}

function initSetting() {
    var name = user.getName();
    var qq = user.getQQ();
    if (name != undefined) {
        document.getElementById("user-name").value = name;
    }
    if (qq != undefined) {
        document.getElementById("user-qq").value = qq;
    }
}

function initCustom() {
    var allLevels = customLevel.GetAllLevel();
    var html = "";
    for(level of allLevels) {
        html +=  `<li>${level.name}（${level.size} 字，${level.date}）<button onclick="startCustom('${level.name}');" id="start-custom">练习</button><button onclick="editCustom('${level.name}');" id="edit-custom">编辑</button><button onclick="deleteCustom('${level.name}');" id="delete-custom">删除</button></li>`;
    }
    if (html == "") {
        html = "还没有自定义练习，请先添加";
    }
    document.getElementById("custom-list").innerHTML = html;
}

function initAddCustom() {

}

function initGround() {
    document.getElementById("input").focus();
    var current = user.getLevel();
    level = new Level(current,
                      levels[current].maxTime,
                      levels[current].condition);
    updateProgress(level.getTrains(), level.getCondition());
    var display = document.getElementById("display");
    var input = document.getElementById("input");
    if(level.number == 1) {
        // 第一关是字根输入练习，为正确显示字根，
        // 需设置 class 为 zigen，以使用特殊字体
        document.getElementById("display").className = "zigen";
        document.getElementById("top-error").className = "zigen";
    } else {
        document.getElementById("display").className = "";
        document.getElementById("top-error").className = "";
    }
    step(display, input ,level);
}

function passLevel(){
    alert("恭喜你通过了" + levels[user.getLevel()].name);
    user.addLevel();
    openProfile();
}

function updateProgress(trains, condition) {
    var skill = 0;
    var total = 0;
    var progress = document.getElementById("progress");
    var topError = document.getElementById("top-error");
    var topErrorList = new Array();
    for (train of trains) {
        if (train.unskilled <= condition) {
            skill += 1;
        }
        total += 1;
        if (topErrorList.length < 5) {
            topErrorList.push(train);
        } else {
            for (var i=0; i < topErrorList.length; i++) {
                if (topErrorList[i].unskilled < train.unskilled) {
                    topErrorList[i] = train;
                    break;
                }
            }
        }
    }
    progress.innerText = skill + '/' + total;
    var text = "";
    for (element of topErrorList) {
        text += element.display + " "
    }
    topError.innerText = text;
    if (skill == total) {
        passLevel();
    }
}

function step(display, input ,level, pre_train=undefined) {
    input.value = ''; // 清除刷新页面后浏览器在input中的缓存
    if (pre_train != undefined) {
        var train = pre_train;
    } else {
        var train = producer(level.getTrains());
    }
    var maxTime = level.getMaxTime();
    var condition = level.getCondition();
    display.innerText = train.display;
    var beginTime = new Date();
    var recovery = false;
    window.lock = false;    // 防止中文输入法未完成输入时先判断输入的字母
    input.onkeyup = function(event) {
        if (event.keyCode < 32 || event.keyCode > 126 || window.lock) {
            return;
        }
        var endTime = new Date();
        var time = (endTime-beginTime) / 1000.0;
        user.addDuration(time);
        if(input.value == train.target) {
            if (time > maxTime) {
                time = maxTime;
            }
            if (!recovery) {
                var unskilledValue = unskilled(time);
                if (pre_train == undefined) {
                    level.updateUnskilled(train, unskilledValue);
                }
                setTimeout(step, 50, display, input ,level);
            } else {
                setTimeout(step, 50, display, input ,level, train);
            }

        } else {
            if (!recovery) {
                level.updateUnskilled(train, unskilled(maxTime));
            }
            setTimeout("input.value = '';", 50);
            recovery = true;
            inputError();
        }
        updateProgress(level.getTrains(), condition);
    };
    if (!window.HasBeenListen) {
        input.addEventListener('compositionstart', function () {
            window.lock = true;
        });
        input.addEventListener('compositionend', function () {
            window.lock = false;
        });
        window.HasBeenListen = true;
    }
}

function inputError() {
    document.getElementById('input').style.border = '3px solid red';
    document.getElementById('display').style.color = 'red';
    setTimeout("document.getElementById('input').style.border = '';document.getElementById('display').style.color = '';", 200);
}

/* 页面加载后执行 */
window.onload = function(){
    user = new User();
    customLevel = new CustomLevel();
    if (user.isNewMember()) {
        setTitle("注册新用户");
        showSection("setting");
    } else {
        initProfile();
    }
}

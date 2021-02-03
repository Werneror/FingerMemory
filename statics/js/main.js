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
    var accumulative = new Array;
    var total = 0;
    for(train of trains) {
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
function User(){
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
    if (user.isNewMember()) {
        setTitle("注册新用户");
        showSection("setting");
    } else {
        initProfile();
    }
}

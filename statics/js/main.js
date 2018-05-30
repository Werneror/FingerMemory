/* 页面跳转函数 */
function gotoPage(newUrl) {
    window.location.href = newUrl;
}

/* 检查是否不在iframe中 */
if(self == top){
    gotoPage("index.html");
}

/* 根据时间计算不熟练度 */
function unskilled(duration) {
    return parseFloat(Math.log2(duration + 1).toFixed(2));
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
                           'source': train.source,
                           'target': train.target})
    }
    var random = Math.floor(Math.random() * total * 100) / 100;
    for(item of accumulative) {
        if(item.start <= random && random <= item.end){
            return {'source': item.source, 'target': item.target};
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
            return 1;
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
        localStorage.duration = parseInt(this.getDuration) + newDuration;
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
            return "http://q.qlogo.cn/headimg_dl?dst_uin=+" + qq +  " &spec=640&img_type=jpg";
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

user = new User();

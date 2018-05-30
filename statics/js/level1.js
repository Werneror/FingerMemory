maxTime = 10240;
minUnskilled = 0.8;

trains_original = [{'source': '一', 'target': 'g', 'unskilled': 13.32}, {'source': '丁', 'target': 'g', 'unskilled': 13.32}, {'source': '丂', 'target': 'g', 'unskilled': 13.32}, {'source': '七', 'target': 'g', 'unskilled': 13.32}, {'source': '丄', 'target': 'g', 'unskilled': 13.32}, {'source': '丅', 'target': 'g', 'unskilled': 13.32}, {'source': '丐', 'target': 'f', 'unskilled': 13.32}, {'source': '丑', 'target': 'f', 'unskilled': 13.32}, {'source': '丒', 'target': 'f', 'unskilled': 13.32}, {'source': '专', 'target': 'f', 'unskilled': 13.32}, {'source': '且', 'target': 'f', 'unskilled': 13.32}, {'source': '丕', 'target': 'f', 'unskilled': 13.32}, {'source': '世', 'target': 'f', 'unskilled': 13.32}, {'source': '丗', 'target': 'f', 'unskilled': 13.32}, {'source': '丘', 'target': 'f', 'unskilled': 13.32}, {'source': '丙', 'target': 'f', 'unskilled': 13.32}, {'source': '丠', 'target': 'd', 'unskilled': 13.32}, {'source': '両', 'target': 'd', 'unskilled': 13.32}, {'source': '丢', 'target': 'd', 'unskilled': 13.32}, {'source': '丣', 'target': 'd', 'unskilled': 13.32}, {'source': '两', 'target': 'd', 'unskilled': 13.32}, {'source': '严', 'target': 'd', 'unskilled': 13.32}, {'source': '並', 'target': 'd', 'unskilled': 13.32}, {'source': '丧', 'target': 'd', 'unskilled': 13.32}, {'source': '丨', 'target': 'd', 'unskilled': 13.32}, {'source': '丩', 'target': 'd', 'unskilled': 13.32}, {'source': '个', 'target': 'd', 'unskilled': 13.32}, {'source': '丫', 'target': 'd', 'unskilled': 13.32}, {'source': '丰', 'target': 's', 'unskilled': 13.32}, {'source': '丱', 'target': 's', 'unskilled': 13.32}, {'source': '串', 'target': 's', 'unskilled': 13.32}, {'source': '丳', 'target': 's', 'unskilled': 13.32}, {'source': '乀', 'target': 'a', 'unskilled': 13.32}, {'source': '乁', 'target': 'a', 'unskilled': 13.32}, {'source': '乂', 'target': 'a', 'unskilled': 13.32}, {'source': '乃', 'target': 'a', 'unskilled': 13.32}, {'source': '乄', 'target': 'a', 'unskilled': 13.32}, {'source': '久', 'target': 'a', 'unskilled': 13.32}, {'source': '乆', 'target': 'a', 'unskilled': 13.32}, {'source': '乇', 'target': 'a', 'unskilled': 13.32}, {'source': '么', 'target': 'a', 'unskilled': 13.32}, {'source': '义', 'target': 'a', 'unskilled': 13.32}, {'source': '乊', 'target': 'a', 'unskilled': 13.32}, {'source': '之', 'target': 'a', 'unskilled': 13.32}, {'source': '乌', 'target': 'a', 'unskilled': 13.32}, {'source': '乍', 'target': 'a', 'unskilled': 13.32}, {'source': '乐', 'target': 'h', 'unskilled': 13.32}, {'source': '乑', 'target': 'h', 'unskilled': 13.32}, {'source': '乒', 'target': 'h', 'unskilled': 13.32}, {'source': '乓', 'target': 'h', 'unskilled': 13.32}, {'source': '乔', 'target': 'h', 'unskilled': 13.32}, {'source': '乕', 'target': 'h', 'unskilled': 13.32}, {'source': '乖', 'target': 'h', 'unskilled': 13.32}, {'source': '乗', 'target': 'h', 'unskilled': 13.32}, {'source': '乘', 'target': 'h', 'unskilled': 13.32}, {'source': '乙', 'target': 'h', 'unskilled': 13.32}, {'source': '乚', 'target': 'h', 'unskilled': 13.32}, {'source': '习', 'target': 'j', 'unskilled': 13.32}, {'source': '乡', 'target': 'j', 'unskilled': 13.32}, {'source': '乢', 'target': 'j', 'unskilled': 13.32}, {'source': '乣', 'target': 'j', 'unskilled': 13.32}, {'source': '乤', 'target': 'j', 'unskilled': 13.32}, {'source': '乥', 'target': 'j', 'unskilled': 13.32}, {'source': '书', 'target': 'j', 'unskilled': 13.32}, {'source': '乧', 'target': 'j', 'unskilled': 13.32}, {'source': '乨', 'target': 'j', 'unskilled': 13.32}, {'source': '买', 'target': 'k', 'unskilled': 13.32}, {'source': '乱', 'target': 'k', 'unskilled': 13.32}, {'source': '乲', 'target': 'k', 'unskilled': 13.32}, {'source': '亀', 'target': 'l', 'unskilled': 13.32}, {'source': '亁', 'target': 'l', 'unskilled': 13.32}, {'source': '亂', 'target': 'l', 'unskilled': 13.32}, {'source': '亃', 'target': 'l', 'unskilled': 13.32}, {'source': '亄', 'target': 'l', 'unskilled': 13.32}, {'source': '亅', 'target': 'l', 'unskilled': 13.32}, {'source': '了', 'target': 'l', 'unskilled': 13.32}, {'source': '亇', 'target': 'l', 'unskilled': 13.32}, {'source': '予', 'target': 'l', 'unskilled': 13.32}, {'source': '争', 'target': 'l', 'unskilled': 13.32}, {'source': '亊', 'target': 'l', 'unskilled': 13.32}, {'source': '亐', 'target': 'm', 'unskilled': 13.32}, {'source': '云', 'target': 'm', 'unskilled': 13.32}, {'source': '互', 'target': 'm', 'unskilled': 13.32}, {'source': '亓', 'target': 'm', 'unskilled': 13.32}, {'source': '五', 'target': 'm', 'unskilled': 13.32}, {'source': '井', 'target': 'm', 'unskilled': 13.32}, {'source': '亖', 'target': 'm', 'unskilled': 13.32}, {'source': '亗', 'target': 'm', 'unskilled': 13.32}, {'source': '亠', 'target': 't', 'unskilled': 13.32}, {'source': '亡', 'target': 't', 'unskilled': 13.32}, {'source': '亢', 'target': 't', 'unskilled': 13.32}, {'source': '亣', 'target': 't', 'unskilled': 13.32}, {'source': '交', 'target': 't', 'unskilled': 13.32}, {'source': '亥', 'target': 't', 'unskilled': 13.32}, {'source': '亦', 'target': 't', 'unskilled': 13.32}, {'source': '产', 'target': 't', 'unskilled': 13.32}, {'source': '亨', 'target': 't', 'unskilled': 13.32}, {'source': '亰', 'target': 'r', 'unskilled': 13.32}, {'source': '亱', 'target': 'r', 'unskilled': 13.32}, {'source': '亲', 'target': 'r', 'unskilled': 13.32}, {'source': '亳', 'target': 'r', 'unskilled': 13.32}, {'source': '亴', 'target': 'r', 'unskilled': 13.32}, {'source': '亵', 'target': 'r', 'unskilled': 13.32}, {'source': '亶', 'target': 'r', 'unskilled': 13.32}, {'source': '亷', 'target': 'r', 'unskilled': 13.32}, {'source': '亸', 'target': 'r', 'unskilled': 13.32}, {'source': '亹', 'target': 'r', 'unskilled': 13.32}, {'source': '什', 'target': 'e', 'unskilled': 13.32}, {'source': '仁', 'target': 'e', 'unskilled': 13.32}, {'source': '仂', 'target': 'e', 'unskilled': 13.32}, {'source': '仃', 'target': 'e', 'unskilled': 13.32}, {'source': '仄', 'target': 'e', 'unskilled': 13.32}, {'source': '仅', 'target': 'e', 'unskilled': 13.32}, {'source': '仆', 'target': 'e', 'unskilled': 13.32}, {'source': '仇', 'target': 'e', 'unskilled': 13.32}, {'source': '仈', 'target': 'e', 'unskilled': 13.32}, {'source': '仉', 'target': 'e', 'unskilled': 13.32}, {'source': '今', 'target': 'e', 'unskilled': 13.32}, {'source': '介', 'target': 'e', 'unskilled': 13.32}, {'source': '仌', 'target': 'e', 'unskilled': 13.32}, {'source': '仐', 'target': 'w', 'unskilled': 13.32}, {'source': '仑', 'target': 'w', 'unskilled': 13.32}, {'source': '仒', 'target': 'w', 'unskilled': 13.32}, {'source': '仓', 'target': 'w', 'unskilled': 13.32}, {'source': '仔', 'target': 'w', 'unskilled': 13.32}, {'source': '仠', 'target': 'q', 'unskilled': 13.32}, {'source': '仡', 'target': 'q', 'unskilled': 13.32}, {'source': '仢', 'target': 'q', 'unskilled': 13.32}, {'source': '代', 'target': 'q', 'unskilled': 13.32}, {'source': '令', 'target': 'q', 'unskilled': 13.32}, {'source': '以', 'target': 'q', 'unskilled': 13.32}, {'source': '仦', 'target': 'q', 'unskilled': 13.32}, {'source': '仧', 'target': 'q', 'unskilled': 13.32}, {'source': '仨', 'target': 'q', 'unskilled': 13.32}, {'source': '仩', 'target': 'q', 'unskilled': 13.32}, {'source': '仪', 'target': 'q', 'unskilled': 13.32}, {'source': '仫', 'target': 'q', 'unskilled': 13.32}, {'source': '们', 'target': 'q', 'unskilled': 13.32}, {'source': '仭', 'target': 'q', 'unskilled': 13.32}, {'source': '仮', 'target': 'q', 'unskilled': 13.32}, {'source': '仰', 'target': 'y', 'unskilled': 13.32}, {'source': '仱', 'target': 'y', 'unskilled': 13.32}, {'source': '仲', 'target': 'y', 'unskilled': 13.32}, {'source': '仳', 'target': 'y', 'unskilled': 13.32}, {'source': '仴', 'target': 'y', 'unskilled': 13.32}, {'source': '仵', 'target': 'y', 'unskilled': 13.32}, {'source': '件', 'target': 'y', 'unskilled': 13.32}, {'source': '价', 'target': 'y', 'unskilled': 13.32}, {'source': '仸', 'target': 'y', 'unskilled': 13.32}, {'source': '仹', 'target': 'y', 'unskilled': 13.32}, {'source': '伀', 'target': 'u', 'unskilled': 13.32}, {'source': '企', 'target': 'u', 'unskilled': 13.32}, {'source': '伂', 'target': 'u', 'unskilled': 13.32}, {'source': '伃', 'target': 'u', 'unskilled': 13.32}, {'source': '伄', 'target': 'u', 'unskilled': 13.32}, {'source': '伅', 'target': 'u', 'unskilled': 13.32}, {'source': '伆', 'target': 'u', 'unskilled': 13.32}, {'source': '伇', 'target': 'u', 'unskilled': 13.32}, {'source': '伈', 'target': 'u', 'unskilled': 13.32}, {'source': '伉', 'target': 'u', 'unskilled': 13.32}, {'source': '伊', 'target': 'u', 'unskilled': 13.32}, {'source': '伋', 'target': 'u', 'unskilled': 13.32}, {'source': '伌', 'target': 'u', 'unskilled': 13.32}, {'source': '伐', 'target': 'i', 'unskilled': 13.32}, {'source': '休', 'target': 'i', 'unskilled': 13.32}, {'source': '伒', 'target': 'i', 'unskilled': 13.32}, {'source': '伓', 'target': 'i', 'unskilled': 13.32}, {'source': '伔', 'target': 'i', 'unskilled': 13.32}, {'source': '伕', 'target': 'i', 'unskilled': 13.32}, {'source': '伖', 'target': 'i', 'unskilled': 13.32}, {'source': '众', 'target': 'i', 'unskilled': 13.32}, {'source': '优', 'target': 'i', 'unskilled': 13.32}, {'source': '伙', 'target': 'i', 'unskilled': 13.32}, {'source': '会', 'target': 'i', 'unskilled': 13.32}, {'source': '估', 'target': 'p', 'unskilled': 13.32}, {'source': '伱', 'target': 'p', 'unskilled': 13.32}, {'source': '伲', 'target': 'p', 'unskilled': 13.32}, {'source': '伳', 'target': 'p', 'unskilled': 13.32}, {'source': '伴', 'target': 'p', 'unskilled': 13.32}, {'source': '伵', 'target': 'p', 'unskilled': 13.32}, {'source': '佀', 'target': 'n', 'unskilled': 13.32}, {'source': '佁', 'target': 'n', 'unskilled': 13.32}, {'source': '佂', 'target': 'n', 'unskilled': 13.32}, {'source': '佃', 'target': 'n', 'unskilled': 13.32}, {'source': '佄', 'target': 'n', 'unskilled': 13.32}, {'source': '佅', 'target': 'n', 'unskilled': 13.32}, {'source': '但', 'target': 'n', 'unskilled': 13.32}, {'source': '佇', 'target': 'n', 'unskilled': 13.32}, {'source': '佈', 'target': 'n', 'unskilled': 13.32}, {'source': '佉', 'target': 'n', 'unskilled': 13.32}, {'source': '佊', 'target': 'n', 'unskilled': 13.32}, {'source': '佋', 'target': 'n', 'unskilled': 13.32}, {'source': '佌', 'target': 'n', 'unskilled': 13.32}, {'source': '位', 'target': 'n', 'unskilled': 13.32}, {'source': '低', 'target': 'n', 'unskilled': 13.32}, {'source': '住', 'target': 'n', 'unskilled': 13.32}, {'source': '佐', 'target': 'n', 'unskilled': 13.32}, {'source': '佑', 'target': 'n', 'unskilled': 13.32}, {'source': '佒', 'target': 'n', 'unskilled': 13.32}, {'source': '体', 'target': 'n', 'unskilled': 13.32}, {'source': '佔', 'target': 'n', 'unskilled': 13.32}, {'source': '何', 'target': 'n', 'unskilled': 13.32}, {'source': '佖', 'target': 'n', 'unskilled': 13.32}, {'source': '你', 'target': 'b', 'unskilled': 13.32}, {'source': '佡', 'target': 'b', 'unskilled': 13.32}, {'source': '佢', 'target': 'b', 'unskilled': 13.32}, {'source': '佣', 'target': 'b', 'unskilled': 13.32}, {'source': '佤', 'target': 'b', 'unskilled': 13.32}, {'source': '佥', 'target': 'b', 'unskilled': 13.32}, {'source': '佦', 'target': 'b', 'unskilled': 13.32}, {'source': '佧', 'target': 'b', 'unskilled': 13.32}, {'source': '佨', 'target': 'b', 'unskilled': 13.32}, {'source': '佩', 'target': 'b', 'unskilled': 13.32}, {'source': '佪', 'target': 'b', 'unskilled': 13.32}, {'source': '佫', 'target': 'b', 'unskilled': 13.32}, {'source': '佬', 'target': 'b', 'unskilled': 13.32}, {'source': '佭', 'target': 'b', 'unskilled': 13.32}, {'source': '佰', 'target': 'v', 'unskilled': 13.32}, {'source': '佱', 'target': 'v', 'unskilled': 13.32}, {'source': '佲', 'target': 'v', 'unskilled': 13.32}, {'source': '佳', 'target': 'v', 'unskilled': 13.32}, {'source': '佴', 'target': 'v', 'unskilled': 13.32}, {'source': '併', 'target': 'v', 'unskilled': 13.32}, {'source': '佶', 'target': 'v', 'unskilled': 13.32}, {'source': '佷', 'target': 'v', 'unskilled': 13.32}, {'source': '侀', 'target': 'c', 'unskilled': 13.32}, {'source': '侁', 'target': 'c', 'unskilled': 13.32}, {'source': '侂', 'target': 'c', 'unskilled': 13.32}, {'source': '侃', 'target': 'c', 'unskilled': 13.32}, {'source': '侄', 'target': 'c', 'unskilled': 13.32}, {'source': '侅', 'target': 'c', 'unskilled': 13.32}, {'source': '侐', 'target': 'x', 'unskilled': 13.32}, {'source': '侑', 'target': 'x', 'unskilled': 13.32}, {'source': '侒', 'target': 'x', 'unskilled': 13.32}, {'source': '侓', 'target': 'x', 'unskilled': 13.32}, {'source': '侔', 'target': 'x', 'unskilled': 13.32}, {'source': '侕', 'target': 'x', 'unskilled': 13.32}, {'source': '侖', 'target': 'x', 'unskilled': 13.32}, {'source': '侗', 'target': 'x', 'unskilled': 13.32}];

function Trains() {
    this.saveTrains = function(trains) {
        localStorage.level1trains = JSON.stringify(trains);
    }
    this.loadOriginalTrains = function() {
        this.saveTrains(trains_original);
    }
    this.updateUnskilled = function(item, unskilled) {
        var trains = this.getTrains();
        for (train of trains) {
            if(train.source === item.source && train.target === item.target){
                train.unskilled = unskilled;
            }
        }
        this.saveTrains(trains);
    }
    this.getTrains = function() {
        return JSON.parse(localStorage.level1trains);
    }
    if (localStorage.level1trains == undefined) {
        this.loadOriginalTrains()
    }
}

window.onload = function(){
    trains = new Trains();
    updatePass(trains);
    var display = document.getElementById("display");
    var input = document.getElementById("input");
    step(display, input ,trains);
}

function step(display, input ,trains) {
    input.value = ''; // 清除刷新页面后浏览器在input中的缓存
    var train_meta = producer(trains.getTrains());
    display.innerText = train_meta.source;
    var beginTime = new Date();
    var recovery = false;
    input.oninput = function() {
        var endTime = new Date();
        if(input.value.toLocaleLowerCase() == train_meta.target) {
            var time = (endTime-beginTime) / 1000.0;
            if (time > maxTime) {
                time = maxTime;
            }
            if (!recovery) {
                var unskilledValue = unskilled(time);
                trains.updateUnskilled(train_meta, unskilledValue);
                if (unskilledValue <= minUnskilled) {
                    updatePass(trains);
                }
            }
            setTimeout("step(display, input ,trains)", 50);
        } else {
            if (!recovery) {
                trains.updateUnskilled(train_meta, unskilled(maxTime));
            }
            input.value = '';
            recovery = true;
        }
    };
}

function updatePass(trains) {
    var unskill = 0;
    var total = 0;
    var pass = document.getElementById("pass");
    var trains = trains.getTrains();
    for (train of trains) {
        if (train.unskilled > minUnskilled) {
            unskill += 1;
        }
        total += 1;
    }
    pass.innerText = unskill + '/' + total;
}

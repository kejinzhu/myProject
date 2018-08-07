/**
 * Created by Administrator on 2018/3/11/011.
 */
/**
 * Created by Administrator on 2018/3/9/009.
 */
/*获取元素*/
var myVideo = document.querySelector("#myVideo");
/*是否播放*/
var v_play = document.querySelector("#v_play");
/*是否暂停*/
var v_paused = document.querySelector("#v_paused");
/*当前时间*/
var current = document.querySelector("#current");
/*视频总时间*/
var duration = document.querySelector("#duration");
/*缓冲条*/
var v_range = document.querySelector("#v_range");
var bufferBar = document.querySelector("#bufferBar");
/*时间进度条*/
var timeBar = document.querySelector("#timeBar");
/*快进*/
var speed_up = document.querySelector("#speed_up");
/*快退*/
var slow_down = document.querySelector("#slow_down");
/*声音按钮*/
var v_volume_pic = document.querySelector("#v_volume_pic");
/*静音*/
var n_muted = document.querySelector("#n_muted");
/*音量*/
var y_muted = document.querySelector("#y_muted");
/*声音*/
var v_volume = document.querySelector("#v_volume");
var v_volume_bar = document.querySelector("#v_volume_bar");
/*声音进度条*/
var volume_timerBar = document.querySelector("#volume_timerBar");
/*全屏*/
var v_fullScreen = document.querySelector("#v_fullScreen");
/*控制当前是播放按钮还是停止按钮*/
var f = 0;
/*自定义视频播放函数*/
function videoFn(){
    /*/!*设置视频播放时间*!/*/
    this.videoTime = function (time) {
        var t = time || 0;
        var h = parseInt(t / 3600);
        var m = parseInt(t % 3600 / 60);
        var s = parseInt(t % 60);
        h = h < 10 ? "0" + h :h;
        m = m < 10 ? "0" + m :m;
        s = s < 10 ? "0" + s :s;
        return h + ":" + m + ":" + s;
    };
    /*/!*设置音量是否静音*!/*/
    this.is_muted = function (isMuted) {
        return !isMuted;
    };
    /* /!*设置视频快慢放*!/*/
    this.speedFn = function (speed) {
        return speed;
    }
}
/*实例化视频播放器对象*/
var v_obj = new videoFn();

/*控制视频是否播放、和暂停*/
v_play.onclick = function () {
    myVideo.play();
    v_play.style.display = "none";
    v_paused.style.display = "block";
    f = 1;
};
v_paused.onclick = function () {
    myVideo.pause();
    v_play.style.display = "block";
    v_paused.style.display = "none";
    f = 0;
};
/*点击视频栏的时候控制播放或停止*/
myVideo.onclick = function () {
    /*当停止时*/
    if(myVideo.paused) {
        myVideo.play();
        v_play.style.display = "none";
        v_paused.style.display = "block";
    }else if(myVideo.play){
        /*当正在播放时*/
        myVideo.pause();
        v_play.style.display = "block";
        v_paused.style.display = "none";
    }
};

/*控制总时间*/
myVideo.oncanplay = function () {
    /*获取视频总时长*/
    duration.innerHTML = v_obj.videoTime(this.duration);
};
/*设置视频播放的时间*/
myVideo.addEventListener("timeupdate", function () {
    {
        var cur_time = this.currentTime;
        var dur_time = this.duration;
        current.innerHTML = v_obj.videoTime(cur_time);
        /*显示进度*/
        var pro = cur_time/dur_time *100 + "%";
        timeBar.style.width = pro;
        /*跳跃播放*/
        v_range.onclick = function (e) {
            var event = e || window.event;
            cur_time = (event.offsetX / this.offsetWidth) * dur_time;
            /*console.log(cur_time);*/
            playBySeconds(cur_time);
            current.innerHTML = v_obj.videoTime(cur_time);
            /*var pro = cur_time/dur_time *100 + "%";
             timeBar.style.width = pro;*/
            timeBar.style.width = event.offsetX + "px";
        };
        /*播放完毕，回到点击播放的状态*/
        if(cur_time == dur_time){
            myVideo.pause();
            v_play.style.display = "block";
            v_paused.style.display = "none";
        }
    }
});
/*设置播放点*/
function playBySeconds(num){
    myVideo.currentTime = num;
}

/*控制音量*/
myVideo.volume = 0.5;
var info = 0.5;
v_volume_bar.onclick = function (e) {
    var event = e || window.event;
    info = event.offsetX/v_volume_bar.offsetWidth;
    myVideo.volume = info;
    if(info != 0){
        volume_timerBar.style.width =  info * 100 + "%";
        n_muted.style.display = "none";
        y_muted.style.display = "block";
    }else if(info == 0){
        volume_timerBar.style.width = "0";
        n_muted.style.display = "block";
        y_muted.style.display = "none";
    }
};
/*控制静音*/
v_volume_pic.onclick = function () {
    myVideo.defaultMuted = v_obj.is_muted(myVideo.defaultMuted);
    if(myVideo.defaultMuted){
        myVideo.volume = 0;
        volume_timerBar.style.width = "0";
        n_muted.style.display = "block";
        y_muted.style.display = "none";
    }else{
        myVideo.volume = info;
        volume_timerBar.style.width = info * 100 + "%";
        n_muted.style.display = "none";
        y_muted.style.display = "block";
    }
};
/*快进、快退*/
var playSpeed = 1;
speed_up.onclick = function () {
    playSpeed += 0.1;
    myVideo.playbackRate = v_obj.speedFn(playSpeed);
    /* myVideo.play();*/
};
slow_down.onclick = function () {
    playSpeed -= 0.1;
    myVideo.playbackRate = v_obj.speedFn(playSpeed);
    /*myVideo.play();*/
};
/*全屏*/
v_fullScreen.onclick = function () {
    myVideo.webkitRequestFullScreen();
    myVideo.mozRequestFullScreen();
    myVideo.requestFullScreen();
};

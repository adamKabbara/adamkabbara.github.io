var ms = 0;
var s = 0;
var m = 0;
var timer;

var watch = document.getElementById("watch")
var start = document.getElementById("start")
var reset = document.getElementById("reset")
var isOn = false


function run(){
    isOn = true
    if(ms == 100){
        ms = 0
        s++
    }
    if(s == 60){
        s = 0
        m++
    }
    watch.innerHTML = (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s) + ':' + (ms < 10 ? '0' + ms : ms)
    ms++
   
    
}

start.onclick = function start(){
    if(isOn){
        isOn = false;
        clearInterval(timer)
        document.getElementById('start').innerText = 'Start';
        $("#start").removeClass("btn-danger");
        $("#start").addClass("btn-success");
    }
    else{
        document.getElementById('start').innerText = 'Stop';
        timer = setInterval(run ,10);
        $("#start").removeClass("btn-success");
        $("#start").addClass("btn-danger");
    }
}

reset.onclick = function(){
    watch.innerHTML = '00:00:00'
    m = 0;
    s = 0;
    ms = 0; 
  

}
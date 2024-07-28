var flag = true;
var s = 0;
var m = 0;
var hr = 0;

function start() {
    if (flag == true) {
        flag = false;
        timer();

    }
}

function timer() {
    s = parseInt(s);
    m = parseInt(m);
    hr = parseInt(hr);
    if (flag == false) {
        s++;
        if (s == 60) {
            s = 0;
            m++;
        }
        if (m == 60) {

            m = 0;
            hr++;
        }
        if (s < 10) {
            s = "0" + s;
        }
        if (m < 10) {
            m = "0" + m;
        }
        if (hr < 10) {
            hr = "0" + hr;
        }

        d.innerHTML = hr + ":" + m + ":" + s;
        setTimeout("timer()", 1000);
    }
}

function stop() {
    flag = true;
}

function reset() {
    flag = true;
    s = 0;
    m = 0;
    hr = 0;
    d.innerHTML = "00:00:00";
}
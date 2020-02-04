function showPass() {
  document.getElementById('inputPass').type = "text";
  document.getElementById('eye-c').style.display = "none";
  document.getElementById('eye-o').style.display = "block";
}

function hidePass() {
  document.getElementById('inputPass').type = "password";
  document.getElementById('eye-o').style.display = "none";
  document.getElementById('eye-c').style.display = "block";
}

let PassOnceDone = false;

function onthouden() {
  if (PassOnceDone) {
    document.getElementById('ontBut').style.backgroundColor = "white";
    PassOnceDone = false;
  } else {
    document.getElementById('ontBut').style.backgroundColor = "#8AAEFB";
    PassOnceDone = true;
  }

}
let nextPageLogin1 = false;
let nextPageLogin2 = false;

function Control() {
  if (!document.getElementById('inputUser').value) {
    document.getElementById('loginLineU').style.backgroundColor = "#FF8C8C";
    document.getElementById('inputUser').classList.add('placeHolder');
  } else {
    document.getElementById('loginLineU').style.backgroundColor = "#8AAEFB";
    document.getElementById('inputUser').classList.remove('placeHolder');
    nextPageLogin1 = true;
  }

  if (!document.getElementById('inputPass').value) {
    document.getElementById('loginLineP').style.backgroundColor = "#FF8C8C";
    document.getElementById('inputPass').classList.add('placeHolder');
  } else {
    document.getElementById('loginLineP').style.backgroundColor = "#8AAEFB";
    document.getElementById('inputPass').classList.remove('placeHolder');
    nextPageLogin2 = true;
  }

  if (nextPageLogin1 && nextPageLogin2) {
    document.getElementById('Aanmelden').style.display = "none";
    document.getElementById('selectPersoon').style.display = "block";
  }
}

function selectPer() {
  window.location.href = "ToDo.html";
}

function wwForgot() {
  document.getElementById('Aanmelden').style.display = "none";
  document.getElementById('selectPersoon').style.display = "none";
  document.getElementById('WWforgot').style.display = "block";
}


function ControlE() {
  if (!document.getElementById('inputmail').value) {
    document.getElementById('loginLineE').style.backgroundColor = "#FF8C8C";
    document.getElementById('inputmail').classList.add('placeHolder');
    document.getElementById('MailSend').style.color = "white";
  } else {
    document.getElementById('loginLineE').style.backgroundColor = "#8AAEFB";
    document.getElementById('inputmail').classList.remove('placeHolder');
    document.getElementById('MailSend').style.color = "#30E35F";
  }

}

function wwForgotBack() {
  document.getElementById('Aanmelden').style.display = "block";
  document.getElementById('selectPersoon').style.display = "none";
  document.getElementById('WWforgot').style.display = "none";
  document.getElementById('MailSend').style.color = "white";
}

function selectTask() {
  window.location.href = "Task.html";
}

function logOut() {
  window.location.href = "index.html";
}

function GoDay() {
  window.location.href = "ToDo.html";
}

function GoWeek() {
  window.location.href = "ToDoWeek.html";
}

function GoMonth() {
  window.location.href = "ToDoMonth.html";
}

function overzicht() {
  window.location.href = "ToDo.html";
}

function paniek() {

}

let task = 1;
let timerS = 20;
let timerM = 0;

function verder() {
  task++;
  if (task > 3) {
    complete();
  }else {
    whatTask();
  }
}

function terug() {
  task--;
  whatTask();
}

function whatTask() {
  if (task < 1) {
    task = 1;
  }
  if (task > 3) {
    task = 3;
  }


  if (task == 2) {
    timerS = 30;
    timerM = 0;
    Second = timerS + timerM * 60;
    document.getElementById("TaskText").innerHTML = "<h3>doe je tandpasta op je tandenborstel</h3>";
  } else if (task == 3) {
    timerS = 5;
    timerM = 2;
    Second = timerS + timerM * 60;
    document.getElementById("TaskText").innerHTML = "<h3>poets je tanden</h3>";
  } else {
    timerS = 20;
    timerM = 0;
    Second = timerS + timerM * 60;
    document.getElementById("TaskText").innerHTML = "<h3>maak je tandenborstel nat</h3>";
  }
  s = timerS;
  m = timerM;
}

function TaskTimer() {
  time();
}

let s = timerS;
let m = timerM;
let Second = timerS + timerM * 60;

function time() {
  if (s != 0) {
    s--;
    Second--;
    if (s == 0 && m != 0) {
      s = 59;
      m--;
    }
    s = checkTime(s);
    document.getElementById("TaskTimerNumber").innerHTML = "0" + m + ":" + s;
    TotalTime = timerS + timerM * 60;
    bar = 100 - Second / TotalTime * 100;
    document.getElementById("TaskTimerBarLine").style.width = bar + "%";
    setTimeout(time, 1000);
  } else {
    verder();
    time();
  }
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  };
  return i;
}

function complete() {
  window.location.href = "Completed.html";

}

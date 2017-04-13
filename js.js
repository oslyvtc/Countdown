function id(a){
	return document.getElementById(a)
};

var sec,hours, minutes, seconds, interval

function num(a){
	return !isNaN(parseFloat(a)) && isFinite(a)
};

function run(){
	if(num(sec)) {
		var seco = sec;
		hours = Math.floor(sec / 3600);
		seco %= 3600;
		minutes = Math.floor(seco / 60);
		seconds = seco % 60
	};
	if (hours < 10) {
		hours = '0' + hours;
	};
	if (minutes < 10) {
		minutes = '0' + minutes;
	};
	if (seconds < 10) {
		seconds = '0' + seconds;
	};
	id('result').innerHTML = `${hours}:${minutes}:${seconds}`

};

id('set').addEventListener('click', function(){
	sec = +prompt("Enter seconds",'')
	run()
})

var executed = false;

function f(){
  return function () {
    if (!executed) {
      executed = true;
			interval = setInterval(function(){
				sec -= 1;
				run();
				if (sec == 0) {
					clearInterval(interval);
				};
			},1000);
    };
  };
};

id('start').addEventListener('click', f());


id('stop').addEventListener('click', function(){
	clearInterval(interval);
	executed = false;
})

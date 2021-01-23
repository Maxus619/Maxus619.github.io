var timers = [
	[ "Дембель Сани", "Dec 05, 2021 09:00:00" ],
	[ "Дембель Карима", "June 03, 2021 09:00:00" ]
];

function timerTick() {
	timers.forEach((element, index) => {
		var currentDate = new Date().getTime();
		var endDate = new Date(element[1]);

		var diff = endDate - currentDate;

		var days = Math.floor(diff / (1000 * 60 * 60 * 24));
		var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((diff % (1000 * 60)) / 1000);

		var div = `
			<div class="countdown">
				<div class="countdown-title">${element[0]}</div>
				<div class="countdown-number">
					<span class="days countdown-time">${days}</span>
					<span class="countdown-text">Дней</span>
				</div>
				<div class="countdown-number">
					<span class="hours countdown-time">${hours}</span>
					<span class="countdown-text">Часов</span>
					</div>
				<div class="countdown-number">
					<span class="minutes countdown-time">${minutes}</span>
					<span class="countdown-text">Минут</span>
				</div>
				<div class="countdown-number">
					<span class="seconds countdown-time">${seconds}</span>
					<span class="countdown-text">Секунд</span>
				</div>
			</div>
			<br>
		`;

		if (index == 0) {
			if (diff > 0)
				document.getElementById("placeholder").innerHTML = div;
			else
				document.getElementById("placeholder").innerHTML = `<div class="countdown-title">${element[0]} - Случилось!</div>`;
		}
		else {
			if (diff > 0)
				document.getElementById("placeholder").insertAdjacentHTML('beforeend', div);
			else
				document.getElementById("placeholder").insertAdjacentHTML('beforeend', element[0] + `<div class="countdown-title">${element[0]} - Случилось!</div>`);
		}
	});
};

document.addEventListener("DOMContentLoaded", function(){
    timerTick();
    let x = setInterval(timerTick, 1000);
});

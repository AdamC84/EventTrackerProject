window.addEventListener('load', function(e) {
	console.log('document loaded');
	console.log('loaded');
	init();
});

function init() {
	console.log("working");
	var tds = document.getElementsByTagName('td');
	loadEvents();
	document.addEventForm.add.addEventListener('click', function(event) {
		console.log('working');
		event.preventDefault();
		addEvent();
	});
	for (let i = 0; i < tds.length; i++) {
		console.log(tds[i]);
		tds[i].addEventListener('click', function(event) {
			console.log('working');
			event.preventDefault();
			event.target
		});
	}
}
function loadEvents() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/events');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			var data = JSON.parse(xhr.responseText);
			displayEvents(data);
			// console.log(data);
			console.log(xhr.responseText);

		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			div.textContent = xhr.responseText;
		}
	};
	xhr.send(null);
}
function addEvent() {
	console.log("working");
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/event', true);

	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) {
				var data = JSON.parse(xhr.responseText);
				// console.log(data);
				displayEvents(data);
			} else {
				console.log("POST request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
		;
	}
	var event = {

		category : document.addEventForm.category.value,
		fName : document.addEventForm.fName.value,
		lName : document.addEventForm.lName.value,
		description : document.addEventForm.description.value,
		date : document.addEventForm.date.value
	};
	console.log(event);
	xhr.send(JSON.stringify(event));

	document.addEventForm.reset();
}
function displayEvents(data) {
	var eventDiv = document.getElementById('loadedEvents');
	var tbody = document.createElement('tbody');
	var tr = document.createElement('tr');
	var table = document.createElement('table');
	eventDiv.appendChild(table);
	table.appendChild(tbody);
	tbody.appendChild(tr);
	var array1 = [ 'category', 'fName', 'lName', 'description', 'date' ];
	for (let i = 0; i < data.length; i++) {
		for (let j = 0; j < array1.length; j++) {
			var td = document.createElement('td');
			tr.appendChild(td);
			// console.log(data[i]);
			td.textContent = data[i][array1[j]];

		}
	}
}
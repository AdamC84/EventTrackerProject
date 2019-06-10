window.addEventListener('load', function(e) {
	console.log('document loaded');
	console.log('loaded');
	console.log('loaded again');
	init();
});

function init() {
	console.log("working");
	loadEvents();
	document.addEventForm.add.addEventListener('click', function(event) {
		console.log('working');
		event.preventDefault();
		addEvent();
	});
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
function getEventById(id) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/event/' + id);
	xhr.onreadystatechange = function getId() {
		if (xhr.readyState === 4 && xhr.status < 400) {
			data = JSON.parse(xhr.responseText);
			console.log(data);
			console.log(xhr.responseText);
			return data;

		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			div.textContent = xhr.responseText;
		}
	};
	xhr.send(null);
	var obj = getId();
	return obj;
}
var obj1 = getEventById(1);
console.log(obj1);
function displayEvents(data) {

	var eventDiv = document.getElementById('loadedEvents');
	var tbody = document.createElement('tbody');
	var table = document.createElement('table');
	eventDiv.appendChild(table);
	table.appendChild(tbody);
	for (let i = 0; i < data.length; i++) {
		var tr = document.createElement('tr');
		tr.value = data[i].id;
		tbody.appendChild(tr);
		tr.textContent = data[i].category;
		var trs = document.getElementsByTagName('tr');
//		var obj = getEventById(1);
//		console.log(obj);
		trs[i].addEventListener('click', function(event) {
			console.log(event.target.value);
			console.log(getEventById(event.target.value));
			for (let k = 0; k < data.length; k++) {
				var td = document.createElement('td');
				tr.appendChild(td);
			}
			// td.textContent = data[i][array1[j]];

		});
	}
}
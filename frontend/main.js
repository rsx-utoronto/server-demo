// equivalent of the react version in vanilla js

state = {led_value: -1, pot_value: -1}

function getNewValues() {
	console.log('getting new val')
	$.get({
        url: "http://localhost:8080/led/value",
    }).done(data => state.led_value = data.value)
    $.get({
        url: "http://localhost:8080/pot/value",
    }).done(data => state.pot_value = data.value)
}

function setNewValue() {
	console.log('setting new val')
    $.ajax({
        type: 'PUT',
        url: "http://localhost:8080/led/value/" + (event.target.value || "0")
    })
    .done(data => {
    	state.led_value = data.value
    	updateDOM();
    });
}

function updateDOM() {
	console.log('updating dom')
	$('#led_val').text(state.led_value);
	$('#pot_val').text(state.pot_value);
}

window.setInterval(updateDOM, 1000);
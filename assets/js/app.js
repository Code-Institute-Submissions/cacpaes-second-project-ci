const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

/*listen the event click to change css class*/
hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
//end of credit Hamburguer menu


/*change the color of the menu on scrolling to other sections below*/
document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#05303e';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});
//end of credit responsive nav bar

/*Foreign exchange rates API with currency conversion
Exchange rates API is a free service for current and historical foreign exchange rates published by the European Central Bank
https://exchangeratesapi.io/ */
const baseExchangeApiURL = "https://api.exchangeratesapi.io/latest?base=EUR&symbols=USD,BRL";

function getExchangeCurrencyData(cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseExchangeApiURL);
    xhr.send();
}

function writeCurrencyInfo() {
    var el = document.getElementById("exchange");
    el.innerHTML = "";

    getExchangeCurrencyData(function(data) {
		Object.keys(data.rates).forEach(function(key) {
			el.innerHTML += `<h2>1 ${data.base} = ${data.rates[key]} ${key} </h2>`;			
		});
		// https://stackoverflow.com/questions/33299687/how-to-convert-dd-mm-yyyy-string-into-javascript-date-object/33299764
		el.innerHTML += `<h2>last update: ${new Date(data.date).toLocaleString('en', { dateStyle: 'long' })}</h2>`;
    });
}

//execute the function responsible for Exchange rates infos on Info section 
writeCurrencyInfo();

//Secure attribute to fix the warning message about SameSite cookie in a cross-site caused by Icons8 logos;
document.cookie = "SameSite=None; Secure";
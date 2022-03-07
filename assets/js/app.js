const menu = document.querySelector('.header .nav-bar .nav-list .menu');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

/*listen the event click to change css class*/
menu.addEventListener('click', () => {
	menu.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		menu.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
//end of credit menu


/*change the color of the menu on scrolling to other sections below*/
document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#EDC7CA';
	} else {
		header.style.backgroundColor = '#84CEE3';
	}
});
//end of credit responsive nav bar


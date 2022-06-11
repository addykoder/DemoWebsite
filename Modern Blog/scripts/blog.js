let menu_button = document.querySelector('#menu-button');
let navigation_menu = document.querySelector('.navigation-container');
let main_content = document.querySelector('main');
let nav = document.querySelector('nav');

menu_button.addEventListener('click', () => {
	// If menu is closed, Opening the menu by setting visible to true
	if (nav.getAttribute('visible') === 'false') {
		nav.setAttribute('visible', 'true');
		menu_button.innerHTML = 'close';
	}
	// If menu is open, Closing the menu by setting visible to false
	else {
		nav.setAttribute('visible', 'false');
		menu_button.innerHTML = 'menu';
	}
});

main_content.addEventListener('click', () => {
	if (nav.getAttribute('visible') === 'true') {
		nav.setAttribute('visible', 'false');
		menu_button.innerHTML = 'menu';
	}
});
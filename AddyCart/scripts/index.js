
let cart_active_state = false;

document.getElementById('menu-button').addEventListener('click', () => {
	document.getElementById('hamburger').style.display = 'flex';	
});

document.getElementById('close-button').addEventListener('click', () => {
	document.getElementById('hamburger').style.display = 'none';	
});

document.getElementById('your-cart-button').addEventListener('click', () => {
	if (cart_active_state) {
		document.getElementById('cart-wrapper').style.top = '100vh';
		cart_active_state = !cart_active_state;
	}
	else {
		document.getElementById('cart-wrapper').style.top = '0rem';
		cart_active_state = !cart_active_state;
	}

});

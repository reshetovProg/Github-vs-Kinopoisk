export function loginWindow() { }

console.log("log");
const container = document.querySelector('.container-autorization');
const esc = container.querySelector('.esc');
esc.addEventListener('click', () => {

	container.style.display = 'none';
	autoForm.style.display = 'block';
	registerForm.style.display = 'none';

})

const signInMenu = document.querySelector('.menu__sign-in');
signInMenu.addEventListener('click', () => {
	console.log("push");
	container.style.display = 'flex';
})

const signUp = document.querySelector('.signUp');

const autoForm = document.querySelector('#auto');

const registerForm = document.querySelector('#registration');
signUp.addEventListener('click', () => {
	autoForm.style.display = 'none';
	registerForm.style.display = 'block';
	console.log("pppp");
})

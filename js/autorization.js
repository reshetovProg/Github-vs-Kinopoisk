export function loginWindow() { }

console.log("log");
const container = document.querySelector('.container-autorization');
const esc = container.querySelector('.esc');
esc.addEventListener('click', () => {
	container.style.display = 'none';
})

const signIn = document.querySelector('.menu__sign-in');
console.log(signIn);
signIn.addEventListener('click', () => {
	console.log("push");
	container.style.display = 'flex';
})


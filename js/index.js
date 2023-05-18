
function createScrollElement(cinema) {
	const scrollElement = document.createElement('div');
	scrollElement.classList.add('scroll-element');
	const status = document.createElement('div');
	status.classList.add('status');
	scrollElement.appendChild(status);
	const image = document.createElement('img');
	image.setAttribute('src', cinema.pathImg);
	scrollElement.appendChild(image);
	return scrollElement;
}


const scrollContainer = document.querySelector('.scroll-container');


let array = fetch('./json/cinema.json').then(r => r.text()).then(
	r => {
		data = JSON.parse(r);
		foo(data);
	}
);

function foo(data) {
	data.forEach(element => {
		scrollContainer.appendChild(createScrollElement(element));
	});

}

const btn = document.querySelectorAll('.btn-scroll');

btn[0].onclick = () => {
	scrollContainer.scrollBy({ left: -300, top: 0, behavior: 'smooth' });
}
btn[1].onclick = () => {
	scrollContainer.scrollBy({ left: 300, top: 0, behavior: 'smooth' });
}


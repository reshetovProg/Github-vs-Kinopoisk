
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

const contentScroll = document.querySelectorAll('.content-scroll');





let array = fetch('./json/cinema.json').then(r => r.text()).then(
	r => {
		data = JSON.parse(r);
		foo(data);
	}
);

function foo(data) {
	data.forEach(element => {
		let scrollTitle;
		let scrollContainer;
		contentScroll.forEach((scroll) => {
			scrollTitle = scroll.querySelector('.scroll-title');
			scrollContainer = scroll.querySelector('.scroll-container');
			let createEl = createScrollElement(element);
			if ((element.category).includes(scrollTitle.textContent)) {
				scrollContainer.appendChild(createEl);
			}


		})

	});

}

const btn = document.querySelectorAll('.btn-scroll');

btn[0].onclick = () => {
	scrollContainer.scrollBy({ left: -300, top: 0, behavior: 'smooth' });
}
btn[1].onclick = () => {
	scrollContainer.scrollBy({ left: 300, top: 0, behavior: 'smooth' });
}


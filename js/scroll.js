export function readJSON() {

	let url = 'http://185.252.146.227:8080/load';
	// let response = fetch(url);
	// let commits = response.json();
	// let data = JSON.parse(r);
	// foo(commits);

	let array = fetch(url).then(r => r.text()).then(
		r => {
			let data = JSON.parse(r);
			foo(data);
		}
	);
}

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

btn.forEach((el) => {
	el.addEventListener('click', () => {
		let parent = el.parentElement;
		console.log(el.textContent)
		if (el.textContent == '<') {
			parent.querySelector('.scroll-container').scrollBy({ left: -300, top: 0, behavior: 'smooth' });
		}
		else if (el.textContent == '>') {
			parent.querySelector('.scroll-container').scrollBy({ left: 300, top: 0, behavior: 'smooth' });
		}

	})
})

const anchors = document.querySelectorAll('a[href*="#"]');
for (const anchor of anchors) {
	anchor.addEventListener('click', (el) => {
		event.preventDefault();
		const blockID = anchor.getAttribute('href');
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "nearest"
		})
	})

}

export function createElementWithClasses(tag, className) {
	const el = document.createElement(tag);
	el.classList.add(...className.split(' '));
	return el;
}

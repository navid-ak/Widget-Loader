import hello_world from './components/hello-world.svelte';
import image from './components/image.svelte';


function showAds() {
	let allDivElements = Array.prototype.slice.call(document.getElementsByTagName('div'), 0);

	let regexp = /^widget-id-/;
	allDivElements.forEach(element => {
		if (regexp.test(element.id)) {
			if (element.getAttribute("data-widget-type") == "image") {
				new image({
					target: element
				});
			} else if (element.getAttribute("data-widget-type") == "hello-world") {
				var name;
				if (element.getAttribute("data-widget-name")) {
					name = element.getAttribute("data-widget-name");
				} else {
					name = 'world'
				}
				new hello_world({
					target: element,
					props: {
						name: name
					}
				})
			}
		}
	})
}


if(localStorage.getItem('manualConfig') == 'false' || !localStorage.getItem('manualConfig')) {
	showAds();
} else {
	if(localStorage.getItem('showWidget') == 'true')
		showAds();
}


export function configManually() {

	if(!localStorage.getItem('manualConfig'))
		window.localStorage.setItem('manualConfig', 'false');
	
	if(!localStorage.getItem('showWidget'))
		window.localStorage.setItem('showWidget', 'false');

}

export function toggleManualConfig(){
	let temp;
	if(localStorage.getItem('manualConfig') == 'true')
		temp = false;
	else
		temp = true;

	window.localStorage.removeItem('manualConfig');
	window.localStorage.setItem('manualConfig', temp);
}

export function toggleShowWidget(){
	let temp;
	if(localStorage.getItem('showWidget') == 'true')
		temp = false;
	else
		temp = true;

	window.localStorage.removeItem('showWidget');
	window.localStorage.setItem('showWidget', temp);
}
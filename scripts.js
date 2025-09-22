const offlineText = "offline";
const offlinePicPath = "circle_red.png";
const onlinePicPath = "circle_green.png";

const IP = null;


function onLoad()
{
	let ipText = document.getElementById("IP");
	
	const existingFavicon = document.querySelector("link[rel*='icon']");
	if (existingFavicon)
		existingFavicon.remove();
	
	const favicon = document.createElement("link");
	favicon.rel = "icon";
	favicon.type = "image/png";
	
	if (IP == null)
	{
		ipText.innerHTML = offlineText;
		favicon.href = offlinePicPath;
	}
	else
	{
		ipText.innerHTML = IP;
		favicon.href = onlinePicPath;
	}
	
	document.head.appendChild(favicon);
}

function updateFavicon(variable) {
	// Remove existing favicon link if it exists
	const existingFavicon = document.querySelector("link[rel*='icon']");
	if (existingFavicon) {
		existingFavicon.remove();
	}
	
	// Create new favicon link element
	const favicon = document.createElement('link');
	favicon.rel = 'icon';
	favicon.type = 'image/svg+xml';
	
	// Set favicon based on variable state
	if (variable === null) {
		// Red circle SVG
		favicon.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="red"/></svg>';
	} else {
		// Green circle SVG
		favicon.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="green"/></svg>';
	}
	
	// Add the new favicon to the document head
	document.head.appendChild(favicon);
}

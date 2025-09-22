const offlineText = "offline";
const offlinePicPath = "circle_red.png";
const onlinePicPath = "circle_green.png";

const IP = null;//"5.tcp.eu.ngrok.io:11318";


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

	console.log(ipText.innerHTML);
	console.log("IP == null: " + String(IP == null));
}

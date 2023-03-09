const keySelector = document.querySelector("#wrdlst1")
const keyInfo = document.querySelector("#selected-key")
const optionBlock = document.querySelector(".option")


getStorage()

optionBlock.onclick = hideOption

keySelector.onkeydown = function(e){
	setStorage(e)
	hideOption()
	getStorage()
};

function setStorage(e){
	chrome.storage.local.set({'ecode': e.code});
}

function getStorage() {
	chrome.storage.local.get(['ecode']).then((result)=>{
		keyInfo.innerHTML = result.ecode || 'KeyV'
	}) 
}


function hideOption () {
	keySelector.classList.toggle("hiden")
}
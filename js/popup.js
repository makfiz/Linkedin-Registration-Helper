const keySelector = document.querySelector("#wrdlst1")
const keyInfo = document.querySelector("#selected-key")

keySelector.onkeydown = function(e){
	keySelector.value = e.key
	chrome.storage.local.set({'ekey': e.key, 'ecode': e.code});
	
};

chrome.storage.local.get(['ecode']).then((result)=>{
	keyInfo.innerHTML = result.ecode || 'KeyV'
}) 
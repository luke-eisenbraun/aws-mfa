chrome.storage.sync.get('signin', function(storageResult){
	if(storageResult && storageResult['signin']){
		chrome.browserAction.onClicked.addListener(function (clicked){
			window.open(storageResult['signin']);
		});
	}
});
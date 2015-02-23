(function(){
	var key = 'signin';
	chrome.storage.sync.get(key, function(storageResult){
		var signinEl = document.getElementById('signin');
		if(storageResult[key]){
			signinEl.value = storageResult[key];
		}
		var saveEl = document.getElementById('save');
		signinEl.onchange = function(e) {
			chrome.storage.sync.set({'signin':e.target.value}, function(){
				saveEl.innerHTML = 'Saved: '+new Date().toLocaleTimeString();
			});
		};
	});
})();
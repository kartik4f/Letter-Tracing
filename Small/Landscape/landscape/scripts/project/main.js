

let json_data;
	
let mainData = {};
runOnStartup(async runtime =>
{
runtime.globalVars.BrowserName = fnBrowserDetect();
	if(window.data){
		mainData = window.data;
		window.data = undefined;
		
		runtime.globalVars.JsonDataStr = JSON.stringify(mainData);
		const lockedData = mainData.LockedData;
// 		console.log(mainData.balloonClicked)
		if(mainData.balloonClicked==undefined) runtime.globalVars.IS_BALLOON_CLICKED = false; 
		else runtime.globalVars.IS_BALLOON_CLICKED = mainData.balloonClicked;
		mainData = undefined;	
		runtime.globalVars.IS_ANALYTICS = true;
		runtime.globalVars.IS_TESTING = false;	
		
		
		
		if(lockedData){
			console.log("lockedData: "+lockedData.header);	
			runtime.callFunction("SetSubscriptionDialogTexts", lockedData.header+"", lockedData.body+"", lockedData.footer+"");		
		}
		else{
			const lockedData = {"header": "Hello!", "body":"Subscribe to unlock all the letter and numbers","footer": ""};
			runtime.callFunction("SetSubscriptionDialogTexts", lockedData.header+"", lockedData.body+"", lockedData.footer+"");		
		}	
	}
	else{
	console.log("window.data is null");
	
		let langCode = await getLangCode();
		mainData = await runtime.assets.fetchJson(langCode+".json");
		console.log("window.data is null", mainData);
		runtime.globalVars.JsonDataStr = JSON.stringify(mainData);
		runtime.globalVars.IS_ANALYTICS = true;
		runtime.globalVars.IS_TESTING = false;	
		if(mainData.balloonClicked==undefined) runtime.globalVars.IS_BALLOON_CLICKED = false; 
		else runtime.globalVars.IS_BALLOON_CLICKED = mainData.balloonClicked;
		const lockedData = mainData.LockedData;
		console.log("header:"+lockedData.header);
		mainData = undefined;
		window.data = undefined;
		if(lockedData){
			runtime.callFunction("SetSubscriptionDialogTexts", lockedData.header+"", lockedData.body+"", lockedData.footer+"");	
		}
		else{
			const lockedData = {"header": "Hello!", "body":"Subscribe to unlock all the letter and numbers","footer": ""};
			runtime.callFunction("SetSubscriptionDialogTexts", lockedData.header+"", lockedData.body+"", lockedData.footer+"");	
		}
	}




	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{

	/* Code to run just before 'On start of layout' on
	the first layout. Loading has finished and initial
	instances are created and available to use here. */
	
	runtime.addEventListener("tick", () => Tick(runtime));
}


//
function Tick(runtime)
{
	// Code to run every tick
}

async function getLangCode(){
	let langCode = prompt("Please enter your language code:", "en_gb");
		  if (langCode == null || langCode == "") {
			langCode = "en_gb"
			
		  }
	return langCode
}

async function fetchJsonData(runtime, name ){
	let jsonData;
	jsonData =  await runtime.assets.fetchJson(name)
	return jsonData;
	}
	
function fnBrowserDetect(){

	let userAgent = navigator.userAgent;
	let browserName;

	if(userAgent.match(/chrome|chromium|crios/i)){
		browserName = "chrome";
	}else if(userAgent.match(/firefox|fxios/i)){
		browserName = "firefox";
	}  else if(userAgent.match(/safari/i)){
		browserName = "safari";
	}else if(userAgent.match(/opr\//i)){
		browserName = "opera";
	} else if(userAgent.match(/edg/i)){
		browserName = "edge";
	}else{
		browserName="No browser detection";
	}
	console.log("@@@@@:: "+browserName)
	return browserName; 
  }

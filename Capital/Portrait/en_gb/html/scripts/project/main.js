// Import any other script files here, e.g.:
// import AudioManager from "./audioManager.js";
// let audioManager = null;
//

// References to loaded audio files as global variables
// let audios = []

//creator's Name: SKIDOS
// Developer's Name: Kartik Singh
// import * as lzs from "https://cdnjs.cloudflare.com/ajax/libs/lz-string/1.4.4/lz-string.min.js";

let loadLocal = true;
let json_data;
let IS_RELOADING = false;
let mainData = {};
let Muted = false;
runOnStartup(async (runtime) => {
  window.audioData = runtime.objects.Audio.getFirstInstance();
  // Code to run on the loading screen.
  // Note layouts, objects etc. are not yet available.
  // 	document.addEventListener("unity data", (e) => {
  // 		console.log("The unity data event is triggered");
  // 		runtime.callFunction("OnUpdateData", [JSON.stringify(e.detail.data)]);
  // 	});
  // 	document.addEventListener("mascot anim", () =>{
  // 		console.log("The mascot event was triggered");
  // 		runtime.callFunction("ShowMascotAnim")
  // 	})
  // 				window.runtime_ = runtime;

  runtime.globalVars.BrowserName = fnBrowserDetect();
  if (window.data) {
    mainData = window.data;
    window.data = undefined;
    runtime.globalVars.UNIWEBVIEW_SCHEMA = 'skidoswebview';
    runtime.globalVars.JsonDataStr = JSON.stringify(mainData);
    const lockedData = mainData.LockedData;
    // 		console.log(mainData.balloonClicked)
    if (mainData.balloonClicked == undefined)
      runtime.globalVars.IS_BALLOON_CLICKED = false;
    else runtime.globalVars.IS_BALLOON_CLICKED = mainData.balloonClicked;
    mainData = undefined;
    runtime.globalVars.IS_ANALYTICS = false;
    runtime.globalVars.IS_TESTING = true;

    if (lockedData) {
      console.log('lockedData: ' + lockedData.header);
      runtime.callFunction(
        'SetSubscriptionDialogTexts',
        lockedData.header + '',
        lockedData.body + '',
        lockedData.footer + ''
      );
    } else {
      const lockedData = {
        header: 'Hello!',
        body: 'Subscribe to unlock all the letter and numbers',
        footer: '',
      };
      runtime.callFunction(
        'SetSubscriptionDialogTexts',
        lockedData.header + '',
        lockedData.body + '',
        lockedData.footer + ''
      );
    }
  } else {
    console.log('window.data is null');

    let localData = localStorage.getItem('tracing-data');
    if (localData && loadLocal) {
      console.log('Reloading app on resume with localstorage');
      IS_RELOADING = true;
      mainData = JSON.parse(localData);
      runtime.globalVars.IS_ANALYTICS = false;
      runtime.globalVars.IS_TESTING = true;
      setTimeout(() => {
        localStorage.clear();
      }, 100);
    } else {
      // 			let langCode = await getLangCode();
      mainData = await runtime.assets.fetchJson('en_gb.json');
      runtime.globalVars.IS_ANALYTICS = false;
      runtime.globalVars.IS_TESTING = true;
    }
    runtime.globalVars.JsonDataStr = JSON.stringify(mainData);
    console.log(mainData);

    // 		runtime.globalVars.IS_ANALYTICS = false;
    // 		runtime.globalVars.IS_TESTING = false;

    if (mainData.balloonClicked == undefined)
      runtime.globalVars.IS_BALLOON_CLICKED = false;
    else runtime.globalVars.IS_BALLOON_CLICKED = mainData.balloonClicked;
    const lockedData = mainData.LockedData;
    console.log('header:' + lockedData.header);
    mainData = undefined;
    window.data = undefined;
    if (lockedData) {
      runtime.callFunction(
        'SetSubscriptionDialogTexts',
        lockedData.header + '',
        lockedData.body + '',
        lockedData.footer + ''
      );
    } else {
      const lockedData = {
        header: 'Hello!',
        body: 'Subscribe to unlock all the letter and numbers',
        footer: '',
      };
      runtime.callFunction(
        'SetSubscriptionDialogTexts',
        lockedData.header + '',
        lockedData.body + '',
        lockedData.footer + ''
      );
    }
    if (runtime.globalVars.IS_ANALYTICS && IS_RELOADING) {
      console.log('send event on reload to Unity');
      window.location.href = 'skidoswebview://pageState?reloading=true';
    }
  }

  runtime.addEventListener('beforeprojectstart', () =>
    OnBeforeProjectStart(runtime)
  );
});

async function OnBeforeProjectStart(runtime) {
  /* Code to run just before 'On start of layout' on
	the first layout. Loading has finished and initial
	instances are created and available to use here. */

  runtime.addEventListener('tick', () => Tick(runtime));
}

//
function Tick(runtime) {
  // Code to run every tick
}

async function getLangCode() {
  let langCode = prompt('Please enter your language code:', 'en_gb');
  if (langCode == null || langCode == '') {
    langCode = 'en_gb';
  }
  return langCode;
}

async function fetchJsonData(runtime, name) {
  let jsonData;
  jsonData = await runtime.assets.fetchJson(name);
  return jsonData;
}

function fnBrowserDetect() {
  let userAgent = navigator.userAgent;
  let browserName;

  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = 'chrome';
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName = 'firefox';
  } else if (userAgent.match(/safari/i)) {
    browserName = 'safari';
  } else if (userAgent.match(/opr\//i)) {
    browserName = 'opera';
  } else if (userAgent.match(/edg/i)) {
    browserName = 'edge';
  } else {
    browserName = 'No browser detection';
  }
  console.log('@@@@@:: ' + browserName);
  return browserName;
}

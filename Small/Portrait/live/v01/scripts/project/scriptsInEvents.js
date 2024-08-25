import * as Main from "./main.js";



const scriptsInEvents = {

		async Es_loader_Event1_Act5(runtime, localVars)
		{
			document.body.style.backgroundColor =  "rgb(158, 232, 220)";
			
			//fixed after 2nd build sent
			document.getElementsByTagName("html")[0].style.background =  "rgb(158, 232, 220)";
		},

		async Es_home_Event1_Act2(runtime, localVars)
		{
			document.body.style.backgroundColor =  "rgb(158, 232, 220)";
			document.getElementsByTagName("html")[0].style.background =  "rgb(158, 232, 220)";
		},

		async Es_home_Event3_Act4(runtime, localVars)
		{
			if(!runtime.globalVars.IS_ANALYTICS) return;
			const data =runtime.objects.EventNames.getFirstInstance().getDataMap();
			
			// alert(data.get("278"));
			window.location.href = "skidoswebview://SkidosTracingPageLanded?is_reached=1&EventName="+data.get("278");
			
			
		},

		async Es_common_Event28_Act1(runtime, localVars)
		{
			// audiom.audioContext.suspend();
			// Main.setAudioContextState("suspend")
			runtime.callFunction("SendToUnityOnSuspend", 0)
		},

		async Es_common_Event30_Act1(runtime, localVars)
		{
			// audiom.audioContext.resume();
			// Main.setAudioContextState("resume")
			runtime.callFunction("SendToUnityOnSuspend", 1)
		},

		async Es_alphabetselection_Event1_Act2(runtime, localVars)
		{
			document.body.style.backgroundColor =  "rgb(0, 198, 163)";
			document.getElementsByTagName("html")[0].style.background = "rgb(0, 198, 163)";
			
		},

		async Es_numberselection_Event1_Act3(runtime, localVars)
		{
			document.body.style.backgroundColor =  "rgb(0, 198, 163)";
			document.getElementsByTagName("html")[0].style.background = "rgb(0, 198, 163)";
		},

		async Es_tracing_Event1_Act1(runtime, localVars)
		{
			document.body.style.backgroundColor =  "rgb(158, 232, 220)";
			document.getElementsByTagName("html")[0].style.background =  "rgb(158, 232, 220)";
		},

		async Es_analytics_Event3_Act1(runtime, localVars)
		{
			
			console.log(runtime.globalVars.UNIWEBVIEW_SCHEMA +"://SendAnalytics?"+localVars["data"] )
			window.location.href = runtime.globalVars.UNIWEBVIEW_SCHEMA +"://SendAnalytics?"+localVars["data"];
			
		},

		async Es_analytics_Event4_Act1(runtime, localVars)
		{
			let jsonData = {};
			jsonData.subject = localVars.subject;
			jsonData.sub_subject = localVars.sub_subject;
			jsonData.character = localVars.character;
			
			
			console.log(runtime.globalVars.UNIWEBVIEW_SCHEMA +"://CallSkidosAPI?subject="+localVars.subject+"&sub_subject="+localVars.sub_subject+"&character="+localVars.character);
			window.location.href = runtime.globalVars.UNIWEBVIEW_SCHEMA +"://CallSkidosAPI?subject="+localVars.subject+"&sub_subject="+localVars.sub_subject+"&character="+localVars.character;
			
		},

		async Es_analytics_Event6_Act1(runtime, localVars)
		{
			
			let href = runtime.globalVars.UNIWEBVIEW_SCHEMA +"://ExitFromWebView?exit=1";
			
			if(localVars.data!=undefined && localVars.data!=""){
			
			href += "&"+localVars.data;
			}
			console.log(href);
			window.location.href = href; 
			
			
		},

		async Es_analytics_Event8_Act1(runtime, localVars)
		{
			let href = runtime.globalVars.UNIWEBVIEW_SCHEMA +"://ShowSubscription?opensubscription=1";
			if(localVars.data!=undefined && localVars.data!=""){
			
			href += "&"+localVars.data;
			}
			console.log(href);
			window.location.href = href; 
			
			
			
		},

		async Es_analytics_Event9_Act1(runtime, localVars)
		{
			let href = runtime.globalVars.UNIWEBVIEW_SCHEMA+"://PlayUnitySound?play=1";
			
			if(localVars.data!=undefined && localVars.data!=""){
			
			href += "&"+localVars.data;
			}
			console.log(href);
			window.location.href = href; 
		},

		async Es_analytics_Event14_Act1(runtime, localVars)
		{
			
			console.log(runtime.globalVars.UNIWEBVIEW_SCHEMA +"skidoswebview://pagevisibility?isvisible="+localVars.is_page_suspended);
			
			
			
			window.location.href = runtime.globalVars.UNIWEBVIEW_SCHEMA +"skidoswebview://pagevisibility?isvisible="+localVars.is_page_suspended;
			
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;


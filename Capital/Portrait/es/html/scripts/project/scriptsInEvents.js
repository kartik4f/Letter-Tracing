import * as Main from "./main.js";



const scriptsInEvents = {

	async Es_loader_Event1_Act5(runtime, localVars)
	{
		let jsonData = runtime.objects.JsonEntryData.getFirstInstance().getJsonDataCopy();
		
		runtime.globalVars.SubjectsCount= Object.keys(jsonData.Subjects).length
	},

	async Es_home_Event3_Act4(runtime, localVars)
	{
		if(!runtime.globalVars.IS_ANALYTICS) return;
		const data =runtime.objects.EventNames.getFirstInstance().getDataMap();
		
		// alert(data.get("278"));
		window.location.href = "skidoswebview://SkidosTracingPageLanded?is_reached=1&EventName="+data.get("278")+"&webmodule="+runtime.globalVars.WebModule;;
		
		
	},

	async Es_common_Event17_Act1(runtime, localVars)
	{
		
		let returnValue = 0 ;
		
		if(localVars.letter.length == 2 && localVars.current_frame == 1){
			localVars.letter = localVars.letter.charAt(localVars.letter.length - 1);
		}
		// console.log("LETTER ::::"+localVars.letter)
		switch(localVars.letter)
		{
			case "3":
			returnValue = -25;
			break
		
			case "5":
			returnValue = 32;
			break	
			
		
			case "6":
			returnValue = 30;
			break
		
		
			case "9":
			returnValue = -25;
			break
			
			
			
			default:
			returnValue = 0;
		}
		console.log("LETTER ::::"+localVars.letter+", Angle:"+returnValue)
		runtime.setReturnValue(returnValue);
	},

	async Es_common_Event29_Act1(runtime, localVars)
	{
		
		
		let colorRGB = new Map();
		colorRGB.set("Loader", "rgb(133, 233, 216)");
		colorRGB.set("Home", "rgb(133, 233, 216)");
		
		colorRGB.set("Tracing", "rgb(0, 198, 163)");
		colorRGB.set("Alphabet Selection", "rgb(0, 198, 163)");
		colorRGB.set("Number Selection", "rgb(0, 198, 163)");
		
		
		let color = colorRGB.get(localVars.name);
		console.log("SET COLOR:====> ", color)
		document.body.style.backgroundColor = color;
		document.getElementsByTagName("html")[0].style.background =  color;
	},

	async Es_alphabetselectioncapital_Event1_Act4(runtime, localVars)
	{
		let jsonData = runtime.objects.JsonEntryData.getFirstInstance().getJsonDataCopy();
		
		runtime.globalVars.LettersCount= Object.keys(jsonData.GameData[runtime.globalVars.SubjectTypeIndex].Played).length;
	},

	async Es_numberselection_Event1_Act2(runtime, localVars)
	{
		let jsonData = runtime.objects.JsonEntryData.getFirstInstance().getJsonDataCopy();
		
		runtime.globalVars.LettersCount= Object.keys(jsonData.GameData[runtime.globalVars.SubjectTypeIndex].Played).length;
	},

	async Es_tracing_capital_Event75_Act2(runtime, localVars)
	{
		//Neucha-Regular font
					console.log(runtime.objects.ObjectNameText.getFirstInstance().fontFace);
					let letter = localVars.first_letter;
					// alert("value - "+letter);
					
					if(letter =="j" || letter =="p" || letter =="q" || letter =="g" || letter =="y"){
					localVars.padding_value = 170;
					}
					 else if(letter =="b" || letter == "d" || letter =="f" || letter =="h" || letter =="k" || letter =="l" || letter =="t" || letter =="i" ){
					// alert("value - "+letter)
					localVars.padding_value = 154;
					
					}
					else if(letter =="å" || letter =="ä"){
					localVars.padding_value = 150
					}
					else if(letter == "ö" || letter=="ñ"){
					localVars.padding_value = 150
					}
					else{
					localVars.padding_value = 162;
					}
					
	},

	async Es_analytics_Event3_Act1(runtime, localVars)
	{
		let href = runtime.globalVars.UNIWEBVIEW_SCHEMA +"://SendAnalytics?"+localVars["data"]+"&webmodule="+runtime.globalVars.WebModule;
		console.log("href = "+href);
		window.location.href = href;
		
	},

	async Es_analytics_Event4_Act1(runtime, localVars)
	{
		let jsonData = {};
		jsonData.subject = localVars.subject;
		jsonData.sub_subject = localVars.sub_subject;
		jsonData.character = localVars.character;
		
		window.location.href = runtime.globalVars.UNIWEBVIEW_SCHEMA +"://CallSkidosAPI?subject="+localVars.subject+"&sub_subject="+localVars.sub_subject+"&character="+localVars.character;
		console.log("href = "+window.location.href);
	},

	async Es_analytics_Event6_Act1(runtime, localVars)
	{
		
		let href = runtime.globalVars.UNIWEBVIEW_SCHEMA +"://ExitFromWebView?exit=1";
		
		if(localVars.data!=undefined && localVars.data!=""){
		
		href += "&"+localVars.data+"&question_attempted="+(runtime.globalVars.Question_Attempted==1 && runtime.globalVars.IS_BALLOON_CLICKED == 0?"true":"false");
		}
		runtime.globalVars.Question_Attempted = 0;
		
		href+="&webmodule="+runtime.globalVars.WebModule;
		console.log("href = "+href);
		window.location.href = href;
		
		
		
		
		
	},

	async Es_analytics_Event8_Act1(runtime, localVars)
	{
		let href = runtime.globalVars.UNIWEBVIEW_SCHEMA +"://ShowSubscription?opensubscription=1";
		if(localVars.data!=undefined && localVars.data!=""){
		
		href += "&"+localVars.data;
		}
		
		href+="&webmodule="+runtime.globalVars.WebModule;
		console.log("href = "+href);
		window.location.href = href
		
		
		
	},

	async Es_analytics_Event9_Act1(runtime, localVars)
	{
		let href = runtime.globalVars.UNIWEBVIEW_SCHEMA+"://PlayUnitySound?play=1";
		
		if(localVars.data!=undefined && localVars.data!=""){
		
		href += "&"+localVars.data;
		}
		console.log(href);
		window.location.href = href; 
		console.log("href = "+window.location.href);
	},

	async Es_analytics_Event14_Act1(runtime, localVars)
	{
		
		console.log(runtime.globalVars.UNIWEBVIEW_SCHEMA +"skidoswebview://pagevisibility?isvisible="+localVars.is_page_suspended);
		
		
		
		window.location.href = runtime.globalVars.UNIWEBVIEW_SCHEMA +"skidoswebview://pagevisibility?isvisible="+localVars.is_page_suspended;
		
	},

	async Es_alphabetselectionsmall_Event1_Act4(runtime, localVars)
	{
		let jsonData = runtime.objects.JsonEntryData.getFirstInstance().getJsonDataCopy();
		
		runtime.globalVars.LettersCount= Object.keys(jsonData.GameData[runtime.globalVars.SubjectTypeIndex].Played).length;
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;


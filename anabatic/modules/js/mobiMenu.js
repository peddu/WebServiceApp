
	function searchBymobiMenu() {
		gVisit = 0;
	    var menulist_inputparam = {};
	    menulist_inputparam["serviceID"] = "menulists_mysql";
	    menulist_inputparam["httpheaders"] = {};
	    menulist_inputparam["httpconfigs"] = {};	    
	    var menuList = appmiddlewareinvokerasync(menulist_inputparam, mobiMenuCallback);
	    kony.application.showLoadingScreen("loadskin","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true,true,null);
	}
	
	function mobiMenuCallback(status, menuListServiceData){
	kony.print("Response is ::"+JSON.stringify(menuListServiceData));
	    if (status == 400) {    
	    	kony.print("invoke java service method1.....");  
	        if (menuListServiceData["opstatus"] == 0) {
	       kony.print("suuccess.........");  
	            if (menuListServiceData != null && menuListServiceData != undefined && menuListServiceData["mobiMenu"] 
	            		!= null && menuListServiceData["mobiMenu"] != undefined) {
	                var hcArray = [];
	                for (var i = 0; i < menuListServiceData["mobiMenu"].length; i++) {
	                    hcArray.push({
	                        "menu_id": menuListServiceData["mobiMenu"][i]["menuid"],
	                        "lblMenuName": menuListServiceData["mobiMenu"][i]["menuname"]
	                    })
	                }
	                kony.print("size of array .."+hcArray.length);  
	                menu.segMenuList.setData(hcArray);
	                menu.lblInfo.text = "Select a follwing service: ";
		            if(channel==="tablet"){
		            	menu.segMenuList.selectedIndex=[0,0];
	                	//helpTopicDetails();
	                	menu.hbxHeaderName.setFocus(true);
                    }	
                 	else
                	hbxFooterPage.setVisibility(true);
                    kony.application.dismissLoadingScreen();
	            }
	        }
			else{
					alert("Cannot find host on this network connection,Please check network & try again.");
					menu.lblInfo.text = "Cannot find host on this network connection,Please check network & try again.";
					gVisit = 1;
					if(channel!="tablet")
					hbxFooterPage.setVisibility(false);	
		           	kony.application.dismissLoadingScreen();
		           	return;
				}
	    }
	}
	
	
		function navToFrmMenu(){			
				
			if(gVisit == 1)
			{
				searchBymobiMenu();
			}
			else menu.show();
						
		}
	
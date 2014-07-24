function searchOption(){
		var serviceID = null;
		serviceID = menu["segMenuList"]["selectedItems"][0]["menu_id"];
		kony.print("Service ID :"+serviceID);
		if(serviceID == 3){
		frmBalanceEquiry.show();
		}else if(serviceID == 2){
		frmFundTransfer.show()
		}else{
		menu.show();
		}
	}

	
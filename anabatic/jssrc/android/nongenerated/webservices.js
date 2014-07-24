function getAcctStmtList() {
    var acctStatement = {
        serviceID: "STATEMENTTODAY"
    };
    var getAcctDetails = appmiddlewareinvokerasync(acctStatement, AcctCallback);
    return;
}

function AcctCallback(status, acctStatement) {
    if (status == 400) {
        kony.print("Acct Method calll");
        if ((acctStatement != null || acctStatement != undefined) && acctStatement["opstatus"] == 0) {
            acctStatementTable = acctStatement["Providers"];
            kony.print("acctStatementTable: " + JSON.stringify(acctStatementTable));
            frmBalanceEquiry.lblCustName.text = acctStatement["Providers"][0]["name"];
            frmBalanceEquiry.lblCurrency.text = acctStatement["Providers"][1]["currency"];
            frmBalanceEquiry.lblAcctBalance.text = acctStatement["Providers"][2]["amount"];
            frmBalanceEquiry.lblDate.text = currentDate();
        } else {
            alert("Please check network connection and try again.");
        }
    }
}

function currentDate() {
    var d = new Date();
    minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(), hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(), ampm = d.getHours() >= 12 ? 'pm' : 'am', months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[d.getDay()] + ' ' + months[d.getMonth()] + ' ' + d.getDate() + ' ' + d.getFullYear() + ' ' + hours + ':' + minutes + ampm;
}

function myFunction() {
	value =+ 1
	var qrValue = document.getElementById('connecting').value + document.getElementById('qr-data').value;
	qrCode = new QRCode(document.getElementById('qr-code'));
	qrCodeDiv = document.getElementById('qr-code')
	var qrData

	var button = document.getElementById('print');
	if (button.disabled) {
	  button.disabled = false;
	  button.setAttribute('title', 'Jetzt Drucken');
	} 

	
  

	document.getElementById("qr-codeTxt").innerHTML= document.getElementById('qr-data').value +" "+ document.getElementById('connecting').value 
	switch (document.getElementById('connecting').value) {
		case "bestCase":
			qrData = "mock:" + document.getElementById('qr-data').value + ":bestcase";
			qrCode.makeCode(qrData);
		break;
	
		case "neverConnecting":
			qrData = "mock:" + document.getElementById('qr-data').value + ":neverconnecting";
			qrCode.makeCode(qrData);
		break;
	
		case "rarelyConnecting":
			qrData = "mock:" + document.getElementById('qr-data').value + ":rarelyconnecting";
			qrCode.makeCode(qrData);
		break;
			
		case "teachedBestCase":
			qrData = "mock:" + document.getElementById('qr-data').value + ":bestcase:teached";
			qrCode.makeCode(qrData);
		break;
		
		
		case "failsLearningTrip":
			qrData = "mock:" + document.getElementById('qr-data').value + ":failsLearningTrip";
			qrCode.makeCode(qrData);	
		break;
	
		case "disconnecting":
			qrData = "mock:" + document.getElementById('qr-data').value + ":disconnecting:unteached";
			qrCode.makeCode(qrData);	
		break;
			
		case "teachedDisconnecting":
			qrData = "mock:" + document.getElementById('qr-data').value + ":disconnecting:teached";
			qrCode.makeCode(qrData);	
		break;
	
		case "failsRetrievingErrorsOnce":
			qrData = "mock:" + document.getElementById('qr-data').value + ":failsRetrievingErrorsOnce:teached";
			qrCode.makeCode(qrData);	
		break;
	
		case "futureRelease":
			qrData = "mock:" + document.getElementById('qr-data').value + ":futureRelease:teached";
			qrCode.makeCode(qrData);	
		break;
	}
		while(qrCodeDiv.firstChild){
			qrCodeDiv.removeChild(qrCodeDiv.firstChild);
		}
	
		var qrCode = new QRCode(qrCodeDiv);
		qrCode.makeCode(qrData);
}
	
	function bestCaseSupramatic(){

		var button = document.getElementById('print');
		var qrCode = new QRCode(document.getElementById('qr-code'));
		var qrCodeFav = document.getElementById('qr-code');
		document.getElementById("qr-codeTxt").innerHTML="Supramatic"
		qrFav= "mock:supramatic:bestcase";
		qrCode.makeCode(qrFav);

		if (button.disabled) {
			button.disabled = false;
			button.setAttribute('title', 'Jetzt Drucken');
		} 

		while(qrCodeFav.firstChild){
			qrCodeFav.removeChild(qrCodeFav.firstChild);
		}
		var qrCode = new QRCode(qrCodeFav);
		qrCode.makeCode(qrFav);
	}
	
	function bestCaseSupramatic4V2(){

		var button = document.getElementById('print');
		var qrCode = new QRCode(document.getElementById('qr-code'));
		var qrCodeFav = document.getElementById('qr-code');
		document.getElementById("qr-codeTxt").innerHTML="Supramatic4V2"
		qrFav= "mock:supramatic4v2:bestcase";
		qrCode.makeCode(qrFav);

		if (button.disabled) {
			button.disabled = false;
			button.setAttribute('title', 'Jetzt Drucken');
		} 

		while(qrCodeFav.firstChild){
			qrCodeFav.removeChild(qrCodeFav.firstChild);
		}
		var qrCode = new QRCode(qrCodeFav);
		qrCode.makeCode(qrFav);
	}

	function bestCaseSupramatic4Renesas(){

		var button = document.getElementById('print');
		var qrCode = new QRCode(document.getElementById('qr-code'));
		var qrCodeFav = document.getElementById('qr-code');
		document.getElementById("qr-codeTxt").innerHTML="SupraMatic4 Renesas"
		qrFav= "mock:supramatic4Renesas:bestcase";
		qrCode.makeCode(qrFav);

		if (button.disabled) {
			button.disabled = false;
			button.setAttribute('title', 'Jetzt Drucken');
		} 

		while(qrCodeFav.firstChild){
			qrCodeFav.removeChild(qrCodeFav.firstChild);
		}
		var qrCode = new QRCode(qrCodeFav);
		qrCode.makeCode(qrFav);
	}

	function bestCaseSilentDrive2(){

		var button = document.getElementById('print');
		var qrCode = new QRCode(document.getElementById('qr-code'));
		var qrCodeFav = document.getElementById('qr-code');
		document.getElementById("qr-codeTxt").innerHTML="SilentDrive2"
		qrFav= "mock:silentdrive2:bestcase";
		qrCode.makeCode(qrFav);

		if (button.disabled) {
			button.disabled = false;
			button.setAttribute('title', 'Jetzt Drucken');
		} 

		while(qrCodeFav.firstChild){
			qrCodeFav.removeChild(qrCodeFav.firstChild);
		}
		var qrCode = new QRCode(qrCodeFav);
		qrCode.makeCode(qrFav);
	}

	function bestCaseRollmatic2(){
		var qrCode = new QRCode(document.getElementById('qr-code'));
		var qrCodeFav = document.getElementById('qr-code');
		document.getElementById("qr-codeTxt").innerHTML="Rollmatic"
		qrFav= "mock:rollmatic2:bestcase";
		qrCode.makeCode(qrFav);
		var button = document.getElementById('print');

		if (button.disabled) {
		  button.disabled = false;
		  button.setAttribute('title', 'Jetzt Drucken');
		} 

		while(qrCodeFav.firstChild){
			qrCodeFav.removeChild(qrCodeFav.firstChild);
		}
		var qrCode = new QRCode(qrCodeFav);
		qrCode.makeCode(qrFav);
	}
	
	function bestCaseHet(){
		var qrCode = new QRCode(document.getElementById('qr-code'));
		var qrCodeFav = document.getElementById('qr-code');
		document.getElementById("qr-codeTxt").innerHTML="Favorit: HET"
		qrFav= "mock:het:bestcase";
		qrCode.makeCode(qrFav);
		var button = document.getElementById('print');

		if (button.disabled) {
		  button.disabled = false;
		  button.setAttribute('title', 'Jetzt Drucken');
		} 
	
		while(qrCodeFav.firstChild){
			qrCodeFav.removeChild(qrCodeFav.firstChild);
		}
		var qrCode = new QRCode(qrCodeFav);
		qrCode.makeCode(qrFav);
	}

	function printDiv(print) {
		var printContents = document.getElementById(print).innerHTML;
		var originalContents = document.body.innerHTML;
	   
		document.body.innerHTML = printContents;   
		window.print();
		document.body.innerHTML = originalContents;
			
		
       
    }

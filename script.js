var nbrNotif = 0;

if(Push.Permission.has() != true){
    Push.Permission.request(onGranted, onDenied);
}

function onGranted(){
    console.log("notification granted");
}
function onDenied(){
    console.log("notification denied");
}

function horloge() {
    var date = new Date(); 
    var heure = String(date.getHours());
    var minute = String(date.getMinutes());

    if(Number(heure) < 10){
        heure = "0" + heure;
    }
    if(Number(minute) < 10){
        minute = "0" + minute;
    }

    document.getElementById("heure").innerHTML = heure + " H " + minute;
    
    if(heure == minute){
        if (document.getElementById("cercle").style.backgroundColor=="rgb(209, 209, 209)"){ 
            document.getElementById("cercle").style.backgroundColor="black"; 
            document.getElementById("heure").style.color="white";
        }else{ 
            document.getElementById("cercle").style.backgroundColor="rgb(209, 209, 209)"; 
            document.getElementById("heure").style.color="black";
        }

        if(document.getElementById("checkbox").checked == true && nbrNotif == 0 && Push.Permission.has() == true){
            console.log("notif");
            Push.create("Il est " + heure + " H " + minute + ", touchez votre nez et du rouge !");
            nbrNotif ++;
        }
    }else{
        document.getElementById("cercle").style.backgroundColor="rgb(209, 209, 209)";
        document.getElementById("heure").style.color="black";
        nbrNotif = 0;
    }

    if(document.getElementById("checkbox").checked == true && Push.Permission.has() == false){
        alert("Veuillez accepter les notifications");
        document.getElementById("checkbox").checked = false;
        Push.Permission.request(onGranted, onDenied);
    }
}

setInterval("horloge()", 1000);
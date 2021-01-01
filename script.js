//var notificationActive;
//var notificationSupporte;
//var nbrNotif = 0;

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

        if(document.getElementById("checkbox").checked == true && notificationActive == true && nbrNotif == 0){
            console.log("notif");
            showNotif("Il est " + heure + " H " + minute + ", touchez votre nez et du rouge");
            nbrNotif ++;
        }
    }else{
        document.getElementById("cercle").style.backgroundColor="rgb(209, 209, 209)";
        document.getElementById("heure").style.color="black";
        nbrNotif = 0;
    }

    if(document.getElementById("checkbox").checked == true && notificationSupporte == false){
        alert("Votre naviguateur ne supporte pas les notifications");
        document.getElementById("checkbox").checked = false;
    }
    if(document.getElementById("checkbox").checked == true && notificationActive == false){
        alert("Vous n'avez pas accepté les notifications");
        document.getElementById("checkbox").checked = false;
    }
}
setInterval("horloge()", 1000);

window.addEventListener("click", function(){
    Push.create("hello");
})
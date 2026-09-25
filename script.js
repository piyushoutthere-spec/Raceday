const raceDate= new Date("October 4, 2026 17:30:00").getTime();
function updateCountdown(){
    const now=new Date().getTime();
    const difference = raceDate-now;
    if(difference <=0){
        document.getElementById("countdown").textContent = "Race Day!";
        return;
    }
    const days=Math.floor(difference/(1000*60*60*24));
    const hours=Math.floor(
        (difference%(1000*60*60*24))/
        (1000*60*60)
    );
    const minutes=Math.floor(
        (difference%(1000*60*60))/
        (1000*60)
    );
    const seconds=Math.floor(
        (difference%(1000*60))/
        1000
    );
    document.getElementById("countdown").textContent=
    days+"d" +
    hours+"h" +
    minutes+"m" +
    seconds+"s";
}
updateCountdown();
setInterval(updateCountdown,1000);
function showRaceInfo(raceName) {

    let details = "";

    if (raceName === "Singapore Grand Prix") {

        details =
            "Round 18\n" +
            "October 4, 2026\n" +
            "Marina Bay Street Circuit";

    } else if (raceName === "United States Grand Prix") {

        details =
            "Round 19\n" +
            "October 18, 2026\n" +
            "Circuit of the Americas";

    } else if (raceName === "Mexico City Grand Prix") {

        details =
            "Round 20\n" +
            "October 25, 2026\n" +
            "Autódromo Hermanos Rodríguez";
    }

    document.getElementById("modalRaceName").textContent = raceName;

    document.getElementById("modalRaceDetails").textContent = details;

    document.getElementById("raceModal").style.display = "flex";
}
function closeRaceInfo() {

    document.getElementById("raceModal").style.display = "none";
}


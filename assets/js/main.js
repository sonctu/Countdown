window.addEventListener("load", function() {
    const daysText = document.querySelector('.days');
    const hoursText = document.querySelector('.hours');
    const minutesText = document.querySelector('.minutes');
    const secondsText = document.querySelector('.seconds');
    const wrapper = document.querySelector(".wrapper");
    const container = document.querySelector(".container");
    const video = document.querySelector("video");
    const currentYear = new Date().getFullYear();
    const containerContent = document.querySelector(".container-content");
    function countdown(date) {
        let days, hours, minutes, seconds;
        const endDate = new Date(date).getTime();
        setInterval(function() {
            const startDate = new Date().getTime();
            let timeRemaining = (endDate - startDate) / 1000;
            if(timeRemaining > 0) {
                days = Math.floor(timeRemaining / 86400);
                timeRemaining = timeRemaining % 86400;
                daysText.textContent = `${days < 10 ? "0" + days : days}`;
                hours = Math.floor(timeRemaining / 3600);
                timeRemaining = timeRemaining % 3600;
                hoursText.textContent = `${hours < 10 ? "0" + hours : hours}`;
                minutes = Math.floor(timeRemaining / 60);
                timeRemaining = timeRemaining % 60;
                minutesText.textContent = `${minutes < 10 ? "0" + minutes : minutes}`;
                seconds = Math.floor(timeRemaining);
                secondsText.textContent = `${seconds < 10 ? "0" + seconds : seconds}`;
                if(seconds <= 30 && days === 0 && hours === 0 && minutes === 0) {
                    document.querySelector("audio").play();
                }

            }
            else {
                container.classList.remove("hidden");
                wrapper.classList.add("hidden");
                video.play();
                container.querySelector("p").style.transform = `scale(1)`;
            }
        },1000)
    }
    containerContent.querySelector("p").textContent = `Happy new year ${currentYear + 1}`;
    countdown(`Jan 1 ${currentYear + 1} 00:00:00`);

})
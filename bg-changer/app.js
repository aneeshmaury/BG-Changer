
        document.addEventListener("DOMContentLoaded", function () {
            let bodyColor = document.querySelector('body');
            let blueBtn = document.querySelector('.bluebtn');
            let yellowBtn = document.querySelector('.yellowbtn');
            let redBtn = document.querySelector('.redbtn');
            let greenBtn = document.querySelector('.greenbtn');
            let blackBtn = document.querySelector('.blackbtn');
            let orangeBtn = document.querySelector('.orangebtn');
            let pinkBtn =document.querySelector('.pinkbtn');

            blueBtn.addEventListener("click", function () {
                bodyColor.style.backgroundColor = "blue";
            });

            yellowBtn.addEventListener("click", function () {
                bodyColor.style.backgroundColor = "yellow";
            });

            redBtn.addEventListener("click", function () {
                bodyColor.style.backgroundColor = "red";
            });

            greenBtn.addEventListener("click", function () {
                bodyColor.style.backgroundColor = "green";
            });

            blackBtn.addEventListener("click", function () {
                bodyColor.style.backgroundColor = "black";
            });

            orangeBtn.addEventListener("click", function () {
                bodyColor.style.backgroundColor = "orange";
            });
            pinkBtn.addEventListener("click", function () {
                bodyColor.style.backgroundColor = "pink";
            });
        });
    
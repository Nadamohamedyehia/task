let main = document.getElementById('main');
let styleBtn = document.getElementById('style-btn');
let classBtn = document.getElementById('class-btn');
styleBtn.onclick = function(){
    main.style.color = "red";
    }
classBtn.onclick = function(){
    main.classList.toggle('blue');
    }
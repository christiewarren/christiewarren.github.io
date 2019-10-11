window.addEventListener('DOMContentLoaded', getBtn)
function getBtn(){
    var scrollBtn = document.getElementById('scrollBtn');
    scrollBtn.onclick = scroll;
}
function scroll(){
    document.querySelector('#scroll').scrollIntoView({ 
    behavior: 'smooth' 
    });
}

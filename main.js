const bodyElement = document.querySelector('body');
const menuToggle = document.querySelector('.hamburger-menu'); 
const heroElement = document.querySelector('.hero'); 
const navList = document.querySelector('.nav-list'); 

menuToggle.addEventListener('click', function (){
    bodyElement.classList.toggle('is-open');
    heroElement.classList.add('is-open');
}); 

navList.addEventListener('click', function(e){
    let clickedElement = e.target;

    if(clickedElement.classList[0] === "nav-link"){
        bodyElement.classList.remove('is-open');
    }
});

window.addEventListener('click', function(e){
    let clickedElement = e.target;

    if(clickedElement.matches('.is-open')){
        bodyElement.classList.remove('is-open');
        heroElement.classList.remove('is-open');
    }
});
 
// JSON + AJAX

var pageCounter = 1;
var dataContainer = document.getElementById("demo-info");
var demobtn = document.getElementById("demobtn");

demobtn.addEventListener("click", function(){
    var myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://raw.githubusercontent.com/a-thomsen/a-thomsen.github.io/main/main-' + pageCounter + '.json');
    myRequest.onload = function(){
        var myData = JSON.parse(myRequest.responseText); 
        renderHTML(myData);
    };
    myRequest.send(); 
    pageCounter++;
});

function renderHTML(data){
    var htmlString = "";

    for(i = 0; i < data.length; i++){
        htmlString += "<p>" + data[i].song + " is a song by " + data[i].band +  " released in " + data[i].year + ", and represents the " + data[i].desc.genre + " genre. Why I get a kick out of the song, is ";

        for (y = 0; y < data[i].desc.adj.length; y++) {
            if (y == 0) {
                htmlString += data[i].desc.adj[y];
            } else {
                htmlString += " and " + data[i].desc.adj[y];
            }
        }

        htmlString += ". </p><br>"; 
    }

    dataContainer.insertAdjacentHTML('beforeend', htmlString);
}
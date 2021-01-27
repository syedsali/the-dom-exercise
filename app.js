console.log("Javascript is alive!");

document.getElementById("greeting").innerHTML = "Hello World!";

document.getElementById("essentials").style.backgroundColor = "yellow"; 

var img = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
var picture = new Image();
picture.src= img;

document.getElementById("greeting").appendChild(picture);

var arr = ['make coffee','eat donut','change diapers','drive to work'];
var cont = document.getElementById("ToDo");
var ul = document.createElement('ul');
ul.setAttribute('style', 'padding: 0; margin: 0;');
ul.setAttribute('id', 'theList');
for (i = 0; i <= arr.length - 1; i++) {
    var li = document.createElement('li');
    li.innerHTML= arr[i];
    li.setAttribute('style', 'display: block;');
    ul.appendChild(li);
    }
    cont.appendChild(ul);

document.getElementById("ToDo").onclick = function() {
    document.getElementById("ToDo").style.display ="none";
}


document.getElementById("ghosting").onclick = function () {
    document.getElementById("ghosting").style.display ="none";
}




document.getElementById("resize").onclick = function doubleWidth() {
    resize.style.width = '200px';
}

document.getElementById("resize").onclick= function normalWidth(){
    resize.style.width = '400px';
}

document.getElementById("reset").onclick = function (){
    Document.getElementById("ToDo").style.img = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgiphy.com%2Fgifs%2Fthesimpsons-xT5LMX31WwcQmzp4dy&psig=AOvVaw2r1Z7qlWctvGEVqcg2hrGF&ust=1611540423349000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDepI2-s-4CFQAAAAAdAAAAABAD";
}



var list = document.querySelector(".list");
var add = document.getElementById("add");
var del = document.getElementById("del");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var li = list.querySelectorAll("li");
var index=0;

add.onclick = function add(){
    var newLi = document.createElement('li');
    function formatDate(date) {
        var hh = date.getHours();
        if (hh < 10) hh = '0' + hh;     
        var mm = date.getMinutes();
        if (mm < 10) mm = '0' + mm;      
        var ss = date.getSeconds();
        if (ss < 10) ss = '0' + ss;    
        return  hh + ':' + mm + ':' + ss;
      }    
    var date = new Date();
    var listTime = formatDate(date);
    newLi.innerHTML = `${listTime}`;
    list.appendChild(newLi);
    border();
}

del.onclick = function del(){
    li = list.querySelectorAll("li");
    var num = Math.floor(Math.random() * li.length);
    for(var i = 0;i < li.length; i++){
        i = num;
        list.removeChild(li[i]);
    }
}

function border(){
    li = list.querySelectorAll("li");
    li[index].classList.add("border");
}


next.onclick = function next() {
    li = list.querySelectorAll("li");
if(index<li.length-1){       
     li[index].classList.remove("border");
    index++;
    li[index].classList.add("border"); 
 }else{
    li[index].classList.remove("border");
     index = 0;
     border();
 }
 
 }
 prev.onclick = function prev(){
    li = list.querySelectorAll("li");
    if(index !==0){
        li[index].classList.remove("border");
        index--;
        li[index].classList.add("border");
    }else{
        li[index].classList.remove("border");
        index = li.length-1;
        border();
    }
}
    

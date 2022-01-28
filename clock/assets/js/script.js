console.log("start")



var exchange;

let c = document.getElementById('time')
console.log(c.innerHTML)



let date = new Date();
let time = date.getHours()+"  Hr  "+date.getMinutes()+"  Min   "+date.getSeconds()+"  Sec";


let v = document.createElement("h1");
v.innerText = time;

c.appendChild(v);

exchange = v

console.log( exchange)

let newTime;
let newElement;
let newdate;
let count =1;

setInterval(() => {

    newdate = new Date();
    newTime = newdate.getHours()+"     Hr  "+newdate.getMinutes()+"    Min   "+newdate.getSeconds()+"    Sec";
   

    newElement = document.createElement('h1');
    newElement.innerText = newTime;

    c.replaceChild(newElement,exchange)

    exchange = newElement;

    
}, 1000);

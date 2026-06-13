// const alh1=document.querySelector("h1");
// alh1.innerText="hi ji kaise ho!";//

// alh1.textContent="hey! mai update ho gaya hu by Dom";//only change or update text.


// alh1.innerHTML="<b>PIYUSH</b>";
// const body=document.body
// body.style.backgroundColor="yellow";
// alh1.style.color="black";
// alh1.style.fontStyle="italic";
// alh1.style.fontSize="110px";

// // alh1.classList.add("")//
// // alh1.classList.remove( )//delete
// // alh1.classList.replace()//take two value(class,newclass)
// // alh1.classList.contains()//true /false
// // alh1.classList.toggle()//is exist then remove,if not then add

// const isClass=alh1.classList.contains("heading");
// console.log(isClass);


// Element.addEventListener("event",callback)


const bulb= document.querySelector(".bulb");
const btn= document.querySelector(".button");
const body=document.querySelector("body");
let flag=true;
btn.addEventListener("click",()=>{
     if(flag){
    bulb.style.backgroundColor="white";
    btn.innerText="off";
     flag=false;}
     else{
        bulb.style.backgroundColor="black";
        btn.innerText="on";
        flag=true;
 }
})

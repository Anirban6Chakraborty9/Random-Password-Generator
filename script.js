let cb1=0;
let cb2=0;
let cb3=0;
let cb4=0;
function change(e){
    if (e=="btn1"){
        cb1+=1;
        c=cb1;
    }
    else if (e=="btn2"){
        cb2+=1;
        c=cb2;
    }
    else if (e=="btn3"){
        cb3+=1;
        c=cb3;
    }
    else if (e=="btn4"){
        cb4+=1;
        c=cb4;
    }

    if (c%2!=0)
        document.getElementById(e).style.cssText= changeStyle;
    else
        document.getElementById(e).style.cssText= orgStyle;
}

const changeStyle= `
background-color: rgba(0, 0, 0, 0.6);
color: aliceblue;
border: 1px solid wheat;
box-shadow: 2px 2px rgb(244, 220, 190,0.8);
`;

const orgStyle= `
background-color: rgba(212, 177, 177, 0.6);
color: rgb(2, 2, 2);
border: 1px solid rgb(1, 1, 1);
box-shadow: none;
`;

const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

const passBox = document.getElementById("pBox")
const totalChar = document.getElementById("sizep")
const upperInput = document.getElementById("btn1")
const lowerInput = document.getElementById("btn2")
const numberInput = document.getElementById("btn3")
const symbolInput = document.getElementById("btn4")

const ranData=(dataset)=>{
    return dataset[Math.floor(Math.random()* dataset.length)]
}

//passBox.innerText="Pass";

const genPass=(password="")=>{
    if((cb1%2!=0)||(cb2%2!=0)||(cb3%2!=0)||(cb4%2!=0)){
        if (cb1%2!=0) {
            password += ranData(upperSet)
        }
        if (cb2%2!=0) {
            password += ranData(lowerSet)
        }
        if (cb3%2!=0) {
            password += ranData(numberSet)
        }
        if (cb4%2!=0) {
            password += ranData(symbolSet)
        }
        if (password.length < totalChar.value) {
            return genPass(password)
        }
        let p= truncateString(password, totalChar.value);
        passBox.value = p;
    }
    else{
        console.log("not selected");
        alert("Please select contents, before generating password...");
    }
}

function call() {
        genPass();
    }

function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } 
    else {
        return str;
    }
}
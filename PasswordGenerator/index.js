const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const Special = document.getElementById('Special');
const number = document.getElementById('number');
const barValue = document.getElementById('slidebar');
const passLength = document.getElementById('passLength');
const progressbar = document.getElementById('progressValue');
const COPY = document.getElementById('copy');
const allChar = document.getElementsByClassName('allChar');
const Generate=document.getElementById('Generate')

const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
const SPECIAL = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
const NUMBER = "0123456789";
const DEFAULT = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ!#$%&'()*+,-./:;<=>?@[\]^_`{|}~0123456789";

passLength.setAttribute("value", barValue.value);

barValue.addEventListener('input', slidebarValue);
barValue.innerHTML=passLength;
progressbar.setAttribute("value",1);


// set the value of slidbar and progress bar
function slidebarValue() {
    passLength.setAttribute("value", barValue.value);
    progressValue.setAttribute("value", setProgress());

}
// progress bar of password strong or lose??
function setProgress() {
    if (barValue.value >= 15) return 3;
    else if (barValue.value >= 8) return 2;
    else if (barValue.value >= 6) return 1;
    else return 0;
}
// password invoked here by method
function generatePassword() {
    document.getElementById('Generate').innerHTML = PasswordGenerate();
}

// passsword Created random
function PasswordGenerate() {
    let length = barValue.value;
    let c = 0;
    let passVal = "";
    if (!allChar[0].checked && !allChar[1].checked && !allChar[2].checked && !allChar[3].checked) {
        for (let i = 0; i < length; ++i) {
            passVal += DEFAULT.charAt(Math.floor(Math.random() * DEFAULT.length));
        }
        return passVal;
    } else {
       
        while (c < length) {
            let a = Math.floor(Math.random() * 4);
            if (allChar[a].id == "uppercase" && uppercase.checked) {

                passVal += UPPERCASE.charAt(Math.floor(Math.random() * UPPERCASE.length));
                c++;

            }
            else if (allChar[a].id == "lowercase" && lowercase.checked) {

                passVal += LOWERCASE.charAt(Math.floor(Math.random() * LOWERCASE.length));
                c++;
            }
            else if (allChar[a].id == "Special" && Special.checked) {

                passVal += SPECIAL.charAt(Math.floor(Math.random() * SPECIAL.length));
                c++;
            }
            else if (allChar[a].id == "number" && number.checked) {

                passVal += NUMBER.charAt(Math.floor(Math.random() * NUMBER.length));
                c++;

            }
        }
        return passVal;
    }
}
function copied() {
    document.getElementById('Generate').select();
    navigator.clipboard.writeText(document.getElementById('Generate').value);
    document.getElementById('copied').style.display="block";
    setTimeout(()=>{
        document.getElementById('copied').style.display="none";
    },2000);

}
function reset() {
    Generate.innerHTML="";
    passLength.setAttribute("value",6);
    barValue.value=6;
    progressbar.setAttribute("value",1);
    allChar[0].checked=false;
    allChar[1].checked=false;
    allChar[2].checked=false;
    allChar[3].checked=false;
    
}








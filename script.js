var sampleSpecialCharsEl = document.querySelector("#sampleSpecialChars");

var specialCharsSampleString = "!@#$%^&*(),./;'\"{}[]-_+=";
var sampleSpecialCharsList = specialCharsSampleString.split("");
var additionalSpecialCharsList = [];
sampleSpecialCharsList.push("addAll");
var activeSpecialCharacters = [];
for (var addSampleSpecialChars = 0; addSampleSpecialChars < sampleSpecialCharsList.length; addSampleSpecialChars = addSampleSpecialChars + 1) {
    //Create button
    var thisButtonEl = document.createElement("button");
    thisButtonEl.setAttribute('id', `sc${addSampleSpecialChars}ID`);
    thisButtonEl.setAttribute('type', 'button');
    // thisButtonEl.setAttribute('class', 'btn btn-primary');
    thisButtonEl.setAttribute('class', 'btn-secondary');
    // console.log(thisButtonEl);
    thisButtonEl.textContent = `${sampleSpecialCharsList[addSampleSpecialChars]}`;
    // console.log(thisButtonEl.textContent);
    // console.log(thisButtonEl.id)
    //Create col
    var thisColEl = document.createElement("div");
    thisColEl.setAttribute('id', `sc${addSampleSpecialChars}ColID`);
    thisColEl.setAttribute('class', 'col');
    thisColEl.appendChild(thisButtonEl);
    // thisColEl.setAttribute('style','display:none');
    //Add col to sampleSpecialCharsEl
    sampleSpecialCharsEl.appendChild(thisColEl);
}

var lowerCasePermissible = 0;
var upperCasePermissible = 0;
var numericPermissible = 0;
var numericAll = "0123456789";
var upperCaseAll = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseAll = upperCaseAll.toLowerCase();
var charsGenerateSet = [];
var additionalSpecialCharsInput = "";
var numKeysPressed = 0;
var commandsToIgnore = ["Alt", "CapsLock", "Tab", "Meta", "Shift", "Escape", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "Insert", "Delete", "PageUp", "PageDown", "Home", "End", "NumLock", "Enter", "Ctrl", "Control"];
var buttonsAlwaysActiveIDs = [];
var psswrdGenerated = "";
var psswrdLengthNum = 0;

// debugger;
function isClicked(event) {
    // event.preventDefault();
    try {
        var targetTextContent = event.target.textContent;
        var grandParentID = event.target.parentElement.parentElement.id;
        console.log(event.target.textContent);
        console.log(event.target.value.id);
        console.log(event.target.id);
        console.log(event.target.parentElement.parentElement.id);
        console.log(event.target.name);
        // console.log(2);
        // target.classList

        if (targetTextContent === "lowercase") //lowercase
        {
            lowerCasePermissible = 1;
            // charsGenerateSet = charsGenerateSet + lowerCaseAll;
            charsGenerateSet = charsGenerateSet.concat(lowerCaseAll.split(''));
        }
        if (targetTextContent === "Uppercase") //Uppercase
        {
            upperCasePermissible = 1;
            // charsGenerateSet = charsGenerateSet + upperCaseAll;
            charsGenerateSet = charsGenerateSet.concat(upperCaseAll.split(''));
        }
        if (targetTextContent === "Numeric (0-9)") //Numeric
        {
            numericPermissible = 1;
            // charsGenerateSet = charsGenerateSet + numericAll;
            charsGenerateSet = charsGenerateSet.concat(numericAll.split(''));
        }
        if (targetTextContent === "addAll") //Numeric
        {
            upperCasePermissible = 1;
            // charsGenerateSet = charsGenerateSet + specialCharsSampleString;
            charsGenerateSet = charsGenerateSet.concat(specialCharsSampleString.split(''));
        }
        if (grandParentID === "sampleSpecialChars") {
            // charsGenerateSet = charsGenerateSet + event.target.textContent;
            charsGenerateSet.push(event.target.textContent);
        }
        if (event.target.id === "dropDownSpecialCharsButton") {
            // charsGenerateSet=charsGenerateSet+
            if (document.querySelector("#sampleSpecialChars").classList.contains("hide")) {
                document.querySelector("#sampleSpecialChars").classList.remove("hide");
            }
            else {
                document.querySelector("#sampleSpecialChars").classList.add("hide");
            }
        }
        if (event.target.id === "addAdditionalSpecialCharsButton") {
            // charsGenerateSet=charsGenerateSet+
            document.querySelector("#additionalSpecialCharsForm").classList.remove("hide");
        }
        if (event.target.type === "button") {
            // console.log(event.target.classList);
            // if (event.target.classList.contains("btn-primary") && buttonsAlwaysActiveIDs.includes(event.target.id)===false)
            // {
            //     event.target.classList.remove("btn-primary");
            //     event.target.classList.add("btn-secondary");
            // }
            if (event.target.classList.contains("btn-secondary") && buttonsAlwaysActiveIDs.includes(event.target.id) === false) {
                event.target.classList.add("btn-primary");
                event.target.classList.remove("btn-secondary");
            }
        }
        if (event.target.id === "finishSelection") {
            debugger;
            document.querySelector("#charTypes").classList.add("hide");
            psswrdLengthNum = Math.max(Math.min(parseInt(psswrdLengthNum), 128), 8);
            if (psswrdLengthNum === NaN) {
                psswrdLengthNum = 8;
            }
            console.log(psswrdLengthNum);
            for (var pssdChars = 0; pssdChars < psswrdLengthNum; pssdChars = pssdChars + 1) {
                psswrdGenerated = psswrdGenerated + charsGenerateSet[Math.floor(Math.random() * charsGenerateSet.length)];
            }
            document.querySelector("#passwordHeader").textContent = `Your password is: ${psswrdGenerated}`;
        }
    }
    catch {

    }
    // if (event.target.name==="additionalSpecialCharsFormInput")
    // {

    // }
    // if (targetTextContent.)
}

function isKeyDown(event) {
    // event.preventDefault();
    // console.log(event.target.id);
    // console.log(event.target.name);
    // console.log(event.key);
    // console.log(event.key === "Backspace");
    // console.log(commandsToIgnore.includes(event.key.trim()));
    // console.log(event.target.value);
    // console.log(event.target.value.split(''));

    // if (event.target.name === "additionalSpecialCharsFormInput" && event.key !== "Backspace" && commandsToIgnore.includes(event.key.trim()) === false) {

    //     if (charsGenerateSet.includes(event.key) === false) {
    //         if (specialCharsSampleString.indexOf(event.key) === -1) {
    //             charsGenerateSet = charsGenerateSet + event.key;
    //         }

    //     }
    //     additionalSpecialCharsInput = additionalSpecialCharsInput + event.key;
    //     numKeysPressed = numKeysPressed + 1;
    //     // console.log(charsGenerateSet);
    //     // console.log(additionalSpecialCharsInput);
    //     // console.log(numKeysPressed);
    // }
    // if (event.target.name === "additionalSpecialCharsFormInput" && event.key === "Backspace") {
    //     // if (numKeysPressed > 0) {
    //     if (event.target.value.length > 0)
    //         debugger;
    //     console.log(event.target.value);
    //     // var lastAdditionalSpecialCharAdded = additionalSpecialCharsInput[additionalSpecialCharsInput.length - 1];
    //     var lastAdditionalSpecialCharAdded = event.target.value[event.target.value.length-1];
    //     // console.log(lastAdditionalSpecialCharAdded);
    //     additionalSpecialCharsInputSubstring = additionalSpecialCharsInput.substring(0, additionalSpecialCharsInput.length - 1);
    //     // console.log(additionalSpecialCharsInputSubstring.indexOf(lastAdditionalSpecialCharAdded)===-1);
    //     // console.log(numericAll.includes(lastAdditionalSpecialCharAdded) === false && lowerCaseAll.includes(lastAdditionalSpecialCharAdded) === false && upperCaseAll.includes(lastAdditionalSpecialCharAdded) === false && sampleSpecialCharsList.includes(lastAdditionalSpecialCharAdded) === false && additionalSpecialCharsInputSubstring.indexOf(lastAdditionalSpecialCharAdded)===-1);
    //     if (numericAll.includes(lastAdditionalSpecialCharAdded) === false && lowerCaseAll.includes(lastAdditionalSpecialCharAdded) === false && upperCaseAll.includes(lastAdditionalSpecialCharAdded) === false && sampleSpecialCharsList.includes(lastAdditionalSpecialCharAdded) === false && additionalSpecialCharsInputSubstring.indexOf(lastAdditionalSpecialCharAdded) === -1) {
    //         charsGenerateSet = charsGenerateSet.replace(lastAdditionalSpecialCharAdded, '');
    //     }
    //     // charsGenerateSet=charsGenerateSet.substring(0, charsGenerateSet.length-1);
    //     additionalSpecialCharsInput = additionalSpecialCharsInputSubstring;
    //     numKeysPressed = numKeysPressed - 1;
    //     console.log(charsGenerateSet);
    //     // console.log(additionalSpecialCharsInput);
    //     // console.log(numKeysPressed);

    // }
    if (event.target.name === "additionalSpecialCharsFormInput" && event.key === "Enter") {
        try {
            event.preventDefault();
            additionalSpecialCharsList = event.target.value.split("");
            event.target.value = "";
            // debugger;
            document.querySelector("#additionalSpecialCharsForm").classList.add("hide");
            console.log(additionalSpecialCharsList);
            charsGenerateSet=charsGenerateSet.concat(additionalSpecialCharsList);
        }
        catch {

        }

    }
    if (event.target.name === "psswrdLengthFormInput" && event.key === "Enter") {
        try {
            event.preventDefault();

            if (psswrdLengthNum === 0) {
                psswrdLengthNum = psswrdLengthNum + parseInt(event.target.value);
                console.log(psswrdLengthNum);
                document.querySelector("#psswrdLengthFormInput").classList.add("hide");
            }
        }
        catch {

        }
    }

    // numKeysPressed=Math.max(numKeysPressed-1,0);
}


document.addEventListener('click', isClicked)
document.addEventListener('keydown', isKeyDown)
//Detect button press
//If parentElement is sampleSpecialCharsEl add to activeSpecialCharacters
var sampleSpecialCharsEl = document.querySelector("#sampleSpecialChars");


var sampleSpecialCharsList="!@#$%^&*(),./;'\"{}[]-_+=".split();
sampleSpecialCharsList.append("addAll");
for (var addSampleSpecialChars=0;addSampleSpecialChars<sampleSpecialCharsList.length;addSampleSpecialChars=addSampleSpecialChars+1)
{
    //Create button
    var thisButtonEl=document.createElement("button",`#${sampleSpecialCharsList[addSampleSpecialChars]}`);
    thisButtonEl.textContent = `${sampleSpecialCharsList[addSampleSpecialChars]}`;
    //Create col
    var thisColEl=document.createElement("div",`#${sampleSpecialCharsList[addSampleSpecialChars]}Col`);
    thisColEl.setAttribute('class','col');
    // thisColEl.setAttribute('style','display:none');
    //Add col to sampleSpecialCharsEl
    sampleSpecialCharsEl.append(thisColEl);
}
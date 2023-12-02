function boldText(){
    document.execCommand('bold',true,null)
}

function underlineText(){
    document.execCommand('underline',true,null)
}

function italicText(){
    document.execCommand('italic',true,null)
}

function textColorPicker(){
    var color_pick = document.getElementById('color-input').value;
    document.execCommand('foreColor',false,color_pick);
    document.getElementById('color-rect').style.backgroundColor = color_pick;
}

var left_Align = Text_alignment('left');
var Center = Text_alignment('center');
var right_Align = Text_alignment('right');
var Justify= Text_alignment('justify');

document.querySelectorAll('.left').forEach(function (element) {
    element.addEventListener('click', left_Align);
});

document.querySelectorAll('.center').forEach(function (element) {
    element.addEventListener('click',Center);
});

document.querySelectorAll('.right').forEach(function (element) {
    element.addEventListener('click', right_Align);
});

document.querySelectorAll('.justify').forEach(function (element) {
    element.addEventListener('click', Justify);
});


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

function Text_alignment(alignType) {
    return function () {
        document.getElementById('Texteditor').style.textAlign = alignType;
        document.execCommand('justify' + alignType, true, null);
    }
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

var back = [];
var present = 0;

function Save() {
    back.push({
        content: document.getElementById('Texteditor').innerHTML,
        alignment: document.getElementById('Texteditor').style.textAlign
    });
    present++;
}

function Apply() {
    document.getElementById('Texteditor').innerHTML =back[present].content;
    document.getElementById('Texteditor').style.textAlign = back[present].alignment;
}

function undo_Icon() {
    if (present > 0) {
        present--;
        Apply();
    }
}

function redo_Icon() {
    if (present < back.length - 1) {
        present++;
        Apply();
    }
}

document.querySelectorAll('#Texteditor').forEach(function (element) {
    element.addEventListener('input', function () {
        Save();
    });
});
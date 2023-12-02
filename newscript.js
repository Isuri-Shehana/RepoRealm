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
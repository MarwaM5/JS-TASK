let fontType = document.getElementById("fontType");
let fontSize = document.getElementById("fontSize");

let italic = document.getElementById("chkItalic");
let bold = document.getElementById("chkBold");
let underline = document.getElementById("chkUnderline");

let paragraph = document.getElementById("paragraph");


fontType.onclick = function() {
    paragraph.style.fontFamily = fontType.value;
};


fontSize.onclick = function() {
    paragraph.style.fontSize = fontSize.value;
};


italic.onclick = function() {
    if (italic.checked) {
        paragraph.style.fontStyle = "italic";
    } else {
        paragraph.style.fontStyle = "normal";
    }
};


bold.onclick = function() {
    if (bold.checked) {
        paragraph.style.fontWeight = "bold";
    } else {
        paragraph.style.fontWeight = "normal";
    }
};


underline.onclick = function() {
    if (underline.checked) {
        paragraph.style.textDecoration = "underline";
    } else {
        paragraph.style.textDecoration = "none";
    }
};
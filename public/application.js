var currentId;
var objects = {};
var zIndex = 0;

function init() {
    document.addEventListener("touchstart", startmove, false);
    document.addEventListener("touchmove", move, false);
    document.addEventListener("touchend", endmove, false);
    makeObjectMovable(letterA);
    makeObjectMovable(letterB);
    makeObjectMovable(letterC);
    makeObjectMovable(letterD);
    makeObjectMovable(letterE);
    makeObjectMovable(letterF);
    makeObjectMovable(letterG);
    makeObjectMovable(letterH);
    makeObjectMovable(letterI);
    makeObjectMovable(letterJ);
    makeObjectMovable(letterK);
    makeObjectMovable(letterL);
    makeObjectMovable(letterM);
    makeObjectMovable(letterN);
    makeObjectMovable(letterO);
    makeObjectMovable(letterP);
    makeObjectMovable(letterQ);
    makeObjectMovable(letterR);
    makeObjectMovable(letterS);
    makeObjectMovable(letterT);
    makeObjectMovable(letterU);
    makeObjectMovable(letterV);
    makeObjectMovable(letterW);
    makeObjectMovable(letterX);
    makeObjectMovable(letterY);
    makeObjectMovable(letterZ);
}

function startmove(event) {
    var touch = event.touches[0];
    var id = touch.identifier;
    currentId = id;
    if (touch.target.className == "movable") {
        objects[id] = {
            target: touch.target,
            beginX: touch.clientX,
            beginY: touch.clientY,
            pozX: touch.target.pozXinit,
            pozY: touch.target.pozYinit
        }
        touch.target.style.opacity = 0.5;
        touch.target.style.zIndex = ++zIndex;
    }
    event.preventDefault();
}

function endmove(event) {
    var touch = event.touches[0];
    var id = currentId;
    if (objects[id] != null) {
        if (objects[id].target.className == "movable") {
            objects[id].target.style.opacity = 1;
            last_position = {pozXinit: objects[id].target.pozXinit,pozYinit:  objects[id].target.pozYinit};
            Jape.set(objects[id].target.id,last_position);
        }
        delete objects[id];
    }
    event.preventDefault();
}

function move(event) {
    var touch = event.touches[0];
    var id = touch.identifier;
    if (objects[id].target.className == "movable") {
        objects[id].target.pozXinit = objects[id].pozX + touch.clientX - objects[id].beginX;
        objects[id].target.pozYinit = objects[id].pozY + touch.clientY - objects[id].beginY;
        objects[id].target.style['-webkit-transform'] = 'translate(' + objects[id].target.pozXinit + 'px,' + objects[id].target.pozYinit + 'px)';
    }
    event.preventDefault();
}

function makeObjectMovable(obj) {
    obj.className = "movable";
    obj.pozXinit = 0;
    obj.pozYinit = 0;
    last_position = Jape.get(obj.id).value;
    if (last_position) {
      obj.pozXinit = last_position.pozXinit;
      obj.pozYinit = last_position.pozYinit;
      obj.style['-webkit-transform'] = 'translate(' + obj.pozXinit + 'px,' + obj.pozYinit + 'px)';
    }
}
    
function createTableButt() {
    window.rowNum = document.getElementById("getTableRows").value;
    window.colNum = document.getElementById("getTableCols").value;
    document.getElementById("tableGen").style.display="none";
    document.getElementById("tableEdit").style.display="block";
	var div = document.createElement("div");
	div.id = "tabDiv";
	div.style.cssText = "display:flex; flex-flow:column;align-items:center; margin: 100px 0;";
	var h1 = div.appendChild(document.createElement("h1"));
	h1.id = "header";
    var table = div.appendChild(document.createElement("table"));
	table.id = "tab";
	table.style.cssText="border-collapse: collapse;";
    for(var i = 0; i < rowNum; i++) {
        var tr = table.appendChild(document.createElement("tr"));
		tr.setAttribute("class", `r${i}`)
        for(var j = 0; j<colNum; j++) {
            var td = tr.appendChild(document.createElement("td"));
			td.setAttribute("class", "dim")
			td.appendChild(document.createElement("textarea"));
			td.id = `${i}_${j}`;
			var input = td.appendChild(document.createElement("input"));
			input.id = `inp_${i}_${j}`;
			input.setAttribute("type","button");
			input.setAttribute("value", "Сохранить");
			input.setAttribute("onclick", "saveMe(this.id)");
			td.style.cssText="vertical-align:middle;border:1px solid black;";
        }
    }
    document.body.appendChild(div);
}

function saveMe(s) {
	var prevEl = document.getElementById(s).previousSibling;
	prevEl.insertAdjacentText("beforebegin", prevEl.value);
	prevEl.remove();
	document.getElementById(s).remove();
}

function swap() {
	document.getElementById("Submit").value = `Применить ${document.getElementById("width").value} px и рамка ${document.getElementById("border").value}`;
}

function modTable() {
	var Width = document.getElementById("width").value;
	if (Width<1) { Width = 1 };
	if (Width>999) { Width = 999 };
	Border = document.getElementById("border").value;
	document.getElementById("tab").style.width = Width + "px";
	var x = document.querySelectorAll(".dim");
	for (var i = 0; i < x.length; i++) {
		x[i].style.border = Border;
	}
}

function addHeader() {
	var Header = document.getElementById("newHeader").value;
	document.getElementById("header").innerHTML = Header;
}

function delRowFunc() {
	var xCol = document.getElementById("delRow").value;
	var asd = document.querySelectorAll(`.r${xCol}`);
	for (var i = 0; i < asd.length; i++) {
		asd[i].remove();
	}
	window.rowNum -= 1;
}

function randomInt(min,max)
{
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function magic() {
	var mRow = Math.floor(Math.random() * (rowNum - 1 + 1));
	var mCol = Math.floor(Math.random() * (colNum - 1 + 1));
	
	elChancge = document.getElementById(`${mRow}_${mCol}`);
	elChancge.style.backgroundColor = `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
	elChancge.style.color = `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
	elChancge.style.fontSize = randomInt(15,25) + 'px';
}

function delTab() {
	document.getElementById("tabDiv").remove();
	document.getElementById("tableGen").style.display="block";
    document.getElementById("tableEdit").style.display="none";
}

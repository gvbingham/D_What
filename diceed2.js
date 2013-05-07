// JavaScript Document
var slots=new Array();
var re=new Array();
var total=new Array();
var tot;

function stepcalc()
{
  arrayclean ();
  clean ();
  remres ();
	var x=document.getElementById('step').value;
	if (x==4){slots=[6]}
	if (x==5){slots=[8]}
	if (x==6){slots=[10]}
	if (x==7){slots=[12]}
	if (x==8){slots=[6,6]}
	if (x==9){slots=[8,6]}
	if (x==10){slots=[10,6]}
	if (x==11){slots=[10,8]}
	if (x==12){slots=[10,10]}
	if (x==13){slots=[12,10]}
	if (x==14){slots=[20,4]}
	if (x==15){slots=[20,6]}
	if (x==16){slots=[20,8]}
	if (x==17){slots=[20,10]}
	if (x==18){slots=[20,12]}
	if (x==19){slots=[20,6,6]}
	if (x==20){slots=[20,8,6]}
	if (x==21){slots=[20,10,6]}
	if (x==22){slots=[20,10,8]}
	if (x==23){slots=[20,10,10]}
	if (x==24){slots=[20,12,10]}
	if (x==25){slots=[20,10,8,4]}
	if (x==26){slots=[20,10,8,6]}
	if (x==27){slots=[20,10,8,8]}
	if (x==28){slots=[20,10,10,8]}
	if (x==29){slots=[20,12,10,8]}
	if (x==30){slots=[20,10,8,6,6]}
	if (x==31){slots=[20,10,8,8,6]}
	if (x==32){slots=[20,10,10,8,6]}
	if (x==33){slots=[20,10,10,8,8]}
	if (x==34){slots=[20,10,10,10,8]}
	if (x==35){slots=[20,12,10,10,8]}
	if (x==36){slots=[20,20,10,8,4]}
	if (x==37){slots=[20,20,10,8,6]}
	if (x==38){slots=[20,20,10,8,8]}
	if (x==39){slots=[20,20,10,10,8]}
	if (x==40){slots=[20,20,12,10,8]}
	drawtray();
}

function writeresults()
{
	remres();
	var w=slots.length-1; //how many dice were added.
	var x=0; //slots
	var y; //die max
	while (x<=w)
	{
		y=slots[x];
		if (slots[x]==y);
		{
		var z=Math.ceil(Math.random()*slots[x]); //randomize
		if (y==4&&z==4){document.getElementById('result'+x).innerHTML='<img src="images/D'+y+''+z +'.gif" onclick="reroll(4)" />';}
		else if (y==6&&z==6){document.getElementById('result'+x).innerHTML='<img src="images/D'+y+''+z +'.gif" onclick="reroll(6)" />';}
		else if (y==8&&z==8){document.getElementById('result'+x).innerHTML='<img src="images/D'+y+''+z +'.gif" onclick="reroll(8)" />';}
		else if (y==10&&z==10){document.getElementById('result'+x).innerHTML='<img src="images/D'+y+''+z +'.gif" onclick="reroll(10)" />';}
		else if (y==12&&z==12){document.getElementById('result'+x).innerHTML='<img src="images/D'+y+''+z +'.gif" onclick="reroll(12)" />';}
		else if (y==20&&z==20){document.getElementById('result'+x).innerHTML='<img src="images/D'+y+''+z +'.gif" onclick="reroll(20)" />';}
		else{document.getElementById('result'+x).innerHTML='<img src="images/D'+y+''+z +'.gif"/>';}
		total.push(z);
		}
	x++;
	}
	totalit();
}

//This function will add the die value clicked on to the array and then draw the results in the dice roll box. In preperation for the dice to be rolled.
function adddie(x)
{
	slots.push(x);
	drawtray();
}		

function drawtray()
{
	arrayclean();
	var y=0;
    var z=slots.length-1;
    for (y=0;y<=z;y++)
    {
	var dienum=slots[eval (y)]
	var sloty='slot'+y
	var slothtml='<img src="images/D'+dienum+'.gif" onclick="rem('+y+');"/>'
    document.getElementById(sloty).innerHTML=slothtml;
    }
}

//each function rem1 through rem10 will allow the removal of the dice in the roll tray.
function rem(x)
{
	slots.splice(x,1);
	clean();
	remres();
	drawtray();
	
}

//This function is to remove all results
function remres()
{
	total.length=0;
	re.length=0;
	var x=0;
	for (x=0;x<=9;x++)
	{
		document.getElementById('result'+x).innerHTML='';
		document.getElementById('reroll'+x).innerHTML='';
	}
	document.getElementById('total').innerHTML='Total:';
}

//This function will clean all selected dice
function clean()
{
	var x=0;
	for (x=0;x<=9;x++)
	{
		document.getElementById('slot'+x).innerHTML='';
	}

}
//This function will clean the array and make certain that more than 10 dice are not added.
function arrayclean()
{
	
	if (slots.length>=11)
	{
		slots.splice(10,99);
		alert("This program will only allow 10 dice at a time.");
	}
}

function reroll(x)
{
	re.push(1);
	var w=re.length-1;
	var z=Math.ceil(Math.random()*x);
		if (x==4&&z==4){document.getElementById('reroll'+w).innerHTML='<img src="images/D'+x+''+z +'.gif" onclick="reroll(4)" />';}
		else if (x==6&&z==6){document.getElementById('reroll'+w).innerHTML='<img src="images/D'+x+''+z +'.gif" onclick="reroll(6)" />';}
		else if (x==8&&z==8){document.getElementById('reroll'+w).innerHTML='<img src="images/D'+x+''+z +'.gif" onclick="reroll(8)" />';}
		else if (x==10&&z==10){document.getElementById('reroll'+w).innerHTML='<img src="images/D'+x+''+z +'.gif" onclick="reroll(10)" />';}
		else if (x==12&&z==12){document.getElementById('reroll'+w).innerHTML='<img src="images/D'+x+''+z +'.gif" onclick="reroll(12)" />';}
		else if (x==20&&z==20){document.getElementById('reroll'+w).innerHTML='<img src="images/D'+x+''+z +'.gif" onclick="reroll(20)" />';}
		else{document.getElementById('reroll'+w).innerHTML='<img src="images/D'+x+''+z +'.gif"/>';}
	total.push(z);
	totalit();
}

function totalit ()
{
	var x=total.length-1;
	var y=0;
	var z=0;
	for (y=0;y<=x;y++)
	{
		var z=z+total[y]
	}
	document.getElementById('total').innerHTML='Total:'+z;
	tot=z;
	return tot;
}

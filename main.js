function $(x){return document.getElementById(x)}
$('advert').style.display = "none"
setTimeout( function(){advert()},20000)
screenValLengths = []
calcValLengths = []
calcValue = ""
//Shows a sliding advert
function advert() {
  markup = "<span id='close'>X</span><h3>Thank you for checking out Crown's calculator<br></h3>" +
			"<p>Please check out our <a href='https://steph-crown.github.io/tictactoe'>" +
			"TicTacToe</a> game</p>" +
			"Gracias ! 🙏</p>"
			
  $('advert').style.display = 'block';
  $('advert').innerHTML = markup;
  $('close').onclick = function(){$('advert').style.display = 'none'}
}
//A function for shift. Changes the special buttons properties
function shift() {
  if ($('notif').innerText) {
    $('notif').style.display = 'none';
    $('notif').innerText = '';
    $('sin-¹( Mat.asin(').id = 'sin( Mat.sin('
    $('cos-¹( Mat.acos(').id = 'cos( Mat.cos(';
    $('tan-¹( Mat.atan(').id = 'tan( Mat.tan(';
    $('³√( Math.cbrt(').id = '√( Math.sqrt('
    $('³ **3').id = '² **2'
    $('π Math.PI').id = 'e Math.E'
  }
  else {
  	$('notif').style.display = 'flex';
 	$('notif').innerText = 'S';
 	$( 'sin( Mat.sin(' ).id = 'sin-¹( Mat.asin(';
 	$( 'cos( Mat.cos(' ).id = 'cos-¹( Mat.acos(';
 	$('tan( Mat.tan(').id = 'tan-¹( Mat.atan(';
    $( '√( Math.sqrt(' ).id = '³√( Math.cbrt(';
    $( '² **2').id = '³ **3';
    $( 'e Math.E' ).id = 'π Math.PI'
  }
}

//Add clicked button values to screen and calc
function append(x) { 
  if (x.className == "fa") {
    $('hyp').style.display = "none";
  }
  if($('question').value) {
    res.value = "";
    $('question').value = ''
    calcValue = ""
    screenValLengths = []
    calcValLengths = []
    }
  res = $('result')
  res.value += x.id.slice(0,x.id.indexOf(" "));
  screenValLengths.push(x.id.slice(0,x.id.indexOf(" ")));
  res.scrollLeft = res.scrollWidth;
  calcValue += x.id.slice(x.id.indexOf(" ")+1);
  calcValLengths.push(x.id.slice(x.id.indexOf(" ")+1));
  
}

//Clears screen
function clears() {
  $('result').value = ""
  $('question').value = ""
  calcValue = ""
}

//Calculates result and displays
function equals() {
  res = $('result')
  que = $('question')
  que.value = res.value;
  try {
    ans = eval(parse(calcValue));
    if (String(ans)=='NaN') res.value = "Math Error";
    if (!isNaN(ans)) {
      if (String(ans).length > 8) {
        ans = Number.parseFloat(ans).toPrecision(9)
        if (!String(ans).includes('.')) ans = ans.toExponential()
      }
      ans = String(ans).replace("e+", "×10^").replace("e-", "×10^-")
      res.value = ans
      res.scrollLeft = 0;
      
    }
  }
  catch(err) {
    res.value = "Syntax Error";
  }
}
parse = a => {
  re1 = /([\d\)])([\(M])/g 
  re2 = /(g)([^\(])/g
  a = a.replace(re1, "$1*$2").replace(re2, "$110($2")
  return(a)
}
toRad = x => x * Math.PI/180
toDeg = x => x * 180/Math.PI
Mat = {}
Mat.sin = x => {
  if (x % 180 == 0) x = 0;
  return Math.sin(toRad(x));
}
Mat.cos = x => {
  if ((x - 90) % 180 == 0) return 0
  else return Math.cos(toRad(x));
}
Mat.atan = x => toDeg(Math.atan(x));
Mat.asin = x => toDeg(Math.asin(x));
Mat.acos = x => toDeg(Math.acos(x));
Mat.tan = x => {
  if (x % 180 == 0) x = 0
  if ((x/90)%2 == 1) {
    return "NaN"
  } 
  else {
    return Math.tan(toRad(x));
  }
}

function delet() {
  if($('question').value) {
  res.value = "";
  $('question').value = ''
  calcValue = ""
  screenValLengths = []
  calcValLengths = []
  }
  sLen = screenValLengths.pop().length
  cLen = calcValLengths.pop().length
  res.value = res.value.slice(0,res.value.length-sLen)
  calcValue = calcValue.slice(0,calcValue.length-cLen)
}
function hyp() {
  if ($('hyp').style.display == 'grid') {$('hyp').style.display = 'none'}
  else {
  markup =		"<div id='sinh( Math.sinh(' onclick='append(this)' class='fa'>sinh</div>" +
  				"<div id='cosh( Math.cosh(' onclick='append(this)' class='fa'>cosh</div>" +
  				"<div id='tanh( Math.tanh(' onclick='append(this)' class='fa' >tanh</div>" +
  				"<div id='sinh-¹( Math.asinh(' onclick='append(this)' class='fa'>sinh-¹</div>" +
  				"<div id='cosh-¹( Math.acosh(' onclick='append(this)' class='fa'>cosh-¹</div>" +
  				"<div id='tanh-¹( Math.atanh(' onclick='append(this)' class='fa'>tanh-¹</div>"
  $('hyp').style.display='grid';
  $('hyp').innerHTML = markup
  }
}
function count(){
  var countWords = document.getElementById("textarea").value.match(/\b[-?(\w+)?]+\b/gi);
  document.getElementById('count-word').innerText = countWords.length;


  var countChar = document.getElementById("textarea").value;
  document.getElementById('count-char').innerText = countChar.length;


  var str = document.getElementById("textarea").value;
    index = 0,
    spaces = [];
   while ((index = str.indexOf(' ', index + 1)) > 0) {
    spaces.push(index);
    }
  document.getElementById('count-wspace').innerText = spaces.length;


  var newLine = document.getElementById("textarea").value;
  newLine= newLine.split("\n");
  document.getElementById('count-newLine').innerText = newLine.length;
  
}






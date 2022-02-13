function clr()
{
 document.getElementById("textval").value = ""
}
function display(val)
{
 document.getElementById("textval").value+=val
 }
function doEvaluate()
{
 let x = document.getElementById("textval").value
 console.log(x);
 let y = eval(x)
 document.getElementById("textval").value = y
}
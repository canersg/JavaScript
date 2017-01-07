//Written by Caner Sarigul - 17.10.2016
//Create two different glasses, one is martini glass which is full of martini (value = 100)
//The other glass is empty (value = 0) The program spills martini from martini glass to empty glass
// Define Glass class
function Glass(id, color, value, icon) {
    this.id= id,
    this.color =color,
    this.value=value,
    this.icon= icon,
    this.status= function(){
        return this.value;
    },
    // add spill function
    this.spill = function (value) {
        this.value -= value;
        return value;
    },
    // add fill function
    this.fill = function (value) {
        this.value += value;
    }
}
// add external attribute
Glass.prototype.type = "Standart Glass";
// override toString function
Glass.prototype.toString= function()
{
    return "Glassid: " + this.id + " " + " Color: " + this.color + " " + " Value: " + this.value+ " Glass Type: "+ this.type;
}
// Define a new class (Martini Glass) which will inherit from Glass class
function MartiniGlass(){
    this.type = "Martini Glass";
}
// Create a new glass object 
var glass1 = new Glass("1", "white", 0, "whiteIcon");
// Print object 
alert("Create empty glass1");
alert(glass1.toString());
// create martini glass
MartiniGlass.prototype = new Glass();
// inherit martini class from glass
MartiniGlass.constructor = MartiniGlass;
// initilize martini class
var martini1 = new MartiniGlass();
alert("Create empty martini glass");
martini1.color = "red";
martini1.icon = "icon";
martini1.id = 2;
alert("Fill martini glass");
martini1.value = 100;
alert(martini1.toString());
alert("Spill 20 percent the Martini to the empty glass1");
// spill martini glass to normal glass
glass1.fill(martini1.spill(20));
// print last status
alert("Last result of the the martini1:" + martini1.toString());
alert("Last result of the the glass1:" + glass1.toString());


//#region
// var username=prompt("Enter your name")
// var date_of_birth=prompt("Enter your year of birth")
// var the_date=2021-date_of_birth
// var fullname="Your name is " +username + " and your Age is "+the_date

// var conf= confirm("Is this correct information? " +"\n Your Info is : "+fullname)

// if(conf==true)
// {
//   alert("Great")
// }
// else
// {
//   alert("The page will be refreshed \n to try again ")
//   document.location.reload()
// }
// var para=document.createElement("h5")
// var node=document.createTextNode(fullname)
// para.appendChild(node)
// var element =document.getElementById("photo")
// element.appendChild(para)
//endregion

alert("Hello my friend, can I take you for a tour of my website")
alert("Before that, let me know about the top Arab capitals that you like best")

var number_cities=prompt("You can tell me from 3 to 5 cities only.. How many cities would you like to tell me?")

while(number_cities < 3 || number_cities > 5)
{
alert("oops Whatch out ! The number must be between 1 and 5")
var number_cities=prompt("You can tell me from 3 to 5 cities only.. How many cities would you like to tell me?")
}


for (let index = 0; index < number_cities; index++) 
{
var cityname= prompt("plz Enter the capital number "+(index+1))
var newelement=document.createElement("li")
var linode=document.createTextNode(cityname)
newelement.appendChild(linode)
document.getElementById("ul-bigphoto").appendChild(newelement).classList.add("ul-bigphoto")
}

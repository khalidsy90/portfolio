var username=prompt("Enter your name")
var date_of_birth=prompt("Enter your year of birth")
var the_date=2021-date_of_birth
var fullname="Your name is " +username + " and your Age is "+the_date

var conf= confirm("Is this correct information? " +"\n Your Info is : "+fullname)

if(conf==true)
{
  alert("Great")
}
else
{
  alert("The page will be refreshed \n to try again ")
  document.location.reload()
}
var para=document.createElement("h5")
var node=document.createTextNode(fullname)
para.appendChild(node)
var element =document.getElementById("photo")
element.appendChild(para)

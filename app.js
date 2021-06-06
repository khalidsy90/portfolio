<<<<<<< HEAD
function intro()
{
    alert("Hello my friend, can I take you for a tour of my website")
    alert("Before that, let me know about the top Arab capitals that you like best")
}

intro()

var number_cities=prompt("You can tell me from 3 to 5 cities only.. How many cities would you like to tell me?")

=======
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

>>>>>>> 96413dd69a1c5376f3333b69cc8e92350ce480ce
while(number_cities < 3 || number_cities > 5)
{
alert("oops Whatch out ! The number must be between 1 and 5")
var number_cities=prompt("You can tell me from 3 to 5 cities only.. How many cities would you like to tell me?")
}
<<<<<<< HEAD
const pic_links=['https://cdn.kimkim.com/files/a/content_articles/featured_photos/48c38e1bc7ac4fe65333bd312a62e078974a4825/big-bff021ba0a331150d63cd1046fb2b573.jpg','https://www.aljazeera.net/wp-content/uploads/2014/10/801fd40b-7f45-41e9-a1d7-33ab280be8a5.jpeg?resize=686%2C513','https://www.skynewsarabia.com/images/v1/2019/11/19/1298987/800/450/1-1298987.jpg','https://media.alalamtv.net/uploads/855x495/2021/05/02/161995042149922500.jpg']
var x= document.getElementById("div-photo")
for (let index = 0; index < number_cities; index++) 
{
var cityname= prompt("plz Enter the capital number "+(index+1))
var source=pic_links[index]
x.innerHTML+="<img src="+ source +" alt=''> "


// var newelement=document.createElement("li")
// var linode=document.createTextNode(cityname)
// newelement.appendChild(linode)
// document.getElementById("ul-bigphoto").appendChild(newelement).classList.add("ul-bigphoto")
}

var message=function(msg)
{
    alert(msg)
}

message("Don't forget Jerusalem")
=======


for (let index = 0; index < number_cities; index++) 
{
var cityname= prompt("plz Enter the capital number "+(index+1))
var newelement=document.createElement("li")
var linode=document.createTextNode(cityname)
newelement.appendChild(linode)
document.getElementById("ul-bigphoto").appendChild(newelement).classList.add("ul-bigphoto")
}
>>>>>>> 96413dd69a1c5376f3333b69cc8e92350ce480ce

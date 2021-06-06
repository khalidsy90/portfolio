function intro()
{
    alert("Hello my friend, can I take you for a tour of my website")
    alert("Before that, let me know about the top Arab capitals that you like best")
}

intro()

var number_cities=prompt("You can tell me from 3 to 5 cities only.. How many cities would you like to tell me?")

while(number_cities < 3 || number_cities > 5)
{
alert("oops Whatch out ! The number must be between 3 and 5")
var number_cities=prompt("You can tell me from 3 to 5 cities only.. How many cities would you like to tell me?")
}
const pic_links=['https://cdn.kimkim.com/files/a/content_articles/featured_photos/48c38e1bc7ac4fe65333bd312a62e078974a4825/big-bff021ba0a331150d63cd1046fb2b573.jpg','https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2021/04/27/2593776-1585438581.jpg?itok=WXwjI_AZ','https://modo3.com/thumbs/fit630x300/2976/1580305634/%D8%A7%D9%84%D9%82%D8%AF%D8%B3.jpg','https://www.skynewsarabia.com/images/v1/2019/11/19/1298987/800/450/1-1298987.jpg','https://media.alalamtv.net/uploads/855x495/2021/05/02/161995042149922500.jpg']
var x= document.getElementById("ul-bigphoto")
for (let index = 0; index < number_cities; index++) 
{
var cityname= prompt("plz Enter the capital number "+(index+1))
var source=pic_links[index]
x.innerHTML+="<li>"+(index+1)+"<img src="+ source +" alt='city'></li> "


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
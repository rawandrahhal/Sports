var name = prompt("what is ur name" )

alert("welcome to pest sport web" + name)


var favsport = prompt("what is ur fav sport from these (football, tennis, swimming)?")



while(favsport != "football" && favsport != "tennis" && favsport != "swimming" ){
  favsport = prompt("what is ur fav sport from these (football, tennis, swimming)?")

}




if (favsport == "football") {
  document.write("<p>" + "great thing that u love football cos we have it here in our webpage" + "</p>")

}
else if (favsport == "tennis") {
  document.write("<p>" + "ohhh so u can see it here in our web" + "</p>")

}
else if (favsport == "swimming") {
  document.write("<p>" + "that good coz we have about it here" + "</p>")
}

else {
  alert(" sorry ")

}

rating ()

function rating() {

  var sport = prompt(" what is ur favsport of these? (football , tennis , swimming)?")


  if (sport == "football") {
    document.write("<p>" + "GREAT" + "</P>")
  }

  else if (favsport == tennis) { document.write("<p>" + "ohhh u can see about it here" + "</P>") }


  else {
    alert("sorry")
  }


}

function rating2() {
  var starnum = Number (prompt("how many stars do u rate football?"))

  for (var i = 0; i < starnum; i++) {
    document.write(
      "<img src ='http://res.publicdomainfiles.com/pdf_view/54/13527173411344.png'>")

  }
}
rating2();


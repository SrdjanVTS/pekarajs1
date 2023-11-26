
function dan(){
    
var datum=new Date();
var dan=datum.getDay();
sadrzaj="";
switch(dan)
{
case 2:
sadrzaj="<marquee >Sacuvajte danasnji racun i dobijate popust na limunadu!</marquee>";
break;
case 3:
sadrzaj="<marquee >Da pregurate dugu sredu spremili smo vam 10% popusta na slatko!</marquee>";
break;
case 5:
    sadrzaj="<marquee >Danas je petak dan za metak i time dobija popust od 15% na sve vrste bureka!</marquee>";;
break;
case 6:
    sadrzaj="<marquee >Samo subotom od 21:00 vas ocekuje popust na kombinaciju burek + jogurt za samo 199 DIN! </marquee>";
break;
default:
    sadrzaj="<marquee >Danas je lep dan da se pocastite u BISER pekari</marquee>";
break;
}
let polje1 =document.getElementById("polje1").innerHTML= sadrzaj;
}




function tabela(x) {
  var p = document.getElementById("naslov1");
  var p2 = document.getElementById("naslov2");

  var proizvodi = [];
  if (x === 1) {
    proizvodi = [
      { ime: "Burek", cena: "190DIN", link: "kontakt.html" },
      { ime: "Sarajevska pita", cena: "160DIN", link: "kontakt.html" },
      { ime: "Hleb", cena: "80DIN", link: "kontakt.html" }
    ];
    p.style.background="#EDCAA1";
    p.style.color="rgb(243, 243, 243)";
    p.style.boxShadow="none";
    var polje2 = document.getElementById("polje2");

  } else if (x === 2) {
    proizvodi = [
      { ime: "Krofna", cena: "100DIN", link: "kontakt.html" },
      { ime: "Kroasan", cena: "120DIN", link: "kontakt.html" },
      { ime: "Baklava", cena: "150DIN", link: "kontakt.html" }
    ];
    p2.style.background="#EDCAA1";
    p2.style.color="rgb(243, 243, 243)";
    p2.style.boxShadow="none";
    var polje2 = document.getElementById("polje3");
  }

  var sadrzaj = "<table>";
  for (var i = 0; i < proizvodi.length; i++) {
    sadrzaj += "<tr><td>" + proizvodi[i].ime + "</td><td>" + proizvodi[i].cena + "</td><td><a href='" + proizvodi[i].link + "'>Kupi</a></td></tr>";
  }
  sadrzaj += "</table>";
  polje2.innerHTML = sadrzaj;
}


function pozdrav(team){

alert("Hvala sto kupujete kod nas, veliki pozdrav od "+team+" pekare!");

}
function ispisiPodatke() {
  const inputFields = document.querySelectorAll('.input');
  const textareaField = document.querySelector('textarea');
  let tekst = '';
  inputFields.forEach((input) => {
    tekst += `${input.placeholder}: ${input.value}\n`;
  });
  tekst += `Detalji: ${textareaField.value}`;
  
  alert("Podaci vase porudzbine:\n"+tekst);
}
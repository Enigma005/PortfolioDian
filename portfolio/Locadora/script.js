function validationForm() {
 let validationCod = document.forms['register']["cod"].value;
 let validationTitle = document.forms['register']["title"].value;
 let validationDirector = document.forms['register']["director"].value;
 let validationDate = document.forms['register']["date"].value;
 let validationRadio = document.forms['register']["radio"].value;
 let validationLeadActorActress = document.forms['register']["LeadActorActress"].value;
 let validationIMDb = document.forms['register']["IMDb"].value;
 
 if (validationCod == "") {
   alert("O código deve ser preenchido");
  return false;
 }
 if (validationTitle == "") {
   alert("O titulo deve ser preenchido");
   return false;
 }
 if (validationDirector == "") {
    alert("O Nome do diretor deve ser preenchido");
    return false;
 }
 if (validationDate == "") {
    alert("A data deve ser preenchida");
    return false;
 }
 if (validationRadio == "") {
    alert("O Gênero deve ser preenchido");
    return false;
 }
 if (validationLeadActorActress == "") {
    alert("O Ator e a Atriz Principal deve ser preenchido");
    return false;
 }
 if (validationIMDb == "") {
    alert("O IMDb deve se preenchido");
    return false;
 }

 alert("A validação ocorreu de forma correta");
}

function insert() {
  let cod = document.forms["register"]["cod"].value;
  let title = document.forms["register"]["title"].value;
  let director = document.forms["register"]["director"].value;
  let date = document.forms["register"]["date"].value;
  let radio = document.forms["register"]["radio"].value;
  let LeadActorActress = document.forms["register"]["LeadActorActress"].value;
  let IMDb = document.forms["register"]["IMDb"].value;

  let insert = window.document.getElementById("insertRow").

  insert.innerHTML = `
  <th scope='row'>${cod}</th>
  <td>${title}</td>
  <td>${director}</td>
  <td>${date}</td>
  <td>${radio}</td>
  <td>${LeadActorActress}</td>
  <td>${IMDb}</td>
  `;
}

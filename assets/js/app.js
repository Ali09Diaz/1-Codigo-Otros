const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog'); //Se agrega un . porque es una clase
const $l = document.querySelector('.location');

async function displayUser(username) { //se agrega un async
  $n.textContent = 'cargando...';  
  const response = await fetch(`${usersEndpoint}/${username}`); //No puede existir un await sin un async, asi que la agregamos 
  const data = await response.json(); //Se agrega JSON con un await

  //Recibe informacion en formato JSON
  console.log(data); 
  $n.textContent = data.name; //Lo convierte a string

  //console.log($n);
  $b.textContent = data.blog;
  $l.textContent = data.location; //No esta en html, hay que agregarlo 
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` //Se acomoda la variable con el $
}

displayUser('stolinski').catch(handleError); //Manda llamar la funcion, le mete el usuario 

/*El codigo se conecta con una API y asi recibir un objeto JSON para poder mostrarlo en consola. Además proporciona manejo de errores básico para tratar problemas de conexión o datos incorrectos. */
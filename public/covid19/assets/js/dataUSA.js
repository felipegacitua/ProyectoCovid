//capturando data de USA
fetch('http://localhost:3000/api/total')
  .then(res => res.json())
  .then(data => dataUSA(data))
  .catch(err => console.log(err, "Ocurrio un error"))

const dataUSA = (data) => {
  console.log("mostrando la data USA:", data[0]);
};


//en proceso JWT aun pero por buen camino 
const PostData = async (email, password) => {
  try {
    console.log('EMAIL', email)
    console.log('PASSWORD', password)
    let payload = { email, password }
    const response = await fetch('http://localhost:3000/api/login',
      {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)

      });
  //   console.log('TOKEN FRONT', responde.json())
    const token = await response.json()
    console.log('TOKEN FRONT', token)
    if (token) {
      console.log("acceso exitoso")
      return token

    }else(console.log("acceso denegado"))


  } catch (error) {
    console.log(error);
  }


};
let email = '';
let password = '';

document.getElementById('formulario').addEventListener("submit", (event)=>{
  event.preventDefault();
   email = document.getElementById('exampleInputEmail1').value;
   password = document.getElementById('exampleInputPassword1').value;
   PostData(email,password);
})




























// const getData = async (jwt) => {
//   try {
//     console.log('Que retorna el token?', jwt)
//     let { token } = jwt
//     console.log('Que retorna el token 2', token)
//     const response = await fetch(`http://localhost:3000/api/country/usa`,
//       {
//         method: 'GET',
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       })
//   }catch{error}
  

//  };


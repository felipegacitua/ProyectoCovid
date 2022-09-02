//capturando data de USA
/* fetch('http://localhost:3000/api/total')
  .then(res => res.json())
  .then(data => dataUSA(data))
  .catch(err => console.log(err, "Ocurrio un error"))
 */
/* const dataUSA = (data) => {
  console.log("mostrando la data USA:", data[0]);
  //getData();
};
 */
//en proceso JWT aun pero por buen camino 
const PostData = async (email, password) => {
  try {
    console.log('EMAIL', email)
    console.log('PASSWORD', password)
    let payload = { email, password }
    const response = await fetch('http://localhost:3000/api/login',
    {
      method: "POST" ,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
      
    });
    console.log('TOKEN FRONT', await response.json())
    const token = await response.json()
    console.log('TOKEN FRONT', token)
   // if (token) {
      console.log("acceso exitoso");
      return token

   // }else(console.log("acceso denegado"))
  }catch(error){
    console.log(error);
  }
  
};

const getData = async (jwt) => {
  try {
    let { token } = jwt;

    const response = await fetch('http://localhost:3000/api/country/usa',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    const data = await response.json()
    return data
  } catch (err) {
    console.log(`Error: ${err}`)
  }
};

document.getElementById('formulario').addEventListener('submit', async (event) => {
  event.preventDefault()
  const email = document.getElementById('exampleInputEmail1').value;
  const password = document.getElementById('exampleInputPassword1').value
  const JWT = await PostData(email, password)
  const posts = await getData(JWT)
  console.log(posts)
})
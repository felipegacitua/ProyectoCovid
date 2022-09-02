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
      method: "POST" ,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
      
    });
    //   console.log('TOKEN FRONT', responde.json())
    const token = await response.json()
    console.log('TOKEN FRONT', token)
    if (token) {
      console.log("acceso exitoso")
      return token

    }else(console.log("acceso denegado"))
  }catch(error){
    console.log(error);
  }
  
};

// const postData = async (email, password) => {
//   try {
    
//    const response = await fetch('http://localhost:3000/api/login', {
//    method:'POST',
//    body: JSON.stringify({email:email,password:password})
//    })
   
//    const {token} = await response.json()
   
//    return token
//   } catch (err) {
//    console.error("error")
//   }
//   console.log({token})
//   }



const maindata = document.querySelector('.qoute')
console.log(maindata)
const getjock= async() =>{

  const rest = await fetch('https://api.chucknorris.io/jokes/random')
  const data= await rest.json()
  maindata.textContent=data.value;
  console.log(data.value)

}

   const btn = document.querySelector('.button')
   
   
   btn.addEventListener('click', ()=>{
       getjock()
   })
   

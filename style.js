const loadCard = async () => {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    const data = await res.json()
    displayCard(data.categories)
  
}

const displayCard = (data) => {
    const mainContainer = document.getElementById('mainContainer')
    

    const items = data.slice(1,7)



    items.forEach(item => {
       
        const { strCategory, strCategoryThumb, strCategoryDescription, idCategory } = item
        const div = document.createElement('div')
        div.innerHTML =

            `

<div class="card bg-base-100 h-[500px] shadow-xl">
  <figure class="px-10 pt-10">
    <img
      src="${strCategoryThumb}"
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${strCategory}</h2>
    <p>${strCategoryDescription}</p>
    <div class="card-actions">
      <button class="btn btn-primary">view Details</button>
    </div>
  </div>
</div>


        
        `
        
        mainContainer.append(div)
    })

}

loadCard()


const seeMore = async()=>{
   
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        const data = await res.json()
     
  
        const see = data.categories
        const all = see.slice(7, 14)
        displayAll(all)

        
   
      
    }

const displayAll=(all)=>{


    const mainContainer = document.getElementById('mainContainer')





   all.forEach(item => {
       
        const { strCategory, strCategoryThumb, strCategoryDescription, idCategory } = item
        const div = document.createElement('div')
        div.innerHTML =

            `

<div class="card bg-base-100 h-[500px] shadow-xl">
  <figure class="px-10 pt-10">
    <img
      src="${strCategoryThumb}"
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${strCategory}</h2>
    <p>${strCategoryDescription}</p>
    <div class="card-actions">
      <button class="btn btn-primary">view Details</button>
    </div>
  </div>
</div>


        
        `
        
        mainContainer.append(div)
    })








}
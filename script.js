// class ".rating__value" elements selected
const textRating = document.querySelector('.rating__value')
// class ".rating__star" elements selected
const stars = document.querySelectorAll('.rating__star')
// for selecting all star and all index 
stars.forEach((star, index) => {
    // used eventlistner for the click action for every elements
    star.addEventListener('click', (e) => {
        console.log('The stars NodeList:')
        // for all stars
        console.log(stars)
        console.log('The clicked star element:')
        // for select star will show rest of the star will off
        console.log(star)
        stars.forEach((tempstar,temindex)=>{
            if (temindex<=index){
                tempstar.classList.add('rating__star--on')

            }else{
                tempstar.classList.remove('rating__star--on')
            }
        })
        console.log('The index of the clicked star in the NodeList:')
        console.log(index)
        console.log('Rating expressed by text:')
        // changing text content after select
        console.log(textRating.textContent)
        textRating.textContent = index+1
        console.log('Rating text clicked')
    })

})

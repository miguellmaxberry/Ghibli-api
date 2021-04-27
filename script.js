let allMovieData;


const display = (allMovieData) => {
    console.log(document.querySelector("body > h1"))
    document.querySelector("body > h1") = allMovieData.original_title

}

let generateBtn = document.querySelector(".submit-btn");

document.addEventListener('DOMContentLoaded', async() => {
    await getMovieData();
    console.log(allMovieData)
})
const getMovieData = async() => {
    let url = 'https://ghibliapi.herokuapp.com/films'
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            allMovieData = data[0]
                //display(allMovieData)
        })
}
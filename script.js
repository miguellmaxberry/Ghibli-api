let allMovieData;

document.addEventListener('DOMContentLoaded', async() => {
    await getMovieData();
    console.log(allMovieData)
})
const getMovieData = async() => {
    let url = 'https://ghibliapi.herokuapp.com/films'
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            allMovieData = data;
        })
}
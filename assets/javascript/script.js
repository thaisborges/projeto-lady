function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light');

    //pegar a tag img
    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/img/sun.png')
    } else {
        img.setAttribute('src', './assets/img/moon.png')
    }

    const alt = document.querySelector("#profile img")

    if(html.classList.contains('light')) {
        alt.setAttribute('alt', '.homem sorrindo óculos escuro')
    } else {
        alt.setAttribute('alt', 'homem sorrindo óculos transparente')
    }


}
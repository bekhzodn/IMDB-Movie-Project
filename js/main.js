// Navbar
// ==============================
let navMenu = document.querySelector('#nav_menu');
let navMenuItems = document.querySelector('#navMenuItems');
let navMenuItemsClose = document.querySelector('#navMenuItemsClose');

navMenu.addEventListener('click', function navMenu() {
    navMenuItems.style.top = '0'
    navMenuItems.style.transition = '0.3s ease'
    document.querySelector('body').style.overflow = 'hidden'
})
navMenuItemsClose.addEventListener('click', function navMenuClose() {
    navMenuItems.style.top = '-100%'
    navMenuItems.style.transition = '0.3s ease'
    document.querySelector('body').style.overflow = 'auto'
})

document.querySelector('#search_drp_btn').addEventListener('click', function allBtnMenu() {
    document.querySelector('#allBtnMenu').classList.toggle('search-btn-show')
    document.querySelector('.fa-caret-down').classList.toggle('ic-transform')
})

// Header
// ==============================

let btns = document.querySelectorAll('.header-btn'),
    tabs = document.querySelectorAll('.tabs');

btns.forEach((item, index) => {
    item.addEventListener('click', () => {
        for (let i = 0; i < btns.length; i++) {
            tabs[i]?.classList.remove('active')
            btns[i].classList.remove('active')
        }
        tabs[index]?.classList.add('active', 'fade')
        item.classList.add('active')
    })
})

// Tabs content
// ==============================

let trailerss = document.querySelector('.trailers');

for (let i of trailers) {
    let trailerBox = document.createElement('a')
    trailerBox.classList.add('trailer-box')
    trailerss.append(trailerBox)
    trailerBox.target = '_blank'
    trailerBox.href = i.youtube

    let imgBox = document.createElement('div')
    imgBox.classList.add('img-box')
    trailerBox.append(imgBox)

    let playIcBox = document.createElement('div')
    playIcBox.classList.add('play-ic-box')
    imgBox.append(playIcBox)

    let playIc = document.createElement('i')
    playIc.classList.add('fa-solid', 'fa-circle-play', 'playtime')
    playIcBox.append(playIc)

    let playIcHover = document.createElement('i')
    playIcHover.classList.add('fa-solid', 'fa-circle-play', 'playichover')
    playIcBox.append(playIcHover)

    let playTime = document.createElement('p')
    playTime.classList.add('play-time')
    playTime.textContent = i.time
    playIcBox.append(playTime)

    let trailerImg = document.createElement('img')
    trailerImg.classList.add('trailer-img')
    trailerImg.src = i.img
    imgBox.append(trailerImg)

    let trailerData = document.createElement('div')
    trailerData.classList.add('trailer-data')
    trailerBox.append(trailerData)

    let trailerNameEng = document.createElement('p')
    trailerNameEng.classList.add('trailer-name-eng')
    trailerNameEng.textContent = i.name1
    trailerData.append(trailerNameEng)

    let trailerNameRus = document.createElement('p')
    trailerNameRus.classList.add('trailer-name-rus')
    trailerNameRus.textContent = i.name
    trailerData.append(trailerNameRus)

    let trailerJanr = document.createElement('p')
    trailerJanr.classList.add('trailer-janr')
    trailerJanr.textContent = `Жанр:${i.janr}`
    trailerData.append(trailerJanr)
}


tabs.forEach((item) => {
    if (item.childElementCount == 0) {
        let emptyBox = document.createElement('div')
        emptyBox.classList.add('empty-box')
        item.append(emptyBox)

        let emptyBoxTitle = document.createElement('h1')
        emptyBoxTitle.classList.add('empty-box-title')
        emptyBoxTitle.textContent = 'There Is No Movies'
        emptyBox.append(emptyBoxTitle)

        let emptyBoxImg = document.createElement('img')
        emptyBoxImg.classList.add('empty-box-img')
        emptyBoxImg.src = 'img/empty-list.png'
        emptyBox.append(emptyBoxImg)
    }
})
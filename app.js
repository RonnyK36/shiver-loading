const header = document.getElementById("header")
const title = document.getElementById("title")
const excerpt = document.getElementById("excerpt")
const profile_img = document.getElementById("profile_img")
const userName = document.getElementById("name")
const date = document.getElementById("date")

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500);
// data may be gotten from API
function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=957&q=80" alt="">'

    title.innerHTML = 'Free Cocktails.'
    excerpt.innerHTML = 'Enjoy free drinks that will be offered by our amazing waiters in launch day.'
    profile_img.innerHTML = '  <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="author">'

    userName.innerHTML = 'Kelvin Rono'
    date.innerHTML = 'August 22, 2022'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))

    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))

}
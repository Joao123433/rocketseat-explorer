btnSwitch.addEventListener('click', () => {
  const html = document.documentElement
  html.classList.toggle('white')

  const imgProfile = document.querySelector('#imgProfile')

  const imgGithub = document.querySelector('.github')
  const imgInsta = document.querySelector('.insta')
  const imgYoutu = document.querySelector('.youtu')
  const imgLinke = document.querySelector('.linke')


  if(html.classList.contains('white')) {
    console.log(btnSwitch)
    imgProfile.setAttribute('src', 'assets/avatar-light.png')
    btnSwitch.setAttribute('src', 'assets/sun.svg')

    imgGithub.setAttribute('src', 'assets/GitHub-black.svg')
    imgInsta.setAttribute('src', 'assets/Instagram-black.svg')
    imgYoutu.setAttribute('src', 'assets/LinkedIn-black.svg')
    imgLinke.setAttribute('src', 'assets/YouTube-black.svg')

  } else {
    console.log(22222)
    imgProfile.setAttribute('src', 'assets/avatar.png')
    btnSwitch.setAttribute('src', 'assets/moon-stars.svg')

    imgGithub.setAttribute('src', 'assets/GitHub.svg')
    imgInsta.setAttribute('src', 'assets/Instagram.svg')
    imgYoutu.setAttribute('src', 'assets/LinkedIn.svg')
    imgLinke.setAttribute('src', 'assets/YouTube.svg')
  }
})

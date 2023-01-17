// about shoe more area 

let readMoreBtn = document.querySelector('.Read-more-content')
let readMoreContent;

document.querySelector("#Read").onclick = () => {
  readMoreBtn.classList.toggle('show-content');

}



// navbar

let navBar = document.querySelector('.navbar')


document.querySelector('.menu-btn').onclick = () => {
  navBar.classList.toggle('shownav');


};


window.onscroll = () => {
  navBar.classList.remove('shownav')
}



// skills show more 


const skillsItems = document.querySelectorAll('.skill')


skillsItems.forEach(skill => {
  skill.querySelector('#head').addEventListener('click', () => {
    skill.querySelector('.items').classList.toggle('show-items')
  })
})


// swipper JS
var menuButton = document.querySelector('.menu-button');
var openMenu = function () {
  swiper.slidePrev();
};
var swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  initialSlide: 1,
  resistanceRatio: 0,
  slideToClickedSlide: true,
  on: {
    slideChangeTransitionStart: function () {
      var slider = this;
      if (slider.activeIndex === 0) {
        menuButton.classList.add('cross');
        // required because of slideToClickedSlide
        menuButton.removeEventListener('click', openMenu, true);
      } else {
        menuButton.classList.remove('cross');
      }
    },
    slideChangeTransitionEnd: function () {
      var slider = this;
      if (slider.activeIndex === 1) {
        menuButton.addEventListener('click', openMenu, true);
      }
    },
  },
});



// add box shadow on scroll

window.addEventListener("scroll", () => {
  document.querySelector('nav').classList.toggle('show-box-shadow', window.scrollY > 0);
})



// add active class

const navItms = document.querySelectorAll('li')

const changeActiveItms = () => {
  navItms.forEach(item => {
    const link = item.querySelector('a')
    link.classList.remove('active')

  })
}



navItms.forEach(item => {
  const link = item.querySelector('a');
  link.addEventListener('click', () => {
    changeActiveItms()
    link.classList.add('active')
  })
})







 
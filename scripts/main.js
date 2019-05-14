class Slider {
  constructor(selector, sliding)
  {
    this.slider = document.querySelector(selector)
    this.sliding = sliding
    this.currentPosition=0
    this.sliderContainer
    // pour savoir la largeur d'un item
    this.sliderCardWidth=this.slider.querySelector('.card').offsetWidth;
    // pour savoir combien il y a d'items
    this.numberItems = this.slider.querySelectorAll('.card').length

    this.arrowNext
    this.arrowPrev
    this.arrowNav

    this.init()

    this.hideArrow()
  }

  init()
  {

    // ajout de la div intermédiaire
    this.sliderContainer= document.createElement('div')
    this.sliderContainer.classList.add('sliderContainer')
    this.sliderContainer.style.width= this.numberItems*this.sliderCardWidth +'px'
    this.sliderContainer.innerHTML = this.slider.innerHTML
    this.slider.innerHTML= '';
    this.slider.appendChild(this.sliderContainer)

    // ajout des fleches

    this.arrowNav = document.createElement('div')
    this.arrowNav.classList.add('arrowNav')
    this.slider.appendChild(this.arrowNav)

    this.arrowNext = document.createElement('div')
    this.arrowNext.classList.add('arrowNext')
    this.arrowNav.appendChild(this.arrowNext)

    this.arrowPrev = document.createElement('div')
    this.arrowPrev.classList.add('arrowPrev')
    this.arrowNav.appendChild(this.arrowPrev)

    this.arrowNext.addEventListener('click',()=>
    {
      this.currentPosition = this.currentPosition + this.sliding
      let toSlide = this.sliderCardWidth*this.currentPosition
      this.sliderContainer.style.transform= 'translateX(-'+toSlide+'px)'
      this.hideArrow()
    })

    this.arrowPrev.addEventListener('click',()=>
    {
      this.currentPosition = this.currentPosition - this.sliding
      let toSlide = this.sliderCardWidth*this.currentPosition
      this.sliderContainer.style.transform= 'translateX(-'+toSlide+'px)'
      this.hideArrow()
    })
  }

hideArrow()
  {
    if(this.currentPosition==0)
    {
      this.arrowPrev.classList.remove('is-visible')
    }
    else{
      this.arrowPrev.classList.add('is-visible')
    }

    if(this.currentPosition+this.sliding>=this.numberItems){
      this.arrowNext.classList.remove('is-visible')
    }
    else{
      this.arrowNext.classList.add('is-visible')
    }

  }
}


let mySlide = new Slider('.slider',2)

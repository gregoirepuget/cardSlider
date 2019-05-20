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
    this.cards = this.slider.querySelectorAll('.card')
    this.css= document.createElement('style')
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


    this.slider.innerHTML= '';
    this.slider.appendChild(this.sliderContainer)

    for(let i=0; i<this.cards.length; i++)
    {
      this.sliderContainer.appendChild(this.cards[i])
    }


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

    //ajout du style
    this.slider.appendChild(this.css)

    this.arrowNext.addEventListener('click',()=>
    {
      this.currentPosition = this.currentPosition + this.sliding
      let toSlide = this.sliderCardWidth*this.currentPosition
      console.log(this.cards)
      this.cards.forEach(function(element, index, array) {
        console.log(element)
        element.style.transform= 'translateX(-'+toSlide+'px)'
      })
      this.css.innerHTML= '.sliderContainer .card:hover {transform:translate(-'+toSlide+'px, 4px)}'
      this.hideArrow()
    })

    this.arrowPrev.addEventListener('click',()=>
    {
      this.currentPosition = this.currentPosition - this.sliding
      let toSlide = this.sliderCardWidth*this.currentPosition

      this.cards.forEach(function(element, index, array) {

        element.style.transform= 'translateX(-'+toSlide+'px)'
      })

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

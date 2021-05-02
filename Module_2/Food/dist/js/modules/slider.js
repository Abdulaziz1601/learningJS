function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
   
    let slideIndex = 1; //Index to manipulate slides
    let offset = 0; // offset to move slides

    const slides = document.querySelectorAll(slide),
          slider = document.querySelector(container),
          prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),
          total = document.querySelector(totalCounter),
          current = document.querySelector(currentCounter),
          slidesWrapper = document.querySelector(wrapper), // parent of a window 
          slidesField = document.querySelector(field), // window to show slides
          width = window.getComputedStyle(slidesWrapper).width; // width of the parentWindow

    if (slides.length < 10) { // If length of slide is less than 10, then we add 0
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length; // If length of slide is more than 10, then we donot add 0
        current.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + '%'; //In our case it is 400%
    slidesField.style.display = 'flex'; // display:flex helps us to make elements in a row
    slidesField.style.transition = '.5s all'; //smooth transition

    slidesWrapper.style.overflow = 'hidden'; // we hide another slides, and move slidesFiel
    


    slides.forEach(slide => {
        slide.style.width = width; //We give the same width for all images to make them same
    });

    slider.style.position = 'relative'; // relatively to slider we move dots

    const indicators = document.createElement('ol'),
          dots = []; // arr to save all dots here and manipulate them

    indicators.classList.add('carousel-indicators');

    indicators.style.cssText = `
        position: absolute; 
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;

    slider.append(indicators); //appending dots to slider container

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li'); // Creating li elements: ol > li
        dot.setAttribute('data-slide-to', i + 1); // setting attributes to use them in event delegation
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;

        if (i == 0) {
            dot.style.opacity = 1; //highlighting first dot 
        }

        indicators.append(dot); // appending  li dots in indicators - ol parent
        dots.push(dot); // pushing li dots to dots[] arr
    }

    const onlyNum = (str) => +str.replace(/\D/g, ''); //Return only number part of str
    
    next.addEventListener('click', () => {
        // offset = 650 * 3 == 1950, when offset is at the end, we change it to first slide
        if (offset == onlyNum(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += onlyNum(width); // when next is clicked offset grows
        } // so it will move to left to -X, by making slides to pass next after another
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) { // whenever index is at the end, it returns to first slide 
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        //indicators
        dots.forEach(dot => dot.style.opacity = '.5'); //all dots are unhighlightened

        dots[slideIndex - 1].style.opacity = 1; // after next is pressed next dot is highlightened

    });

    prev.addEventListener('click', () => {
        if (offset == 0) { // when offset is at 0 - before 1St slide ->
            offset = onlyNum(width) * (slides.length - 1); // it will move to the last slide
        } else {
            offset -= onlyNum(width); // offset decreases so 
        }
        slidesField.style.transform = `translateX(-${offset}px)`; // field is moved to right, 
        // which imitates elements moving left

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        //indicators
        dots.forEach(dot => dot.style.opacity = '.5');

        dots[slideIndex - 1].style.opacity = 1;
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            // getting target number from 'data-slide-to'
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo; // slideTo givex index num to move slide
            offset = onlyNum(width) * (slideTo - 1); 
            // offsetting slide by multiplying width of one slide to the number of slide we are headed
            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slides.length < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }

            dots.forEach(dot => dot.style.opacity = '.5');
            dots[slideIndex - 1].style.opacity = 1;
        });
    });
}

export default slider;
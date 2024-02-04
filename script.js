const swiper = new Swiper('.slider-main-block', {
    // Optional parameters
    loop: true,
  
  
    // Navigation arrows
    navigation: {
      nextEl: 'slider-main-block_arrow.swiper-button-next',
      prevEl: 'slider-main-block_arrow.swiper-button-prev',
    },

  });

  // const tabNavIimes = document.querySelectorAll('.tabs-deals_button');
  // const tabItems = document.querySelectorAll('.item-tabs');

  // document.addEventListener('click', function(e) {
  //   const targetElement = e.target;
  //   let currentActiveIndex = null;
  //   let newActiveIndex = null;
  //   if (targetElement.closest('.tabs-deals_button')) {

  //     tabNavIimes.forEach((tabNavItem, index) => {
  //       if (tabNavItem.classList.contains('active')) {
  //         currentActiveIndex = index;
  //         tabNavItem.classList.remove('active');
  //       }
  //       if (tabNavItem === targetElement) {
  //         newActiveIndex = index;
  //       }
  //     });
  //     targetElement.classList.add('active');
  //     tabItems[currentActiveIndex].classList.remove('active');
  //     tabItems[newActiveIndex].classList.add('active');
  //   }
  // });
document.addEventListener('DOMContentLoaded', function() {
  const ratings = document.querySelectorAll('.rating');

  if (ratings.length > 0) {
    initRatings();
  }


  // Main function
function initRatings() {
  let ratingActive, ratingValue;
  for (let i = 0; i < ratings.length; i++) {
    const rating = ratings[i];
    initRating(rating);

  }

  // Инициализируем кокретный рейтинг
  function initRating(rating) {
    initRatingVars(rating);

    setRatingActiveWidth();

    if (rating.classList.contains('rating_set')) {
      setRating(rating);
    }
  }

  // Инициализация переменных
  function initRatingVars() {
    ratingActive = document.querySelector('.rating_active');
    ratingValue = document.querySelector('.rating_value');
  }

  // изменяем ширину активных звезд
  function setRatingActiveWidth(i = ratingValue.innerHTML) {
    const ratingActiveWidth = i / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }

  // Возможность указать оценку 
  
  function setRating(rating) {
    const ratingItems = rating.querySelectorAll('.rating_item'); 
    for (let i = 0; i < ratingItems.length; i++) {
      const ratingItem = ratingItems[i];
      ratingItem.addEventListener("mouseenter", function(e) {
        // Обновление переменных
        initRatingVars(rating);
        // Обновление активныз звуезд
        setRatingActiveWidth(ratingItem.value);
      });
      ratingItem.addEventListener("mouseleave", function (e) {
        setRatingActiveWidth();
      });
      ratingItem.addEventListener("click", function(e) {
        initRatingVars(rating);
        
          ratingValue.innerHTML = i + 1;
          setRatingActiveWidth();
        
      })
    }
  }
}


});

document.addEventListener('DOMContentLoaded', function() {
  const ratings = document.querySelectorAll('.rating-2');

  if (ratings.length > 0) {
    initRatings();
  }


  // Main function
function initRatings() {
  let ratingActive, ratingValue;
  for (let i = 0; i < ratings.length; i++) {
    const rating = ratings[i];
    initRating(rating);

  }

  // Инициализируем кокретный рейтинг
  function initRating(rating) {
    initRatingVars(rating);

    setRatingActiveWidth();

    if (rating.classList.contains('rating_set-2')) {
      setRating(rating);
    }
  }

  // Инициализация переменных
  function initRatingVars() {
    ratingActive = document.querySelector('.rating_active-2');
    ratingValue = document.querySelector('.rating_value-2');
  }

  // изменяем ширину активных звезд
  function setRatingActiveWidth(i = ratingValue.innerHTML) {
    const ratingActiveWidth = i / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }

  // Возможность указать оценку 
  
  function setRating(rating) {
    const ratingItems = rating.querySelectorAll('.rating_item-2'); 
    for (let i = 0; i < ratingItems.length; i++) {
      const ratingItem = ratingItems[i];
      ratingItem.addEventListener("mouseenter", function(e) {
        // Обновление переменных
        initRatingVars(rating);
        // Обновление активныз звуезд
        setRatingActiveWidth(ratingItem.value);
      });
      ratingItem.addEventListener("mouseleave", function (e) {
        setRatingActiveWidth();
      });
      ratingItem.addEventListener("click", function(e) {
        initRatingVars(rating);
        
          ratingValue.innerHTML = i + 1;
          setRatingActiveWidth();
        
      })
    }
  }
}


});
 




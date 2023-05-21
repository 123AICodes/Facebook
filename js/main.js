/**     sidebar variable     */
const menuItems = document.querySelectorAll('.menu__item');
/**     sidebar variable ends    */

/**   messages variables */
let notification = document.querySelector('.sidebar #notifications');
let notificationPopup = document.querySelector('.sidebar .notifiaction-popup');
const messageNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('.messages .msg__search');
/**   messages variables ends */

/** theme vaiables     */
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize__theme');
/** theme vaiables  ends     */

/** font size customization variables  */
const fontSizes = document.querySelectorAll('.choose__size span');
var root = document.querySelector(':root');
/** font size customization variables ends */

/** primary color variables */
const colorPalette = document.querySelectorAll('.choose__color span');
/** primary color variables ends */

/* background color variable  */
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');
/* background color variable ends  */



/**   sidebar     */

//remove active class
const removeActiveClass = () => {
  menuItems.forEach(item => {
    item.classList.remove('active');
  })
}
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    removeActiveClass();
    item.classList.add('active');
   if(item.id != 'notifications'){
     document.querySelector('.notification-popup').style.display = 'none';
   }
   else{
     document.querySelector('.notification-popup').style.display = 'block';
     document.querySelector('.notification-popup').style.boxShadow = '0 0 1rem var(--color-primary)';
     document.querySelector('.notification-count').style.display = 'none';
   }
   setTimeout( () => {
     document.querySelector('.notification-popup').style.boxShadow = 'none';
   }, 2000);
  });
});
/**     sidebar ends     */

/* message highlight */
messageNotification.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1rem var(--color-primary)';
  document.querySelector('#messages-notification .notification-count').style.display = 'none';
  setTimeout( () => {
    messages.style.boxShadow = 'none';
  }, 2000);
});

//searching messages
//chat
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  messages.forEach( chat => {
    let name = chat.querySelectorAll('h5').textContent.toLowerCase();
    if(name.indexOf(val) !== -1){
      chat.style.display = 'flex';
    }else{
      chat.style.display = 'none';
    }
  });
};

messageSearch.addEventListener('keyup', () => {

})
/* message highlight ends */




/**       Theme Customization        */
//show modal
const openThemeModal = () => {
  themeModal.style.display = "grid";
}
theme.addEventListener('click', openThemeModal);
//hide modal
const closeThemeModal = (e) => {
  if (e.target.classList.contains('customize__theme')) {
    themeModal.style.display = "none";
  }
  else {
    themeModal.style.display = "grid";
  }
}
themeModal.addEventListener('click', closeThemeModal);
/**       Theme Customization ends        */


/** font customization */
const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove('active');
  })
}
fontSizes.forEach(size => {
  size.addEventListener('click', () => {
    removeSizeSelector();
    size.classList.add('active');
    let fontSize;
    if (size.classList.contains('font-size-1')) {
      fontSize = '10px';
      root.style.setProperty('--sticky-top-left', '5.4rem');
      root.style.setProperty('--sticky-top-right', '5.4rem');
    }
    else if (size.classList.contains('font-size-2')) {
      fontSize = '13px';
      root.style.setProperty('--sticky-top-left', '5.4rem');
      root.style.setProperty('--sticky-top-right', '-7rem');
    }
    else if (size.classList.contains('font-size-3')) {
      fontSize = '16px';
      root.style.setProperty('--sticky-top-left', '-2rem');
      root.style.setProperty('--sticky-top-right', '-17rem');
    }
    else if (size.classList.contains('font-size-4')) {
      fontSize = '18px';
      root.style.setProperty('--sticky-top-left', '-5rem');
      root.style.setProperty('--sticky-top-right', '-25rem');
    }
    else if (size.classList.contains('font-size-5')) {
      fontSize = '20px';
      root.style.setProperty('--sticky-top-left', '-12rem');
      root.style.setProperty('--sticky-top-right', '-35rem');
    }
    //changing html element font
    document.querySelector('html').style.fontSize = fontSize;
  });

})
/** font customization ends */

/** changing primary colors    */
const removeSelector = () => {
  colorPalette.forEach(color => {
    color.classList.remove('active');
  });
};
colorPalette.forEach(color => {
  color.addEventListener('click', function () {
    removeSelector();
    let primaryHue;
    if (color.classList.contains('color-1')) {
      primaryHue = 252;
    }
    else if (color.classList.contains('color-2')) {
      primaryHue = 52;
    }
    else if (color.classList.contains('color-3')) {
      primaryHue = 352;
    }
    else if (color.classList.contains('color-4')) {
      primaryHue = 152;
    }
    else if (color.classList.contains('color-5')) {
      primaryHue = 202;
    }
    color.classList.add('active');
    //changing html element font
   root.style.setProperty('--color-primary-hue', primaryHue);
  });

})
/** changing primary colors ends    */

/* background theme   */
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

//change background color
const changeBG = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness);
  root.style.setProperty('--white-color-lightness', whiteColorLightness);
  root.style.setProperty('--dark-color-lightness', darkColorLightness);
}
//bg one
bg1.addEventListener('click', () => {
  //add active color
  bg1.classList.add('active');
  bg2.classList.remove('active');
  bg3.classList.remove('active');
  window.location.reload();
})
//bg two
bg2.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '20%';
  lightColorLightness = '15%';
  //add active color
  bg2.classList.add('active');
  bg1.classList.remove('active');
  bg3.classList.remove('active');
  changeBG();
})
//bg three
bg3.addEventListener('click', () => {
  darkColorLightness = '95%';
  whiteColorLightness = '10%';
  lightColorLightness = '0%';
  //add active color
  bg3.classList.add('active');
  bg1.classList.remove('active');
  bg2.classList.remove('active');
  changeBG();
})
/* background theme ends  */
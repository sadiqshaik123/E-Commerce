const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
  
    searchButton.addEventListener('click', function(event) {
      event.preventDefault();
      const searchTerm = searchInput.value.trim();
      if (searchTerm) {
        // Redirect to Amazon search with the input value
        window.location.href = `https://www.amazon.in/s?k=${encodeURIComponent(searchTerm)}`;
      }
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const shopNowButton = document.querySelector('.main-btn');
  
    shopNowButton.addEventListener('click', function(event) {
      event.preventDefault();
      // Redirect to the specified Amazon link
      window.location.href = 'https://www.amazon.in/Pawan-Kalyan/s?k=Pawan+Kalyan';
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const shopNowButton = document.querySelector('.main1-btn');
  
    shopNowButton.addEventListener('click', function(event) {
      event.preventDefault();
      // Redirect to the specified Amazon link
      window.location.href = 'https://www.amazon.in/s?k=pawan+kalyan+shirts+for+men&crid=9EJVPYBCREGM&sprefix=Pawan+Kalyan+shirts%2Caps%2C268&ref=nb_sb_ss_ts-doa-p_4_19';
    });
  });
    
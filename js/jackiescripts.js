var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  percentPosition: true

});

/********add modal event listener****/

var galleryLinks= document.querySelectorAll('.gallery-link');
var bgOverlay=document.getElementById('bg-overlay');
var galleryModal=document.getElementById('gallery-modal')

for (var i =0; galleryLinks.length > i; i++) {
    galleryLinks[i].addEventListener('click', function(e){
        e.preventDefault();
        console.log('clicked');
       bgOverlay.className="show";
       galleryModal.className="show";
    });
}

bgOverlay.addEventListener('click', function(e){

    e.target.removeAttribute('class');
    galleryModal.removeAttribute('class');


});

let themeDots = document.getElementsByClassName('theme-dot');

for(var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener('click', function() {
    console.log('Option clicked')
  })
}
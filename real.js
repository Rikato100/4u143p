<script>
let lastScrollTop = 0; // This variable will hold the last scroll position

window.addEventListener("scroll", function() {
   let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   
   if (currentScroll > lastScrollTop) {
       // Scrolling Down
       document.querySelector('.navbar').style.top = "-60px"; // Adjust the value to match the navbar's height
   } else {
       // Scrolling Up
       document.querySelector('.navbar').style.top = "0";
   }
   
   lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);
</script>

document.addEventListener("DOMContentLoaded", function () {
  
    let text1 = document.getElementById("text1");
    let text2 = document.getElementById("text2");
    let text3 = document.getElementById("text3");
    let text4 = document.getElementById("text4");
  
    let texts = [text1, text2, text3, text4];
  
    let img1 = document.getElementById("img1");
    let img2 = document.getElementById("img2");
    let img3 = document.getElementById("img3");
    let img4 = document.getElementById("img4");
  
    const vista = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { 

          const index = texts.indexOf(entry.target);
  
          [img1, img2, img3, img4].forEach(img => (img.style.opacity = 0));
          [text1, text2, text3, text4].forEach(title => (title.style.opacity = 0));
                      switch (index) {
            case 0:
              img1.style.opacity = 1;
              text1.style.opacity = 1;
              break;
            case 1:
              img2.style.opacity = 1;
              text1.style.opacity = 0;
              text2.style.opacity = 1;
              break;
            case 2:
              img3.style.opacity = 1;
              text3.style.opacity = 1;
              text2.style.opacity = 0;
              break;
            case 3:
              img4.style.opacity = 1;
              text3.style.opacity = 0;
              text4.style.opacity = 1;
              break;
            default:
              break;
          }
        }
      });
    });
  
    texts.forEach(text => {
      vista.observe(text);
    });
  
  
    
  });
/*
 Homepage JS
 */
///////////////////////////////////
// Navigation
///////////////////////////////////
if (window.scrollY) {
  scroll(0, 0); //文書の左上にスクロール位置をリセット
}

// USE CLASS nav-top nav-middle nav-small-top nav-small-middle
let nav   = document.getElementsByTagName("nav")[0];
let title = nav.children[0].getElementsByTagName('a')[0];

const classNames = [
  'nav-top',
  'nav-middle',
  'nav-small-top',
  'nav-small-middle'
];

function changeClass(className) {
  classNames.filter((x) => x != className).map(
    x => {
      nav.classList.remove(x)
    });
  nav.classList.add(className)
}

function navigationClass() {
  let pageY = window.pageYOffset;
  if (pageY == 0) {
    if (window.innerWidth > 750) {
      changeClass('nav-top');
    } else {
      changeClass('nav-small-top');
    }
  } else {
    if (window.innerWidth > 750) {
      changeClass('nav-middle');
    } else {
      changeClass('nav-small-middle');
    }
  }
}

window.addEventListener("load", navigationClass, false);
window.addEventListener("scroll", navigationClass, false);
window.addEventListener("resize", navigationClass, false);


///////////////////////////////////
// Page ID Anchor
///////////////////////////////////

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

function scrollTo(element, to) {
  let currentTop = window.pageYOffset;

  //http://d.hatena.ne.jp/nakamura001/20111117/1321539246

  (function easeScroll(count, i) {
    i += 1;
    if (Math.round(currentTop / 10) == Math.round(to / 10)) return;
    if (i < count) {
      element.scrollTop = Math.easeInOutQuad(i / 100, currentTop, to - currentTop, 1);
      setTimeout(
        function () {
          easeScroll(count, i)
        }, 1);
    }
  })(100, 0);
}

let anchor = document.getElementsByTagName('a');

function hashEaseScroll() {
  Array.prototype.map.call(
    anchor, x => {
      let hash = x.hash;
      if (hash != "") {
        let destinationRect = document.getElementById(hash.replace(/#/g, "")).getBoundingClientRect();
        {
          x.addEventListener(
            "click",
            y => {
              y.preventDefault();
              scrollTo(document.body, destinationRect.top - 80 );
              console.log(destinationRect.top);
            }
          )
        }
      }
    }
  );
}

window.addEventListener("load", hashEaseScroll, false);


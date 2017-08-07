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
function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

function pageAnchorScroll() {

  function scrollTo(element, to) {
    let currentTop = window.pageYOffset;

    // http://d.hatena.ne.jp/nakamura001/20111117/1321539246

    (function easeScroll(count, i) {
      i += 1;
      if (Math.round(currentTop / 10) == Math.round(to / 10)) return;
      if (i < count) {
        element.scrollTop = easeInOutQuad(i / 100, currentTop, to - currentTop, 1);
        setTimeout(
          function () {
            easeScroll(count, i)
          }, 1);
      }
    })(100, 0);
  }

  let anchor = document.getElementsByTagName('a');

  Array.prototype.map.call(
    anchor, x => {
      let hash = x.hash;
      if (hash != "") {
        let destinationRect = document.getElementById(hash.replace(/#/g, "")).getBoundingClientRect();
        {
          x.addEventListener(
            "click", y => {
              y.preventDefault();
              scrollTo(document.body, destinationRect.top - 80);
            }
          )
        }
      }

    }
  );

}
window.addEventListener("load", pageAnchorScroll, false);

// FAB Button
let fab = document.getElementsByTagName('button')[0];
fab.addEventListener(
  "click", () => {
    scrollTo(window.document.body, 0);
  }
);

document.body.style.transition                                = "all .3s ease";
document.getElementById('about').children[1].style.transition = "all .3s ease";
document.getElementsByTagName('button')[0].style.transition   = "all .3s ease";
document.getElementById('about').children[1].addEventListener(
  'click', (x) => {
    let s  = x.target.style;
    let s2 = document.getElementsByTagName('button')[0].style;
    let s3 = document.body.style;
    let s4 = document.getElementsByTagName("nav")[0].style;
    if (s.zoom == 1.5) {
      s.backgroundColor  = '';
      s.zoom             = 1;
      s2.right           = '20px';
      s2.left            = '';
      s2.backgroundColor = '';
      s3.background      = '';
      s4.background      = '';
    } else {
      s.backgroundColor  = '#e9e6ff';
      s.zoom             = 1.5;
      s2.left            = '20px';
      s2.right           = '';
      s2.backgroundColor = '#8800ff';
      s3.background      = '-webkit-gradient(linear, left top, right bottom, from(red), color-stop(0.2, orange), color-stop(0.3, yellow), color-stop(0.5, green), color-stop(0.7, blue), color-stop(0.8, indigo), to(violet))';
      s4.background      = '-webkit-gradient(linear, left top, right top, from(#ff0000), to(rgba(255,0,0,0)))';
    }
  }
);
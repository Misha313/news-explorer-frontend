!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){document.querySelector(".news-card__tooltip");var n=document.querySelector(".popup"),r=document.querySelector(".popup-registr"),o=(document.querySelectorAll(".news-card__save-icon"),document.querySelector(".news-card__save-icon"),document.querySelectorAll(".news-card__delete-icon")),c=document.querySelector(".popup__close"),l=document.querySelector(".popup-registr__close"),u=document.querySelector(".popup-success__close"),d=document.querySelector(".popup__footer-link"),s=document.querySelector(".popup-registr__footer-link"),i=document.querySelector(".button-header"),a=document.querySelector(".button-burger"),p=document.querySelector(".header__menu-burger-content"),y=document.querySelector(".header__menu-burger-close"),f=document.querySelector(".header__menu-burger"),_=document.querySelectorAll(".news-card");function m(e){e.target.closest(".popup").style.display="none"}f.addEventListener("click",(function(e){e.target!==f||(p.style.display="flex")})),y.addEventListener("click",(function(e){e.target.closest(".header__menu-burger-content").style.display="none"})),console.log(_),_.forEach((function(e){var t=e.querySelector(".news-card__tooltip"),n=e.querySelector(".news-card__save-icon");n.addEventListener("mouseover",(function(e){t.style.display="flex"})),n.addEventListener("mouseout",(function(e){t.style.display="none"}))})),o.forEach((function(e){e.addEventListener("mouseover",(function(e){var t=e.relatedTarget.querySelector(".news-card__tooltip");console.log(t),t.style.display="flex"})),e.addEventListener("mouseout",(function(e){var t=e.relatedTarget.querySelector(".news-card__tooltip");console.log(t),t.style.display="none"}))})),a.addEventListener("click",(function(e){y.closest(".header__menu-burger-content").style.display="none",r.style.display="flex"})),u.addEventListener("click",m),s.addEventListener("click",(function(e){e.target.closest(".popup").style.display="none",n.style.display="flex"})),d.addEventListener("click",(function(e){e.target.closest(".popup").style.display="none",r.style.display="flex"})),l.addEventListener("click",m),i.addEventListener("click",(function(e){n.style.display="flex"})),c.addEventListener("click",m)}]);
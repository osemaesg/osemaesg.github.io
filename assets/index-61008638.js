(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const a=document.querySelector("#mobile-menu"),p=document.querySelector(".nav-menu");a.addEventListener("click",function(){a.classList.toggle("is-active"),p.classList.toggle("active")});const l=document.querySelectorAll(".tabs-container .tab"),c=document.querySelectorAll(".tabs-container .content"),d=()=>{l.forEach(r=>{r.classList.remove("active")}),c.forEach(r=>{r.classList.remove("active")})};l.forEach((r,s)=>{r.addEventListener("click",()=>{d(),c[s].classList.add("active"),r.classList.add("active")})});var o=new Swiper(".mySwiper2",{spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0,autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0});new Swiper(".mySwiper1",{spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:o},autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0});var o=new Swiper(".mySwiper4",{spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0,autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0});new Swiper(".mySwiper3",{spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:o},autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0});var o=new Swiper(".mySwiper6",{spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0,autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0});new Swiper(".mySwiper5",{spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:o},autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0});
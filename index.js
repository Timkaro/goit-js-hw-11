import{a as f,S as p,i as n}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const h="https://pixabay.com/api/",m="49633368-6da3d74b0c3b6468a6c14afef";async function y(s){try{return(await f.get(h,{params:{key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(t){throw console.error("Error fetching images:",t),new Error("Failed to fetch images")}}let g=new p(".gallery a",{captionsData:"alt",captionDelay:250});const c=document.querySelector(".gallery");function v(s){const t=s.map(r=>`
      <li class="gallery-item">
            <a class="gallery-link" href = '${r.largeImageURL}'> 
                <img class="gallery-image" src = '${r.webformatURL}' alt = '${r.tags}' width = '360'>
            </a>
            <div class = 'info'>
                <div class='descr'><h3>Likes</h3><p>${r.likes}</p></div>
                <div class='descr'><h3>Views</h3><p>${r.views}</p></div>
                <div class='descr'><h3>Comments</h3><p> ${r.comments}</p></div>
                <div class='descr'><h3>Downloads</h3><p>${r.downloads}</p></div>
            </div>
       </li>`).join("");c.innerHTML=t,g.refresh()}function l(){c.innerHTML=""}const d=document.querySelector(".loader");function L(){d.classList.add("is-open")}function w(){d.classList.remove("is-open")}const u=document.querySelector(".form"),b=u.querySelector("input");l();u.addEventListener("submit",async s=>{s.preventDefault();const t=b.value.trim();if(t){L();try{const r=await y(t);l(),r.hits.length?v(r.hits):n.show({message:"Sorry, there are no images matching your search query. Please try again! ",position:"center",color:"red"})}catch{n.show({message:"Failed to fetch images. Please try again later.",position:"center",color:"red"})}w()}});
//# sourceMappingURL=index.js.map

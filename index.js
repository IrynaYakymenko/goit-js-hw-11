import{i as c,S as d}from"./assets/vendor-gf4A_djT.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const u=a=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${a.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${a.webformatURL}"
                    data-source="${a.largeImageURL}"
                    alt="${a.tags}"
                />
                </a> 
                <div class="describe">
                <div class="info">
                    <span class="label">Likes</span><br>
                    <span class="value" data-likes>${a.likes}</span>
                </div>
                <div class="info">
                    <span class="label">Views</span></span><br>
                    <span class="value" data-views>${a.views}</span>
                </div>
                <div class="info">
                    <span class="label">Comments</span><br>
                    <span class="value" data-comments>${a.comments}</span>
                </div>
                <div class="info">
                    <span class="label" >Downloads</span><br>
                    <span class="value" data-downloads>${a.downloads}</span>
                </div>  
                </div>
        </li>
    `,f=a=>fetch(`https://pixabay.com/api/?key=49388165-2207654a79f52bc7a4c348d65&q=${a}&image_type=photo&orientation=horizontal&safesearch=true`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()});let i;const n={searchForm:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},p=a=>{a.preventDefault();const s=a.currentTarget.elements["search-text"].value.trim();if(s===""){c.warning({title:"Warning",message:"Поле не має бути порожнім!",position:"topRight"});return}n.loader.classList.remove("hidden"),f(s).then(({hits:t})=>{if(t.length===0){c.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.searchForm.reset(),n.gallery.innerHTML="";return}const o=t.map(e=>u(e)).join("");n.gallery.innerHTML=o,i?i.refresh():i=new d(".gallery-link",{captionsData:"alt",captionDelay:250})}).catch(t=>{console.log(t)}).finally(()=>{n.loader.classList.add("hidden")})};n.searchForm.addEventListener("submit",p);
//# sourceMappingURL=index.js.map

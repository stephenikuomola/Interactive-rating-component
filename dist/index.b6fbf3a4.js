new class{#t=document.querySelector(".feedback__component");#e=document.querySelector(".gratitude__component");#n=document.querySelector(".feedback__component-btns");#i=document.querySelectorAll(".btn");#s=document.querySelector(".gratitude__component-message");constructor(){this.#t.addEventListener("click",this.#o.bind(this)),this.#n.addEventListener("click",this.#a.bind(this))}#o(t){t.target.classList.contains("btn__submit")&&(t.currentTarget.classList.add("hide"),this.#e.classList.remove("hide"))}#a(t){const e=t.target.closest(".btn");if(e){for(let t=0;t<this.#i.length;t++)this.#i[t].classList.remove("btn__active");e.classList.add("btn__active"),this.#s.firstElementChild.innerHTML=e.firstElementChild.innerHTML}}};
//# sourceMappingURL=index.b6fbf3a4.js.map
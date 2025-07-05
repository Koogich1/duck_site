(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&e(d)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const f=':root{--btn-primary-initial: #EAB308;--btn-primary-hover: #FEC71C;--btn-primary-pressed: #CC9500;--btn-secondary-initial: #2581EB;--btn-secondary-hover: #439FFF;--btn-secondary-pressed: #0763CD}.btn{display:flex;align-items:center;justify-content:center;font-size:16px;border-radius:11px;border:none;cursor:pointer;transition:all .2s ease}.btn.primary{background-color:var(--btn-primary-initial);color:#fff}.btn.primary:hover{background-color:var(--btn-primary-hover)}.btn.primary:active{background-color:var(--btn-primary-pressed)}.btn.secondary{background-color:var(--btn-secondary-initial);color:#fff}.btn.secondary:hover{background-color:var(--btn-secondary-hover)}.btn.secondary:active{background-color:var(--btn-secondary-pressed)}.btn.outline{background-color:transparent;padding:0;margin:0;border:1px solid transparent;height:44px;width:44px;color:#7c818e}.btn.outline svg{stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:stroke .18s}.btn.outline:hover{background-color:#fff;border:1px solid var(--btn-secondary-hover);color:var(--btn-secondary-hover)}.btn.btn.outline:active{border:1px solid var(--btn-secondary-pressed);color:var(--btn-secondary-pressed)}.btn.menu-tab{background:transparent;border:none;font-weight:500;font-size:18px;padding:0!important;border-radius:0;box-shadow:none;position:relative;display:inline-flex;align-items:center;justify-content:center;min-width:unset;height:40px;padding:0 18px;transition:color .18s}.btn.menu-tab:hover{color:#2581eb;background:transparent}.btn.menu-tab:after{content:"";display:block;position:absolute;left:0;right:0;bottom:0;height:3px;border-radius:2px;background:#2581eb;opacity:0;transform:scaleX(.5);transition:opacity .18s,transform .18s;pointer-events:none;width:100%;margin:0 auto}.btn.menu-tab:hover:after,.btn.menu-tab.active:after{opacity:1;transform:scaleX(1)}.btn.menu-tab.active{color:#2581eb}.btn.link{background:transparent;color:#1f2937;font-weight:300;font-size:18px;border:none;box-shadow:none;border-radius:0;display:inline-flex;text-wrap:nowrap;gap:20px;align-items:center;justify-content:center;transition:color .18s}.btn.link svg{stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:stroke .18s}.btn.link:hover,.btn.link:focus{color:#2581eb}.btn.default{padding:10px 20px;height:44px;font-size:16px}.btn.icon{padding:0;min-width:29px;min-height:29px;border-radius:7px;font-size:14px}';if(!document.head.querySelector("style[data-custom-button]")){const n=document.createElement("style");n.textContent=f,n.setAttribute("data-custom-button",""),document.head.appendChild(n)}class v extends HTMLElement{_button;constructor(){super();const t=document.createElement("button");t.classList.add("btn"),this._button=t;const o=this.querySelector('[slot="icon-left"]'),e=this.querySelector('[slot="text"]');o&&t.appendChild(o),e&&t.appendChild(e),this.appendChild(t),this.classList.contains("active")&&t.classList.add("active"),new MutationObserver(()=>{this.classList.contains("active")?t.classList.add("active"):t.classList.remove("active")}).observe(this,{attributes:!0,attributeFilter:["class"]}),t.addEventListener("click",()=>{t.disabled||this.dispatchEvent(new Event("click",{bubbles:!0}))})}static get observedAttributes(){return["variant","size","disabled"]}attributeChangedCallback(t,o,e){const s=this._button;s&&(t==="variant"&&(["primary","secondary","outline","menu-tab","link"].forEach(r=>s.classList.remove(r)),e&&s.classList.add(e)),t==="size"&&(["default","icon"].forEach(r=>s.classList.remove(r)),e&&s.classList.add(e)),t==="disabled"&&(s.disabled=e!==null))}}customElements.define("custom-button",v);const y='.dialog-backdrop{position:fixed;inset:0;background:#0006;z-index:1000;display:block;opacity:0;pointer-events:none;transition:opacity .25s}.dialog-backdrop.dialog-visible{opacity:1;pointer-events:auto}.dialog-window{position:fixed;top:50%;left:50%;max-width:417px;max-height:390px;padding:38px;transform:translate(-50%,-48%) scale(.98);background:#fff;border-radius:24px;box-shadow:0 8px 32px #0000002e;z-index:1001;overflow:auto;box-sizing:border-box;opacity:0;transition:opacity .25s,transform .25s}@media screen and (max-width: 768px){.dialog-window{min-width:344px;min-height:320px;padding:22px 16px}}.dialog-window.dialog-visible{opacity:1;transform:translate(-50%,-50%) scale(1)}::slotted([slot="actions"]){display:flex;justify-content:flex-end}::slotted([slot="content"]){display:block}.dialog-close-btn{position:absolute;top:22px;right:18px;width:10px;height:10px;background:transparent;border:none;padding:0;cursor:pointer;z-index:10;border-radius:50%;transition:background .15s;display:flex;align-items:center;justify-content:center}.dialog-close-icon{display:block;width:18px;height:18px;stroke:#b9b9b9;transition:stroke .15s}.dialog-close-btn:hover{color:#222}.dialog-close-btn:hover .dialog-close-icon{stroke:#222}';if(!document.head.querySelector("style[data-custom-dialog]")){const n=document.createElement("style");n.textContent=y,n.setAttribute("data-custom-dialog",""),document.head.appendChild(n)}class w extends HTMLElement{_dialog;_backdrop;constructor(){super();const t=document.createElement("div");t.classList.add("dialog-backdrop"),this._backdrop=t;const o=document.createElement("div");o.classList.add("dialog-window"),this._dialog=o;const e=document.createElement("button");e.setAttribute("type","button"),e.setAttribute("aria-label","Закрыть"),e.classList.add("dialog-close-btn"),e.innerHTML='<svg class="dialog-close-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99978 5L8.53531 8.53553M1.46424 8.53553L4.99978 5L1.46424 8.53553ZM8.53531 1.46447L4.99978 5L8.53531 1.46447ZM4.99978 5L1.46424 1.46447L4.99978 5Z" stroke="#B9B9B9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',e.addEventListener("click",()=>this.close()),o.appendChild(e);const s=this.querySelector('[slot="dialogTrigger"]'),r=this.querySelector('[slot="content"]'),d=this.querySelector('[slot="actions"]');s&&this.appendChild(s),r&&o.appendChild(r),d&&o.appendChild(d),this.appendChild(t),this.appendChild(o),s&&s.addEventListener("click",()=>this.open()),t.addEventListener("click",()=>this.close())}static get observedAttributes(){return["open"]}attributeChangedCallback(t,o,e){t==="open"&&(e!==null?(this._backdrop.style.display="block",this._dialog.style.display="block",requestAnimationFrame(()=>{this._backdrop.classList.add("dialog-visible"),this._dialog.classList.add("dialog-visible")})):(this._backdrop.classList.remove("dialog-visible"),this._dialog.classList.remove("dialog-visible"),setTimeout(()=>{this._backdrop.style.display="none",this._dialog.style.display="none"},250)))}connectedCallback(){this.hasAttribute("open")||(this._backdrop.style.display="none",this._dialog.style.display="none")}open(){this.setAttribute("open","")}close(){this.removeAttribute("open")}}customElements.define("custom-dialog",w);const k=".custom-input{all:unset;font-size:14px;padding:9px 14px;border-radius:12px;border:1px solid #f1f1f1}.custom-input::placeholder{color:#a7a7a7}";if(!document.head.querySelector("style[data-custom-input]")){const n=document.createElement("style");n.textContent=k,n.setAttribute("data-custom-input",""),document.head.appendChild(n)}class x extends HTMLElement{_input;constructor(){super(),this.innerHTML="",this._input=document.createElement("input"),this._input.classList.add("custom-input"),this._input.type="text",this.appendChild(this._input)}static get observedAttributes(){return["placeholder","value","classname"]}attributeChangedCallback(t,o,e){t==="placeholder"&&(this._input.placeholder=e||""),t==="value"&&(this._input.value=e||""),t==="classname"&&(this._input.className="custom-input",e&&this._input.classList.add(...e.split(" ").filter(Boolean)))}connectedCallback(){this.hasAttribute("placeholder")&&(this._input.placeholder=this.getAttribute("placeholder")),this.hasAttribute("value")&&(this._input.value=this.getAttribute("value")),this.hasAttribute("classname")&&this._input.classList.add(...this.getAttribute("classname").split(" ").filter(Boolean))}get value(){return this._input.value}set value(t){this._input.value=t}}customElements.define("custom-input",x);class L extends HTMLElement{constructor(){super(),this.innerHTML=`
			<div class="header-callback-dialog-form">
				<label>Имя <span>*</span></label>
				<custom-input placeholder="Введите ваше имя"></custom-input>
				<label>Телефон <span>*</span></label>
				<custom-input class="phone-input" placeholder="+7(000)-000-00-00"></custom-input>
        <div class="form-error" style="display:none;color:#ff3b30;font-size:14px;margin-bottom:8px;"></div>
				<custom-button variant="primary" size="default">
					<p slot="text">Отправить</p>
				</custom-button>
				<p class="policy-text">
					Нажимая кнопку “Отправить”, вы соглашаетесь с
					<a href="/privacy-policy" target="_blank">политикой конфиденциальности</a>
					и
					<a href="/offer" target="_blank">договором оферты</a>
				</p>
			</div>
		`,setTimeout(()=>{const t=this.querySelectorAll("custom-input")[0],o=this.querySelectorAll("label")[0],e=o.querySelector("span"),s=()=>{const i=t.querySelector("input");if(!i){setTimeout(s,30);return}i.addEventListener("input",()=>{e&&(i.value.trim()?e.style.display="none":e.style.display="")})};s();const r=this.querySelector(".phone-input"),d=this.querySelectorAll("label")[1],u=d.querySelector("span"),p=()=>{if(!r){setTimeout(p,30);return}const i=r.querySelector("input");if(!i){setTimeout(p,30);return}i.addEventListener("focus",()=>{i.value?i.selectionStart!==null&&i.selectionStart<4&&i.setSelectionRange(4,4):(i.value="+7 (",i.setSelectionRange(4,4))}),i.addEventListener("input",()=>{let a=i.value.replace(/\D/g,"");a.startsWith("7")&&(a=a.slice(1)),a.length>10&&(a=a.slice(0,10));let l="+7 (";a.length>0&&(l+=a.substring(0,3)),a.length>=4?l+=") "+a.substring(3,6):a.length>3&&(l+=") "),a.length>=7?l+="-"+a.substring(6,8):a.length>6&&(l+="-"),a.length>=9?l+="-"+a.substring(8,10):a.length>8&&(l+="-"),i.value=l,i.selectionStart!==null&&i.selectionStart<4&&i.setSelectionRange(4,4),u&&(a.length===10?u.style.display="none":u.style.display="")}),i.addEventListener("blur",()=>{i.value==="+7 ("&&(i.value="")})};p();const h=this.querySelector("custom-button"),c=this.querySelector(".form-error");h&&h.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation();const a=this.querySelectorAll("custom-input")[0]?.querySelector("input"),l=this.querySelector(".phone-input")?.querySelector("input"),m=a?.value||"",g=l?.value||"";if((!m.trim()||!g.replace(/\D/g,""))&&c){c.textContent="Необходимо заполнить все поля!",c.style.display="";return}else c&&(c.textContent="",c.style.display="none");alert(`Данные отправлены!
Имя: ${m}
Телефон: ${g}`),a&&(a.value=""),l&&(l.value=""),o&&e&&a&&!a.value.trim()&&(e.style.display=""),d&&u&&l&&!l.value.replace(/\D/g,"")&&(u.style.display="");const b=this.closest("custom-dialog");b&&typeof b.close=="function"&&b.close()}),this.querySelectorAll("custom-input input").forEach(i=>{i.addEventListener("input",()=>{c&&(c.textContent="",c.style.display="none")})})},0)}}customElements.define("header-layout-form",L);const C=".drawer-backdrop{position:fixed;inset:0;background:#0006;z-index:1000;display:block;opacity:0;pointer-events:none;transition:opacity .25s}.drawer-backdrop.drawer-visible{opacity:1;pointer-events:auto}.drawer-window{position:fixed;background:#fff;border-radius:24px 24px 0 0;box-shadow:0 8px 32px #0000002e;z-index:1001;overflow:auto;box-sizing:border-box;opacity:0;transition:opacity .25s,transform .25s;padding:27px 20px}.drawer-window.drawer-visible{opacity:1}.drawer-window[data-side=right]{top:0;right:0;height:100vh;border-radius:24px 0 0 24px;transform:translate(100%);width:344px;max-width:90vw}.drawer-window.drawer-visible[data-side=right]{transform:translate(0)}.drawer-window[data-side=left]{top:0;left:0;height:100vh;border-radius:0 24px 24px 0;transform:translate(-100%);width:344px;max-width:90vw}.drawer-window.drawer-visible[data-side=left]{transform:translate(0)}.drawer-window[data-side=top]{top:0;left:50%;width:100vw;border-radius:0 0 24px 24px;transform:translate(-50%,-100%)}.drawer-window.drawer-visible[data-side=top]{transform:translate(-50%)}.drawer-window[data-side=bottom]{bottom:0;left:50%;width:100vw;border-radius:24px 24px 0 0;transform:translate(-50%,100%)}.drawer-window.drawer-visible[data-side=bottom]{transform:translate(-50%)}.drawer-close-btn{position:absolute;top:46px;right:34px;width:10px;height:10px;background:transparent;border:none;padding:0;cursor:pointer;z-index:10;border-radius:50%;transition:background .15s;display:flex;align-items:center;justify-content:center}.drawer-close-icon{display:block;width:18px;height:18px;stroke:#b9b9b9;transition:stroke .15s}.drawer-close-btn:hover{color:#222}.drawer-close-btn:hover .drawer-close-icon{stroke:#222}";if(!document.head.querySelector("style[data-custom-drawer]")){const n=document.createElement("style");n.textContent=C,n.setAttribute("data-custom-drawer",""),document.head.appendChild(n)}class _ extends HTMLElement{_drawer;_backdrop;_side;constructor(){super(),this._side=this.getAttribute("side")||"right";const t=document.createElement("div");t.classList.add("drawer-backdrop"),this._backdrop=t;const o=document.createElement("div");o.classList.add("drawer-window"),o.setAttribute("data-side",this._side),this._drawer=o;const e=document.createElement("button");e.setAttribute("type","button"),e.setAttribute("aria-label","Закрыть"),e.classList.add("drawer-close-btn"),e.innerHTML='<svg class="drawer-close-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99978 5L8.53531 8.53553M1.46424 8.53553L4.99978 5L1.46424 8.53553ZM8.53531 1.46447L4.99978 5L8.53531 1.46447ZM4.99978 5L1.46424 1.46447L4.99978 5Z" stroke="#B9B9B9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',e.addEventListener("click",()=>this.close()),o.appendChild(e);const s=this.querySelector('[slot="drawerTrigger"]'),r=this.querySelector('[slot="content"]'),d=this.querySelector('[slot="actions"]');s&&this.appendChild(s),r&&o.appendChild(r),d&&o.appendChild(d),this.appendChild(t),this.appendChild(o),s&&s.addEventListener("click",()=>this.open()),t.addEventListener("click",()=>this.close())}static get observedAttributes(){return["open","side"]}attributeChangedCallback(t,o,e){t==="open"&&(e!==null?(this._backdrop.style.display="block",this._drawer.style.display="block",requestAnimationFrame(()=>{this._backdrop.classList.add("drawer-visible"),this._drawer.classList.add("drawer-visible")})):(this._backdrop.classList.remove("drawer-visible"),this._drawer.classList.remove("drawer-visible"),setTimeout(()=>{this._backdrop.style.display="none",this._drawer.style.display="none"},250))),t==="side"&&e&&(this._side=e,this._drawer.setAttribute("data-side",this._side))}connectedCallback(){this.hasAttribute("open")||(this._backdrop.style.display="none",this._drawer.style.display="none"),this._side=this.getAttribute("side")||"right",this._drawer.setAttribute("data-side",this._side)}open(){this.setAttribute("open","")}close(){this.removeAttribute("open")}}customElements.define("custom-drawer",_);class E extends HTMLElement{constructor(){super(),this.innerHTML=`
      <header class="header-layout">
        <img src="/Logo.svg" alt="Logo" class="header-layout-logo"/>
        <nav>
          <ul class="header-layout-menu">
            <li><custom-button variant="menu-tab" size="default" class="active"><span slot="text">Главная</span></custom-button></li>
            <li><custom-button variant="menu-tab" size="default"><span slot="text">Каталог</span></custom-button></li>
            <li><custom-button variant="menu-tab" size="default"><span slot="text">Блог</span></custom-button></li>
            <li><custom-button variant="menu-tab" size="default"><span slot="text">Отзывы</span></custom-button></li>
            <li><custom-button variant="menu-tab" size="default"><span slot="text">Контакты</span></custom-button></li>
          </ul>
        </nav>
        <div class="header-layout-actions">
          <custom-button variant="outline">
            <span slot="icon-left">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.3335 7.33332L6.00016 2.66666" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.6667 7.33332L10 2.66666" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.3335 7.33334H14.6668" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.3335 7.33334L3.40016 12.2667C3.4625 12.5724 3.63006 12.8465 3.87369 13.0414C4.11731 13.2363 4.42157 13.3396 4.7335 13.3333H11.2668C11.8668 13.3333 12.4668 12.8667 12.6002 12.2667L13.7335 7.33334" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 7.33334L6.66667 13.3333" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 10.3333H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.0002 7.33334L9.3335 13.3333" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </custom-button>
          <custom-dialog id="header-callback-dialog" class="header-layout-dialog">
            <dialogTrigger slot="dialogTrigger">
              <custom-button variant="primary" size="default" class="header-layout-trigger">
                <span slot="text">Заказать обратный звонок</span>
              </custom-button>
            </dialogTrigger>
              <div slot="content">
                <header-layout-form class="header-dialog-form"></header-layout-form>
              </div>
          </custom-dialog>
          <custom-drawer id="header-drawer" side="right">
            <custom-button class="header-layout-drawer-trigger" slot="drawerTrigger">
              <span slot="icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.66667 4H13.3333" stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2.66667 8H13.3333" stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2.66667 12H13.3333" stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </custom-button>
            <div slot="content" class="header-layout-drawer-content">
              <img src="/Logo.svg" alt="Logo" class="header-layout-logo"/>
              <div class="header-layout-drawer-inner">
                <nav>
                  <ul class="header-layout-menu-drawer">
                    <li><custom-button variant="menu-tab" size="default" class="active"><span slot="text">Главная</span></custom-button></li>
                    <li><custom-button variant="menu-tab" size="default"><span slot="text">Каталог</span></custom-button></li>
                    <li><custom-button variant="menu-tab" size="default"><span slot="text">Блог</span></custom-button></li>
                    <li><custom-button variant="menu-tab" size="default"><span slot="text">Отзывы</span></custom-button></li>
                    <li><custom-button variant="menu-tab" size="default"><span slot="text">Контакты</span></custom-button></li>
                  </ul>
                </nav>
                <custom-button variant="primary" size="default" id="drawer-callback-btn">
                  <span slot="text">Заказать обратный звонок</span>
                </custom-button>
              </div>
            <div>
          </div>
          </custom-drawer>
        </div>
      </header>
    `,setTimeout(()=>{const o=this.querySelector("#drawer-callback-btn"),e=this.querySelector("#header-drawer"),s=this.querySelector("#header-callback-dialog");o&&e&&s&&o.addEventListener("click",()=>{e.removeAttribute("open"),setTimeout(()=>{s.setAttribute("open","")},250)})},0);const t=()=>{const o=this.querySelector("#header-drawer");o&&(window.innerWidth<=620?o.setAttribute("side","top"):o.setAttribute("side","right"))};window.addEventListener("resize",t),t()}}customElements.define("header-layout",E);class S extends HTMLElement{constructor(){super(),this.innerHTML=`
			<section>
				<div class="big-duck-title">
					<h1>МНОГО</h1>
					<h1 class="big-duck-title-right">УТОЧЕК</h1>
				</div>
				<div class="big-duck-text">
					<p>
						Маленький друг найдётся для каждого <br /> в этом кряквенно жёлтом мире
					</p>
					<custom-button variant="secondary" size="default">
						<span slot="text" class="big-duck-button-text">Смотреть уточек</span>
					</custom-button>
				</div>
				<img src="./duck.png"/>
			</section>
		`}}customElements.define("big-duck-section",S);class A extends HTMLElement{constructor(){const t=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <polyline points="12,5 17,10 12,15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </svg>`;super(),this.innerHTML=`
			<section class="big-duck-list-section">
			<ul class="big-duck-list">
				<li>
					<custom-button variant="link">
						<span slot="icon-left">
							${t}
						</span>
						<span slot="text">Классические</span>
					</custom-button>
				</li>
				<li>
					<custom-button variant="link">
						<span slot="icon-left">
							${t}
						</span>
						<span slot="text">Уточки панки</span>
					</custom-button>
				</li>
				<li>
					<custom-button variant="link">
						<span slot="icon-left">
							${t}
						</span>
						<span slot="text">Супергерои</span>
					</custom-button>
				</li>
				<li>
					<custom-button variant="link">
						<span slot="icon-left">
							${t}
						</span>
						<span slot="text">Милые</span>
					</custom-button>
				</li>
				<li>
					<custom-button variant="link">
						<span slot="icon-left">
							${t}
						</span>
						<span slot="text">Для детей</span>
					</custom-button>
				</li>
				<li>
					<custom-button variant="link">
						<span slot="icon-left">
							${t}
						</span>
						<span slot="text">Взрослым</span>
					</custom-button>
				</li>
			</ul>
		</section>
		`}}customElements.define("button-list-section",A);class M extends HTMLElement{constructor(){super(),this.innerHTML=`
			<big-duck-section></big-duck-section>
			<button-list-section></button-list-section>
		`}}customElements.define("hero-page",M);window.addEventListener("DOMContentLoaded",()=>{document.querySelector("#app").innerHTML=`
    <header-layout></header-layout>
    <hero-page></hero-page>
  `});

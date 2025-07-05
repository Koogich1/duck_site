import styles from "./drawerStyle.css?inline";

if (!document.head.querySelector('style[data-custom-drawer]')) {
  const styleElement = document.createElement("style");
  styleElement.textContent = styles;
  styleElement.setAttribute('data-custom-drawer', '');
  document.head.appendChild(styleElement);
}

class Drawer extends HTMLElement {
  private _drawer: HTMLDivElement;
  private _backdrop: HTMLDivElement;
  private _side: string;

  constructor() {
    super();
    this._side = this.getAttribute('side') || 'right';

    const backdrop = document.createElement("div");
    backdrop.classList.add("drawer-backdrop");
    this._backdrop = backdrop;

    const drawer = document.createElement("div");
    drawer.classList.add("drawer-window");
    drawer.setAttribute('data-side', this._side);
    this._drawer = drawer;

    const closeBtn = document.createElement("button");
    closeBtn.setAttribute("type", "button");
    closeBtn.setAttribute("aria-label", "Закрыть");
    closeBtn.classList.add("drawer-close-btn");
    closeBtn.innerHTML = `<svg class="drawer-close-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99978 5L8.53531 8.53553M1.46424 8.53553L4.99978 5L1.46424 8.53553ZM8.53531 1.46447L4.99978 5L8.53531 1.46447ZM4.99978 5L1.46424 1.46447L4.99978 5Z" stroke="#B9B9B9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    closeBtn.addEventListener("click", () => this.close());
    drawer.appendChild(closeBtn);

    const trigger = this.querySelector('[slot="drawerTrigger"]');
    const content = this.querySelector('[slot="content"]');
    const actions = this.querySelector('[slot="actions"]');
    if (trigger) this.appendChild(trigger);
    if (content) drawer.appendChild(content);
    if (actions) drawer.appendChild(actions);

    this.appendChild(backdrop);
    this.appendChild(drawer);

    if (trigger) {
      trigger.addEventListener("click", () => this.open());
    }

    backdrop.addEventListener("click", () => this.close());
  }

  static get observedAttributes() {
    return ["open", "side"];
  }

  attributeChangedCallback(name: string, _oldValue: string | null, newValue: string | null) {
    if (name === "open") {
      if (newValue !== null) {
        this._backdrop.style.display = "block";
        this._drawer.style.display = "block";
        requestAnimationFrame(() => {
          this._backdrop.classList.add("drawer-visible");
          this._drawer.classList.add("drawer-visible");
        });
      } else {
        this._backdrop.classList.remove("drawer-visible");
        this._drawer.classList.remove("drawer-visible");
        setTimeout(() => {
          this._backdrop.style.display = "none";
          this._drawer.style.display = "none";
        }, 250);
      }
    }
    if (name === "side" && newValue) {
      this._side = newValue;
      this._drawer.setAttribute('data-side', this._side);
    }
  }

  connectedCallback() {
    if (!this.hasAttribute("open")) {
      this._backdrop.style.display = "none";
      this._drawer.style.display = "none";
    }
    this._side = this.getAttribute('side') || 'right';
    this._drawer.setAttribute('data-side', this._side);
  }

  open() {
    this.setAttribute("open", "");
  }
  close() {
    this.removeAttribute("open");
  }
}

customElements.define("custom-drawer", Drawer);

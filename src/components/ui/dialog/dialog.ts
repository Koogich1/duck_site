import styles from "./dialog.styles.css?inline";

if (!document.head.querySelector('style[data-custom-dialog]')) {
  const styleElement = document.createElement("style");
  styleElement.textContent = styles;
  styleElement.setAttribute('data-custom-dialog', '');
  document.head.appendChild(styleElement);
}

class Dialog extends HTMLElement {
  private _dialog: HTMLDivElement;
  private _backdrop: HTMLDivElement;

  constructor() {
    super();

    const backdrop = document.createElement("div");
    backdrop.classList.add("dialog-backdrop");
    this._backdrop = backdrop;

    const dialog = document.createElement("div");
    dialog.classList.add("dialog-window");
    this._dialog = dialog;

    const closeBtn = document.createElement("button");
    closeBtn.setAttribute("type", "button");
    closeBtn.setAttribute("aria-label", "Закрыть");
    closeBtn.classList.add("dialog-close-btn");
    closeBtn.innerHTML = `<svg class="dialog-close-icon" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.99978 5L8.53531 8.53553M1.46424 8.53553L4.99978 5L1.46424 8.53553ZM8.53531 1.46447L4.99978 5L8.53531 1.46447ZM4.99978 5L1.46424 1.46447L4.99978 5Z" stroke="#B9B9B9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    closeBtn.addEventListener("click", () => this.close());
    dialog.appendChild(closeBtn);

    const trigger = this.querySelector('[slot="dialogTrigger"]');
    const content = this.querySelector('[slot="content"]');
    const actions = this.querySelector('[slot="actions"]');
    if (trigger) this.appendChild(trigger);
    if (content) dialog.appendChild(content);
    if (actions) dialog.appendChild(actions);

    this.appendChild(backdrop);
    this.appendChild(dialog);

    if (trigger) {
      trigger.addEventListener("click", () => this.open());
    }

    backdrop.addEventListener("click", () => this.close());
  }

  static get observedAttributes() {
    return ["open"];
  }

  attributeChangedCallback(name: string, _oldValue: string | null, newValue: string | null) {
    if (name === "open") {
      if (newValue !== null) {
        this._backdrop.style.display = "block";
        this._dialog.style.display = "block";
        requestAnimationFrame(() => {
          this._backdrop.classList.add("dialog-visible");
          this._dialog.classList.add("dialog-visible");
        });
      } else {
        this._backdrop.classList.remove("dialog-visible");
        this._dialog.classList.remove("dialog-visible");
        setTimeout(() => {
          this._backdrop.style.display = "none";
          this._dialog.style.display = "none";
        }, 250);
      }
    }
  }

  connectedCallback() {
    if (!this.hasAttribute("open")) {
      this._backdrop.style.display = "none";
      this._dialog.style.display = "none";
    }
  }

  open() {
    this.setAttribute("open", "");
  }
  close() {
    this.removeAttribute("open");
  }
}

customElements.define("custom-dialog", Dialog);
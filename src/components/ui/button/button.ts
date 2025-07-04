import styles from "./button.styles.css?inline";

if (!document.head.querySelector('style[data-custom-button]')) {
  const styleElement = document.createElement("style");
  styleElement.textContent = styles;
  styleElement.setAttribute('data-custom-button', '');
  document.head.appendChild(styleElement);
}

class Button extends HTMLElement {
  private _button: HTMLButtonElement;

  constructor() {
    super();
    const button = document.createElement("button");
    button.classList.add("btn");
    this._button = button;

    const icon = this.querySelector('[slot="icon"]');
    const text = this.querySelector('[slot="text"]');
    if (icon) button.appendChild(icon);
    if (text) button.appendChild(text);

    this.appendChild(button);

    button.addEventListener("click", () => {
      if (!button.disabled) {
        this.dispatchEvent(new Event("click", { bubbles: true }));
      }
    });
  }

  static get observedAttributes() {
    return ["variant", "size", "disabled"];
  }

  attributeChangedCallback(name: string, _oldValue: string | null, newValue: string | null) {
    const button = this._button;
    if (!button) return;
    if (name === "variant") {
      ["primary", "secondary", "outline"].forEach((cls) => button.classList.remove(cls));
      if (newValue) button.classList.add(newValue);
    }
    if (name === "size") {
      ["default", "icon"].forEach((cls) => button.classList.remove(cls));
      if (newValue) button.classList.add(newValue);
    }
    if (name === "disabled") {
      button.disabled = newValue !== null;
    }
  }
}

customElements.define("custom-button", Button);
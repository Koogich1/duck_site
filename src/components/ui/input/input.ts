import styles from  "./inputStyles.css?inline";

if (!document.head.querySelector('style[data-custom-input]')) {
  const styleElement = document.createElement("style");
  styleElement.textContent = styles;
  styleElement.setAttribute('data-custom-input', '');
  document.head.appendChild(styleElement);
}

class CustomInput extends HTMLElement {
  private _input: HTMLInputElement;

  constructor() {
    super();
    this.innerHTML = "";
    this._input = document.createElement("input");
    this._input.classList.add("custom-input");
    this._input.type = "text";
    this.appendChild(this._input);
  }

  static get observedAttributes() {
    return ["placeholder", "value", "classname"];
  }

  attributeChangedCallback(name: string, _oldValue: string | null, newValue: string | null) {
    if (name === "placeholder") {
      this._input.placeholder = newValue || "";
    }
    if (name === "value") {
      this._input.value = newValue || "";
    }
    if (name === "classname") {
      this._input.className = "custom-input";
      if (newValue) {
        this._input.classList.add(...newValue.split(" ").filter(Boolean));
      }
    }
  }

  connectedCallback() {
    if (this.hasAttribute("placeholder")) {
      this._input.placeholder = this.getAttribute("placeholder")!;
    }
    if (this.hasAttribute("value")) {
      this._input.value = this.getAttribute("value")!;
    }
    if (this.hasAttribute("classname")) {
      this._input.classList.add(...this.getAttribute("classname")!.split(" ").filter(Boolean));
    }
  }

  get value() {
    return this._input.value;
  }
  set value(val: string) {
    this._input.value = val;
  }
}

customElements.define("custom-input", CustomInput);
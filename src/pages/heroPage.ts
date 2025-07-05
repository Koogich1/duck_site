import '@features/hero/bigDuckSection'
import '@features/hero/buttonListSection'

export class HeroPage extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
			<big-duck-section></big-duck-section>
			<button-list-section></button-list-section>
		`;
	};
}

customElements.define("hero-page", HeroPage);
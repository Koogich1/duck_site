import "@components/ui/button/button.ts"
import "./styles/bigDuckSectionStyle.css"

export class BigDuckSection extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
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
		`;
	};
}

customElements.define("big-duck-section", BigDuckSection);
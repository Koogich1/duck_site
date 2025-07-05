import "@components/ui/button/button.ts";
import "./styles/bigDuckListSectionStyle.css";

export class buttonListSection extends HTMLElement {
  constructor() {
    const icon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <polyline points="12,5 17,10 12,15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </svg>`;
    super();
    this.innerHTML = `
			<section class="big-duck-list-section">
			<ul class="big-duck-list">
				<li>
					<custom-button variant="link">
						<span slot="icon-left">
							${icon}
						</span>
						<span slot="text">Классические</span>
					</custom-button>
				</li>
				<li>
					<custom-button variant="link">
						<span slot="icon-left">
							${icon}
						</span>
						<span slot="text">Уточки панки</span>
					</custom-button>
				</li>
				<li>
					<custom-button variant="link">
						<span slot="icon-left">
							${icon}
						</span>
						<span slot="text">Супергерои</span>
					</custom-button>
				</li>
				<li>
					<custom-button variant="link">
						<span slot="icon-left">
							${icon}
						</span>
						<span slot="text">Милые</span>
					</custom-button>
				</li>
				<li>
					<custom-button variant="link">
						<span slot="icon-left">
							${icon}
						</span>
						<span slot="text">Для детей</span>
					</custom-button>
				</li>
				<li>
					<custom-button variant="link">
						<span slot="icon-left">
							${icon}
						</span>
						<span slot="text">Взрослым</span>
					</custom-button>
				</li>
			</ul>
		</section>
		`;
  }
}

customElements.define("button-list-section", buttonListSection);

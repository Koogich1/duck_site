import "./headerLayout.style.css";
import "@ui/button/button.ts";
import "@ui/dialog/dialog.ts";
import "./forms/dialogHeaderForm.ts";
export class HeaderLayout extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
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
        <custom-dialog id="header-callback-dialog">
          <dialogTrigger slot="dialogTrigger">
            <custom-button variant="primary" size="default">
              <span slot="text">Заказать обратный звонок</span>
            </custom-button>
          </dialogTrigger>
            <div slot="content">
              <header-layout-form class="header-dialog-form"></header-layout-form>
            </div>
        </custom-dialog>
      </header>
    `;
  }
}

customElements.define("header-layout", HeaderLayout);

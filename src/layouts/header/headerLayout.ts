import "./headerLayout.style.css";
import "@ui/button/button.ts";
import "@ui/dialog/dialog.ts";
import "./forms/dialogHeaderForm.ts";
import "@ui/drawer/drawer.ts";
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
        <div class="header-layout-actions">
          <custom-button class="header-layout-button">
            <span slot="icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.3335 7.33332L6.00016 2.66666" stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.6667 7.33332L10 2.66666" stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.3335 7.33334H14.6668" stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2.3335 7.33334L3.40016 12.2667C3.4625 12.5724 3.63006 12.8465 3.87369 13.0414C4.11731 13.2363 4.42157 13.3396 4.7335 13.3333H11.2668C11.8668 13.3333 12.4668 12.8667 12.6002 12.2667L13.7335 7.33334" stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 7.33334L6.66667 13.3333" stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 10.3333H13" stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10.0002 7.33334L9.3335 13.3333" stroke="#6B7280" stroke-linecap="round" stroke-linejoin="round"/>
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
    `;

    setTimeout(() => {
      const drawerBtn = this.querySelector('#drawer-callback-btn');
      const drawer = this.querySelector('#header-drawer');
      const dialog = this.querySelector('#header-callback-dialog');
      if (drawerBtn && drawer && dialog) {
        drawerBtn.addEventListener('click', () => {
          drawer.removeAttribute('open');
          setTimeout(() => {
            dialog.setAttribute('open', '');
          }, 250);
        });
      }
    }, 0);

    const updateDrawerSide = () => {
      const drawer = this.querySelector("#header-drawer");
      if (!drawer) return;
      if (window.innerWidth <= 620) {
        drawer.setAttribute("side", "top");
      } else {
        drawer.setAttribute("side", "right");
      }
    };
    window.addEventListener("resize", updateDrawerSide);
    updateDrawerSide();
  }
}

customElements.define("header-layout", HeaderLayout);

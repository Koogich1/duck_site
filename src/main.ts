import './components/ui/button/button.ts';
import './components/ui/dialog/dialog.ts';
import './components/ui/input/input.ts';
import './style.css';

const arrowSvg = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.3328 10.751C16.6078 10.4423 17.0815 10.4145 17.3909 10.6889L22.7484 15.441C22.9085 15.583 23 15.7864 23 16C23 16.2136 22.9085 16.417 22.7484 16.559L17.3909 21.3111C17.0815 21.5855 16.6078 21.5577 16.3328 21.249C16.0578 20.9403 16.0856 20.4676 16.395 20.1932L20.2793 16.7479H9.74948C9.33555 16.7479 9 16.413 9 16C9 15.587 9.33555 15.2521 9.74948 15.2521H20.2793L16.395 11.8068C16.0856 11.5324 16.0578 11.0597 16.3328 10.751Z" fill="#201F29"/></svg>`;

//TODO: CLEAN PAGE && ADD FEATURES HERO PAGE, NOW THIS PAGE IS COMPONENTS LIST

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <section>
      <a href="https://www.typescriptlang.org/" target="_blank">
      </a>
      <h1>Vite + TypeScript</h1>
      <p class="read-the-docs">Click on the Vite and TypeScript logos to learn more</p>
      <custom-button variant="primary" size="default">
        <span slot="icon">${arrowSvg}</span>
        <span slot="text">Submit</span>
      </custom-button>
       <custom-button variant="secondary" size="default">
        <span slot="icon">${arrowSvg}</span>
        <span slot="text">Submit</span>
      </custom-button>
      <custom-button variant="outline" size="default">
        <span slot="icon">${arrowSvg}</span>
        <span slot="text">Submit</span>
      </custom-button>
      <custom-button variant="primary" size="icon">
        <span slot="icon">${arrowSvg}</span>
      </custom-button>

      <custom-dialog id="test-dialog">
        <dialogTrigger slot="dialogTrigger">
          <custom-button variant="primary" size="default">
            <span slot="text">Открыть диалог</span>
          </custom-button>
        </dialogTrigger>
        <span slot="content">

        </span>
        <div slot="actions">
          <custom-button variant="primary" size="default" id="close-btn">
            <span slot="text">Закрыть</span>
          </custom-button>
        </div>
      </custom-dialog>
      <custom-input placeholder="Введите текст" value="" classname="custom-class"></custom-input>
      <custom-button variant="menu-tab" size="default">
        <span slot="text">Открыть диалог</span>
      </custom-button>
    </section>
  `;

//  const dialog = document.getElementById('test-dialog');
});

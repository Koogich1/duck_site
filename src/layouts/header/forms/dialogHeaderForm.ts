import "@ui/input/input.ts";
import "@ui/button/button.ts";
import "./dialogHeaderFormStyle.css";

export class HeaderLayoutForm extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
			<div class="header-callback-dialog-form">
				<label>Имя <span>*</span></label>
				<custom-input placeholder="Введите ваше имя"></custom-input>
				<label>Телефон <span>*</span></label>
				<custom-input class="phone-input" placeholder="+7(000)-000-00-00"></custom-input>
        <div class="form-error" style="display:none;color:#ff3b30;font-size:14px;margin-bottom:8px;"></div>
				<custom-button variant="primary" size="default">
					<p slot="text">Отправить</p>
				</custom-button>
				<p class="policy-text">
					Нажимая кнопку “Отправить”, вы соглашаетесь с
					<a href="/privacy-policy" target="_blank">политикой конфиденциальности</a>
					и
					<a href="/offer" target="_blank">договором оферты</a>
				</p>
			</div>
		`;

    setTimeout(() => {
      const nameCustomInput = this.querySelectorAll('custom-input')[0];
      const nameLabel = this.querySelectorAll('label')[0];
      const nameStar = nameLabel.querySelector('span');
      const waitForNameInput = () => {
        const input = nameCustomInput.querySelector('input');
        if (!input) {
          setTimeout(waitForNameInput, 30);
          return;
        }
        input.addEventListener('input', () => {
          if (!nameStar) return;
          if (input.value.trim()) {
            nameStar.style.display = 'none';
          } else {
            nameStar.style.display = '';
          }
        });
      };
      waitForNameInput();

      const phoneCustomInput = this.querySelector('.phone-input');
      const phoneLabel = this.querySelectorAll('label')[1];
      const phoneStar = phoneLabel.querySelector('span');
      const waitForPhoneInput = () => {
        if (!phoneCustomInput) {
          setTimeout(waitForPhoneInput, 30);
          return;
        }
        const input = phoneCustomInput.querySelector('input');
        if (!input) {
          setTimeout(waitForPhoneInput, 30);
          return;
        }
        input.addEventListener('focus', () => {
          if (!input.value) {
            input.value = '+7 (';
            input.setSelectionRange(4, 4);
          } else {
            if (input.selectionStart !== null && input.selectionStart < 4) {
              input.setSelectionRange(4, 4);
            }
          }
        });
        input.addEventListener('input', () => {
          let val = input.value.replace(/\D/g, '');
          if (val.startsWith('7')) val = val.slice(1); 
          if (val.length > 10) val = val.slice(0, 10);
          let masked = '+7 (';
          if (val.length > 0) masked += val.substring(0, 3);
          if (val.length >= 4) masked += ') ' + val.substring(3, 6);
          else if (val.length > 3) masked += ') ';
          if (val.length >= 7) masked += '-' + val.substring(6, 8);
          else if (val.length > 6) masked += '-';
          if (val.length >= 9) masked += '-' + val.substring(8, 10);
          else if (val.length > 8) masked += '-';
          input.value = masked;
          if (input.selectionStart !== null && input.selectionStart < 4) {
            input.setSelectionRange(4, 4);
          }
          if (!phoneStar) return;
          if (val.length === 10) {
            phoneStar.style.display = 'none';
          } else {
            phoneStar.style.display = '';
          }
        });
        input.addEventListener('blur', () => {
          if (input.value === '+7 (') input.value = '';
        });
      };
      waitForPhoneInput();

      const button = this.querySelector('custom-button');
      const errorDiv = this.querySelector('.form-error') as HTMLElement | null;
      if (button) {
        button.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const nameInput = this.querySelectorAll('custom-input')[0]?.querySelector('input');
          const phoneInput = this.querySelector('.phone-input')?.querySelector('input');
          const name = nameInput?.value || '';
          const phone = phoneInput?.value || '';
          if ((!name.trim() || !phone.replace(/\D/g, '')) && errorDiv) {
            errorDiv.textContent = 'Необходимо заполнить все поля!';
            errorDiv.style.display = '';
            return;
          } else if (errorDiv) {
            errorDiv.textContent = '';
            errorDiv.style.display = 'none';
          }
          alert(`Данные отправлены!\nИмя: ${name}\nТелефон: ${phone}`);
          if (nameInput) nameInput.value = '';
          if (phoneInput) phoneInput.value = '';
          if (nameLabel && nameStar && nameInput && !nameInput.value.trim()) nameStar.style.display = '';
          if (phoneLabel && phoneStar && phoneInput && !phoneInput.value.replace(/\D/g, '')) phoneStar.style.display = '';
          const dialog = this.closest('custom-dialog');
          if (dialog && typeof (dialog as any).close === 'function') (dialog as any).close();
        });
      }
			
      const allInputs = this.querySelectorAll('custom-input input');
      allInputs.forEach(inp => {
        inp.addEventListener('input', () => {
          if (errorDiv) {
            errorDiv.textContent = '';
            errorDiv.style.display = 'none';
          }
        });
      });
    }, 0);
  }
}

customElements.define("header-layout-form", HeaderLayoutForm);

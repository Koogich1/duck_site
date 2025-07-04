import './layouts/header/headerLayout.ts';
import './style.css';

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <header-layout></header-layout>
  `;
});

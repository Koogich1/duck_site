# 🦆 Duck Store - Web Components Project

Современное веб-приложение, построенное на чистых **Web Components** с **TypeScript** и **Vite**, без использования фреймворков.

## 🎯 Основные достижения

### ✨ Технические достижения
- **100% Vanilla Implementation** - Никаких внешних фреймворков, только чистые Web Components
- **TypeScript Excellence** - Строгая типизация с настроенным TSConfig
- **Component Architecture** - Переиспользуемые UI компоненты
- **Responsive Design** - Адаптивная верстка для всех устройств

### 🏗️ Архитектурные решения
- **Модульная структура** - Четкое разделение на компоненты, фичи и макеты
- **Path Aliases** - Удобная система импортов (`@components`, `@ui`, `@features`)
- **CSS Encapsulation** - Изолированные стили для каждого компонента
- **Event-Driven Communication** - Правильная передача событий между компонентами
- **Lifecycle Management** - Корректная работа с жизненным циклом Web Components

## 🛠️ Технологический стек

- **TypeScript** 5.8+ - Строгая типизация
- **Vite** 7.0+ - Современный билд-тул
- **Web Components** - Нативные пользовательские элементы
- **CSS3** - Современные возможности стилизации
- **ES2022** - Последние возможности JavaScript

## 📁 Структура проекта

```
src/
├── components/ui/          # Переиспользуемые UI компоненты
│   ├── button/            # Кнопка с вариантами стилей
│   ├── dialog/            # Модальное окно
│   ├── drawer/            # Боковая панель
│   └── input/             # Поле ввода
├── features/hero/         # Фичи главной страницы
│   ├── bigDuckSection.ts  # Основная секция с уточкой
│   └── buttonListSection.ts # Секция с кнопками
├── layouts/header/        # Макет шапки сайта
│   ├── headerLayout.ts    # Основной компонент шапки
│   └── forms/            # Формы для шапки
└── pages/                # Страницы приложения
    └── heroPage.ts       # Главная страница
```

## 🎨 Реализованные компоненты

### 🔘 Custom Button
- **5 вариантов стилей**: Primary, Secondary, Outline, Menu-tab, Link
- **2 размера**: Default, Icon
- **Слоты для контента**: Icon-left, Text
- **Состояния**: Hover, Active, Disabled
- **Accessibility**: ARIA attributes, keyboard navigation

### 📱 Custom Dialog
- **Анимированное появление/скрытие**
- **Backdrop для закрытия**
- **Кнопка закрытия**
- **Слоты для контента и действий**
- **Управление через атрибуты**

### 🗂️ Custom Drawer
- **Responsive поведение** (top/right/left/bottom в зависимости от экрана)
- **Smooth анимации**
- **Backdrop interaction**
- **Слоты для trigger и content**

### 📝 Custom Input
- **Стилизованные поля ввода**
- **Валидация состояний**
- **Placeholder поддержка**

## 🎯 Особенности реализации

### 💡 Smart CSS Loading
```typescript
// Динамическая загрузка стилей без дублирования
if (!document.head.querySelector('style[data-custom-button]')) {
  const styleElement = document.createElement("style");
  styleElement.textContent = styles;
  styleElement.setAttribute('data-custom-button', '');
  document.head.appendChild(styleElement);
}
```

### 🔄 Reactive Attributes
```typescript
static get observedAttributes() {
  return ["variant", "size", "disabled"];
}

attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
  // Реактивное обновление компонента при изменении атрибутов
}
```

### 📱 Responsive Logic
```typescript
const updateDrawerSide = () => {
  const drawer = this.querySelector("#header-drawer");
  if (window.innerWidth <= 620) {
    drawer.setAttribute("side", "top");
  } else {
    drawer.setAttribute("side", "right");
  }
};
```

## 🎨 CSS Features

- **CSS Custom Properties** для темизации
- **Smooth transitions** и анимации
- **Flexbox/Grid** для современных макетов
- **Media queries** для адаптивности
- **CSS-in-JS** подход через импорты

### Цветовая палитра
```css
:root {
  --btn-primary-initial: #EAB308;
  --btn-primary-hover: #FEC71C;
  --btn-primary-pressed: #CC9500;
  --btn-secondary-initial: #2581EB;
  --btn-secondary-hover: #439FFF;
  --btn-secondary-pressed: #0763CD;
}
```

```bash
# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev

# Сборка для продакшена
npm run build

# Предпросмотр build
npm run preview

# Деплой на GitHub Pages
npm run deploy
```
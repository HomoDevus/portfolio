import { LOCALES } from './locales'

export const MESSAGES = {
  [LOCALES.ENGLISH]: {
    name: 'Slava Lavrov',
    profession: 'Front-end Developer',
    menu_works: 'WORKS',
    menu_about: 'ABOUT',
    menu_lang_ru: 'RUS',
    menu_lang_en: 'ENG',
    menu_mail: 'MAIL',
    project_minesweeper: 'Minesweeper',
    project_minesweeper_description: 'It\'s a classical game written in JavaScript and React. The objective' +
      ' of the game is to clear a rectangular board containing hidden mines without detonating any of them, with' +
      ' help from clues about the number of neighboring mines in each field.',
    project_piano: 'Virtual Piano',
    project_piano_description: "This is a virtual piano. Its feature is in the ability to automatically " +
      "play thousand of melodies using 'pseudo notes' from the website that contains 'pseudo notes' for " +
      "thousand of songs.",
    project_word_counter: 'Word Counter',
    project_word_counter_description: 'An app for word count that can help you learn English by getting the most' +
      ' used words in a book before reading. It works with .epub files. Its main feature is called "Smart Count"' +
      ' its ability to count words by their root (words with different forms count as the same one).',
    technologies: 'technologies I use',
    yandex_title: 'Yandex',
    yandex_position: 'Tester Accessor',
    yandex_description: 'Tested browser, mobile applications, web sites API’s using web debugging proxy tools ' +
      'to mock and modify applications requests.',
    yandex_href: 'https://yandex.ru',
    lexicom_title: 'Lexicom',
    lexicom_position: 'Junior-Middle React Developer',
    lexicom_description: 'Developed on the web text documents system that has templates, text blocks and autosave features.\n' +
      '\n' +
      'Made text editor 90% more efficient in text insertion, editing and styling by separating CPU-heavy tasks into macrotasks.\n' +
      '\n' +
      'Build state management system with middleware that connected application to the backend API, using Redux Saga.',
    lexicom_href: 'https://lexicom.ai',
    about_me_title: 'About me',
    about_me_text: '',
    contacts: 'Contacts',
    telegram: 'Telegram',
    resume: 'Resume',
    resume_href: '#',
  },
  [LOCALES.RUSSIAN]: {
    name: 'Слава Лавров',
    profession: 'Front-end Разработчик',
    menu_works: 'РАБОТЫ',
    menu_about: 'О СЕБЕ',
    menu_lang_ru: 'РУС',
    menu_lang_en: 'АНГ',
    menu_mail: 'ПОЧТА',
    project_minesweeper: 'Минёр',
    project_minesweeper_description: 'Это классическая игра написанная на React и JavaScript. Цель игры, открыть все ' +
      'клетки не содержащие мины. При открытии клетки отображается количество мин в соседних клетках.',
    project_piano: 'Виртуально пианино',
    project_piano_description: 'Это не просто пианино, его главная особенность в том, что оно может автоматически' +
      ' проигрывать тысячи мелодий с помощью “псевдо нот”.',
    project_word_counter: 'Word Counter',
    project_word_counter_description: 'Приложение для подсчёта слов и изучения английского языка с помощью ' +
      'чтения книг. Работает с файлами расширения .epub. У приложения есть режим "Smart Count" который считает' +
      ' слова по их корню (слова с разными окончаниями считаются как одно слово).',
    technologies: 'технологии которые я использую',
    yandex_title: 'Яндекс',
    yandex_position: 'Тестировщик Асессор',
    yandex_description: 'Занимался тестированием браузеров, мобильных приложений, веб-сайтов и API. Использовал' +
      ' инструменты отладки веб прокси для проверки и подменны запросов приложения.',
    yandex_href: 'https://yandex.ru',
    lexicom_title: 'Лексиком',
    lexicom_position: 'Junior-Middle React Разработчик',
    lexicom_description: 'Разработал систему текстовых документов, которая имеет шаблоны, текстовые блоки и авто сохранение.\n' +
      '\n' +
      'Оптимизировал текстовый редактор при вставке, редактировании и стилизации большого объёма текста с помощью разделения тяжёлых задач на макрозадачи.\n' +
      '\n' +
      'Разработал систему управления состояниям с middleware для отправки запросов на backend используя Redux Saga',
    lexicom_href: 'https://lexicom.ai',
    about_me_title: 'О себе',
    about_me_text: 'art direction, experience and interface design (ux-ui), product design, design systems and component\n' +
      '          libraries,\n' +
      '          branding and identities, motion design, and more.',
    contacts: 'Контакты',
    telegram: 'Телеграм',
    resume: 'Резюме',
    resume_href: '#',
  }
}
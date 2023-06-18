import { LOCALES } from './locales'
import resumeEn from '../img/Slava Lavrov Frontend Developer. Resume.pdf'
import resumeRu from '../img/Вячеслав Лавров Frontend разработчик. Резюме.pdf'

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
    project_minesweeper_description:
      'It\'s a classical game written in JavaScript and React. The objective' +
      ' of the game is to clear a rectangular board containing hidden mines without detonating any of them, with' +
      ' help from clues about the number of neighboring mines in each field.',
    project_piano: 'Virtual Piano',
    project_piano_description:
      'This is a virtual piano. Its feature is in the ability to automatically ' +
      'play thousand of melodies using \'pseudo notes\' from the website that contains \'pseudo notes\' for ' +
      'thousand of songs.',
    project_word_counter: 'Word Counter',
    project_word_counter_description:
      'An app for word count that can help you learn English by getting the most' +
      ' used words in a book before reading. It works with .epub files. Its main feature is called "Smart Count"' +
      ' its ability to count words by their root (words with different forms count as the same one).',
    technologies: 'technologies I use',
    yandex_title: 'Yandex',
    yandex_position: 'Tester-assessor',
    yandex_description:
      'Tested browser, mobile applications, web sites API’s using web debugging proxy tools ' +
      'to mock and modify applications requests.',
    yandex_href: 'https://yandex.com/company/general_info/yandex_today',
    lexicom_title: 'Lexicom',
    lexicom_position: 'Junior-Middle React Developer',
    lexicom_description:
      'Developed on the web text documents system that has templates, text blocks and autosave features.\n' +
      '\n' +
      'Made text editor 90% more efficient in text insertion, editing and styling by separating CPU-heavy tasks into macrotasks.\n' +
      '\n' +
      'Build state management system with middleware that connected application to the backend API, using Redux Saga.',
    lexicom_href: 'https://lexicom.ai',
    shri_title: 'Yandex Academy',
    shri_position: 'Participant in Interface Development School',
    shri_description:
      'We had lectures, seminars, and workshops from Yandex employees who work every day on services' +
      ' with a multi-million audience.\n After that, we worked on a team project under the guidance of a mentors.',
    shri_href: 'https://academy.yandex.ru/schools/frontend',
    yandex_internship_title: 'Yandex',
    yandex_internship_position: 'Intern',
    yandex_internship_description:
      'Worked on the admin panel of E-com and ridetech services. Participated in the Agile cycle. Was doing a code review.' +
      ' Made changes to the node.js middleware of the application. Fixed an authorization bug. Hid cookies in logging. ' +
      'Optimized and refactored the project. Wrote a rule for the ESLinter. Set up http headers for iframe.',
    yandex_internship_href: 'https://yandex.ru/yaintern/',
    about_me_title: 'About me',
    about_me_text:
      'I\'m an inspired front-end developer. Sometimes I do web-design for my projects, like this website.' +
      ' Currently, I code using TypeScript and React. I have' +
      ' commercial experience in development and I also completed {school_name}. Right now I\'m an intern' +
      ' at Yandex.',
    yandex_school_name: 'Yandex developer school',
    contacts: 'Contacts',
    telegram: 'Telegram',
    resume: 'Resume',
    resume_href: resumeEn,
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
    project_minesweeper_description:
      'Это классическая игра написанная на React и JavaScript. Цель игры, открыть все ' +
      'клетки не содержащие мины. При открытии клетки отображается количество мин в соседних клетках.',
    project_piano: 'Виртуально пианино',
    project_piano_description:
      'Это не просто пианино, его главная особенность в том, что оно может автоматически' +
      ' проигрывать тысячи мелодий с помощью “псевдо нот”.',
    project_word_counter: 'Word Counter',
    project_word_counter_description:
      'Приложение для подсчёта слов и изучения английского языка с помощью ' +
      'чтения книг. Работает с файлами расширения .epub. У приложения есть режим "Smart Count" который считает' +
      ' слова по их корню (слова с разными окончаниями считаются как одно слово).',
    technologies: 'технологии которые я использую',
    yandex_title: 'Яндекс',
    yandex_position: 'Тестировщик Асессор',
    yandex_description:
      'Занимался тестированием браузеров, мобильных приложений, веб-сайтов и API. Использовал' +
      ' инструменты отладки веб прокси для проверки и подменны запросов приложения.',
    yandex_href: 'https://yandex.ru/company/main',
    lexicom_title: 'Лексиком',
    lexicom_position: 'Junior-Middle React Разработчик',
    lexicom_description:
      'Разработал систему текстовых документов, которая имеет шаблоны, текстовые блоки и авто сохранение.\n' +
      '\n' +
      'Оптимизировал текстовый редактор при вставке, редактировании и стилизации большого объёма текста с помощью разделения тяжёлых задач на макрозадачи.\n' +
      '\n' +
      'Разработал систему управления состояниям с middleware для отправки запросов на backend используя Redux Saga',
    lexicom_href: 'https://lexicom.ai',
    shri_title: 'Академия Яндекса',
    shri_position: 'Участник Школы Разработки Интерфейсов',
    shri_description:
      'У нас были лекции, семинары и практикумы от сотрудников Яндекса, которые каждый день работают ' +
      'над сервисами с многомиллионной аудиторией.\n' +
      'Параллельно мы работали над командными проектами под руководством кураторов.',
    shri_href: 'https://academy.yandex.ru/schools/frontend',
    yandex_internship_title: 'Яндекс',
    yandex_internship_position: 'Стажёр',
    yandex_internship_description:
      'Работал над админ-панелью сервисов Екома и райдтеха. Участвовал в Agile цикле. Проводил код-ревью. ' +
      'Внёс изменения в node.js middleware приложения. Исправил баг с авторизацией. ' +
      'Скрыл cookie в логировании. Оптимизировал и рефакторил проект. Написал правило для линтера. Настроил http заголовки для iframe.',
    yandex_internship_href: 'https://yandex.ru/yaintern/',
    about_me_title: 'О себе',
    about_me_text:
      'Я frontend разработчик, иногда делаю дизайн для своих проектов, как например этот сайт. ' +
      'Пишу код на TypeScript и React. У меня есть коммерческий опыт в разработки и pet проекты. ' +
      'Я окончил {school_name} и теперь стажируюсь здесь.' +
      '',
    yandex_school_name: 'школу разработки интерфейсов Яндекса',
    contacts: 'Контакты',
    telegram: 'Телеграм',
    resume: 'Резюме',
    resume_href: resumeRu,
  },
}

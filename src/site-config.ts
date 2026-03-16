export const siteConfig = {
  title: "Пишу",
  siteName: "Имя автора",
  description: "Минималистичный блог на Astro с теплой типографикой и сдержанной анимацией.",
  aboutTitle: "Обо мне",
  aboutBody: [
    "Я пишу о вебе, инструментах, интерфейсах и спокойных цифровых продуктах. Мне интересны вещи, которые работают тихо, но точно.",
    "Этот блог собран как легкое место для длинного текста: без лишнего шума, с вниманием к ритму, шрифтам и ощущению от чтения.",
    "Позже сюда можно подставить ваш реальный био-текст, не меняя структуру страницы.",
  ],
  links: [
    {
      label: "GitHub",
      href: "https://github.com/bazzzdev",
    },
    {
      label: "Telegram",
      href: "https://t.me/bazzzvl",
    },
    {
      label: "Email",
      href: "mailto:bazanov.dev@gmail.com",
    },
  ],
} as const;

export const navigation = [
  { href: "/", label: "Пишу" },
  { href: "/about", label: "Обо мне" },
] as const;

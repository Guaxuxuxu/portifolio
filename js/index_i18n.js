// Inicialização com detector de idioma
i18next
  .use(i18nextBrowserLanguageDetector)
  .init({
    debug: true,
    fallbackLng: 'pt',
    resources: {
      pt: {
        translation: {
          nav_home: "Home",
          nav_linkedin: "LinkedIn",
          nav_artstation: "ArtStation",
          intro_name: "Guilherme N. Isac",
          intro_desc: "Olá! Meu nome é Guilherme. Trabalho de forma intermitente com UI/UX, design e ilustração há mais de 3 anos. Este site mostra um pouco das coisas que já fiz.",
          gallery_uiux: "UI/UX",
          gallery_ilus: "Ilustração",
          gallery_design: "Design",
          footer: "@xuxu_gua | +55 (34) 9 8410-5711 | guilherme.nasc.sac@gmail.com"
        }
      },
      en: {
        translation: {
          nav_home: "Home",
          nav_linkedin: "LinkedIn",
          nav_artstation: "ArtStation",
          intro_name: "Guilherme N. Isac",
          intro_desc: "Hi! My name is Guilherme. I’ve been working intermittently with UI/UX, design and illustration for over 3 years. This site shows a bit of what I’ve done.",
          gallery_uiux: "UI/UX",
          gallery_ilus: "Illustration",
          gallery_design: "Design",
          footer: "@xuxu_gua | +55 (34) 9 8410-5711 | guilherme.nasc.sac@gmail.com"
        }
      }
    }
  }, function(err, t) {
    jqueryI18next.init(i18next, $, {
      useOptionsAttr: true
    });

    $('body').localize();
  });

function changeLng(lng) {
  i18next.changeLanguage(lng, () => {
    $('body').localize();
  });
}

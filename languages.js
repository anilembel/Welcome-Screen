function loadLanguages() {
  return `
      <header class ="languageHeader">
        <h2 style="top:200px"> Choose your language to continue</h2>
      </header>
      
      <button class="languageButton" onclick="setLanguage('en'); navigate('home')">
        <img src="assets/en.svg" class="languageFlag"></img>
        <p class="languageText">English</p>
      </button>
      <button class="languageButton" onclick="setLanguage('nl'); navigate('home')">
        <img src="assets/nl.svg" class="languageFlag">
        <p class="languageText">Nederlands</p>
      </button>
      <button class="languageButton" onclick="setLanguage('fr-FR'); navigate('home')">
        <img src="assets/fr.svg" class="languageFlag"><p class="languageText">Français</p>
      </button>
      `;
}
s;

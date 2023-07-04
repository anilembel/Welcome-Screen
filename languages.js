function loadLanguages() {
    return `
      <h2 style="top:200px">Choose your language to continue</h2>
      <button onclick="setLanguage('en'); navigate('home')">English</button>
      <button onclick="setLanguage('nl'); navigate('home')">Nederlands</button>
      <button onclick="setLanguage('fr-FR'); navigate('home')">Français</button>
    `;
  }
async function loadHome() {
  await loadDemoFromStrapi();
  const currentDemoContent = demoContent.data[demoPosition];
  const sdgUrlList = currentDemoContent.attributes.images_sdg.data.map(
    (a) => strapiUrl + a.attributes.url
  );
  const sdgImageElements = sdgUrlList
    .map((url) => `<img src="${url}" height=40px alt="SDG Image">`)
    .join("");
  const partnerLogoUrlList = currentDemoContent.attributes.caroussel.data.map(
    (a) => strapiUrl + a.attributes.url
  );
  const partnerLogoImageElements = partnerLogoUrlList
    .map(
      (url) =>
        `<div class="carouselItem"><img src="${url}" height=100px alt="SDG Image"></div>`
    )
    .join("");

  return `
  
  <head>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>

  <body>
    <div class="page-header">
      <button onclick="navigate('previous')">Previous</button>
      <button onclick="navigate('languages')">Languages</button> 
    </div>
    
    <div class="instructions-demobutton">
      <div class="home-instructions">
        <div class="home-instructions-info">
          <h1>${currentDemoContent.attributes["title"]}</h1>
          <h2>${currentDemoContent.attributes["topic"]}</h2>
          <p>${currentDemoContent.attributes["explanation_short"]}</p>
        </div>
        <div class="home-instructions-research">
          <p class="research_l"> Research Head : ${currentDemoContent.attributes["research_head"]}</p>
          <div style="min-width: 10px"></div>
          <p class="research_l"> Research Lead : ${currentDemoContent.attributes["research_lead"]}</p>
        </div>
        <div class="imageList">
          <p>HDG:&nbsp;&nbsp;</p>${sdgImageElements} 
        </div>
      <div>
          <button onclick="navigate('learnMore')" class="button-learnMore">Learn More</button>
      </div>
      </div>
      <div class="homeButtonDemoContainer">
        <button id="homeButtonDemo" onclick="navigate('demo')">Start the Demo&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</button>
      </div>
    </div>
    
    <div id="carouselContainer">
      ${partnerLogoImageElements}
    </div>
  </body>
  

    `;
}

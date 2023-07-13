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

    
    <div class="home-instructions">
      <h1>${currentDemoContent.attributes["title"]}</h1>
      <h2>${currentDemoContent.attributes["topic"]}</h2>
      <p>${currentDemoContent.attributes["explanation_short"]}</p>

      <div class="home-instructions-research">
      <p>${currentDemoContent.attributes["research_head"]}</p>
      <p> ${currentDemoContent.attributes["research_lead"]}</p>
      </div>

      <button onclick="navigate('learnMore')">Learn More</button> 

      <div id="imageList">
        ${sdgImageElements} 
      </div>
    </div>
    <div>
      <button id="homeButtonDemo" onclick="navigate('demo')">Start Demo</button> 
    </div>
    
    <div id="carouselContainer">
      ${partnerLogoImageElements}
    </div>
      
  </body>

    `;
}

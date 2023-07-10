async function loadHome() {
    
    await loadDemoFromStrapi()
    const currentDemoContent = demoContent.data[demoPosition]
    const sdgUrlList = currentDemoContent.attributes.images_sdg.data.map(a => strapiUrl + a.attributes.url);
    const sdgImageElements = sdgUrlList.map(url => `<img src="${url}" height=40px alt="SDG Image">`).join('');
    const partnerLogoUrlList = currentDemoContent.attributes.caroussel.data.map(a => strapiUrl + a.attributes.url);
    const partnerLogoImageElements = partnerLogoUrlList.map(url => `<div class="carouselItem"><img src="${url}" height=100px alt="SDG Image"></div>`).join('');
    return `
      <div class="page-header">
        <button onclick="navigate('previous')">Previous</button>
        <button onclick="navigate('languages')">Languages</button> 
      </div>
      <h1>${currentDemoContent.attributes["title"]}</h1>
      <p>${currentDemoContent.attributes["explanation_short"]}</p>
      <p>${currentDemoContent.attributes["topic"]}</p>
      <p>${currentDemoContent.attributes["research_head"]}</p>
      <p>${currentDemoContent.attributes["research_lead"]}</p>
      <button onclick="navigate('learnMore')">Learn More</button> 
      <div id="imageList">
        ${sdgImageElements} 
      </div>
      <button id="homeButtonDemo" onclick="navigate('demo')">Start Demo</button> 
      <div id="carouselContainer">
        ${partnerLogoImageElements}
      </div>
    `;
  }


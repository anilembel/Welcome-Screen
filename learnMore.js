async function loadLearnMore() {
    await loadDemoFromStrapi()
    const currentDemoContent = demoContent.data[demoPosition]
    return `
    <div class="page-header">
        <button onclick="navigate(\'previous\')">Previous</button>
        <button onclick="navigate(\'home\')">Home</button> 
        <button onclick="navigate(\'languages\')">Languages</button> 
        
        
    </div>
    <h1>${currentDemoContent.attributes["learn_more"]}</h1>
    <p>${currentDemoContent.attributes["explanation"]}</p>
    `;
  }
  
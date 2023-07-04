async function loadDemo() {
    await loadDemoFromStrapi()
    const currentDemoContent = demoContent.data[demoPosition]
    if (currentDemoContent.attributes.type == "website") {
        demoContainer = `<iframe id="inlineFrameExample" class="zoom-out" 
        title="Inline Frame Example"
        width="2000"
        height="1500"
        src="${currentDemoContent.attributes.appURL}">
        </iframe>`
      } 
      else if (currentDemoContent.attributes.type == "video"){
        videoUrl = strapiUrl + currentDemoContent.attributes.video.data.attributes.url
        demoContainer = `<video src="${videoUrl}" controls autoplay></video>`
        
      } else if (currentDemoContent.attributes.type == "app"){
        pass
      }
    console.log(currentDemoContent.attributes.type)
    return `
    <div class="page-header">
        <button onclick="navigate(\'previous\')">Previous</button>
        <button onclick="navigate(\'home\')">Home</button> 
        <button onclick="navigate(\'learnMore\')">Learn More</button> 
        <button onclick="navigate(\'languages\')">Languages</button> 
    </div>
    <div id="demoContainer"> 
    ${demoContainer} 
    </div>`;
  }
  
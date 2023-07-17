async function loadLearnMore() {
  await loadDemoFromStrapi();
  const currentDemoContent = demoContent.data[demoPosition];
  return `
    
    <body style="background-color: #2250C6;">
    <h1 class=learnmore-header">NRG Coin</h1>
    <h2 class="learnmore-subheader">Climate and Energy</h2>
    <div class="learnmore-content">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non fermentum elit, vel dictum neque. Suspendisse potenti. Nam vitae mi nec sem aliquam luctus. Cras eget laoreet nisl. Sed aliquet facilisis risus, vel efficitur ligula pharetra in. In congue laoreet diam, id vestibulum mauris mattis ut. Nullam feugiat eleifend orci a viverra. Suspendisse eu eros ac purus suscipit lobortis. Fusce ac dolor id mauris iaculis tincidunt. Duis interdum arcu ac orci malesuada interdum. Ut congue orci et ligula congue, in elementum lacus congue. Suspendisse tincidunt facilisis feugiat. Donec finibus laoreet felis eu tincidunt. Vestibulum eu massa eget enim vulputate scelerisque.
        </p>
    </div>
    <div class="learnmore-rectangle">
        <!-- Resim buraya eklenebilir -->
    </div>
    </body>

    <div class="page-header">
        <button onclick="navigate(\'previous\')">exit</button>        
    </div>
     <!-- <h1>${currentDemoContent.attributes["learn_more"]}</h1>
     <p>${currentDemoContent.attributes["explanation"]}</p> -->
    `;
}

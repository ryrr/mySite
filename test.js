const ColorThief = require('colorthief');
let colors = async (artURL) => {
    let colors = await ColorThief.getPalette(artURL, 5)
    console.log(colors)
}
colors('https://pbs.twimg.com/media/EZBBl34XYAEwHU_?format=jpg&name=medium')
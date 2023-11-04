const { app, BrowserWindow } = require("electron");

app.whenReady()
    .then(function () {
        const janela = new BrowserWindow({
            height: 550,
            width: 450,
            frame: false,
            resizable: false
        })

        janela.loadFile("./public/index.html")

        })
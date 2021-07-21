import electron,{ ipcMain , dialog , screen} from "electron";
import { initStore } from "./connectStorage";
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;
const debug = true;

app.on("ready",()=>{
    let factor = screen.getPrimaryDisplay().scaleFactor;
    console.log(factor);
    const width = (800 + (debug ? 220 : 0))-(800 + (debug ? 220 : 0))*0.05;
    const height = 500 - 500*0.05
    mainWindow = new BrowserWindow({
        width:width,
        height:height,
        maxWidth:width,
        maxHeight:height,
        useContentSize: true,
        webPreferences:{
            nodeIntegration: true,
            contextIsolation: false,
            zoomFactor: 1
        }
    });
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    if(debug)mainWindow.webContents.openDevTools();
    mainWindow.on("closed",()=>{
        mainWindow = null;
    });
    initStore();
});
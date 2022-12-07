const { app, BrowserWindow, Menu, shell } = require("electron");
const path = require("path");
const isDev = process.env.NODE_ENV !== "production";

const menuItems = [
  {
    label: "Menu",
    submenu: [
      {
        label: "Learn More",
        click: () => shell.openExternal("https://www.electronjs.org"),
      },
      {
        label: "About",
      },
      {
        type: "separator",
      },
      {
        label: "Exit",
        click: () => app.quit(),
      },
    ],
  },
  {
    label: "Standard Menus",
    submenu: [
      {
        role: "minimize",
      },
      {
        role: "close",
      },
    ],
  },
  {
    label: "New Windows",
    submenu: [
      {
        label: "Record me",
        click: () => {
          const win2 = new BrowserWindow({
            width: 500,
            height: 500,
            show: false,
          });
          win2.webContents.openDevTools();
          win2.loadFile("recordMe.html");
          win2.once("ready-to-show", () => win2.show());
        },
      },
    ],
  },
];

const menu = Menu.buildFromTemplate(menuItems);
Menu.setApplicationMenu(menu);

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });
  if (isDev) win.webContents.openDevTools();
  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

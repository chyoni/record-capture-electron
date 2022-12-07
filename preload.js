const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("mainAPI", {
  getImage: (callback) => ipcRenderer.on("get-image", callback),
  closeRecordWindow: () => ipcRenderer.send("close-record-win"),
});

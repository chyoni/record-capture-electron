const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("cameraAPI", {
  sendImage: (data) => ipcRenderer.send("set-image", data),
});

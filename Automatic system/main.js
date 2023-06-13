const { app, BrowserWindow, Menu, screen } = require("electron");
const path = require("path");

const createWindow = () => {
  // 获取主显示器的大小
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.workAreaSize;

  const win = new BrowserWindow({
    width: Math.floor(width * 0.8),
    height: Math.floor(height * 0.9),
    frame: true,
    webPreferences: {
      //关掉主进程和渲染进程的隔离
      // contextIsolation:false
      //允许使用node
      // nodeIntegration: true,
      //预加载 给绝对路径
      //20版本之后设置了沙箱环境
      sandbox: false,
    },
  });
  // 取消默认菜单栏
  Menu.setApplicationMenu(null);
  win.loadURL("http://localhost:5173");
  // win.loadFile("./dist/index.html");
  //打开开发者工具
  win.webContents.openDevTools();
  //暂时关闭安全警告
  process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";
};

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  //macos系统关闭应用时不会直接退出应用
  //darwin是mac系统的名字，为了在程序坞还能看到图标，不能在关闭窗口后关闭程序
  if (process.platform !== "darwin") {
    app.quit();
  }
});

//ipc通信实现：
//预加载定义事件函数，渲染进程通过window api调用函数
//主进程通过事件名字确定处理函数
//handle函数可以处理异步通信

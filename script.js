body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Ubuntu', sans-serif;
  overflow: hidden;
}

#desktop {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #772953, #dd4814);
  position: relative;
}

/* Barra superior */
#topbar {
  position: absolute;
  top: 0;
  width: 100%;
  height: 40px;
  background: rgba(20,20,20,0.9);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 16px;
}

/* Launcher inferior */
#launcher {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
}

.app-icon {
  font-size: 28px;
  margin-right: 10px;
  cursor: pointer;
}

/* Janela */
.window {
  width: 320px;
  height: 220px;
  background: #eee;
  border-radius: 8px;
  border: 2px solid #444;
  position: absolute;
  top: 60px;
  left: 60px;
  box-shadow: 4px 4px 12px rgba(0,0,0,0.4);
  overflow: hidden;
  display: block;
  resize: both;
}

/* Título e botão */
.titlebar {
  background: #772953;
  color: #fff;
  padding: 5px;
  cursor: move;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.window-btn {
  background: #444;
  color: #fff;
  border: none;
  cursor: pointer;
  font-weight: bold;
  width: 24px;
  height: 24px;
  border-radius: 4px;
}

/* Editor */
textarea {
  width: 100%;
  height: calc(100% - 30px);
  border: none;
  resize: none;
  padding: 5px;
  box-sizing: border-box;
  font-family: 'Ubuntu', monospace;
  font-size: 14px;
}

/* Terminal */
#terminal {
  width: 100%;
  height: calc(100% - 30px);
  background: #000;
  color: #00ff00;
  font-family: monospace;
  font-size: 14px;
}

/* Navegador */
#browserWindow input {
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  border: none;
  font-family: 'Ubuntu', sans-serif;
  font-size: 14px;
}

#browserFrame {
  width: 100%;
  height: calc(100% - 60px);
  border: none;
}

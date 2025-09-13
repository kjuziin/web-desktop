// Arrastar janelas
function dragElement(elmnt) {
  let pos1=0,pos2=0,pos3=0,pos4=0;
  const header = elmnt.querySelector(".titlebar");
  if(header) header.onmousedown = dragMouseDown;
  else elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e){
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX; pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e){
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX; pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement(){
    document.onmouseup=null;
    document.onmousemove=null;
  }
}

['editorWindow','terminalWindow','browserWindow'].forEach(id => dragElement(document.getElementById(id)));

// Abrir ou trazer para frente
function toggleWindow(id){
  const w = document.getElementById(id);
  if(w.style.display === 'none') w.style.display='block';
  w.style.zIndex = Date.now();
}

// Minimizar
function minimizeWindow(id){
  document.getElementById(id).style.display='none';
}

// Relógio barra superior
function updateClock(){
  document.getElementById('clock').innerText = new Date().toLocaleTimeString();
}
setInterval(updateClock,1000);

// Inicializa terminal
const term = new Terminal();
term.open(document.getElementById('terminal'));
term.write('Bem-vindo ao Ubuntu Web Terminal!\r\n$ ');

// Navegador: abrir URL digitada
const browserUrl = document.getElementById('browserUrl');
browserUrl.addEventListener('keydown',function(e){
  if(e.key==='Enter'){
    const url = browserUrl.value;
    const iframe = document.getElementById('browserFrame');
    iframe.src = url.startsWith('http') ? url : 'https://' + url;
  }
});

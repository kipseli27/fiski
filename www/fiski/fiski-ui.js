(function(){
  const HIDE = ['map','energy','logbook','history','media-browser','todo','hacs','a0d7b954_ssh'];
  function patchSidebar() {
    const ha = document.querySelector('home-assistant');
    if (!ha?.shadowRoot) return;
    const main = ha.shadowRoot.querySelector('home-assistant-main');
    if (!main?.shadowRoot) return;
    const sidebar = main.shadowRoot.querySelector('ha-drawer ha-sidebar');
    if (!sidebar?.shadowRoot) return;
    const sr = sidebar.shadowRoot;
    const title = sr.querySelector('.menu .title');
    if (title && title.textContent !== 'Fiski') title.textContent = 'Fiski';
    HIDE.forEach(panel => {
      const el = sr.querySelector(`#sidebar-panel-${panel}, [id*="${panel}"]`);
      if (el) el.style.display = 'none';
    });
    if (document.title.includes('Home Assistant'))
      document.title = document.title.replace(/Home Assistant/gi, 'Fiski');
  }
  patchSidebar();
  setInterval(patchSidebar, 300);
  new MutationObserver(patchSidebar).observe(document.documentElement, {childList:true, subtree:true});
})();

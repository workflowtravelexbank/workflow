// =======================================================
// LOADING GLOBAL
// =======================================================
function custom_criarLoadingSeNaoExistir() {
  if (document.getElementById("custom-loading-overlay")) return;

  const overlay = document.createElement("div");
  overlay.id = "custom-loading-overlay";
  overlay.innerHTML = `
    <div id="custom-loading-box">
      <div id="custom-loading-spinner"></div>
      <div id="custom-loading-texto">Carregando dados, aguarde...</div>
      <div id="custom-loading-progresso">0%</div>
    </div>
  `;

  const style = document.createElement("style");
  style.id = "custom-loading-style";
  style.textContent = `
    #custom-loading-overlay{
      position: fixed;
      inset: 0;
      background: rgba(255,255,255,0.72);
      backdrop-filter: blur(2px);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 999999;
    }

    #custom-loading-box{
      min-width: 280px;
      max-width: 420px;
      padding: 24px 28px;
      border-radius: 12px;
      background: #fff;
      box-shadow: 0 8px 30px rgba(0,0,0,0.18);
      text-align: center;
      font-family: Arial, sans-serif;
      color: #333;
    }

    #custom-loading-spinner{
      width: 42px;
      height: 42px;
      margin: 0 auto 14px;
      border: 4px solid #e5e5e5;
      border-top-color: #2f80ed;
      border-radius: 50%;
      animation: customSpin 0.9s linear infinite;
    }

    #custom-loading-texto{
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 8px;
    }

    #custom-loading-progresso{
      font-size: 14px;
      color: #666;
    }

    @keyframes customSpin {
      to { transform: rotate(360deg); }
    }
  `;

  document.head.appendChild(style);
  document.body.appendChild(overlay);
}

function custom_mostrarLoading(texto = "Carregando dados, aguarde...") {
  custom_criarLoadingSeNaoExistir();

  const overlay = document.getElementById("custom-loading-overlay");
  const textoEl = document.getElementById("custom-loading-texto");
  const progressoEl = document.getElementById("custom-loading-progresso");

  if (textoEl) textoEl.textContent = texto;
  if (progressoEl) progressoEl.textContent = "0%";

  if (overlay) overlay.style.display = "flex";
}

function custom_atualizarLoading(atual, total, texto) {
  const textoEl = document.getElementById("custom-loading-texto");
  const progressoEl = document.getElementById("custom-loading-progresso");

  if (textoEl && texto) textoEl.textContent = texto;

  if (progressoEl) {
    const pct = total > 0 ? Math.round((atual / total) * 100) : 0;
    progressoEl.textContent = `${pct}% (${atual}/${total})`;
  }
}

function custom_esconderLoading() {
  const overlay = document.getElementById("custom-loading-overlay");
  if (overlay) overlay.style.display = "none";
}

function custom_esperarRender() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      setTimeout(resolve, 0);
    });
  });
}

// ==========================================
// 🔐 VERIFICAÇÃO DE SEGURANÇA
// ==========================================
/* 
if (sessionStorage.getItem("logado") !== "true") {
    window.location.href = "index.html"; 
}
*/

// ==========================================
// ⚙️ LÓGICA DA CALCULADORA
// ==========================================

function animacao(el) {
    el.classList.add("loading");
    el.innerHTML = `<span class="material-icons-round spin">autorenew</span> Calculando...`;
    return el;
}

function processar() {
    const botao = document.querySelector("button.btn"); 
    if(!botao) return;

    animacao(botao);

    setTimeout(() => {
        botao.classList.remove('loading');
        botao.innerHTML = `<span class="material-icons-round">refresh</span> Recalcular`;
        calcularTMB();
    }, 1000);
}

function calcularTMB() {
    // 1. Captura de Dados
    let idade = Number(document.getElementById("idade").value);
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);
    const sexoInput = document.querySelector('input[name="sexo"]:checked');
    const nivelAtv = document.getElementById("nivel").value;

    // 2. Validação
    if (!sexoInput) {
        alert("Por favor, selecione se é Homem ou Mulher!");
        return;
    }
    if (!idade || !peso || !altura) {
        alert("Preencha idade, peso e altura corretamente!");
        return;
    }

    const sexo = sexoInput.value;

    // 3. Cálculo Matemático
    let tmbBase = (10 * peso) + (6.25 * altura) - (5 * idade);
    let tmbFinal = (sexo === "Masculino") ? tmbBase + 5 : tmbBase - 161;

    // 4. Fatores
    const fatores = {
        "Sedentário (nenhum exercicío)": 1.2,
        "Levemente Ativo (1-2 dias na semana)": 1.375,
        "Moderadamente ativo (3-5 dias na semana)": 1.55,
        "Muito ativo (6-7 dias na semana)": 1.725,
        "Extremamente ativo": 1.9
    };

    let fator = fatores[nivelAtv] || 1.2; 
    let get = tmbFinal * fator;
    let gse = get * 7;

    // 5. Exibição dos Resultados (DOM)
    const cards = document.querySelectorAll('.resposta, .resposta3');
    cards.forEach(card => {
        card.style.display = "block";
        card.style.animation = "slideUp 0.5s ease";
    });

    // Card 1: Perfil
    document.getElementById("resposta1").innerHTML = `
        <div style="text-align:left; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px; margin-bottom:10px;">
            <h3 style="color:var(--accent); display:flex; align-items:center; gap:5px;">
                <span class="material-icons-round">person</span> Seu Perfil
            </h3>
        </div>
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; text-align:left; font-size:0.9rem;">
            <div>Sexo: <strong>${sexo}</strong></div>
            <div>Idade: <strong>${idade} anos</strong></div>
            <div>Peso: <strong>${peso} kg</strong></div>
            <div>Altura: <strong>${altura} cm</strong></div>
        </div>
    `;

    // Card 2: TMB
    document.getElementById("get").innerHTML = `
        <h3 style="color:var(--text-muted); font-size:1rem; margin-bottom:5px;">Taxa Metabólica Basal (Repouso)</h3>
        <div class="result-box">
            <span class="material-icons-round result-icon" style="color:#fbbf24; font-size:2.5rem;">bedtime</span>
            <div class="result-value">${Math.round(tmbFinal)} <small>Kcal</small></div>
        </div>
    `;

    // Card 3: GET
    document.getElementById("resposta2").innerHTML = `
        <h3 style="color:var(--primary); font-size:1.2rem; margin-bottom:5px;">🔥 Gasto Total Diário (Meta)</h3>
        <div class="result-box highlight" style="background:rgba(16, 185, 129, 0.1); border:1px solid var(--primary);">
            <span class="material-icons-round result-icon" style="color:#ef4444; font-size:2.5rem;">local_fire_department</span>
            <div class="result-value" style="color:var(--primary);">${Math.round(get)} <small>Kcal</small></div>
        </div>
    `;

    // Card 4: GSE
    document.getElementById("gse").innerHTML = `
        <h3 style="color:var(--text-muted); font-size:1rem; margin-bottom:5px;">Gasto Semanal Estimado</h3>
        <div class="result-box">
            <span class="material-icons-round result-icon" style="color:#38bdf8; font-size:2.5rem;">date_range</span>
            <div class="result-value">${Math.round(gse)} <small>Kcal</small></div>
        </div>
    `;

    
}

function voltar() {
    window.location.href = "treino.html";
}

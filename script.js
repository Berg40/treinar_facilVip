// LOGIN 
function fazerLogin() {
  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;

  const usuarios = ["berg", "aluno", "aluno1", "aluno5"];
  const senhas = ["aluno", "usuario", "usuario1", "usuario5"];

  // Procura o índice do usuário digitado
  const indice = usuarios.indexOf(usuario);

  // Verifica se o usuário existe e se a senha corresponde
  if (indice !== -1 && senhas[indice] === senha) {
    sessionStorage.setItem("logado", "true");
    window.location.href = "treino.html";
  } else {
    alert("Usuário ou senha inválidos!");
  }
}

// VERIFICA SE O USUÁRIO ESTÁ LOGADO
const logado = sessionStorage.getItem("logado");

// SE NÃO ESTIVER LOGADO, VOLTA PARA O LOGIN (INDEX.HTML)
if (!logado && window.location.pathname.includes("treino.html")) {
  window.location.href = "index.html";
}



const gifs = {
    ombros: [
        "img/ombro/ARNOLD.gif", 
        "img/ombro/ABDUÇÃO DE OMBRO TOTAL.gif",
        "img/ombro/ARTICULADO.gif",
        "img/ombro/CRUCIFIXO INVERSO EM PÉ.gif",
        "img/ombro/CRUCIFIXO INVERSO NA POLIA.gif",
        "img/ombro/CRUCIFIXO INVERSO NO CROSS.gif",
        "img/ombro/CRUCIFIXO INVERSO NO PECK DECK.gif",
        "img/ombro/CRUCIFIXO INVERTIDO INCLINADO.gif",
        "img/ombro/DESENVOLVIMENTO ALTERNADO.gif",
        "img/ombro/DESENVOLVIMENTO BARRA GUIADA SENTADO.gif",
        "img/ombro/DESENVOLVIMENTO BARRA.gif",
        "img/ombro/DESENVOLVIMENTO COM HALTER.gif",
        "img/ombro/DESENVOLVIMENTO MAQUINA.gif",
        "img/ombro/DESENVOLVIMENTO POR TRÁS BARRA.gif",
        "img/ombro/DESENVOLVIMENTO SENTADO FRONT.gif",
        "img/ombro/ELEVAÇÃO FRONTAL COM BARRA.gif",
        "img/ombro/ELEVAÇÃO FRONTAL UNILATERAL.gif",
        "img/ombro/ELEVAÇÃO LATERAL COM ISOMETRIA.gif",
        "img/ombro/ELEVAÇÃO LATERAL FAIXA.gif",
        "img/ombro/ELEVAÇÃO LATERAL UNI POLIA BAIXA.gif",
        "img/ombro/ELEVAÇÃO LATERAL.gif",
        "img/ombro/HIPEREXTENSÃO DE OMBRO.gif",
        "img/ombro/INVERSO UNILATERAL.gif",
        "img/ombro/MANGUITO ROTEADOR EXTERNO.gif",
        "img/ombro/MANGUITO ROTEADOR.gif",
        "img/ombro/PECK DECK.gif",
        "img/ombro/REMADA ALTA CROSS.gif",
        "img/ombro/ROTAÇÃO EXTERNA COM ABDUÇÃO DE OMBRO.gif",
        "img/ombro/ROTAÇÃO EXTERNA OMBRO.gif",
    ],
     costas: [
        "img/costas/PUXADA ARTICULADA.gif",
        "img/costas/BARRA FIXA SUPINADA.gif",
        "img/costas/CRUCIFIXO INVERSO COM FAIXA.gif",
        "img/costas/CRUCIFIXO INVERSO COM HALTERES.gif",
        "img/costas/CRUCIFIXO INVERSO NO VOADOR.gif",
        "img/costas/CRUCIFIXO INVERSO.gif",
        "img/costas/CRUCIFIXO INVERTIDO INCLINADO.gif",
        "img/costas/EXTENSÃO LOMBAR.gif",
        "img/costas/FLEXÃO DO TRONCO COM ROTAÇÃO.gif",
        "img/costas/INVERSO EMPÉ.gif",
        "img/costas/INVERSO NO CROSS.gif",
        "img/costas/PULL DOWN COM CORDA.gif",
        "img/costas/PULLEY COSTAS.gif",
        "img/costas/PULLEY FECHADO.gif",
        "img/costas/PULLEY FRENTE.gif",
        "img/costas/PUXADA ARTICULADA.gif",
        "img/costas/PUXADA GRAVITON.gif",
        "img/costas/REMADA ALTA BARRA GUIADA.gif",
        "img/costas/REMADA ALTA COM BARRA.gif",
        "img/costas/REMADA ALTA COM CORDA.gif",
        "img/costas/REMADA ARTICULADA NEUTRA.gif",
        "img/costas/REMADA ARTICULADA PRONADA.gif",
        "img/costas/REMADA BAIXA NEUTRA.gif",
        "img/costas/REMADA BAIXA PRONADA.gif",
        "img/costas/REMADA BAIXA SUPINADA.gif",
        "img/costas/REMADA CAVALINHO BARRA.gif",
        "img/costas/REMADA CAVALINHO MAQUINA.gif",
        "img/costas/REMADA CURVADA BARRA.gif",
        "img/costas/REMADA CURVADA HALTER.gif",
        "img/costas/REMADA HAMMMER.gif",
        "img/costas/REMADA POLIA ALTA UNILATERAL.gif",
        "img/costas/ROSCA UNILATERAL POLIA ALTA.gif",
    ],
    peito: [
        "img/peito/ARTICULADO INCLINADO.gif",
        "img/peito/ARTICULADO RETO.gif",
        "img/peito/CROSS OVER POLIA BAIXA.gif",
        "img/peito/CROSS OVER UNILATERAL.gif",
        "img/peito/CROSS OVER.gif",
        "img/peito/CRUCIFIXO COM PULLOVER.gif",
        "img/peito/CRUCIFIXO DECLINADO.gif",
        "img/peito/CRUCIFIXO FECHADO.gif",
        "img/peito/CRUCIFIXO INCLINADO.gif",
        "img/peito/CRUCIFIXO RETO.gif",
        "img/peito/FLY COMPLETO.gif",
        "img/peito/FLY UNILATERAL.gif",
        "img/peito/SUPINO ARTICULADO.gif",
        "img/peito/SUPINO DECLINADO COM HALTER.gif",
        "img/peito/SUPINO DECLINADO.gif",
        "img/peito/SUPINO INCLINADO COM HALTER.gif",
        "img/peito/SUPINO INCLINADO.gif",
        "img/peito/SUPINO RETO ARTICULADO.gif",
        "img/peito/SUPINO RETO.gif",
        "img/peito/SUPINO UNILATERAL.gif",
        "img/peito/SUPINO VERTICAL.gif",
        "img/peito/VOADOR.gif",
    ],
    inferiores: [
        "img/inferiores/ABDUÇÃO POLIA BAIXA.gif",
        "img/inferiores/ABDUTOR MÁQUINA.gif",
        "img/inferiores/ADUTOR DEITADO CANELEIRA.gif",
        "img/inferiores/ADUTOR MÁQUINA.gif",
        "img/inferiores/ADUTOR POLIA BAIXA.gif",
        "img/inferiores/AFUNDO ALTERNADO SALTO.gif",
        "img/inferiores/AFUNDO BARRA GUIADA.gif",
        "img/inferiores/AFUNDO BARRA.gif",
        "img/inferiores/AFUNDO COM DESENVOLVIMENTO.gif",
        "img/inferiores/AFUNDO COM HALTER.gif",
        "img/inferiores/AFUNDO STEP.gif",
        "img/inferiores/AGACHAMENTO BÚLGARO.gif",
        "img/inferiores/AGACHAMENTO FRONTAL BARRA.gif",
        "img/inferiores/AGACHAMENTO HACK.gif",
        "img/inferiores/AGACHAMENTO LATERAL.gif",
        "img/inferiores/AGACHAMENTO LIVRE BARRA.gif",
        "img/inferiores/AGACHAMENTO SISSY.gif",
        "img/inferiores/AGACHAMENTO SMITH.gif",
        "img/inferiores/ELEVAÇÃO PÉLVICA.gif",
        "img/inferiores/EXTENSÃO DE JOELHOS.gif",
        "img/inferiores/EXTENSOR DE JOELHO COM ISOMETRIA.gif",
        "img/inferiores/EXTENSOR UNILATERAL.gif",
        "img/inferiores/FLEXÃO DE JOELHO COM ISOMETRIA.gif",
        "img/inferiores/FLEXÃO DE JOELHOS DEITADO.gif",
        "img/inferiores/FLEXÃO SENTADO.gif",
        "img/inferiores/GLÚTEO BARRA GUIADA.gif",
        "img/inferiores/GLÚTEO BARRA GUIADA.gif",
        "img/inferiores/GLÚTEOS 4 APOIOS MÁQUINA.gif",
        "img/inferiores/GLÚTEOS 4 APOIOS.gif",
        "img/inferiores/GLÚTEOS APOLETE.gif",
        "img/inferiores/GLÚTEOS CROSS OVER NO BANCO.gif",
        "img/inferiores/GLÚTEOS CROSS OVER.gif",
        "img/inferiores/GLÚTEOS CRUZADO CROSS OVER.gif",
        "img/inferiores/GLÚTEOS EM PÉ MÁQUINA.gif",
        "img/inferiores/GLÚTEOS GRAVITON.gif",
        "img/inferiores/LEG PRESS 45.gif",
        "img/inferiores/LEG PRESS ARTICULADO.gif",
        "img/inferiores/LEG PRESS DEITADO.gif",
        "img/inferiores/LEG PRESS HORIZONTAL.gif",
        "img/inferiores/LEG PRESS SMITH.gif",
        "img/inferiores/LEG PRESS VERTICAL.gif",
        "img/inferiores/PANTURRILHA EM PÉ.gif",
        "img/inferiores/PANTURRILHA LEG HORIZONTAL.gif",
        "img/inferiores/PANTURRILHA LEG PRESS 45.gif",
        "img/inferiores/PANTURRILHA SENTADO BARRA.gif",
        "img/inferiores/PANTURRILHA SENTADO.gif",
        "img/inferiores/PONTE UNILATERAL.gif",
        "img/inferiores/SUMÔ COM 2 STEPS E HALTER.gif",
    ],
    biceps: [
        "img/biceps/ROSCA 21 COM BARRA.gif",
        "img/biceps/ROSCA 21 COM HALTER.gif",
        "img/biceps/ROSCA 21 INVERSA.gif",
        "img/biceps/ROSCA 21 NO CROSS.gif",
        "img/biceps/ROSCA ALTERNADA INCLINADO.gif",
        "img/biceps/ROSCA ALTERNADO COM ISOMETRIA.gif",
        "img/biceps/ROSCA ALTERNADO DIRETA.gif",
        "img/biceps/ROSCA ALTERNADO.gif",
        "img/biceps/ROSCA BÍCEPS COM ROTAÇÃO.gif",
        "img/biceps/ROSCA BÍCEPS INCLINADO.gif",
        "img/biceps/ROSCA CONCENTRADO COM BARRA.gif",
        "img/biceps/ROSCA CONCENTRADO.gif",
        "img/biceps/ROSCA CORDA NO CROSS.gif",
        "img/biceps/ROSCA DIRETA BARRA RETA POLIA BAIXA.gif",
        "img/biceps/ROSCA DIRETA BARRA.gif",
        "img/biceps/ROSCA DIRETA BILATERAL POLIA BAIXA.gif",
        "img/biceps/ROSCA DIRETA COM CORDA.gif",
        "img/biceps/ROSCA W DIRETA.gif",
    ],
    triceps: [
        "img/triceps/COICE NA POLIA UNILATERAL.gif",
        "img/triceps/COICE NA POLIA UNILATERAL.gif",
        "img/triceps/EXTENSÃO DE TRÍCEPS DECLINADO.gif",
        "img/triceps/EXTENSÃO DE TRÍCEPS INCLINADO.gif",
        "img/triceps/FRANCES NA BARRA.gif",
        "img/triceps/FRANCES NA POLIA.gif",
        "img/triceps/FRANCESA NO CROSS.gif",
        "img/triceps/FRANCESA SENTADO.gif",
        "img/triceps/PARALELA.gif",
        "img/triceps/SUPINO FECHADO.gif",
        "img/triceps/TATE PRESS.gif",
        "img/triceps/TRÍCEPS BANCO.gif",
        "img/triceps/TRÍCEPS BARRA CURVADA.gif",
        "img/triceps/TRÍCEPS CORDA.gif",
        "img/triceps/TRÍCEPS KICKBACK.gif",
        "img/triceps/TRÍCEPS NO BANCO.gif",
        "img/triceps/TRÍCEPS PARALELO MAQUINA.gif",
        "img/triceps/TRICEPS RETO.gif",
        "img/triceps/TRÍCEPS TESTA BARRA.gif",
        "img/triceps/TRÍCEPS TESTA COM HALTER.gif",
    ],
    antebraco: [
        "img/antebraco/ALONGAMENTO DINÂMICO PUNHO INVERTIDO.gif",
        "img/antebraco/ALONGAMENTO DINÂMICO PUNHO.gif",
        "img/antebraco/EXTENSÃO DE PUNHO.gif",
        "img/antebraco/FLEXÃO DE PUNHO.gif",
        "img/antebraco/ROSCA INVERSA POLIA BAIXA.gif",
        "img/antebraco/ROSCA PUNHO COM ROLO.gif",
        "img/antebraco/ROTAÇÃO DE ANTEBRAÇO.gif",
        "img/antebraco/ROTAÇÃO DE PUNHO COM HALTER.gif",
    ],
    abdominal: [
        "img/abdominal/ABD BIKE.gif",
        "img/abdominal/ABD BORBOLETA.gif",
        "img/abdominal/ABD BOSU.gif",
        "img/abdominal/ABD CANIVETE.gif",
        "img/abdominal/ABD CANOA.gif",
        "img/abdominal/ABD EM PÉ.gif",
        "img/abdominal/ABD FLEXÃO DE QUADRIL JUMP.gif",
        "img/abdominal/ABD FLUTER KICK.gif",
        "img/abdominal/ABD GIRO RUSSO.gif",
        "img/abdominal/ABD INFRA BOLA.gif",
        "img/abdominal/ABD INFRA CURTO.gif",
        "img/abdominal/ABD INFRA FLEXIONADO.gif",
        "img/abdominal/ABD INFRA PARALELA.gif",
        "img/abdominal/ABD INFRA SOLO.gif",
        "img/abdominal/ABD MÁQUINA.gif",
        "img/abdominal/ABD OBLÍQUO POLIA ALTA.gif",
        "img/abdominal/ABD OBLÍQUO POLIA BAIXA.gif",
        "img/abdominal/ABD OBLÍQUO ROTAÇÃO POLIA ALTA.gif",
        "img/abdominal/ABD ROLINHO.gif",
        "img/abdominal/ABD ROLLER.gif",
        "img/abdominal/ABD SUPRA JUMP.gif",
        "img/abdominal/ABD SUPRA PÉS FIXOS.gif",
        "img/abdominal/ABD SUPRA POLIA ALTA.gif",
        "img/abdominal/ABD SUPRA TOTAL.gif",
        "img/abdominal/ABD WALL BALL.gif",
        "img/abdominal/ALONGAMENTO41.gif",
        "img/abdominal/PRANCHA BANCO.gif",
        "img/abdominal/PRANCHA LATERAL BANCO.gif",
        "img/abdominal/PRANCHA LATERAL NA BOLA.gif",
        "img/abdominal/PRANCHA LATERAL SOLO.gif",
    ],
    aerobico: [
        "img/aerobico/ABERTURA DE PERNAS JUMP.gif",
        "img/aerobico/AIR CLIMBER.gif",
        "img/aerobico/CORRIDA ESTACIONÁRIA COM TRAÇÃO.gif",
        "img/aerobico/CORRIDA ESTACIONÁRIA NA PAREDE.gif",
        "img/aerobico/CORRIDA ESTACIONÁRIA.gif",
        "img/aerobico/CORRIDA ESTÁTICA.gif",
        "img/aerobico/COWBOY JUMP.gif",
        "img/aerobico/DESLOCAMENTO LATERAL JUMP.gif",
        "img/aerobico/ELEVAÇÃO DE JOELHO E BRAÇO JUMP.gif",
        "img/aerobico/FLEXÃO NO JUMP BRAÇOS ALTOS.gif",
        "img/aerobico/FLEXÃO NO JUMP.gif",
        "img/aerobico/GIRO 90 JUMP.gif",
        "img/aerobico/JUMP GIRO 90.gif",
        "img/aerobico/JUMP.gif",
        "img/aerobico/POLI CRUZADO.gif",
        "img/aerobico/POLICHINELO COM AGACHAMENTO.gif",
        "img/aerobico/POLICHINELO COM UP STEP.gif",
        "img/aerobico/POLICHINELO.gif",
        "img/aerobico/PULAR CORDA.gif",
        "img/aerobico/SALTITO.gif",
        "img/aerobico/SALTO LATERAL NO JUMP.gif",
        "img/aerobico/STEP COM CHUTE LATERAL.gif",
        "img/aerobico/STEP COM ELEVAÇÃO DE JOELHOS.gif",
        "img/aerobico/STEP COM SALTO ABERTO.gif",
        "img/aerobico/STEP CRUZADO.gif",
        "img/aerobico/SUBIDA STEP ALTERNADO.gif",
        "img/aerobico/SUBIDA STEP.gif",
        "img/aerobico/TESOURA JUMP.gif",
    ],
    pilates: [
        "img/pilates/ABDUÇÃO DE OMBRO COM FAIXA.gif",
        "img/pilates/ARMS PULLING STAND UP.gif",
        "img/pilates/ARMS PULLING STAND UPI.gif",
        "img/pilates/ATIVAÇÃO SERRATIL ANTERIOR.gif",
        "img/pilates/BRIDGE.gif",
        "img/pilates/CAT.gif",
        "img/pilates/DOUBLE KICK.gif",
        "img/pilates/DOUBLE LEG STRETCH.gif",
        "img/pilates/ENCOLHIMENTO COM FAIXA.gif",
        "img/pilates/FLYING.gif",
        "img/pilates/FRENCH PRESS TRÍCEPS.gif",
        "img/pilates/FRONT SPLITS.gif",
        "img/pilates/HAMSTRING STRETCH.gif",
        "img/pilates/HANGING PULL UPS.gif",
        "img/pilates/HUNDRED PUMPING.gif",
        "img/pilates/HUNDRED.gif",
        "img/pilates/JACKKNIFE STEP.gif",
        "img/pilates/JUMP CROSS COUNTRY.gif",
        "img/pilates/JUMP JACKKNIFE.gif",
        "img/pilates/KNEE EXTENSION.gif",
        "img/pilates/KNEE STRETCHES ROUND.gif",
        "img/pilates/LEG EXTENSION.gif",
        "img/pilates/LEG PULL BACK BARREL.gif",
        "img/pilates/LEG SUPINE BIKE.gif",
        "img/pilates/LIBERAÇÃO MIOFASCIAL PIRIFORME.gif",
        "img/pilates/LONG SUPINE.gif",
        "img/pilates/MERMAID.gif",
        "img/pilates/MONKEY.gif",
        "img/pilates/NECK PULL.gif",
        "img/pilates/ONE LEG CIRCLE.gif",
        "img/pilates/ONE LEG STRETCH.gif",
        "img/pilates/ONE LEG UP AND DOWN.gif",
        "img/pilates/PENDULUM.gif",
        "img/pilates/PULLING THE CAR.gif",
        "img/pilates/PUSHING ONE SIDE ARM.gif",
        "img/pilates/REMADA PARALELA COM ELÁSTICO.gif",
        "img/pilates/ROLL OVER BARREL.gif",
        "img/pilates/ROLL OVER STEP.gif",
        "img/pilates/ROLL OVER.gif",
        "img/pilates/ROLL UP.gif",
        "img/pilates/ROLLING BACK DOWN.gif",
        "img/pilates/ROLLING BACK VARIATION NO CADILLAC 2.gif",
        "img/pilates/ROLLING BACK VARIATION NO CADILLAC.gif",
        "img/pilates/ROTAÇÃO DE TRONCO DE LADO.gif",
        "img/pilates/SAW.gif",
        "img/pilates/SINGLE STRAIGHT STRETCH BARREL.gif",
        "img/pilates/SIT UP NO LADDER BARREL.gif",
        "img/pilates/SPINE STRETCH NO CADILLAC.gif",
        "img/pilates/SPINE STRETCH NO REFORMER.gif",
        "img/pilates/SPINE STRETCH.gif",
    ],
    cross: [
        "img/cross/AFUNDO PRESS COM HALTER.gif",
        "img/cross/AGACHAMENTO ELEVAÇÃO FRONTAL.gif",
        "img/cross/AGACHAMENTO PRESS ANILHA.gif",
        "img/cross/AGACHAMENTO UNILATERAL TRX.gif",
        "img/cross/AIR BALL.gif",
        "img/cross/AMERICAN SWING.gif",
        "img/cross/APOIO E SUPERMAN.gif",
        "img/cross/ARREMESSO DE BOLA CHÃO.gif",
        "img/cross/BOX JUMP OVER.gif",
        "img/cross/BOX JUMP.gif",
        "img/cross/BURPEE COM TRAÇÃO.gif",
        "img/cross/BURPEE.gif",
        "img/cross/CAMINHADA COM PESO UNILATERAL.gif",
        "img/cross/CLEAN.gif",
        "img/cross/CORDA NAVAL AGACHAMENTO E SALTO.gif",
        "img/cross/CORDA NAVAL SERPENTE.gif",
        "img/cross/DEVILL PRESS.gif",
        "img/cross/DUMBBELL THRUSTER.gif",
        "img/cross/DUMBBELL WALKING LUNGES.gif",
        "img/cross/DUMBELL OVERHEAD SQUAT.gif",
        "img/cross/DUMBELL OVERHEAD WALKING LUNGE.gif",
        "img/cross/GIRO RUSSO CORDA NAVAL.gif",
        "img/cross/HANDSTAND PUSH UP.gif",
        "img/cross/HANDSTAND.gif",
        "img/cross/HANG POWER SNATCH.gif",
        "img/cross/HIPS TO RING.gif",
        "img/cross/JUMPING DOUBLE TAPS.gif",
        "img/cross/KIPPING BAR MUSCLE UP.gif",
        "img/cross/KIPPING MUSCLE UP.gif",
        "img/cross/KIPPING PULL UP.gif",
        "img/cross/L SIT ROPE CLIMB.gif",
        "img/cross/LEGLESS ROPE CLIMB.gif",
        "img/cross/MANGUITO COM CORDA NAVAL.gif",
        "img/cross/MEDICINE BALL CLEAN.gif",
        "img/cross/MINHOCA COM FLEXÃO.gif",
        "img/cross/MINHOCA.gif",
        "img/cross/MODIFIED ROPE CLIMB.gif",
        "img/cross/ONDULAÇÃO CORDA NAVAL COM AFUNDO.gif",
        "img/cross/ONDULAÇÃO VERTICAL SIMULTÂNEA.gif",
        "img/cross/OVERHEAD SQUAT.gif",
        "img/cross/POLICHINELO COM CORDA NAVAL.gif",
        "img/cross/PUSH PRESS.gif",
        "img/cross/RING DIP.gif",
        "img/cross/RING ROW.gif",
        "img/cross/ROPE CLIMB.gif",
        "img/cross/RUSSIAM KETTLEBELL.gif",
        "img/cross/SNATCH.gif",
        "img/cross/SPLIT JECK.gif",
        "img/cross/SPLIT JUMP.gif",
        "img/cross/SPRAWL STEP.gif",
        "img/cross/STEP BOX.gif",
        "img/cross/STRICT BAR M.gif",
        "img/cross/STRICT MUSCLEUP.gif",
    ],
    alongamento: [
        "img/alongamento/ALONGAMENTO1.gif",
        "img/alongamento/ALONGAMENTO2.gif",
        "img/alongamento/ALONGAMENTO3.gif",
        "img/alongamento/ALONGAMENTO4.gif",
        "img/alongamento/ALONGAMENTO5.gif",
        "img/alongamento/ALONGAMENTO6.gif",         
        "img/alongamento/ALONGAMENTO7.gif",
        "img/alongamento/ALONGAMENTO8.gif",
        "img/alongamento/ALONGAMENTO9.gif",
        "img/alongamento/ALONGAMENTO10.gif",
        "img/alongamento/ALONGAMENTO11.gif",
        "img/alongamento/ALONGAMENTO12.gif",
        "img/alongamento/ALONGAMENTO13.gif",
        "img/alongamento/ALONGAMENTO14.gif",
        "img/alongamento/ALONGAMENTO15.gif",
        "img/alongamento/ALONGAMENTO16.gif",
        "img/alongamento/ALONGAMENTO17.gif",
        "img/alongamento/ALONGAMENTO18.gif",
        "img/alongamento/ALONGAMENTO19.gif",
        "img/alongamento/ALONGAMENTO20.gif",
        "img/alongamento/ALONGAMENTO21.gif",
        "img/alongamento/ALONGAMENTO22.gif",
        "img/alongamento/ALONGAMENTO23.gif",
        "img/alongamento/ALONGAMENTO24.gif",
        "img/alongamento/ALONGAMENTO25.gif",
        "img/alongamento/ALONGAMENTO26.gif",
        "img/alongamento/ALONGAMENTO27.gif",
        "img/alongamento/ALONGAMENTO28.gif",
        "img/alongamento/ALONGAMENTO29.gif",
        "img/alongamento/ALONGAMENTO30.gif",
        "img/alongamento/ALONGAMENTO31.gif",
        "img/alongamento/ALONGAMENTO32.gif",
        "img/alongamento/ALONGAMENTO33.gif",
        "img/alongamento/ALONGAMENTO34.gif",
        "img/alongamento/ALONGAMENTO35.gif",
        "img/alongamento/ALONGAMENTO36.gif",
        "img/alongamento/ALONGAMENTO37.gif",
        "img/alongamento/ALONGAMENTO38.gif",
        "img/alongamento/ALONGAMENTO39.gif",
        "img/alongamento/ALONGAMENTO40.gif",
    ]
    };


// Função Helper: Limpa o nome do arquivo para exibição
function cleanName(path) {
    if(!path) return "";
    return path.split("/").pop().replace(".gif", "").replace(/_/g, " ").replace(/-/g, " ").trim();
}

// Função Helper: Embaralha um array (Algoritmo Fisher-Yates)
// Isso garante que o treino varie todo dia!
function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
    // Copia o array para não alterar o original permanentemente
    let newArray = [...array]; 

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]];
    }
    return newArray;
}

// Função Principal: Gera o treino baseado no Nível + Randomização
function getExercisesByLevel(group, level) {
    const allExercises = gifs[group] || [];
    
    // Adiciona exercícios personalizados salvos (se houver)
    const savedCustom = JSON.parse(localStorage.getItem("treinosPersonalizados")) || {};
    const customExercises = savedCustom[group]?.[level] || [];
    
    // Junta tudo e embaralha para dar variedade
    let pool = shuffleArray([...allExercises, ...customExercises]);
    
    // Define quantos exercícios mostrar por nível
    let count;
    if (level === 'iniciante') count = 4;      // Treino curto
    else if (level === 'moderado') count = 5;  // Treino médio
    else count = 7;                            // Treino longo (Avançado)

    // Garante que não tentamos pegar mais exercícios do que existem
    return pool.slice(0, Math.min(count, pool.length));
}

// Função de Exibição no HTML
function showExercises(group, level) {
    const preview = document.getElementById("preview");
    const info = document.querySelector("#result .info");
    const resultCard = document.getElementById("result");

    // Gera a lista embaralhada
    const listaFinal = getExercisesByLevel(group, level);

    if (listaFinal.length === 0) {
        alert(`Ainda não temos exercícios cadastrados para ${group}.`);
        return;
    }

    // Define repetições baseadas no nível
    let repeticoesTexto;
    if (level === "iniciante") repeticoesTexto = "3 séries de 10 a 12 repetições";
    else if (level === "moderado") repeticoesTexto = "4 séries de 8 a 12 repetições";
    else repeticoesTexto = "4 séries de 12 repetições + Dropset na última";

    // Exibe o card de resultado
    resultCard.style.display = "block";
    info.innerHTML = `<strong>Treino de ${group.toUpperCase()} (${level})</strong><br><small>${repeticoesTexto}</small>`;
    
    preview.innerHTML = ""; // Limpa anterior

    listaFinal.forEach((src, index) => {
        const card = document.createElement("div");
        card.className = "workout-item"; // Classe do novo CSS
        
        // Cria estrutura do Card
        card.innerHTML = `
            <div class="workout-content" style="display: flex; align-items: center; gap: 15px;">
                <img src="${src}" alt="${cleanName(src)}" class="thumb-img" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px; cursor: pointer;">
                <div>
                    <h4 style="margin-bottom: 5px; color: #fff;">${index + 1}. ${cleanName(src)}</h4>
                    <p style="font-size: 0.8rem; color: #ccc;">${repeticoesTexto}</p>
                </div>
            </div>
        `;

        // Adiciona evento de clique na imagem para abrir modal (Zoom)
        const img = card.querySelector("img");
        img.addEventListener("click", () => openModal(src));

        preview.appendChild(card);
    });

    // Scroll suave até o resultado
    resultCard.scrollIntoView({ behavior: 'smooth' });
}

// Função Modal (Zoom na imagem)
function openModal(src) {
    const modal = document.createElement("div");
    modal.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);z-index:1000;display:flex;justify-content:center;align-items:center;flex-direction:column;";
    
    modal.innerHTML = `
        <img src="${src}" style="max-width:90%; max-height:80%; border-radius:10px; box-shadow: 0 0 20px rgba(255,255,255,0.2);">
        <button style="margin-top:20px; padding:10px 20px; background:#ef4444; color:white; border:none; border-radius:5px; font-size:16px;">Fechar</button>
    `;

    modal.addEventListener("click", () => modal.remove());
    document.body.appendChild(modal);
}


// ==========================================
// 🎮 EVENTOS E BOTÕES
// ==========================================

// Carrega os grupos no Select ao iniciar
window.addEventListener("load", () => {
    const groupSelect = document.getElementById("groupSelect");
    if(groupSelect) {
        groupSelect.innerHTML = '<option value="" disabled selected>Selecione...</option>';
        Object.keys(gifs).forEach(key => {
            const opt = document.createElement("option");
            opt.value = key;
            opt.textContent = key.charAt(0).toUpperCase() + key.slice(1);
            groupSelect.appendChild(opt);
        });
    }
    // Preenche também o select da Biblioteca (se existir)
    atualizarGruposBiblioteca();
});

document.getElementById("genBtn")?.addEventListener("click", () => {
    const group = document.getElementById("groupSelect").value;
    const level = document.getElementById("levelSelect").value;
    
    if (!group) {
        alert("Por favor, selecione um grupo muscular!");
        return;
    }
    showExercises(group, level);
});

document.getElementById("randomBtn")?.addEventListener("click", () => {
    const groups = Object.keys(gifs);
    const randomGroup = groups[Math.floor(Math.random() * groups.length)];
    const randomLevel = ["iniciante", "moderado", "avancado"][Math.floor(Math.random() * 3)];
    
    // Atualiza a UI
    document.getElementById("groupSelect").value = randomGroup;
    document.getElementById("levelSelect").value = randomLevel;
    
    showExercises(randomGroup, randomLevel);
});

document.getElementById("calculadora").addEventListener("click", () => {
    location.href = "calculadora.html";
});

// Bloqueio de Botão Direito (Proteção Básica)
window.addEventListener("contextmenu", e => e.preventDefault());


// ==========================================
// 📚 BIBLIOTECA DE TREINOS (ADMIN/EXTRA)
// ==========================================
function atualizarGruposBiblioteca() {
    const grupoNovoSelect = document.getElementById("grupoNovo");
    if(!grupoNovoSelect) return; // Se não existir na página, ignora

    grupoNovoSelect.innerHTML = '<option value="">Filtrar por grupo...</option>';
    Object.keys(gifs).forEach(grupo => {
        const opt = document.createElement("option");
        opt.value = grupo;
        opt.textContent = grupo.charAt(0).toUpperCase() + grupo.slice(1);
        grupoNovoSelect.appendChild(opt);
    });
}

// Evento: Ao selecionar grupo na biblioteca, mostra os GIFs disponíveis naquele Select
document.getElementById("grupoNovo")?.addEventListener("change", (e) => {
    const grupo = e.target.value;
    const gifSelect = document.getElementById("gifNovo");
    
    gifSelect.innerHTML = '<option value="">Selecione um exercício...</option>';
    
    if (gifs[grupo]) {
        gifs[grupo].forEach(gifPath => {
            const opt = document.createElement("option");
            opt.value = gifPath;
            opt.textContent = cleanName(gifPath);
            gifSelect.appendChild(opt);
        });
    }
});

// Mostra o GIF selecionado na biblioteca (apenas visualização rápida)
document.getElementById("gifNovo")?.addEventListener("change", (e) => {
    const src = e.target.value;
    if(src) openModal(src); // Reusa a modal de zoom
});
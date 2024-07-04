const dataAlvo = new Date ("May 29, 2025 19:00:00");
const aniversario = dataAlvo.getTime();

const contaTempo = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = aniversario - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);
    
    document.getElementById('tempo').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (contaTempo < 0) {
        clearInterval(contaTempo);
        document.getElementById('tempo').innerHTML = 'O evento já ocorreu';
    }
}, 1000)
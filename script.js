let gameState = {
    wheat: 0,
    dough: 0,
    bread: 0,
    cash: 0,
    sellPrice: 1,
    wheatPerClick: 1,
    doughPerClick: 1,
    breadPerClick: 1,
    harvesters: 0,
    copperHoe: false,
    ironHoe: false,
    diamondHoe: false,
    kneedTool1: false,
    kneedTool2: false,
    kneedTool3: false,
    oven1: false,
    oven2: false,
    oven3: false
};

const updateUI = () => {
    document.getElementById('wheat').textContent = `Wheat: ${gameState.wheat}`;
    document.getElementById('dough').textContent = `Dough: ${gameState.dough}`;
    document.getElementById('bread').textContent = `Bread: ${gameState.bread}`;
    document.getElementById('cash').textContent = `Cash: ${gameState.cash}`;
    document.getElementById('sellPrice').textContent = `Sell Price: ${gameState.sellPrice}`;

    document.getElementById('btnCopperHoe').disabled = gameState.copperHoe;
    document.getElementById('btnIronHoe').disabled = gameState.ironHoe;
    document.getElementById('btnDiamondHoe').disabled = gameState.diamondHoe;
    document.getElementById('btnKneedTool1').disabled = gameState.kneedTool1;
    document.getElementById('btnKneedTool2').disabled = gameState.kneedTool2;
    document.getElementById('btnKneedTool3').disabled = gameState.kneedTool3;
    document.getElementById('btnOven1').disabled = gameState.oven1;
    document.getElementById('btnOven2').disabled = gameState.oven2;
    document.getElementById('btnOven3').disabled = gameState.oven3;
};

document.getElementById('btnHarvest').addEventListener('click', () => {
    gameState.wheat += gameState.wheatPerClick;
    updateUI();
});

document.getElementById('btnDough').addEventListener('click', () => {
    if (gameState.wheat >= gameState.doughPerClick) {
        gameState.wheat -= gameState.doughPerClick;
        gameState.dough += gameState.doughPerClick;
        updateUI();
    }
});

document.getElementById('btnBake').addEventListener('click', () => {
    if (gameState.dough >= gameState.breadPerClick) {
        gameState.dough -= gameState.breadPerClick;
        gameState.bread += gameState.breadPerClick;
        updateUI();
    }
});

document.getElementById('btnSell').addEventListener('click', () => {
    if (gameState.bread >= 1) {
        gameState.bread -= 1;
        gameState.cash += gameState.sellPrice;
        updateUI();
    }
});

document.getElementById('btnIncreaseSellPrice').addEventListener('click', () => {
    gameState.sellPrice += 1;
    updateUI();
});

document.getElementById('btnBuyHarvester').addEventListener('click', () => {
    if (gameState.cash >= 50) {
        gameState.cash -= 50;
        gameState.harvesters += 1;
        updateUI();
    }
});

document.getElementById('btnCopperHoe').addEventListener('click', () => {
    if (gameState.cash >= 150) {
        gameState.cash -= 150;
        gameState.wheatPerClick += 1;
        gameState.copperHoe = true;
        updateUI();
    }
});

document.getElementById('btnIronHoe').addEventListener('click', () => {
    if (gameState.cash >= 500) {
        gameState.cash -= 500;
        gameState.wheatPerClick += 2;
        gameState.ironHoe = true;
        updateUI();
    }
});

document.getElementById('btnDiamondHoe').addEventListener('click', () => {
    if (gameState.cash >= 1500) {
        gameState.cash -= 1500;
        gameState.wheatPerClick += 6;
        gameState.diamondHoe = true;
        updateUI();
    }
});

document.getElementById('btnKneedTool1').addEventListener('click', () => {
    if (gameState.cash >= 150) {
        gameState.cash -= 150;
        gameState.doughPerClick += 1;
        gameState.kneedTool1 = true;
        updateUI();
    }
});

document.getElementById('btnKneedTool2').addEventListener('click', () => {
    if (gameState.cash >= 500) {
        gameState.cash -= 500;
        gameState.doughPerClick += 2;
        gameState.kneedTool2 = true;
        updateUI();
    }
});

document.getElementById('btnKneedTool3').addEventListener('click', () => {
    if (gameState.cash >= 1500) {
        gameState.cash -= 1500;
        gameState.doughPerClick += 6;
        gameState.kneedTool3 = true;
        updateUI();
    }
});

document.getElementById('btnOven1').addEventListener('click', () => {
    if (gameState.cash >= 150) {
        gameState.cash -= 150;
        gameState.breadPerClick += 1;
        gameState.oven1 = true;
        updateUI();
    }
});

document.getElementById('btnOven2').addEventListener('click', () => {
    if (gameState.cash >= 500) {
        gameState.cash -= 500;
        gameState.breadPerClick += 2;
        gameState.oven2 = true;
        updateUI();
    }
});

document.getElementById('btnOven3').addEventListener('click', () => {
    if (gameState.cash >= 1500) {
        gameState.cash -= 1500;
        gameState.breadPerClick += 6;
        gameState.oven3 = true;
        updateUI();
    }
});

setInterval(() => {
    if (gameState.harvesters > 0) {
        gameState.wheat += gameState.harvesters;
        updateUI();
    }
}, 1000);

updateUI();

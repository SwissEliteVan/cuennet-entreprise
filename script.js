const baseRates = {
  studio: { local: [550, 1000], longue: [1700, 2000] },
  "2-3": { local: [800, 1300], longue: [1800, 3000] },
  "3-4": { local: [1100, 1450], longue: [2300, 3400] },
  maison: { local: [1500, 2500], longue: [2000, 4500] },
};

const optionsRates = {
  emballage: [100, 250],
  demontage: [200, 450],
  monte: [500, 500],
  nettoyage: [200, 400],
};

const sizeEl = document.getElementById("size");
const distanceEl = document.getElementById("distance");
const calculateBtn = document.getElementById("calculateBtn");
const resultEl = document.getElementById("result");

if (calculateBtn) {
  calculateBtn.addEventListener("click", () => {
    const size = sizeEl.value;
    const distance = distanceEl.value;
    const [baseMin, baseMax] = baseRates[size][distance];

    let totalMin = baseMin;
    let totalMax = baseMax;

    Object.keys(optionsRates).forEach((optionKey) => {
      const checkbox = document.getElementById(optionKey);
      if (checkbox && checkbox.checked) {
        totalMin += optionsRates[optionKey][0];
        totalMax += optionsRates[optionKey][1];
      }
    });

    resultEl.textContent = `Prix estimé : ${totalMin} CHF - ${totalMax} CHF`;
  });
}

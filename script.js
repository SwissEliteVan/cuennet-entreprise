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

if (calculateBtn && sizeEl && distanceEl && resultEl) {
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

const devisForm = document.getElementById("devisForm");
const formSteps = document.querySelectorAll(".form-step");
const stepDots = document.querySelectorAll(".step-dot");
const prevStepBtn = document.getElementById("prevStep");
const nextStepBtn = document.getElementById("nextStep");

if (devisForm && formSteps.length && prevStepBtn && nextStepBtn) {
  let currentStep = 1;

  const updateStepUI = () => {
    formSteps.forEach((step) => {
      step.classList.toggle("active", Number(step.dataset.step) === currentStep);
    });

    stepDots.forEach((dot) => {
      dot.classList.toggle("active", Number(dot.dataset.step) === currentStep);
    });

    prevStepBtn.disabled = currentStep === 1;
    nextStepBtn.classList.toggle("d-none", currentStep === formSteps.length);
  };

  nextStepBtn.addEventListener("click", () => {
    if (currentStep < formSteps.length) {
      currentStep += 1;
      updateStepUI();
    }
  });

  prevStepBtn.addEventListener("click", () => {
    if (currentStep > 1) {
      currentStep -= 1;
      updateStepUI();
    }
  });

  devisForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Merci ! Votre demande a bien été envoyée.");
    devisForm.reset();
    currentStep = 1;
    updateStepUI();
  });

  updateStepUI();
}

const aidTriggers = document.querySelectorAll('.aid-trigger');

if (aidTriggers.length) {
  aidTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const panelId = trigger.getAttribute('aria-controls');
      const panel = panelId ? document.getElementById(panelId) : null;
      if (!panel) {
        return;
      }

      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', String(!isExpanded));
      panel.hidden = isExpanded;
    });
  });
}

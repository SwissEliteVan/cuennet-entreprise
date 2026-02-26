const faqItems = [
  {
    question: "Qui est responsable en cas de dommages ?",
    answer:
      "L'entreprise est responsable et doit avoir une assurance responsabilité civile et transporteurs. Attention, l'assurance n'intervient souvent que si le déménageur a emballé les cartons lui-même, et elle rembourse à la valeur vénale (et non à neuf).",
  },
  {
    question: "Quelles sont les modalités de paiement ?",
    answer:
      "Le paiement se fait souvent en espèces après le déménagement, mais vous pouvez demander une facture. Attention : ne payez jamais d'acompte à l'avance à une entreprise de déménagement.",
  },
  {
    question: "Faut-il laisser un pourboire ?",
    answer:
      "Oui, il est d'usage de laisser un pourboire si vous êtes satisfait, ou de préparer des boissons et en-cas pour les déménageurs.",
  },
  {
    question: "Quels critères regarder pour choisir une entreprise ?",
    answer:
      "Vérifiez l'inscription au registre du commerce (Zefix), lisez les avis en ligne (ponctualité, soin, amabilité), et exigez une visite technique sur place pour évaluer le volume exact et les accès.",
  },
];

function createFaqItem(item, index) {
  const wrapper = document.createElement("article");
  wrapper.className = "faq-item";

  const button = document.createElement("button");
  button.className = "faq-question";
  button.type = "button";
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-controls", `faq-answer-${index}`);
  button.innerHTML = `<span>${item.question}</span><span class=\"faq-icon\">+</span>`;

  const answer = document.createElement("div");
  answer.className = "faq-answer";
  answer.id = `faq-answer-${index}`;
  answer.hidden = true;
  answer.innerHTML = `<p>${item.answer}</p>`;

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    answer.hidden = isOpen;
    wrapper.classList.toggle("open", !isOpen);
    button.querySelector(".faq-icon").textContent = isOpen ? "+" : "−";
  });

  wrapper.append(button, answer);
  return wrapper;
}

function mountFaqComponents() {
  const containers = document.querySelectorAll("[data-faq-component]");
  containers.forEach((container) => {
    const title = document.createElement("h2");
    title.className = "h4 mb-3";
    title.textContent = "Foire aux questions";

    const list = document.createElement("div");
    list.className = "faq-list";

    faqItems.forEach((item, index) => {
      list.appendChild(createFaqItem(item, index));
    });

    container.append(title, list);
  });
}

document.addEventListener("DOMContentLoaded", mountFaqComponents);

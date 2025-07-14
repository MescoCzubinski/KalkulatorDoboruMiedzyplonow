function format(inputString) {
  return inputString
    .replace(/[^0-9.,]/g, "")
    .replace(/^(?!\.)/g, "")
    .replace(/,/g, ".")
    .replace(/^\.($|[^0-9])/, "0.")
    .replace(/\.{2,}/g, ".")
    .replace(/(.*?\..*?)\./g, "$1")
    .replace(/(\d+\.\d{2})\d*/g, "$1");
}
document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", (event) => {
    const inputField = event.target;
    inputField.value = format(inputField.value);
  });
});
const visitedElements = document.querySelectorAll("input, select");
visitedElements.forEach((input) => {
  input.addEventListener("blur", function () {
    if (this.value) {
      this.classList.add("visited");
    } else {
      this.classList.remove("visited");
    }
  });
});

function populateSelect(selectId, options) {
  const select = document.getElementById(selectId);
  options.forEach((option, index) => {
    const optionElement = document.createElement("option");
    optionElement.value = index;
    optionElement.textContent = option;
    select.appendChild(optionElement);
  });
}

populateSelect("GatunekWZmianowaniu", gatunekWZmianowaniuArr);
populateSelect("uprawaNastepcza", uprawaNastepczaArr);
populateSelect("UprawaPosredniaGatunekWZmianowaniu", UprawaPosrednia);
populateSelect("UprawaPosredniaUprawaNastepcza", UprawaPosrednia);

const buttonsSection = document.getElementById("buttonsSection");
const gatunekWZmianowaniuButton = document.getElementById(
  "gatunekWZmianowaniuButton"
);
const uprawaNastepczaButton = document.getElementById("uprawaNastepczaButton");
const gatunekWZmianowaniuSection = document.getElementById(
  "gatunekWZmianowaniuSection"
);

const uprawaNastepczaSection = document.getElementById(
  "uprawaNastepczaSection"
);

const wynikiSection = document.getElementById("wynikiSection");
const wynikiContainer = document.getElementById("wynikiContainer");
const wynikText = document.getElementById("wynikText");
const wynikText2 = document.getElementById("wynikText2");

const reset = document.getElementById("reset");

const uprawaNastepcza = document.getElementById("uprawaNastepcza");
const UprawaPosredniaUprawaNastepcza = document.getElementById(
  "UprawaPosredniaUprawaNastepcza"
);
const gatunekWZmianowaniu = document.getElementById("GatunekWZmianowaniu");
const UprawaPosredniaGatunekWZmianowaniu = document.getElementById(
  "UprawaPosredniaGatunekWZmianowaniu"
);

gatunekWZmianowaniuSection.style.display = "none";
uprawaNastepczaSection.style.display = "none";
wynikiSection.style.display = "none";

gatunekWZmianowaniuButton.addEventListener("click", () => {
  buttonsSection.style.display = "none";
  gatunekWZmianowaniuSection.style.display = "block";

  const handleResultCalculation = () => {
    const gatunekValue = gatunekWZmianowaniu.value;
    const uprawaValue = UprawaPosredniaGatunekWZmianowaniu.value;
    if (gatunekValue && uprawaValue) {
      const result =
        gatunekWZmianowaniu_uprawaPosrednia_Matrix[Number(gatunekValue)][
          Number(uprawaValue)
        ];

      const resultInfo = resultText[result];
      wynikText.innerHTML = resultInfo.text1;
      resultInfo.text2 !== "bez przypisu"
        ? (wynikText2.innerHTML = resultInfo.text2)
        : (wynikText2.innerHTML = "");
      wynikiContainer.style.backgroundColor = resultInfo.color;
      wynikiContainer.style.borderBlockColor = "#000";
      wynikiSection.style.display = "block";
    }
  };

  gatunekWZmianowaniu.addEventListener("change", handleResultCalculation);
  UprawaPosredniaGatunekWZmianowaniu.addEventListener(
    "change",
    handleResultCalculation
  );
});
uprawaNastepczaButton.addEventListener("click", () => {
  buttonsSection.style.display = "none";
  uprawaNastepczaSection.style.display = "block";

  const handleResultCalculation = () => {
    const uprawaNastepczaValue = uprawaNastepcza.value;
    const uprawaValue = UprawaPosredniaUprawaNastepcza.value;
    if (uprawaNastepczaValue && uprawaValue) {
      const result =
        uprawaNastepcza_uprawaPosrednia_Matrix[Number(uprawaNastepczaValue)][
          Number(uprawaValue)
        ];

      const resultInfo = resultText[result];
      wynikText.innerHTML = resultInfo.text1;
      resultInfo.text2 !== "bez przypisu"
        ? (wynikText2.innerHTML = resultInfo.text2)
        : (wynikText2.innerHTML = "");
      wynikiContainer.style.backgroundColor = resultInfo.color;
      wynikiContainer.style.borderBlockColor = "#000";
      wynikiSection.style.display = "block";
    }
  };

  uprawaNastepcza.addEventListener("change", handleResultCalculation);
  UprawaPosredniaUprawaNastepcza.addEventListener(
    "change",
    handleResultCalculation
  );
});

reset.addEventListener("click", () => {
  buttonsSection.style.display = "block";
  gatunekWZmianowaniuSection.style.display = "none";
  uprawaNastepczaSection.style.display = "none";
  wynikiSection.style.display = "none";

  wynikText.innerHTML = "";
  wynikText2.innerHTML = "";
  wynikiContainer.style.backgroundColor = "#fff";
  wynikiContainer.style.borderBlockColor = "#fff";

  GatunekWZmianowaniu.value = "";
  UprawaPosredniaGatunekWZmianowaniu.value = "";
  uprawaNastepcza.value = "";
  UprawaPosredniaUprawaNastepcza.value = "";

  GatunekWZmianowaniu.classList.remove("visited");
  UprawaPosredniaGatunekWZmianowaniu.classList.remove("visited");
  uprawaNastepcza.classList.remove("visited");
  UprawaPosredniaUprawaNastepcza.classList.remove("visited");
});

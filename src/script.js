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
const gatunekWZmianowaniuArr = [
  "Groch",
  "Fasola",
  "Soczewica",
  "Soja",
  "Bobik",
  "Słonecznik",
  "Len (oleisty i włóknisty)",
  "Rzepak (obecność kiły kapusty)",
  "Rzepak (bez kiły kapusty)",
];
populateSelect("GatunekWZmianowaniu", gatunekWZmianowaniuArr);

const uprawaNastepczaArr = [
  "Pszenica po pszenicy",
  "Inne zboże ozime",
  "Jęczmień jary",
  "Kukurydza",
  "Sorgo",
  "Burak (pole z mątwikami)",
  "Burak (pole z niszczykami)",
  "Ziemniak",
  "Groch cukrowy i łuskowy",
  "Fasola",
  "Groch na suche nasiona",
  "Soczewica",
  "Bobik",
  "Łubin",
  "Soja",
  "Ciecierzyca",
  "Słonecznik",
  "Len (oleisty i włóknisty)",
  "Konopie",
];
populateSelect("uprawaNastepcza", uprawaNastepczaArr);

const UprawaPosrednia = [
  "Gorczyca biała mątwikobójcza",
  "Gorczyca czarna mątwikobójcza",
  "Rzodkiew pastewna mątwikobójcza",
  "Rzodkiew (inna niż mątwikobójcza)",
  "Rzepak",
  "Inne kapustowate",
  "Facelia",
  "Len",
  "Słonecznik",
  "Olejarka abisyńska",
  "Gryka",
  "Żyto",
  "Pszenżyto",
  "Mozga kanaryjska",
  "Owies siewny",
  "Owies szorstwki",
  "Sorgo",
  "Ber",
  "Życica wielokwiatowa",
  "Bobik",
  "Łubin",
  "Groch",
  "Kozieradka",
  "Koniczyna aleksandryjska",
  "Koniczyna inkarnatka",
  "Wyka (odporna na Aphanomyces)",
  "Wyka (inna)",
  "Soczewica",
  "Groszek (lędźwian)",
  "Komonica",
  "Esparceta",
  "Koniczyna biała (odporna na Aphanomyces)",
  "Koniczyna łąkowa (odporna na Aphanomyces)",
  "Lucerna",
  "Inne koniczyny",
];
populateSelect("UprawaPosredniaGatunekWZmianowaniu", UprawaPosrednia);
populateSelect("UprawaPosredniaUprawaNastepcza", UprawaPosrednia);

const gatunekWZmianowaniu_uprawaPosrednia_Matrix = [
  [
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 41, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 61, 3, 3, 3,
    3, 61, 61, 61, 3, 3, 3, 3, 61, 61,
  ],
  [
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 41, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 61, 3, 3, 3,
    3, 61, 61, 61, 3, 3, 3, 3, 61, 61,
  ],
  [
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 41, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 61, 3, 3, 3,
    3, 61, 61, 61, 3, 3, 3, 3, 61, 61,
  ],
  [
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 41, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 61, 3, 3, 3,
    3, 61, 61, 61, 3, 3, 3, 3, 61, 61,
  ],
  [
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 41, 3, 3, 3, 3, 3, 3, 3, 3, 5, 5, 61, 3, 3, 3,
    3, 61, 61, 61, 3, 3, 3, 3, 61, 61,
  ],
  [
    3, 3, 3, 3, 51, 3, 3, 51, 6, 6, 41, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  ],
  [
    3, 3, 3, 3, 51, 3, 3, 6, 51, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  ],
  [
    6, 6, 6, 6, 6, 6, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  ],
  [
    4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  ],
];
const uprawaNastepcza_uprawaPosrednia_Matrix = [
  [
    11, 11, 11, 11, 11, 11, 3, 3, 3, 3, 3, 6, 6, 6, 6, 6, 6, 6, 62, 12, 12, 12,
    12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
  ],
  [
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 6, 6, 6, 6, 6, 6, 6, 62, 12, 12, 12, 12,
    12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
  ],
  [
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 63, 63, 63, 63, 63, 63, 63, 64, 12, 12, 12,
    12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13,
  ],
  [
    31, 31, 31, 31, 31, 31, 2, 3, 3, 3, 52, 3, 3, 3, 3, 3, 3, 3, 42, 12, 12, 12,
    12, 12, 12, 12, 12, 12, 12, 32, 32, 32, 32, 32, 32,
  ],
  [
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 52, 3, 3, 3, 3, 3, 3, 3, 53, 12, 12, 12, 12,
    12, 12, 12, 12, 12, 12, 43, 43, 43, 43, 43, 43,
  ],
  [
    21, 14, 65, 65, 65, 65, 3, 3, 3, 3, 66, 3, 3, 3, 3, 3, 3, 3, 54, 22, 22, 12,
    12, 12, 12, 12, 12, 12, 12, 67, 67, 67, 67, 67, 67,
  ],
  [
    21, 14, 65, 65, 65, 65, 3, 3, 3, 3, 66, 65, 65, 65, 65, 65, 3, 3, 54, 68,
    68, 65, 12, 12, 12, 12, 12, 12, 12, 67, 67, 67, 67, 67, 67,
  ],
  [
    3, 1, 1, 1, 3, 3, 15, 3, 3, 3, 66, 3, 3, 3, 1, 1, 3, 3, 54, 12, 12, 12, 12,
    12, 12, 12, 12, 12, 12, 3, 3, 3, 3, 3, 3,
  ],
  [
    69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 66, 3, 3, 3, 3, 3, 3, 3, 55, 69, 69,
    699, 69, 69, 69, 69, 699, 690, 690, 690, 690, 691, 690, 691, 691,
  ],
  [
    69, 69, 69, 69, 69, 69, 69, 69, 69, 69, 66, 3, 3, 3, 3, 3, 3, 3, 55, 69, 69,
    699, 69, 69, 69, 69, 699, 690, 690, 690, 690, 691, 690, 691, 691,
  ],
  [
    44, 44, 44, 44, 44, 44, 3, 3, 3, 3, 66, 3, 3, 3, 3, 3, 3, 3, 692, 5, 5, 61,
    5, 5, 5, 5, 61, 67, 61, 67, 67, 67, 67, 693, 693,
  ],
  [
    44, 44, 44, 44, 44, 44, 3, 3, 3, 3, 66, 3, 3, 3, 3, 3, 3, 3, 692, 5, 5, 61,
    5, 5, 5, 5, 61, 67, 61, 67, 67, 67, 67, 693, 693,
  ],
  [
    44, 44, 44, 44, 44, 44, 3, 3, 3, 3, 66, 3, 3, 3, 3, 3, 3, 3, 692, 6, 6, 5,
    5, 5, 5, 5, 5, 67, 67, 67, 67, 67, 67, 67, 67,
  ],
  [
    44, 44, 44, 44, 44, 44, 3, 3, 3, 3, 66, 3, 3, 3, 3, 3, 3, 3, 692, 6, 6, 5,
    5, 5, 5, 5, 5, 67, 67, 67, 67, 67, 67, 67, 67,
  ],
  [
    44, 44, 44, 44, 44, 44, 3, 3, 56, 56, 66, 1, 1, 1, 1, 1, 3, 3, 55, 3, 3, 3,
    3, 3, 3, 3, 3, 67, 67, 67, 67, 67, 67, 67, 67,
  ],
  [
    44, 44, 44, 44, 44, 44, 3, 3, 56, 56, 66, 1, 1, 1, 1, 1, 3, 3, 55, 3, 3, 3,
    3, 3, 3, 3, 3, 67, 67, 67, 67, 67, 67, 67, 67,
  ],
  [
    3, 3, 3, 3, 51, 3, 3, 51, 6, 6, 66, 3, 3, 3, 3, 3, 3, 3, 54, 12, 12, 12, 12,
    12, 12, 12, 12, 3, 3, 3, 3, 3, 3, 3, 3,
  ],
  [
    3, 3, 3, 3, 51, 3, 3, 6, 51, 3, 66, 33, 33, 33, 33, 33, 3, 6, 694, 34, 34,
    34, 34, 34, 34, 34, 34, 34, 34, 67, 67, 67, 67, 67, 67,
  ],
  [
    5, 5, 5, 5, 5, 5, 3, 3, 3, 3, 66, 3, 3, 3, 3, 3, 3, 3, 54, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 3, 3, 3, 3, 3, 3,
  ],
];

const resultText = {
  1: { text1: "wpływ korzystny", text2: "bez przypisu", color: "#3A7C22" },
  11: {
    text1: "wpływ korzystny",
    text2:
      "możliwy wpływ (pozytywny lub negatywny) na rozwój zgorzeli podstawy źdźbła <i>Gaeumannomyces graminis</i>",
    color: "#3A7C22",
  },
  12: {
    text1: "wpływ korzystny",
    text2: "większa dostępność azotu w uprawie następczej",
    color: "#3A7C22",
  },
  13: {
    text1: "wpływ korzystny",
    text2:
      "większa dostępność azotu w uprawie następczej, trudność zwalczania gatunków wieloletnich",
    color: "#3A7C22",
  },
  14: {
    text1: "wpływ korzystny",
    text2: "możliwa redukcja liczby mątwików",
    color: "#3A7C22",
  },
  15: {
    text1: "wpływ korzystny",
    text2:
      "ryzyko rozwoju nicieni z grupy krępaków - wektorów wirusa TRV (czopowatość)",
    color: "#3A7C22",
  },
  2: {
    text1: "raczej wpływ korzystny",
    text2: "bez przypisu",
    color: "#8DD872",
  },
  21: {
    text1: "raczej wpływ korzystny",
    text2: "możliwa redukcja liczby mątwików",
    color: "#8DD872",
  },
  22: {
    text1: "raczej wpływ korzystny",
    text2:
      "większa dostępność azotu w uprawie następczej, ryzyko rozwoju rizoktoniozy",
    color: "#8DD872",
  },
  3: { text1: "wpływ nieznany", text2: "bez przypisu", color: "#D9F2D0" },
  31: {
    text1: "wpływ nieznany",
    text2: "możliwa poprawa wpływu poprzez wczesniejszą likwidację międzyplonu",
    color: "#D9F2D0",
  },
  32: {
    text1: "wpływ nieznany",
    text2:
      "większa dostępność azotu w uprawie następczej, trudność zwalczania gatunków wieloletnich",
    color: "#D9F2D0",
  },
  33: {
    text1: "wpływ nieznany",
    text2:
      "ryzyko fitotoksyczności glifosatu zastosowanego do likidacji międzyplonu mniej niż miesiac przed siewem",
    color: "#D9F2D0",
  },
  34: {
    text1: "wpływ nieznany",
    text2: "większa dostępność azotu w uprawie następczej",
    color: "#D9F2D0",
  },
  4: { text1: "małe ryzyko", text2: "bez przypisu", color: "#FFFF00" },
  41: {
    text1: "małe ryzyko",
    text2: "ryzyko zachwaszczenia samosiewami międzyplonu",
    color: "#FFFF00",
  },
  42: {
    text1: "małe ryzyko",
    text2:
      "ryzyko zachwaszczenia samosiewami międzyplonu, większa dostępność azotu w uprawie następczej, ryzko przesuszenia gleby po likwidacji międzyplonu wiosną",
    color: "#FFFF00",
  },
  43: {
    text1: "małe ryzyko",
    text2:
      "większa dostępność azotu w uprawie następczej, trudność zwalczania gatunków wieloletnich",
    color: "#FFFF00",
  },
  44: {
    text1: "małe ryzyko",
    text2:
      "potencjalne ryzyko zakłócenia rozwoju bakterii brodawkowych (nie potwierdzone w polu)",
    color: "#FFFF00",
  },
  5: { text1: "duże ryzyko", text2: "bez przypisu", color: "#FFC000" },
  51: {
    text1: "duże ryzyko",
    text2: "ryzyko rozwoju werticiliozy",
    color: "#FFC000",
  },
  52: {
    text1: "duże ryzyko",
    text2: "ryzyko zachwaszczenia samosiewami międzyplonu",
    color: "#FFC000",
  },
  53: {
    text1: "duże ryzyko",
    text2:
      "ryzyko zachwaszczenia samosiewami międzyplonu, większa dostępność azotu w uprawie następczej, ryzko przesuszenia gleby po likwidacji międzyplonu wiosną",
    color: "#FFC000",
  },
  54: {
    text1: "duże ryzyko",
    text2:
      "większa dostępność azotu w uprawie następczej, ryzko przesuszenia gleby po likwidacji międzyplonu wiosną",
    color: "#FFC000",
  },
  55: {
    text1: "duże ryzyko",
    text2: "ryzko przesuszenia gleby po likwidacji międzyplonu wiosną",
    color: "#FFC000",
  },
  56: {
    text1: "duże ryzyko",
    text2:
      "ryzyko rozwoju zgnilizny twardzikowej jeśli dojdzie do wytworzenia sklerocji",
    color: "#FFC000",
  },
  6: { text1: "uprawa niewskazana", text2: "bez przypisu", color: "#EE0000" },
  61: {
    text1: "uprawa niewskazana",
    text2: `ryzyko namnożenia <i>Aphanomyces</i> - wrażliwość odmiany gatunku można sprawdzić na stronie <a target="_blank" class="underline" href="https://www.terresinovia.fr">www.terresinovia.fr</a> w sekcji dla bobowatych`,
    color: "#EE0000",
  },
  62: {
    text1: "uprawa niewskazana",
    text2:
      "ryzyko zachwaszczenia samosiewami międzyplonu, wpływ na dostępność azotu w uprawie następczej poprzez jego związanie w biomasie",
    color: "#EE0000",
  },
  63: {
    text1: "uprawa niewskazana",
    text2: "możliwa poprawa wpływu poprzez wczesniejszą likwidację międzyplonu",
    color: "#EE0000",
  },
  64: {
    text1: "uprawa niewskazana",
    text2:
      "możliwa poprawa wpływu poprzez wczesniejszą likwidację międzyplonu, ryzyko zachwaszczenia samosiewami międzyplonu",
    color: "#EE0000",
  },
  65: {
    text1: "uprawa niewskazana",
    text2: "ryzyko zwiększenia liczby mątwików",
    color: "#EE0000",
  },
  66: {
    text1: "uprawa niewskazana",
    text2: "ryzyko zachwaszczenia samosiewami międzyplonu",
    color: "#EE0000",
  },
  67: {
    text1: "uprawa niewskazana",
    text2: "trudność zwalczania gatunków wieloletnich w uprawach następczych",
    color: "#EE0000",
  },
  68: {
    text1: "uprawa niewskazana",
    text2: "ryzyko zwiększenia liczby mątwików, ryzyko rozwoju rizoktoniozy",
    color: "#EE0000",
  },
  69: {
    text1: "uprawa niewskazana",
    text2:
      "ryzyko rozwoju zgnilizny twardzikowej jeśli dojdzie do wytworzenia sklerocji",
    color: "#EE0000",
  },
  699: {
    text1: "uprawa niewskazana",
    text2: `ryzyko rozwoju zgnilizny twardzikowej jeśli dojdzie do wytworzenia sklerocji, ryzyko namnożenia <i>Aphanomyces</i> - wrażliwość odmiany gatunku można sprawdzić na stronie <a target="_blank" class="underline" href="https://www.terresinovia.fr">www.terresinovia.fr</a> w sekcji dla bobowatych`,
    color: "#EE0000",
  },
  690: {
    text1: "uprawa niewskazana",
    text2:
      "trudność zwalczania gatunków wieloletnich w uprawach następczych, ryzyko rozwoju zgnilizny twardzikowej jeśli dojdzie do wytworzenia sklerocji",
    color: "#EE0000",
  },
  691: {
    text1: "uprawa niewskazana",
    text2: `trudność zwalczania gatunków wieloletnich w uprawach następczych, ryzyko rozwoju zgnilizny twardzikowej jeśli dojdzie do wytworzenia sklerocji, ryzyko namnożenia <i>Aphanomyces</i> - wrażliwość odmiany gatunku można sprawdzić na stronie <a target="_blank" class="underline" href="https://www.terresinovia.fr">www.terresinovia.fr</a> w sekcji dla bobowatych`,
    color: "#EE0000",
  },
  692: {
    text1: "uprawa niewskazana",
    text2: "ryzko przesuszenia gleby po likwidacji międzyplonu wiosną",
    color: "#EE0000",
  },
  693: {
    text1: "uprawa niewskazana",
    text2: `trudność zwalczania gatunków wieloletnich w uprawach następczych, ryzyko namnożenia <i>Aphanomyces</i> - wrażliwość odmiany gatunku można sprawdzić na stronie <a target="_blank" class="underline" href="https://www.terresinovia.fr">www.terresinovia.fr</a> w sekcji dla bobowatych`,
    color: "#EE0000",
  },
  694: {
    text1: "uprawa niewskazana",
    text2:
      "ryzyko fitotoksyczności glifosatu zastosowanego do likidacji międzyplonu mniej niż miesiac przed siewem, wpływ na dostępność azotu w uprawie następczej poprzez jego związanie w biomasie, ryzko przesuszenia gleby po likwidacji międzyplonu wiosną",
    color: "#EE0000",
  },
};

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
        : null;
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
        : null;
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

//8 min (call) + 10 min (init) + 100 min (mvp) + 65 min (fixes)

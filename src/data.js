const gatunekWZmianowaniuArr = [
  "rzepak (bez kiły kapusty)",
  "rzepak (obecność kiły kapusty)",
  "słonecznik",
  "groch",
  "soja",
  "bobik",
  "fasola",
  "soczewica",
  "len (oleisty i włóknisty)",
];

const uprawaNastepczaArr = [
  "pszenica",
  "inne zboże ozime",
  "jęczmień jary",
  "kukurydza",
  "groch na suche nasiona",
  "bobik",
  "łubin",
  "soja",
  "słonecznik",
  "burak (pole z mątwikami)",
  "burak (pole z niszczykami)",
  "ziemniak",
  "sorgo",
  "groch cukrowy i łuskowy",
  "fasola",
  "soczewica",
  "ciecierzyca",
  "len (oleisty i włóknisty)",
  "konopie",
];

const UprawaPosrednia = [
  "gorczyca biała mątwikobójcza",
  "gorczyca czarna mątwikobójcza",
  "rzodkiew pastewna mątwikobójcza",
  "rzodkiew (inna niż mątwikobójcza)",
  "rzepak",
  "inne kapustowate",
  "facelia",
  "len",
  "słonecznik",
  "olejarka abisyńska",
  "gryka",
  "żyto",
  "pszenżyto",
  "mozga kanaryjska",
  "owies siewny",
  "owies szorstki",
  "sorgo",
  "ber",
  "życica wielokwiatowa",
  "bobik",
  "łubin",
  "groch",
  "kozieradka",
  "koniczyna aleksandryjska",
  "koniczyna inkarnatka",
  "wyka (odporna na Aphanomyces)",
  "wyka (inna)",
  "soczewica",
  "groszek (lędźwian)",
  "komonica",
  "esparceta",
  "koniczyna biała (odporna na Aphanomyces)",
  "koniczyna łąkowa (odporna na Aphanomyces)",
  "lucerna",
  "inne koniczyny",
];

const gatunekWZmianowaniu_uprawaPosrednia_Matrix = [
  [
    4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  ],
  [
    6, 6, 6, 6, 6, 6, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  ],
  [
    3, 3, 3, 3, 51, 3, 3, 51, 6, 6, 41, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
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
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 41, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 61, 3, 3, 3,
    3, 61, 61, 61, 3, 3, 3, 3, 61, 61,
  ],
  [
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 41, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 61, 3, 3, 3,
    3, 61, 61, 61, 3, 3, 3, 3, 61, 61,
  ],
  [
    3, 3, 3, 3, 51, 3, 3, 6, 51, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
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
    3, 3, 3, 3, 51, 3, 3, 51, 6, 6, 66, 3, 3, 3, 3, 3, 3, 3, 54, 12, 12, 12, 12,
    12, 12, 12, 12, 3, 3, 3, 3, 3, 3, 3, 3,
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
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 52, 3, 3, 3, 3, 3, 3, 3, 53, 12, 12, 12, 12,
    12, 12, 12, 12, 12, 12, 43, 43, 43, 43, 43, 43,
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
    44, 44, 44, 44, 44, 44, 3, 3, 56, 56, 66, 1, 1, 1, 1, 1, 3, 3, 55, 3, 3, 3,
    3, 3, 3, 3, 3, 67, 67, 67, 67, 67, 67, 67, 67,
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
  3: {
    text1: "brak informacji o wpływie",
    text2: "bez przypisu",
    color: "#D9F2D0",
  },
  31: {
    text1: "brak informacji o wpływie",
    text2: "możliwa poprawa wpływu poprzez wczesniejszą likwidację międzyplonu",
    color: "#D9F2D0",
  },
  32: {
    text1: "brak informacji o wpływie",
    text2:
      "większa dostępność azotu w uprawie następczej, trudność zwalczania gatunków wieloletnich",
    color: "#D9F2D0",
  },
  33: {
    text1: "brak informacji o wpływie",
    text2:
      "ryzyko fitotoksyczności glifosatu zastosowanego do likidacji międzyplonu mniej niż miesiac przed siewem",
    color: "#D9F2D0",
  },
  34: {
    text1: "brak informacji o wpływie",
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

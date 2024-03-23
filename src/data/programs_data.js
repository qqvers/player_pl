import culinary from "../assets/culinary.jpg";
import education from "../assets/education.jpg";
import entertainment from "../assets/entertainment.jpg";
import film from "../assets/film.jpg";
import football from "../assets/football.jpg";
import money from "../assets/money.jpg";
import news from "../assets/news.jpg";
import reality from "../assets/reality.jpg";
import secret_city from "../assets/secret_city.jpg";
import concert from "../assets/concert.jpg";

const programs = [
  {
    id: 1,
    header: "Wiadomości dnia",
    description: "Najnowsze wiadomości ze świata, kraju i regionu.",
    photo: news,
  },
  {
    id: 2,
    header: "Magazyn kulinarny",
    description:
      "Poznaj nowe przepisy kulinarnego mistrza i przygotuj wyśmienite dania w swojej kuchni.",
    photo: culinary,
  },
  {
    id: 3,
    header: "Reality show: Wyspa przetrwania",
    description: "Kto przetrwa na bezludnej wyspie i zdobędzie główną nagrodę?",
    photo: reality,
  },
  {
    id: 4,
    header: "Program edukacyjny: Odkrywamy wszechświat",
    description:
      "Pogłęb swoją wiedzę o wszechświecie i zrozum tajemnice kosmosu.",
    photo: education,
  },
  {
    id: 5,
    header: "Film: Przeznaczenie",
    description:
      "Emocjonujący film, który wciągnie cię od pierwszej do ostatniej minuty.",
    photo: film,
  },
  {
    id: 6,
    header: "Program rozrywkowy: Śmiechu warte",
    description:
      "Rozśmieszaj się do łez w towarzystwie znanych komików i kabareciarzy.",
    photo: entertainment,
  },
  {
    id: 7,
    header: "Serial: Tajemnice miasta",
    description:
      "Intrygujący serial kryminalny, który odkrywa sekrety miasta i jego mieszkańców.",
    photo: secret_city,
  },
  {
    id: 8,
    header: "Program sportowy: Liga Mistrzów",
    description:
      "Relacje z najważniejszych wydarzeń sportowych na całym świecie.",
    photo: football,
  },
  {
    id: 9,
    header: "Teleturniej: Milionerzy",
    description: "Sprawdź swoją wiedzę i zgarnij milion w teleturnieju!",
    photo: money,
  },
  {
    id: 10,
    header: "Koncert na żywo: Gwiazdy wieczoru",
    description: "Koncert z udziałem największych gwiazd muzyki na żywo.",
    photo: concert,
  },
];

export default programs;

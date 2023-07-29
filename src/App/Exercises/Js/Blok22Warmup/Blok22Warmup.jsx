import './styles.css';

export const Blok22Warmup = () => {
  const wagi = [
    { letter: 'A', score: 5 },
    { letter: 'E', score: 15 },
    { letter: 'I', score: 6 },
    { letter: 'O', score: 2 },
    { letter: 'U', score: 0 },
  ];

  function getScore(imie, wagi) {
    let score = 0;

    console.log(imie, score);
    for (let index = 0; index < imie.length; index++) {
      console.log(index, imie.charAt(index));
      const litera = imie.charAt(index).toUpperCase();
      const found = wagi.find((value) => value.letter === litera);
      console.log(index, litera, found);
      if (found) {
        score = score + found.score;
      }

      //score = score + imie.charAt(index).toUpperCase();
    }
    return score;
  }

  function imionaWagi(imiona, wagi) {
    return imiona
      .map((imie) => {
        return { name: imie, score: getScore(imie, wagi) };
      })
      .sort((first, second) => first.score - second.score * -1);
  }

  function handleOnClick() {
    const wynik = imionaWagi(['Janek', 'Zosia'], wagi);
    console.log(wynik);
  }

  return (
    <div>
      <h1>Rozgrzewka przed blokiem 22</h1>
      <section>
        <p>
          stwórz jako funkcję która przyjmuje 2 argumenty imiona oraz
          wagę/punktację.
        </p>
        <p>
          {' '}
          Zwraca posortowaną tablice imion z dodanym parametrem sumaWag
          niemutujaca oryginalnej
        </p>
        <button onClick={handleOnClick}>Kliknij</button>
      </section>
    </div>
  );
};

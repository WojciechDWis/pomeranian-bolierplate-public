import './styles.css';

// Boolean
export function EmptyValueAndComments() {
  // --------------------------------------------------------------------
  // PUSTE WARTOŚCI (null, undefined)
  // --------------------------------------------------------------------

  // UNDEFINED
  // 1. Zmienna jest zadeklarowana ale nie ma przypisanej wartości
  let a;
  console.log(a);

  // 2. Funkcja która nie zawiera instrukcji return albo nie zwraca żadnej wartości
  function some() {
    // Brak returna - nic nie zwraca
  }
  console.log(some());

  // NULL
  let b = null;
  console.log(b);

  // null == undefined    // true
  // null === undefined   // false

  // --------------------------------------------------------------------
  // KOMENTARZE
  // --------------------------------------------------------------------

  // 1. JEDNO-LINIOWY

  // TO JEST KOMENTARZ JEDNO-LINIOWY

  // 2. WIELO-LINIOWY

  /*
      TO JEST PRZYKŁAD KOMENTARZA WIELO LINIOWEGO

      TUTAJ MOGLIBYŚMY UMIEŚCIĆ PRZYKŁADOWY KOD ITD...
  */

  // 3. WIELO-LINIOWY
  /**
   *
   * TODO:
   *
   */

  // --------------------------------------------------------------------
  // STRINGI
  // --------------------------------------------------------------------

  // 1. SINGLE QUOTE
  const singleQuote = 'Tekst przy użyciu single quote';
  console.log(singleQuote);

  // 2. DOUBLE QUOTE
  const doubleQuote = 'Tekst przy użyciu double quote';
  console.log(doubleQuote);

  // 3. BACKTICKS / TEMPLATE STRING
  const templateString = 'Tekst przy użyciu double quote';
  console.log(templateString);

  // EXAMPLE
  const name = 'John';
  const surname = 'Wick';
  const age = 26;
  const quoteWithoutTemplateString = name + ' ' + surname + 'lat' + ' ' + age;
  const quoteWitTemplateString = `${name} ${surname} lat ${age}`;

  console.log(quoteWithoutTemplateString);
  console.log(quoteWitTemplateString);

  // STRINGI

  // 1.Length - metoda mowiaca o dlugosci stringa
  const text = 'To jest przykładowy tekst';
  console.log(text.length);

  // 2. string.substr metoda która słuiży do wyciągania części łańcucha znaków
  const extracted = text.substr(0, 5);
  console.log(extracted);

  //3. string.replace, string.replaceAll - metoda
  const replaceText = 'Hello, world! Hello';
  const newReplaceText = replaceText.replace('Hello', 'Hi');
  const newReplaceAllText = replaceText.replaceAll('Hello', 'Hi');
  console.log(newReplaceText);
  console.log(newReplaceAllText);

  // 4. string.toUpperCase()
  const upperCaseText = text.toUpperCase();
  console.log(upperCaseText);

  //5. string.toLowerCase()
  const lowerCaseText = text.toLowerCase();
  console.log(lowerCaseText);

  //6. string.trim() usuń białe znaki na granicach tekstu
  const trimText = '        Hello world    ';
  const newTrimText = trimText.trim();
  console.log(newTrimText);

  // 7. string.indexOf() zwróc indeks pierwszego wystąpienia
  /* const indexOfText = 'Hello, world!';
  const newInteOfText = indexOfText.indexOF('ll');
  console.log(newInteOfText); */

  return <div>Empty values</div>;
}

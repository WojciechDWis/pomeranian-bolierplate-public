export const Exercise = () => {
  // KLASA

  //Klasa to pewnego rodzaju szablon lub wzór do tworzenia obiektów
  //Opisuje Jakie właściwości (pola) i metody będzie miał obiekt utworzony na podstawie klasy.

  //INSTANCJA
  // instancja to konkretny obiekt utworzony na podstawie określonej klasy, która ma swoje własne unikalne wartości pól.

  //OPERATOR new
  //Operator new tworzy nową instancję klasy.
  //Tworzenie instancji za pomoca new inicjuje proces konstrukcji obiektu zgodnie z definicją klasy.

  //THIS - bedzie na rekrutacji
  //Słowo kluczowe this odnosi się do bieżącego obiektu,na którym jest wywoływane,
  //wewnątrz metody this wskazuje instancje klasy na której jest wywołana metoda.

  //METODY STATYCZNE
  //Metody statyczne to metody, które nie operują na instancji klasy, ale są związane z klasą jako całość
  //Wywołuje się je bezpośrednio na klasie, a nie na instacji klasy.

  //POLE STATYCZNE
  //Pole statyczne to pola, które mają wspólne wartości dla wszystkich instancji danej klasy.

  class Car {
    //funkcja car(make, model) {}

    static numberOfCars = 0;

    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
    //metoda niestatyczna
    start() {
      console.log(`${this.make} ${this.model} is starting...`);
    }
    //metoda statyczna
    static getInfo() {
      console.log('This is a car class');
    }
  }

  //INSTANCA klasy Car
  const myToyota = new Car('Toyota', 'Corolla');
  //INSTANCA klasy Car
  const myOtherCar = new Car('Audi', 'A4');

  myToyota.start();
  myOtherCar.start();

  Car.getInfo();
  Car.numberOfCars = 0;

  console.log(Math.PI, Car.numberOfCars);

  //KLASA STATYCZNA
  //Klasa statyczna to klasa, która zawiera tylko metody statyczne i pola statyczne, np. Math

  //OPERATOR instanceof
  //Operator instanceof sprawdza czy dany obiekt jest instacją dnaje klasy.

  //POLIMORFIZM
  //Polimorfizm to zdolność różnych klas do reagowania na te same metody w różny sposób
  //Oznacza to że różne obiekty mogą wykonywać te same operacje, ale w zależności od typu obiektu zachowanie może być inne.

  class AnimalPolimorphism {
    speak() {
      console.log('Animal makes a noise');
    }
  }

  class DogPolimorphism extends AnimalPolimorphism {
    speak() {
      console.log('Dog barks');
    }
  }

  class CatPolimorphism extends AnimalPolimorphism {
    speak() {
      console.log('Cat mewos');
    }
  }

  const animals = [new DogPolimorphism(), new CatPolimorphism()];
  animals.forEach((animal) => animal.speak());

  //HERMETYZACJA
  //Hermetyzacja odnosi się do kontrolowania dostępu do wenętrznych składników obiektu
  //I umożliwia dostępu tylko do tych, które powinny być publicznie dostępne.

  // -----------------------------------------------------------------------------
  //          PRIVATE VARIABLE
  // -----------------------------------------------------------------------------

  //          Właściwości i metody, do których dostęp jest ograniczony do wewnątrz obiektu, z wykorzystaniem hermetyzacji.

  // -----------------------------------------------------------------------------
  //          PUBLIC VARIABLE
  // -----------------------------------------------------------------------------

  //          Właściwości i metody, do których dostęp jest ograniczony do wewnątrz obiektu, z wykorzystaniem hermetyzacji.

  class ClassWithPrivate {
    #accessKey = 0;
    publicFieldWithInitialize = 9;
    #privateFieldWithInitialize = 42;

    #privateMethod() {
      console.log("I'm private method");
    }

    returnPrivateField() {
      //funkcja haszująca
      const hash = this.#accessKey + 1;
      return hash;
    }
  }

  const instanceOfClassWithPrivate = new ClassWithPrivate();
  console.log(instanceOfClassWithPrivate.returnPrivateField());
  console.log(instanceOfClassWithPrivate.publicFieldWithInitialize);

  //DZIEDZICZENIE
  //Dziedziczenie to mechanizm, w którym jedna klasa może odziedziczyć własciwości i metody z innej klasy.
  //Dzięki temu możemy tworzyć hierarchię klas, gdzie klasa podrzędna dziedziczy zachowanie klasy nadrzędnej.

  class Animal {
    constructor(name) {
      this.name = name;
    }

    getName() {
      return this.name;
    }
  }

  class Dog extends Animal {
    bark() {
      return 'woof';
    }
    speak() {
      console.log(`${this.getName()} barks ${this.bark()}`);
    }
  }

  const dog = new Dog('Reksio');
  dog.speak();

  //HERMETYZACJA A DZIEDZICZENIE
  //Hermetyzacja i dziedziczenie są ze sobą powiązane.

  class AnimalInheritance {
    speak() {
      console.log('Animal makes a noise');
    }
  }

  class DogInheritance extends AnimalInheritance {
    speak() {
      console.log('Dog barks');
    }
  }

  const dogInheritance = new DogInheritance();
  dogInheritance.speak();

  class SpeakerComposition {
    constructor(sound) {
      this.sound = sound;
    }

    makeSound() {
      console.log(this.sound);
    }
  }

  class DogComposition {
    constructor() {
      this.speaker = new SpeakerComposition('woof');
    }

    bark() {
      this.speaker.makeSound();
    }
  }

  const dogComposition = new DogComposition();
  dogComposition.bark();

  // Zalety dziedziczenia:
  //    Reużywalność: Możemy dziedziczyć istniejący kod i zachowanie.
  //    Hierarchia: Pomaga tworzyć struktury klas na podstawie wspólnych cech.

  // Zalety kompozycji:
  //    Modularność: Komponenty są niezależne, co ułatwia zarządzanie i utrzymanie.
  //    Elastyczność: Możemy zmieniać i modyfikować komponenty bez wpływu na inne.
  //    Unikanie pułapek dziedziczenia: Kompozycja unika problemów związanych z głębokimi hierarchiami.

  // Kiedy używać dziedziczenia, a kiedy kompozycji
  //    Dziedziczenie: Wtedy, gdy klasy naprawdę mają relację typu nadrzędny-podrzędny, a podrzędna klasa może dziedziczyć i rozszerzać zachowanie klasy nadrzędnej.
  //    Kompozycja: Wtedy, gdy chcemy tworzyć obiekty poprzez łączenie komponentów i uniknąć związanych z dziedziczeniem pułapek.

  // Pułapki i ograniczenia związane z kompozycją:
  //    Wiele instancji: Jeśli mamy wiele instancji obiektów komponujących te same komponenty, może to prowadzić do nadmiaru pamięci.
  //    Trudniejsze śledzenie: W porównaniu do hierarchii dziedziczenia, trudniej może być zrozumieć, które komponenty są składane w obiekcie.

  // -----------------------------------------------------------------------------
  // LINKI POMOCNICZE:
  // https://javascript.info/classes

  // https://khalilstemmler.com/articles/object-oriented/programming/4-principles/
  // https://www.techtarget.com/searchapparchitecture/definition/object-oriented-programming-OOP
  // https://www.toptal.com/javascript/functional-programming-javascript
  // https://javascript.plainenglish.io/what-are-javascript-programming-paradigms-3ef0f576dfdb
  // https://www.w3schools.com/jsref/jsref_classes.asp
  // https://www.geeksforgeeks.org/polymorphism-in-javascript/
  // https://zacznijprogramowac.net/szybki-kurs-javascript/dziedziczenie-w-javascript/
  // https://hackernoon.com/inheritance-vs-composition-in-javascript
  // https://kursjs.pl/kurs/obiekty/obiekty-enkapsulacja
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes?retiredLocale=pl
  // https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components/

  //   ZADANIE 1.
  //   Stworzymy klasę komputera z poniższymi właściwościami:
  //         prywatną zmienną (ulubione słowo) - faveWord = "I compute!"
  //         prywatną metodę - add(x: number, y: number) - która zwraca sumę x i y
  //         publiczną metodę compute - która przyjmuje 3 argumenty: 2 liczby, które chcemy do siebie dodać, oraz
  //         argument typu number, który pomnoży wynik dodawania dwóch poprzednich argumentów ( wewnątrz użyć metody add )
  //         publiczną metodę introduce() - która wyprintuje ulubione słowo
  //         poużywaj metod mini komputera

  //   ZADANIE 2.
  //   stwórz klasę Person posiadającą metodę, która wyświetli nam komunikat
  //            introduce() => "I am a Person"
  //        następnie stwórz dwie podklasy Builder i Doctor, dziedziczące metodę i wyświetlające odpowiednio komunikat
  //            introduce() => "I am a Person", "I am also a Doctor"
  //            introduce() => "I am a Person", "I am also a Builder"
  //        następnie stwórz podklasę Doctor: Pediatrician - metoda ma wyświetlić jedynie :
  //        introduce() => "I'm a Pediatrician"

  class Computer {
    #faveword = 'I compute!';
    #x = 10;
    #y = 20;
    #Addition() {
      const add = this.#x + this.#y;
      return add;
    }
    compute() {
      const a = 10;
      const b = 5;
      const sum = a + b;
      const number = sum * this.#Addition();
      return number;
    }
    introduce() {
      console.log(this.#faveword);
      console.log(this.compute());
    }
  }
  const instanceofComputer = new Computer();
  instanceofComputer.introduce();

  class Person {
    introduce() {
      return 'I am a Person';
    }
  }

  class Doctor extends Person {
    introduce1() {
      console.log(`${this.introduce()}, I am also a Doctor`);
    }
  }

  class Builder extends Person {
    introduce2() {
      console.log(`${this.introduce()}, I am also a Builder`);
    }
  }

  class Pediatrician extends Person {
    introduce3() {
      console.log("I'm a Pediatrician");
    }
  }
  const personComposition = new Doctor();
  const personComposition2 = new Builder();
  const personComposition3 = new Pediatrician();
  personComposition.introduce1();
  personComposition2.introduce2();
  personComposition3.introduce3();

  //   ZADANIE 3.
  //   Tworzymy samochód w podejściu kompozycyjnym!
  //     + klasa Engine
  //     + start() => "engine is turned on
  //     + stop() => "engine is turned off
  //      klasa Klaxon
  //      beep() => "BEEEP!"
  //      klasa SteeringWheel
  //      turn(direction: string) => "Skręcamy w lewo/prawo
  //      klasa GPS
  //      navigate() => wyprintuje nam losowo: "turn right", "turn left", "drive straight"
  //      stwórz klasę Car, która posiada metody: start, stop, beep, turn, navigate
  //      w klasie Car powywołuj metody poszczególnych części auta

  // -----------------------------------------------------------------------------
  class Engine {
    start() {
      return 'engine is turned on';
    }
    stop() {
      return 'engine is turned off';
    }
  }

  class Klaxon {
    beep() {
      return 'BEEEP';
    }
  }

  class SteeringWheel {
    turn(direction) {
      return `Turning ${direction}`;
    }
  }

  class GPS {
    navigate() {
      const directions = ['turn right', 'turn left', 'drive straight'];
      const randomIndex = Math.floor(Math.random() * directions.length);

      return directions[randomIndex];
    }
  }

  class CarExercise {
    constructor() {
      this.engine = new Engine();
      this.klaxon = new Klaxon();
      this.steeringWheel = new SteeringWheel();
      this.gps = new GPS();
    }

    start() {
      return this.engine.start();
    }

    stop() {
      return this.engine.stop();
    }

    beep() {
      return this.klaxon.beep();
    }

    navigate() {
      return this.gps.navigate();
    }

    turn(direction) {
      return this.steeringWheel.turn(direction);
    }
  }

  // -----------------------------------------------------------------------------
  const myCar = new CarExercise();
  console.log(myCar.start());
  console.log(myCar.stop());
  console.log(myCar.beep());
  console.log(myCar.navigate());
  console.log(myCar.navigate());
  console.log(myCar.navigate());
  console.log(myCar.turn('left'));
  console.log(myCar.turn('right'));
  // -----------------------------------------------------------------------------

  /*Zadanie 2: Tworzenie katalogu filmów

Stwórz klasy Movie i MovieCatalog.
Klasa Movie powinna zawierać informacje o tytule, reżyserze i roku produkcji filmu.
Klasa MovieCatalog powinna zawierać metodę dodawania filmów do katalogu oraz metodę wyświetlania wszystkich filmów w katalogu.

    Zadanie 3: System zamówień w restauracji

Stwórz klasy MenuItem i Order.
Klasa MenuItem powinna reprezentować danie w menu, zawierać nazwę, opis i cenę.
Klasa Order powinna umożliwiać tworzenie zamówienia przez dodawanie dań, obliczanie łącznej ceny zamówienia i wyświetlanie zestawienia zamówienia.*/
  return <div>OOP</div>;
};

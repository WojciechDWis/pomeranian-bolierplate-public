import './styles.css';

export const NumbersAndBoolean = () => {
  function canDrive(age, hasDriverLicense, hasCar) {
    age = 18;
    hasDriverLicense = true;
    hasCar = true;

    if (age < 18) {
      return 'You are too young to drive';
    }
    if (!hasCar) {
      return 'You can drive a rental car.';
    }
    if (!hasDriverLicense) {
      return "You can't drive without a driver's license.";
    }
    return 'You can drive your car';
  }
  console.log(canDrive());

  function isStringShort(string) {
    string = 'abcdefghijk';
    if (string.length < 10) {
      return true;
    }
    return false;
  }
  console.log(isStringShort());

  function numberToText(number) {
    const oceny = [
      'Niedostateczny',
      'Dostateczny',
      'Dopuszczający',
      'Dobry',
      'Bardzo Dobry',
      'Celujący',
    ];
    if (number < 1 || number > 6) {
      return 'incorrect';
    }
    return oceny[number - 1];
  }
  console.log(numberToText(2));

  console.log(Math.max(4, 7));

  function getRandomNumber() {
    const random1 = Math.random();
  }

  function floats(x, y) {
    const sum = x + y;
  }
  console.log(floats());
};

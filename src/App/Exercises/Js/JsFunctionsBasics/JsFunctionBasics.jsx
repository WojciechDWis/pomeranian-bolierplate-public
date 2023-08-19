import './styles.css';

function multiplyBy(factor = 1, ...rest) {
  return rest.map((number) => number * factor).join(',');
}

function tags(...tags) {
  return tags.join(',');
}

export function JsFunctionBasics(obj) {
  return (
    <>
      <div>{multiplyBy(obj.factor, obj.x, 3, 4, 5)}</div>
      <div>{tags(3, 'tags', 8, 'js', JSON.stringify({ foo: 'bar' }))}</div>
    </>
  );
}

export function Exercise() {
  const props = {
    factor: 5,
    x: 10,
  };

  return (
    <>
      <JsFunctionBasics factor={5} x={10} {...props} />
    </>
  );
}

//funkcja nazwana
function f1() {}

const x = f1();

//funkcja anonimowa

//funkcja strzałkowa

const f2 = () => {
  return { foo: 'bar' };
};
const f3 = () => ({ foo: 'bar' });

f1(function () {});
f2(() => {});

const multiplyBy2 = (number) => {
  if (number === undefined) {
    return 'brak argumentu';
  }
  return number * 2;
};

const array = [1, 2, 3];
array.map(multiplyBy2);

multiplyBy2(1, 2, 3, 4, 5, 6, 7);
multiplyBy2();

function funkcjaZewnętrzna() {
  function funkcjaWewnętrzna() {
    //debugger;
    console.log('To jest funkcja wewnętrzna');
  }
  return funkcjaWewnętrzna;
}

funkcjaZewnętrzna()();

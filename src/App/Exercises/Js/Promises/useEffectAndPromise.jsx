import { useEffect, useState } from 'react';

//Zadanie 1
//    dodajmy diva na napis
//    napisać useEffect'a oraz stworzyć Promise'a, który zostanie spełniony i wyświetli nam "I'm resolved :)"
//    użyjmy useState do zapisania odpowiedzi z promisa.

const useEffectAndPromise = () => {
  const [message, setMessage] = useState('');

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("I'm resolved :)");
      }, 1000);
    });
  };

  useEffect(() => {
    fetchData().then((response) => setMessage(response));
  }, []);
  return <div>Zadanie 1</div>;
};

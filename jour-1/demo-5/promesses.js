function myPromiseSumFunction(sum1, sum2) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (sum1 + sum2 < 0) {
        return rej("Erreur, le résultat ne peut être inférieur à 0");
      }

      res(sum1 + sum2);
    }, 1000);
  });
}

myPromiseSumFunction(1, 2)
  .then((result) => {
    console.log(`Le résultat de l'addition 1 : `, result);
    return result;
  })
  .then((result) => {
    console.log("Multiplions le résultat par 10");
    return result * 10;
  })
  .catch((e) => {
    console.log("Une erreur est survenue", e);
  });

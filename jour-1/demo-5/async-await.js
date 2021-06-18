function sleep(ms) {
  return new Promise((res, rej) => setTimeout(res, ms));
}

async function myPromiseSumFunction(sum1, sum2) {
  await sleep(2000);

  if (sum1 + sum2 < 0) {
    throw "Erreur, le résultat ne peut être inférieur à 0";
  }

  return sum1 + sum2;
}

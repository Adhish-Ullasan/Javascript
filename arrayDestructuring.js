let latin,europe,other;

latin = ['Columbia','chile']
europe = ['luxemeborg','norway']

latin.forEach((latincountries) => console.log(latincountries))
europe.forEach((europeancountries) => console.log(europeancountries));

// console.log(latin);
// console.log(europe);

[latin,europe,...other] = ['ecudor','holland','korea','nepal','egypt','india','ghana']

console.log(latin)
console.log(europe)
console.log(other);

other.forEach((countries) => console.log(countries))
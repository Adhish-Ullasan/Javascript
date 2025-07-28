let latin,europe,other;

[latin, europe] = ['Columbia','Luxemoborg'];

console.log(latin);

console.log(europe);

[latin,europe,...other] = ['ecudor','holland','korea','nepal','egypt','india','ghana']

console.log(latin)
console.log(europe)
console.log(other);

other.forEach((countries) => console.log(countries))
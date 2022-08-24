const getInitialCity = (departureMap, destinationMap) => {
  const departureCities = Array.from(departureMap.keys());

  for (let i = 0; i < departureCities.length; i++) {
    if (!destinationMap.has(departureCities[i])) {
      return departureCities[i];
    }
  }
}

const findPath = (list) => {
  const departureMap = new Map();
  const destinationMap = new Map();

  list.forEach(({ from, to }) => {
    departureMap.set(from, to);
    destinationMap.set(to, from);
  });

  const result = [];
  let startCity = getInitialCity(departureMap, destinationMap);
  result.push(startCity);

  while (true) {
    const nextCity = departureMap.get(startCity);

    if (!nextCity) {
      break;
    }

    result.push(nextCity);
    startCity = nextCity;
  }

  return result;
}

console.log(findPath([
  { from: 'Miami', to: 'Seattle' },
  { from: 'Moscow', to: 'Istanbul' },
  { from: 'Seattle', to: 'London' },
  { from: 'NY', to: 'Moscow' },
  { from: 'Istanbul', to: 'Monaco' },
  { from: 'London', to: 'NY' },
]));

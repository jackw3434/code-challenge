const fillArray = (rawData, currentWeek) => {
  rawData.sort((a, b) => a.week - b.week);    
  for (let index = 0; index < currentWeek; index++) {
    if(rawData.every(e => e.week != index + 1) ){
      rawData.splice(index, 0, { week: index, hours: 0 })
    }  
    rawData[index] = rawData[index].hours
  }
  return rawData;
};

// Example simple test case
const source = [
  { week: 1, hours: 17 },
  { week: 3, hours: 44 },
  { week: 2, hours: 7 },
];

const result = fillArray(source, 3);
console.group('Set1');
console.log('result ==>', result);
console.log('target ==>', [17, 7, 44]);
console.groupEnd();

// Example more advanced test case
const source1 = [
  { week: 5, hours: 17 },
  { week: 3, hours: 44 },
  { week: 2, hours: 7 },
];

const result1 = fillArray(source1, 8);
console.group('Set2');
console.log('result ==>', result1);
console.log('target ==>', [0, 7, 44, 0, 17, 0, 0, 0]);
console.groupEnd();

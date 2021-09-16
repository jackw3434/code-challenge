const deepCopy = sourceObj => {
  let copy;

  if (typeof sourceObj === 'function' ||
    typeof sourceObj === 'undefined' ||
    typeof sourceObj === 'symbol' ||
    sourceObj === null) {
    copy = sourceObj;
    return copy;
  }
  // handle other types    
  if (typeof sourceObj === 'number' ||
    typeof sourceObj === 'string' ||
    typeof sourceObj === 'boolean') {
    copy = JSON.parse(JSON.stringify(sourceObj));
    return copy;
  }

  // handle dates
  if (sourceObj instanceof Date) {
    copy = new Date()
    copy.setTime(sourceObj.getTime())
    return copy
  }

  // handle regex
  if (sourceObj instanceof RegExp) {
    copy = new RegExp(sourceObj);
    return copy;
  }

  // handle array
  if (sourceObj instanceof Array) {
    copy = []
    for (var i = 0, len = sourceObj.length; i < len; i++) {
      copy[i] = deepCopy(sourceObj[i])
    }
    return copy
  }

  // handle object
  if (sourceObj instanceof Object || typeof sourceObj === 'object') {
    copy = {}
    for (var attr in sourceObj) {
      if (sourceObj.hasOwnProperty(attr)) {
        copy[attr] = deepCopy(sourceObj[attr])
      }
    }
    return copy
  }
}

// Example simple test case
const source = {
  a: 1,
  b: 'string',
  c: false,
};

const target = deepCopy(source);
console.group('Set1');
console.log('source ==>', source);
console.log('target ==>', target);
console.groupEnd();

// Example more advanced test case
const source1 = {
  a: [1, 2, 3, 4],
  b: {
    c: 1,
    d: 2,
    e: new Date(),
    f: () => console.log('Hello World'),
    g: {
      h: 'hi'
    }
  },
  i: 'string',
  j: true,
  k: false,
  l: 0,
  m: undefined,
  n: null,
  o: '',
  p: Symbol('foo'),
  q: new RegExp("^([a-z0-9]{5,})$")
}
const target1 = deepCopy(source1);
console.group('Set2');
console.log('source ==>', source1);
console.log('target ===>', target1);
console.groupEnd();

// Feel free to show off different style test cases as you see fit

/* Loops + Functions + Switch Trainer — STUDENT */
'use strict';

const $ = s => document.querySelector(s);
let numbers = [];

// 1) Parse and load numbers (function + array methods ok)
function loadNumbers(input) {
  // Parse comma-separated integers into an array of numbers.
  return input.split(',')
    .map(x => x.trim())
    .filter(x => x.length)
    .map(x => Number.parseInt(x, 10))
    .filter(n => Number.isFinite(n));
}

// 2) Run operation using switch
function runOperation(arr, op) {
  switch (op) {
    case 'sum': {
      let s = 0;
      for (let i = 0; i < arr.length; i++) s += arr[i];
      return s;
    }
    case 'product': {
      let p = 1;
      for (let i = 0; i < arr.length; i++) p *= arr[i];
      // If array empty, product is usually considered 1
      return arr.length ? p : 0;
    }
    case 'max': {
      if (!arr.length) return 'N/A';
      let m = arr[0];
      for (let i = 1; i < arr.length; i++) if (arr[i] > m) m = arr[i];
      return m;
    }
    case 'count-even': {
      let c = 0;
      for (let i = 0; i < arr.length; i++) if (arr[i] % 2 === 0) c++;
      return c;
    }
    default: return 'Unknown op';
  }
}

// 3) Even/Odd summary (loops + function)
function summarizeEvenOdd(arr) {
  let even = 0, odd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) even++;
    else odd++;
  }
  return { even, odd };
}

// UI wiring
$('#btn-load').addEventListener('click', () => {
  numbers = loadNumbers($('#nums').value);
  $('#loaded').textContent = JSON.stringify(numbers);
});

$('#btn-run').addEventListener('click', () => {
  const op = $('#op').value;
  $('#result').textContent = String(runOperation(numbers, op));
});

$('#btn-summary').addEventListener('click', () => {
  const { even, odd } = summarizeEvenOdd(numbers);
  $('#even-count').textContent = String(even);
  $('#odd-count').textContent = String(odd);
});

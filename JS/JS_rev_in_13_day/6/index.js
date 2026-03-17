// not define or undefine in js 
console.log(s);
var s='ajay';
console.log(s); 
// console.log(f); // not define 
var s=45;
console.log(s);

// Debounce and
// const input = document.getElementById('firstname');
// let timeoutId;

// let handler = async (e) => {
//     const query = e.target.value;
//     if (query.length === 0) return; 
//     try {
//         const response = await fetch(`https://dummyjson.com/products/search?q=${query}`); // Use a valid URL
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         console.log(data);
//         console.log('event', query);
//     } catch (error) {
//         console.error('Fetch error:', error);
//     }
// };

// const debounce = (fn, delay) => {
//     return function(e) {
//         if (timeoutId) {
//             clearTimeout(timeoutId);
//         }
//         timeoutId = setTimeout(() => {
//             fn(e);
//         }, delay);
//     };
// };

// // Apply debounce with 1 second delay
// input.addEventListener('input', debounce(handler, 1000));
//throtting



// // import { createApp } from 'vue'
// // import App from './App.vue'

// // createApp(App).mount('#app')

// // function sumTwoSmallestNumbers(numbers) {  
// //     const firstMin = Math.min(...numbers);
// //     numbers.splice(numbers.indexOf(firstMin),1)
// //     return firstMin +  Math.min(...numbers);
// // }

// // best solution will be 
// // function sumTwoSmallestNumbers(numbers) {  
// //     numbers.sort(function(a,b) {
// //         return a - b;
// //     });
// //     console.log(numbers);
// //     return numbers[0] + numbers[1];
// // }

// // console.log(sumTwoSmallestNumbers([19, 5, 42, 1, 77]));

// function solution(number){
//     let sum = 0;

//     for(let i = number - 1; i > 0; i--) {
//         if(i % 3 === 0 && i % 5 === 0) {
//             sum+=i;
//         } else {
//             if(i % 3 === 0) {
//                 sum+=i;
//             } else if(i % 5 === 0) {
//                 sum+=i;
//             }
//         }
//     }
//     return sum;
// }

// console.log(solution(10));

// function disemvowel(str) {
//     return str.replace(/[aouie]/ig, "");
// }

//   console.log(disemvowel('HEllo world'));

// Longest word from given sentence

function longestWord(str) {
	let words = str.split(" ");
	let longestWord = "";
	for(let word of words) {
		if(word.length > longestWord.length) longestWord = word;
	}
	return longestWord;
}

console.log(longestWord("Hello my name is Abdulaziz"))
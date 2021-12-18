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

// function longestWord(str) {
// 	let words = str.split(" ");
// 	let longestWord = "";
// 	for(let word of words) {
// 		if(word.length > longestWord.length) longestWord = word;
// 	}
// 	return longestWord;
// }

// console.log(longestWord("Hello my name is Abdulaziz"))

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "#####

// return masked string
// function maskify(cc) {
// 	if(cc.length < 5) return cc;
// 	const cct = cc.split("");
// 	for (let i = 0; i < cct.length-4; i++) {
// 		cct[i]="#";
// 	}
// 	return cct.join("");
// }
// console.log(maskify("asbasdasdh"));

// function solve(a){
//     //..
// 	a = a.split("");
//  console.log( a.findIndex((i) => i === '*'));;



// }
// solve("asd*")

function accum(s) {
	// your code
	let newArr = "", arr = s.split("");
	for (let i = 0; i < s.length; i++) {
		for (let j = 0; j < i + 1; j++) {
			if (j === 0) newArr += arr[i].toUpperCase();
			else newArr += arr[i];
		}
		if(i != s.length-1) newArr+="-";
	}
	console.log(newArr);
}

accum('abcdefg	 ')
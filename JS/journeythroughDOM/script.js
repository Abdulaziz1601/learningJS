// console.log(document.head); //head only
// console.log(document.documentElement);// HTML tag
// console.log(document.body.childNodes); // Access all Child nodes of given elem
// console.log(document.body.firstChild); //access first child Node
// console.log(document.body.firstElementChild); //access first child element

// console.log(document.body.lastChild); //access last child Node
// console.log(document.body.lastElementChild); //access last child  element
 
// console.log(document.querySelector("#current").parentNode); //parent of btn 
// console.log(document.querySelector("#current").parentElement);

// console.log(document.querySelector("#current").parentNode.parentNode); //grandParent of btn 

// console.log(document.querySelector('[data-current="3"]').nextSibling); // Next line character
// console.log(document.querySelector('[data-current="3"]').previousSibling); // Next line character

// We do not have property to access all child elements, so we can make it up, by loop
// for (let node of document.body.childNodes) {
//     if (node.nodeName == "#text" ) {
//         continue;
//     } else {
//         console.log(node);
//     }
// }


"use strict";
// tiny slider is imported from node_modules
import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";
 
//setting up slides
tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true
});

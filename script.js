// The global Build to deply my Vue App
const { createApp } = Vue

createApp({
    data() {
        // Return of the variable
        return {
            message: 'Hello world of Vue!'
        }
    }
}).mount('#app')


// Inport CDN Via ES6
// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

// createApp({
//   data() {
//     return {
//       message: 'Hello Vue!'
//     }
//   }
// }).mount('#app')

// Remember that the script in the DOM will be positioned 
// at the top, and have to be a type attribute module
// <script type="module">
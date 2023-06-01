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
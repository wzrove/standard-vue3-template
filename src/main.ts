import App from './App.vue';
import './index.css';
import router from './router';

const a = 1;
console.log(a, '---');
createApp(App).use(router).mount('#app');

import './assets/main.css'

import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import App from './App.vue'
import CounterView from './views/counter_view.vue'
import TesteView from './views/teste_view.vue'

const routes = [
    {
        path: '/',
        component: CounterView,
    },
    {
        path: '/teste',
        component: TesteView,
    }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes
});

const app = createApp(App)

app.use(router)
app.mount('#app')

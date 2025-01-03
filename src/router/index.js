import { createMemoryHistory, createRouter } from 'vue-router'
import CounterView from '@/views/counter_view.vue'

const routes = [
    {
        name: 'counter',
        path: '/',
        component: CounterView,
    },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes
});

export default router

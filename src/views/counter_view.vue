<script>
import CounterComponent from '@/components/counter.vue'
import ButtonComponent from '@/components/button.vue'
import useCounterStore from '@/stores/vue_counter_store'
// import useCounterStore from '@/stores/pinia_counter_store'


export default {
    components: {
        CounterComponent,
        ButtonComponent
    },
    setup() {
        const store = useCounterStore()

        return {
            CounterComponent,
            ButtonComponent,
            store,
        }
    }
}
</script>

<template>
    <div class="container-fluid justify-center align-center">
        <div class="col-xs">
            <div class="row justify-center align-center">
                <CounterComponent :count="store.count" />
                <CounterComponent :count="store.doubleCount" />
            </div>
            <div class="row justify-center align-center">
                <ButtonComponent @click="store.increment()" label="Incrementar" />
                <ButtonComponent @click="store.decrement()" label="Decrementar" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-fluid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    >div {
        background-color: #fafafa;
        color: #1f1f1f;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3), 0 0 5px rgba(0, 0, 0, 0.2);
        padding: 2rem;
        border-radius: 0.5rem;

        >div {
            gap: 1rem;
        }
    }
}

.counter-view,
.user-view {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex-grow: 1;
    align-content: center;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-color: #fafafa;
    color: #1f1f1f;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3), 0 0 5px rgba(0, 0, 0, 0.2);
    flex-basis: 85%;
    max-width: 85%;
}

h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
}

.counters {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin: 1rem;
}

.buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
}
</style>

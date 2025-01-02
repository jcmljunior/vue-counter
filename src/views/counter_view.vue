<script>
import CounterComponent from '../components/counter.vue'
import ButtonComponent from '../components/button.vue'
import { store } from '../stores/counter_store.js'

export default {
    components: {
        CounterComponent,
        ButtonComponent
    },
    setup() {
        return {
            CounterComponent,
            ButtonComponent,
            store,
        }
    }
}
</script>

<template>
    <div class="counter-view">
        <CounterComponent :count="store.count" />
        <div class="buttons">
            <ButtonComponent @click="store.increment()" label="Incrementar" />
            <ButtonComponent @click="store.decrement()" label="Decrementar" />
        </div>
    </div>
</template>

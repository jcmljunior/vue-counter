import { state } from '@/states/counter_state'
import { reactive } from 'vue'

export const store = reactive({
    count: state.count,

    increment() {
        this.count++
    },

    decrement() {
        this.count--
    }
})

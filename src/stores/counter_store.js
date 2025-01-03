import { state } from '@/states/counter_state'
import { reactive } from 'vue'

export const store = reactive({
    count: state.count,

    increment() {
        if (this.count >= state.max) {
            return window.alert("Não é possivel incrementar mais.");
        }

        this.count++
    },

    decrement() {
        if (this.count <= state.min) {
            return window.alert("Não é possivel decrementar mais.");
        }

        this.count--
    }
})

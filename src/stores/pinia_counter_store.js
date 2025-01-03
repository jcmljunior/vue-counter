import { defineStore } from "pinia";

const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
        min: 0,
        max: 10
    }),

    actions: {
        increment() {
            if (this.count >= this.max) {
                return
            }

            this.count++
        },
        decrement() {
            if (this.count <= this.min) {
                return
            }

            this.count--
        }
    },

    getters: {
        doubleCount: (state) => state.count * 2
    }
})

export default useCounterStore

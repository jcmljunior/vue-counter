import { computed, reactive } from "vue"

const useCounterStore = () => {
    const MIN_COUNT = 0
    const MAX_COUNT = 10

    return reactive({
        count: 0,

        get doubleCount() {
            return computed(() => this.count * 2)
        },

        increment() {
            if (this.count >= MAX_COUNT) {
                return
            }

            this.count++
        },

        decrement() {
            if (this.count <= MIN_COUNT) {
                return
            }

            this.count--
        },
    })
}

export default useCounterStore

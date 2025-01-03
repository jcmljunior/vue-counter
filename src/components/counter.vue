<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        count: {
            type: Number,
            required: true,
        },
    },
});

</script>
<template>
    <h1>{{ count }}</h1>
</template>

<style scoped>
h1 {
    background-color: #ebebeb;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: 1rem 2rem;
}
</style>

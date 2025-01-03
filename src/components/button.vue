<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        label: {
            type: String,
            required: true,
        },
    },
});
</script>

<template>
    <button class="button">{{ label }}</button>
</template>

<style scoped>
.button {
    background-color: #333;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: none;
    font-size: 1.2rem;
    transition: background-color 0.3s ease;
    font-family: var(--font-body);

    &:hover {
        background-color: #444;
        cursor: pointer;
    }
}
</style>

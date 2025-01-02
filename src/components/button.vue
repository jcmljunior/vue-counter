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
    <button>{{ label }}</button>
</template>

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

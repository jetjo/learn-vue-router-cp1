<template>
    <div>
i am default!
<br>
{{id}}
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const { id } = defineProps({
    id: {
        type: String
    }
});
</script>

<style lang="scss" scoped>

</style>
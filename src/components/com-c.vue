<template>
    <div>
    com-c：
{{param}}
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const param = computed(() => route.params.id);
</script>

<style lang="scss" scoped>

</style>
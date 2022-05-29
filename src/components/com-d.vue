<template>
    <div>com-d：
{{param}}
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const param = computed(() => route.params.name);
</script>

<style lang="scss" scoped>

</style>
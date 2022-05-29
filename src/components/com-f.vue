<template>
    <div>
com-f:{{JSON.stringify(param)}}
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const param = computed(() => route.params.chapters);
</script>

<style lang="scss" scoped>

</style>
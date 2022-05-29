<template>
    <div>
NotFound
<div>{{params}}</div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

import { computed } from 'vue';

const route = useRoute();

const params = computed(() => route.params);

</script>

<style lang="scss" scoped>

</style>
<template>
<div>
com-g/xxx:<br/>
{{param}}<br/>
jjjjjjj
</div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const param = computed(() => JSON.stringify(route.params));

</script>

<style lang="scss" scoped>

</style>
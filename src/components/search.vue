<template>
    <div>
i`m search
<br>
{{attrs}}
    </div>
</template>

<script setup>
import {onUnmounted, onActivated, useAttrs, onErrorCaptured } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
import { defineProps } from 'vue';

const props = defineProps({
    query: {
        type: String
    }
});

const attrs = useAttrs();

onBeforeRouteUpdate((to, from) => {
    console.log(to, from);
});

onUnmounted(() => {
    console.warn('search unmounted!!!')
});

onActivated(() => {
    console.warn('search onactive!!!');
});

onErrorCaptured((e) => {
    console.error(e, 'catcher!!!')
});
</script>

<style lang="scss" scoped>

</style>
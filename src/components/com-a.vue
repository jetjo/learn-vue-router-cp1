<template>
    <div>
com-a
<div>
{{params}}
<input type="button" @click="directPath" value="directPath"/>
<input type="button" @click="gotoByNameParam" value="gotoByNameParam"/>
</div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';
import { onActivated, onDeactivated, onMounted, onUnmounted } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';

const route = useRoute();

const params = computed(() => route.params);

onActivated(() => {
    console.log('com-a active')
});

onDeactivated(() => {
    console.log('i deactivated');
});

onMounted(() => {
    console.log('com-a mounted!!!');
});

onUnmounted(() => {
    console.log('com-a unmounted!!!');
});

onBeforeRouteUpdate((to, from) => {
console.log(to, from);
});

const router = useRouter();

function directPath() {
    router.push('/cp2/xx');
}

function gotoByNameParam() {
    router.push({name: 'cp2', params: {userId: 'yyyyyy'}});
}

</script>

<style lang="scss" scoped>

</style>

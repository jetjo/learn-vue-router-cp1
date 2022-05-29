<template>
    <div>
com-g:{{param}}<br/>
ggggggg
<router-view>
</router-view>
<input type="button" @click="goToxxx" value="goToxxx"/>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const param = computed(() => route.params.userId);

const router = useRouter();

function goToxxx() {
    router.push('xxx');
}
</script>

<style lang="scss" scoped>

</style>
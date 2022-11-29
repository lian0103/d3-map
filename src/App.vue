<script setup>
import { computed, onMounted, ref } from 'vue';
import TaiwanMap from './components/TaiwanMap.vue';
import { useWindowSize } from '@vueuse/core';

const { width, height } = useWindowSize();

const taiwanMapRef = ref();
const current = ref(null);

const isPhoneSize = computed(() => {
    return width.value < 420;
});

const handleCurrent = (data) => {
    current.value = data;
};

const handleClick = () => {
    current.value = null;
    taiwanMapRef.value.reset();
};

window.addEventListener('resize', () => {
    taiwanMapRef.value.render();
});
</script>

<template>
    <div class="navBar"></div>

    <div class="box">
        <TaiwanMap
            ref="taiwanMapRef"
            class="taiwanMap"
            :style="{ height: width }"
            :height="height-100"
            :width="width"
            @change="handleCurrent"
        />
        <div class="info" v-if="!isPhoneSize || current" :style="{ height: `${height - 100}px` }">
            <div class="inner">
                <div class="closeIcon" @click="handleClick"><i class="fas fa-times"></i></div>

                <template v-if="current">
                    <h2>{{ current?.properties.COUNTYNAME }}</h2>
                </template>
                <template v-else>
                    <h2>概況</h2>
                </template>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
$main: #72cbcc;
$bg: #ccc;
$color1: #d4a821;
$color2: #c74c25;
$color3: #197c3f;
$color4: #001a56;
$color5: #151817;

.navBar {
    @apply w-full h-16 shadow-md;
}

.box {
    @apply flex justify-center items-center;
    @apply relative;
    .taiwanMap {
        overflow: hidden;
    }
}

.info {
    width: 400px;
    max-width: 100vw;
    @apply tracking-wider;
    @apply absolute md:relative;
    @apply top-0 right-0;
    background: rgba(212, 168, 33, 0.4);

    .inner {
        @apply relative py-10 px-4;
        .closeIcon {
            z-index: 2;
            @apply w-6 h-6 absolute right-4 top-4 cursor-pointer;
        }
        h2 {
            color: $main;
            font-size: 32px;
            font-weight: bold;
        }
    }
}
</style>

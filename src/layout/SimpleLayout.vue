<template>
    <div class="l-app l-app--noSideBar">
        <l-header></l-header>
        <main class="l-main">
            <slot name="main" />
        </main>
        <c-cookie />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LHeader from '@/layout/Header.vue';
import CCookie from '@/components/Cookie.vue';

@Component({
    components: {
        LHeader,
        CCookie
    },
})
export default class MainLayout extends Vue {
    public name: string = 'main-layout';
}
</script>

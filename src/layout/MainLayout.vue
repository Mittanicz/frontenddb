<template>
    <div class="l-app">
        <l-header></l-header>
        <main class="l-main">
            <slot name="main" />
        </main>
        <aside class="l-sideBarWrapper">
            <slot name="sideBar" />
        </aside>
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
export default class MainLayoutSidebar extends Vue {
    public name: string = 'main-layout-side-bar';
}
</script>

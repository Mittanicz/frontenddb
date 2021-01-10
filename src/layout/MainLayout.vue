<template>
    <div :class="appClasses">
        <l-header></l-header>
        <main class="l-main">
            <slot name="main" />
        </main>
        <aside class="l-sideBarWrapper" v-if="sideBar">
            <slot name="sideBar" />
        </aside>
        <c-cookie />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LHeader from '@/layout/Header.vue';
import CCookie from '@/components/Cookie.vue';

@Component({
    components: {
        LHeader,
        CCookie
    },
})
export default class MainLayout extends Vue {
    @Prop({ type: Boolean }) public sideBar!: boolean;
    public name: string = 'main-layout';

    private get appClasses() {
        return {
            'l-app': true,
            'l-app--noSideBar': !this.sideBar,
        };
    }
}
</script>

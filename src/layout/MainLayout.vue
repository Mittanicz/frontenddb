<template>
    <div class="l-app">
        <l-header></l-header>
        <main class="l-main">
            <slot name="main" />
        </main>
        <aside class="l-sideBarWrapper">
            <slot name="sideBar" />
        </aside>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LHeader from '@/layout/Header.vue';

@Component({
  components: {
    LHeader
  },
})
export default class MainLayout extends Vue {
    public name: string = 'main-layout';
}
</script>

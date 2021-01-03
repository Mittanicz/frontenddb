<template>
    <div class="l-app">
        <l-header></l-header>
        <main class="l-main">
            <slot />
        </main>
        <aside>
          <slot name="modals" />
        </aside>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
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

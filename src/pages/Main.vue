<template>
    <main-layout>
        <div class="c-titleWrapper">
            <h1 class="c-title">
                FrontEnd Database
            </h1>
            <p>
                List of frontend frameworks and libraries.<br>
                Explore numbers of JavaScript, CSS, Icon frameworks and libraries. Plus more...
            </p>
            <c-button block @click="goToList()">
                Browse
            </c-button>
        </div>
    </main-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainLayout from '@/layout/MainLayout.vue';
import CButton from '@/components/Button.vue';
import RoutePath from '@/router/PathEnum';

@Component({
  components: {
    MainLayout,
    CButton
  },
})
export default class Main extends Vue {
    public name: string = 'main';
    private routePath = RoutePath;

    public goToList(){
        this.$router.push({ path: this.routePath.LIST })
    }
}
</script>

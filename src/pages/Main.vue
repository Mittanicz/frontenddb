<template>
    <l-simple-layout :sideBar="false" class="is-hero">
        <template v-slot:main>
            <header class="c-titleHero u-mb-30">
                <img class="c-img" src="@/assets/img/programmer.svg" alt="" />
                <div class="c-titleHero__wrapper">
                    <h1 class="c-titleHero__title">
                        Frontend Database
                    </h1>
                       Welcome to Frontend database. A list of frontend frameworks, components libraries and graphics.<br />
                       <p>Find framework, components libraries that suits your project needs. Find out statistisk, pros and cons of your framework or component libraries.</p>
                      <p>Find out new tools or components that boost your project.
                       If you are looking for some graphics we are listing also icons pack or free graphics websites.</p>
                    <c-button block @click="goToList()">
                        Browse
                    </c-button>
                </div>
            </header>
        </template>
    </l-simple-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LSimpleLayout from '@/layout/SimpleLayout.vue';
import CButton from '@/components/Button.vue';
import RoutePath from '@/router/PathEnum';

@Component({
    components: {
        LSimpleLayout,
        CButton,
    },
})
export default class Main extends Vue {
    public name: string = 'main';
    private routePath: any = RoutePath;

    public goToList(): void {
        this.$router.push({ path: this.routePath.LIST });
    }
}
</script>

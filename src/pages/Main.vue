<template>
    <l-simple-layout :sideBar="false" class="is-hero">
        <template v-slot:main>
            <header class="c-titleHero u-mb-30">
                <img class="c-img" src="@/assets/img/userFlow.svg" alt="" />
                <div class="c-titleHero__wrapper">
                    <h1 class="c-titleHero__title">
                        Frontend Database
                    </h1>
                    <p>
                        List of fontend frameworks and libraries.<br />
                    </p>
                    <c-button block @click="goToList()">
                        Browse
                    </c-button>
                </div>
            </header>
            <section class="l-section">
                <div class="l-section__col">
                    <h2>Frameworks, libraries, packs...</h2>
                    <p>
                        Compare frameworks, libraries to choose the right for your needs.<br />
                        Find Components libraries for fast prototyping or set of new components for yours next big project.
                    </p>
                    <p>
                        Need some preaty graphics? Browse icons pack or websites that offers variety of vector grapgics or other graphics resources.
                    </p>
                </div>
                <div class="l-section__col">
                    <img class="c-img" src="@/assets/img/programmer.svg" alt="" />
                </div>
            </section>
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

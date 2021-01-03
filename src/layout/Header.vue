<template>
    <header class="l-header">
        <nav class="c-nav">
            <ul class="c-nav__list">
                <li class="c-nav__item">
                    <router-link class="c-nav__link" :to="{ name: routeName.MAIN }">
                        Home
                    </router-link>
                </li>
                <li class="c-nav__item">
                    <router-link class="c-nav__link" :to="{ name: routeName.LIST }">
                        List
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RouteName from '@/router/NameEnum'

@Component
export default class Header extends Vue {
    public name: string ='l-header';

    private routeName = RouteName;
}
</script>

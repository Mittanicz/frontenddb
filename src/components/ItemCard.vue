<template>
    <router-link class="c-cardWrapper__item" :to="sanitize(item.name)">
        <div class="c-card">
            <img class="c-card__img" :src="require(`@/assets/img/${item.logo}`)" :alt="item.logo + ' image'" />
            <div class="c-card__body">
                <h1 class="c-card__title">{{ item.displayName }}</h1>
                <div class="u-mb-10">{{ item.shortDesc }}</div>
                <ul class="ul-list ul-list--row" v-if="item.icons">
                    <li class="ul-list__item ul-list__item--pushRight" v-for="(item, index) in item.icons" :key="index">
                        <font-awesome-icon :icon="[translateIconGroup(item), translateIcon(item)]" size="lg" :key="index" />
                    </li>
                </ul>
            </div>
        </div>
    </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import IItem from '@/data/IItem.ts'

@Component
export default class ItemCard extends Vue {
    @Prop({ required: true }) private item!: IItem;

    private translateIcon(icon: string): string {
        switch (icon) {
            case 'css':
                return 'css3-alt';
            case 'js':
                return 'js';
            case 'icons':
                return 'icons';
            case 'framework':
                return 'connectdevelop';
            case 'components':
                return 'cubes';
            case 'testing':
                return 'vial';
            default:
                return 'html5';
        }
    }

    private translateIconGroup(icon: string): string {
        if (icon != 'icons' && icon != 'components' && icon != 'testing') {
            icon = 'fab';
        } else {
            icon = 'fas';
        }
        return icon;
    }

    public sanitize(s: string) {
        return s.replace(/ /g, '-');
    }
}
</script>

<template>
    <l-simple-layout>
        <template v-slot:main>
            <section class="l-grid l-grid--widescreen c-card2">
                <header class="c-banner u-mb-30">
                    <div class="c-banner__img">
                        <img :src="require('@/assets/img/' + item.logo)" :alt="item.logo + ' image'" />
                    </div>
                </header>
                <section class="l-grid l-grid--detail">
                    <div class="detailHeader">
                        <div class="c-title">
                            <h1 class="c-title__title">
                                {{ item.displayName }}
                            </h1>
                        </div>
                        <ul class="ul-list--row u-mb-20" v-if="item.icons">
                            <li class="c-badge" v-for="(item, index) in item.icons" :key="index">
                                <font-awesome-icon
                                    :icon="[translateIconGroup(item), translateIcon(item)]"
                                    size="lg"
                                    :key="index"
                                />
                                {{ item }}
                            </li>
                        </ul>
                        <hr class="u-divider" />
                    </div>
                    <div class="detailContent">
                        <c-info :info="item" v-if="!isDesktop" :isDesktop="isDesktop"> </c-info>
                        <p class="u-mb-30" v-html="item.desc"></p>
                        <template v-if="Object.keys(item.pros).length !== 0">
                            <h2>Pros</h2>
                            <ul class="ul-list">
                                <li class="ul-list__item" v-for="(value, name, index) in item.pros" :key="index">
                                    <div class="u-fw-bold">{{ converCamelCase(name) }}</div>
                                    {{ value }}
                                </li>
                            </ul>
                        </template>
                        <template v-if="Object.keys(item.cons).length !== 0">
                            <h2>Cons</h2>
                            <ul class="ul-list">
                                <li class="ul-list__item" v-for="(value, name, index) in item.cons" :key="'c' + index">
                                    <div class="u-fw-bold">{{ converCamelCase(name) }}</div>
                                    {{ value }}
                                </li>
                            </ul>
                        </template>
                        <div class="l-grid l-grid--col2">
                            <c-button block link :href="item.website" target="_blank">
                                Website
                            </c-button>
                            <c-button
                                block
                                secondary
                                link
                                v-if="item.githubLink"
                                :href="item.githubLink"
                                target="_blank"
                            >
                                Github
                            </c-button>
                        </div>
                    </div>
                    <c-info :info="item" v-if="isDesktop" :isDesktop="isDesktop" class="detailInfo" />
                </section>
            </section>
        </template>
    </l-simple-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIcons, faTh, faCubes } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faJs, faConnectdevelop, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import LSimpleLayout from '@/layout/SimpleLayout.vue';
import CButton from '@/components/Button.vue';
import CInfo from '@/components/Info.vue';
import data from '@/data/data.json';
import IItem from '@/data/IItem';
library.add(faJs, faHtml5, faIcons, faCss3Alt, faTh, faCubes, faConnectdevelop);

@Component({
    components: {
        LSimpleLayout,
        CButton,
        CInfo,
    },
})
export default class Detail extends Vue {
    @Prop({ type: String, required: true }) public stackNameUrl!: string;
    private item: IItem;
    public isDesktop: boolean = false;

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
            default:
                return 'html5';
        }
    }

    private resize(): void {
        let width: number = window.innerWidth;
        if (width >= 768) {
            this.isDesktop = true;
        } else {
            this.isDesktop = false;
        }
    }

    private translateIconGroup(icon: string): string {
        if (icon != 'icons' && icon != 'components') {
            icon = 'fab';
        } else {
            icon = 'fas';
        }
        return icon;
    }

    private converCamelCase(text: string): string {
        text = text.replace(/([A-Z])/g, ' $1');
        text = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        text = text.charAt(1).toUpperCase() + text.slice(2);
        return text;
    }

    public get stackName(): string {
        return decodeURI(this.stackNameUrl).replace(/-/g, ' ');
    }

    public created(): void {
        // @ts-ignore
        this.item = data.find((item) => item.name === this.stackName);
    }

    public mounted(): void {
        this.resize();
        window.addEventListener('resize', this.resize);
    }
}
</script>

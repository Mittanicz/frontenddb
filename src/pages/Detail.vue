<template>
    <main-layout>
        <header class="c-title">
            <h1 class="c-title__title">
                {{ item.name }}
            </h1>
            <img class="c-title__img" :src="require('@/assets/img/'+item.logo)" :alt="item.logo">
        </header>
        <section class="c-cardDetail">
            <div v-if="item.publishDate">
                Publish date: <strong>{{ item.publishDate }}</strong>
            </div>
            <div v-if="item.githubStars">
                Github stars: <strong>{{ item.githubStars }}</strong>
            </div>
            <div class="u-mb-20">Developer: <strong>{{ item.developerName }}</strong></div>
            <ul class="c-cardDetail__badge" v-if="item.icons">
                <li class="c-cardDetail__badgeItem" v-for="(item, index) in item.icons" :key="index">
                    <font-awesome-icon :icon="[translateIconGroup(item), translateIcon(item)]" size="lg" :key="index" />
                    {{ item }}
                </li>
            </ul>
            <p v-html="item.desc"></p>
            <template v-if="Object.keys(item.pros).length !== 0">
                <h2 class="is-left">Pros</h2>
                <ul class="c-cardDetail__list u-text-left" >
                    <li v-for="(value, name , index) in item.pros" :key="index">
                        <div class="u-highLight">{{ converCamelCase(name) }}</div>{{ value }}
                    </li>
                </ul>
            </template>
            <template v-if="Object.keys(item.cons).length !== 0">
                <h2 class="is-left">Cons</h2>
                <ul class="c-cardDetail__list u-text-left" >
                    <li v-for="(value, name , index) in item.cons" :key="'c'+index">
                        <div class="u-highLight">{{ converCamelCase(name) }}</div>{{ value }}
                    </li>
                </ul>
            </template>
            <c-button block link :href="item.website" target="_blank" class="u-mb-30">Website</c-button>
            <c-button block link secondary v-if="item.githubLink" :href="item.githubLink" target="_blank">Github</c-button>
        </section>
    </main-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIcons, faTh, faCubes } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faJs, faConnectdevelop, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import MainLayout from '@/layout/MainLayout.vue';
import CButton from '@/components/Button.vue';
// @ts-ignore
import data from '../data/data';
library.add(faJs, faHtml5, faIcons, faCss3Alt, faTh, faCubes, faConnectdevelop);

@Component({
    components: {
        MainLayout,
        CButton
    },
})

export default class ItemWrapper extends Vue {
    @Prop({ type: String, required: true }) public stackNameUrl!: string;
    private item:object = {};

    private translateIcon(icon: string): string{
        switch(icon){
            case 'css':
                return 'css3-alt';
            case 'js':
                return 'js' 
            case 'icons':
                return 'icons'
            case 'framework':
                return 'connectdevelop'
            case 'components':
                return 'cubes'
            default:
                return "html5";                
        }
    }

    private translateIconGroup(icon: string): string{
        if(icon != 'icons' && icon !="components"){
            icon = 'fab'
        } else {
            icon = 'fas'
        }
        return icon
    }

    private converCamelCase(text:string): string{
        text = text.replace( /([A-Z])/g, " $1" );
        text = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        text = text.charAt(1).toUpperCase() + text.slice(2);
        return text;
    }

    public get stackName(): string {
        return decodeURI(this.stackNameUrl).replace(/-/g, ' ');
    }

    public created(): void {
        // @ts-ignore
        this.item = data.find( fw => fw.name === this.stackName);
    }
}
</script>
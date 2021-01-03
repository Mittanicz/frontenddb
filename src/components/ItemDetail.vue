<template>
    <div class="c-card">
        <img class="c-card__img" :src="require('@/assets/img/'+item.logo)" alt="Card image cap">
        <div class="c-card__body">
            <h1 class="c-card__title">{{ item.displayName }}</h1>
            <ul class="c-iconList" v-if="item.icons">
                <li class="c-iconList__item" v-for="(item, index) in item.icons" :key="index">
                    <font-awesome-icon :icon="[translateIconGroup(item), translateIcon(item)]" size="lg" :key="index" />
                </li>
            </ul>
            <ul class="c-card__tags">
                <li class="c-card__tag" v-for="(group, index) in item.pros" :key="index">{{ group }}</li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ItemCard from './ItemCard.vue';
// @ts-ignore
import data from '../data/data';

@Component({
    components: {
        ItemCard
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

    public get stackName(): string {
        return decodeURI(this.stackNameUrl).replace(/-/g, ' ');
    }

    public created(): void{
        // @ts-ignore
        this.item = data.find( fw => fw.name === this.stackName);
    }
}
</script>
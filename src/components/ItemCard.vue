<template>
    <div class="c-card">
        <img class="c-card__img" :src="require('@/assets/img/'+item.logo)" alt="Card image cap">
        <div class="c-card__body">
            <h1 class="c-card__title">{{ item.displayName }}</h1>
            <div class="u-mb-10">{{ item.shortDesc }}</div>
            <ul class="c-iconList" v-if="item.icons">
                <li class="c-iconList__item" v-for="(item, index) in item.icons" :key="index">
                    <font-awesome-icon :icon="[translateIconGroup(item), translateIcon(item)]" size="lg" :key="index" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ItemCard extends Vue {
    @Prop({ required: true }) private item!: Object;

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
}
</script>



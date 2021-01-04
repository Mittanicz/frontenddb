<template>
    <aside v-show="showSideBar" class="l-sideBar">
        <div class="l-sideBar__curtain" v-if="!isDesktop"></div>
        <div class="l-sideBar__body">
            <div class="l-sideBar__close" v-if="!isDesktop" @click="$emit('click')">
                <img src="@/assets/icons/cross.svg" width="30" alt="" />
            </div>
            <slot />
        </div>
    </aside>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
    @Prop({ type: Boolean }) isDesktop: boolean;
    @Prop({ type: Boolean }) showSideBar: boolean;
    public name: string = 'l-sideBar';
}
</script>

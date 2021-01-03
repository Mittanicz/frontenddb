<template>
    <aside v-show="isShow"
        class="l-sideBar"
    >
        <div class="l-sideBar__curtain"></div>
        <div class="l-sideBar__body">
            <div class="l-sideBar__close" @click="$emit('click')">
                <img src="@/assets/icons/cross.svg" width="30" alt="">
            </div>
            <slot />
        </div>
    </aside>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
    @Prop({ type: Boolean }) isShow: boolean = false;
    public name: string = 'l-sideBar'

}
</script>


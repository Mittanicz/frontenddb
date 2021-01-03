<template>
    <button :class="buttonClasses" @click="click()" v-if="!link">
        <slot />
    </button>
    <a 
        v-else
        :class="buttonClasses" 
        :href="href" 
        :target="target"
    >
        <slot />
    </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
    @Prop({ type: Boolean, default: false }) public link: boolean;
    @Prop({ type: String }) public href!: string;
    @Prop({ type: String }) public target!: string;
    @Prop({ type: Boolean, default: false }) public block: boolean;
    @Prop({ type: Boolean, default: false }) public secondary: boolean;
    public name: string = 'c-button'

    private click(): void{
        this.$emit('click')
    }

    private get buttonClasses(): object{
        return {
            'c-btn': true,
            'c-btn--block': this.block,
            'c-btn--secondary': this.secondary
        }
    }
}
</script>


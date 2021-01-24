<template>
    <label class="c-checkbox">
        <span class="c-checkbox__over">
            <input type="checkbox" class="c-checkbox__input" @change="$emit('input', $event.target.checked)" />
            <span class="c-checkbox__span"></span>
        </span>
        <span class="c-checkbox__text">{{ label }}</span>
    </label>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Checkbox extends Vue {
    @Prop({ type: String }) public label: string;
    
    public name: string = 'c-checkbox';

    public click(): void {
        this.$emit('click');
    }

    public updateValue(value: any): void {
        this.$emit('change', value);
    }
}
</script>

<template>
    <div class="c-formRow">
        <label for="placeholder" class="c-label">{{ label }}</label>
        <input
            type="text"
            class="c-input"
            :name="placeholder"
            :value="value"
            :placeholder="placeholder"
            @input="$emit('input', $event.target.value)"
        />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Input extends Vue {
    @Prop({ type: String }) public label: string;
    @Prop({ type: String }) public placeholder: string;
    @Prop({ type: String }) public value: string;

    public name: string = 'c-input';

    public click(): void {
        this.$emit('click');
    }

    public updateValue(value: any): void {
        this.$emit('change', value);
    }
}
</script>

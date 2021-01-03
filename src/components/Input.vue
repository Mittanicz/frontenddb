<template>
    <div class="c-formRow">
        <label for="" class="c-label">{{ label }}</label>
        <input type="text" class="c-input" :value="value" :placeholder="placeholder" @input="$emit('input', $event.target.value)">
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Checkbox extends Vue {
    @Prop() label: string;
    @Prop() placeholder: string;
    @Prop() value: string;
    public name: string = 'c-input'

    public click(){
        this.$emit('click')
    }

    public updateValue(value: any){
        console.log(value)
        this.$emit('change', value)
    }
}
</script>


<template>
    <div>
    detail {{ item.logo }}
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import data from '@/data/data.json';

@Component({
    components: {

    },
})
export default class Admin extends Vue {
    @Prop({ type: String, required: true }) public stackNameUrl!: string;
    private item;

    public get stackName(): string {
        return decodeURI(this.stackNameUrl).replace(/-/g, ' ');
    }
    public created(): void {
        // @ts-ignore
        this.item = data.find((item) => item.name === this.stackName);
    }
}
</script>

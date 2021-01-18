<template>
    <aside>
        <ul class="ul-list">
            <li class="ul-list__item" v-if="info.publishDate">
                Publish date: <strong>{{ info.publishDate }}</strong>
            </li>
            <li class="ul-list__item" v-if="info.githubStars">
                Github stars: <strong>{{ info.githubStars }}</strong>
            </li>
            <li class="ul-list__item" v-if="info.developerName">
                Developer: <strong>{{ info.developerName }}</strong>
            </li>
            <li class="ul-list__item" v-if="info.githubLink">
                <a :href="info.githubLink" target="_blank">Oficial website</a>
            </li>
            <li class="ul-list__item" v-if="info.githubLink">
                <a :href="info.githubLink" target="_blank">Github</a>
            </li>
        </ul>
    </aside>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Info extends Vue {
    @Prop({ type: Object, required: true }) public info!: object;

    public name: string = 'c-info';
}
</script>

<template>
    <div>
    <table>
        <tr v-for="(item, index) in data" :key="index">
            <td >
                Jmeno: {{ item.displayName }}
            </td>
            <td >
                Vyvojar: {{ item.developerName }}
            </td>
            <td >
                Github stars: {{ item.githubStars }}
            </td>
            <td>
                <router-link class="c-cardWrapper__item" :to="sanitize('admin-'+item.name)">
                    {{ item.name }}
                </router-link>
            </td>
        </tr>
    </table>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import data from '@/data/data.json';

@Component({
    components: {

    },
})
export default class Admin extends Vue {
    public data = data;

    public sanitize(s: string) {
        return s.replace(/ /g, '-');
    }
}
</script>

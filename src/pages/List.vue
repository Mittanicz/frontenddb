<template>
    <main-layout>
        <template v-slot:main>
        <form v-on:submit="getfilteredData()">
            <c-input
                label="search"
                placeholder="Enter key word  ..."
                v-model="search"
                value="search"
                @input="getfilteredData()"
            />
        </form>
        <div class="l-wrapper">
            <c-button class="u-mb-30" v-if="!isDesktop" @click="showSideBar = !showSideBar">
                Filters
            </c-button>
        </div>
        <div class="c-cardWrapper">
            <template v-for="(item, index) in filteredData" >
                <router-link class="c-cardWrapper__item" :to="sanitize(item.name)" :key="index">
                    <item-card :key="index" :item="item"></item-card>
                </router-link>
            </template>
        </div>
        </template>
        <template v-slot:sideBar>
            <l-side-bar :showSideBar="showSideBar" :isDesktop="isDesktop" @click="showSideBar = !showSideBar">
                <h2 class="is-left u-mb-20" :isDesktop="isDesktop">Filters</h2>
                <template v-for="(stack, index) in stacks">
                    <c-checkbox :label="stack.value" :key="index" v-model="stack.checked" @input="getfilteredData()">
                    </c-checkbox>
                </template>
            </l-side-bar>
        </template>
    </main-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faIcons, faTh, faCubes } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faJs, faConnectdevelop, faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import MainLayout from '@/layout/MainLayout.vue';
import ItemCard from '@/components/ItemCard.vue';
import CCheckbox from '@/components/Checkbox.vue';
import CInput from '@/components/Input.vue';
import CButton from '@/components/Button.vue';
import LSideBar from '@/components/SideBar.vue';
import data from '@/data/data.json';

library.add(faJs, faHtml5, faIcons, faCss3Alt, faTh, faCubes, faConnectdevelop);

@Component({
  components: {
    MainLayout,
    ItemCard,
    CCheckbox,
    CInput,
    CButton,
    LSideBar
  },
})
export default class List extends Vue {
    private filteredData: Array<object> = [];
    private showSideBar: boolean = false;
    private search: string =  '';
    private stacks: Array<object> = [
        {
            checked: false,
            value: 'framework'
        },
        {

            checked: false,
            value: 'javascript'
        },
        {
            checked: false,
            value: 'css'
        },
        {
            checked: false,
            value: 'icons'
        }
    ];
    public name: string = 'list';
    public isDesktop: boolean = false;

    private resize(): void{
        let width: number = window.innerWidth;
        if(width >= 768){
            this.isDesktop = true;
            this.showSideBar = true;
        } else {
            this.isDesktop = false;
            this.showSideBar = false;
        }
    }

    public get selectedFilters(): any {
        let filters:any = [];
        // @ts-ignore
        let checkedFiters = this.stacks.filter(obj => obj.checked);
        checkedFiters.forEach(element => {
            // @ts-ignore
            filters.push(element.value);
        });
        return filters;
    }

    public sanitize(s: string){
        return s.replace(/ /g, '-');
    }

    public getfilteredData(): void{
        this.filteredData = data;
        let filteredDataByfilters: Array<object> = [];
        let filteredDataBySearch: Array<object> = [];
        if (this.selectedFilters.length > 0) {
            // @ts-ignore
            filteredDataByfilters = this.filteredData.filter(obj => this.selectedFilters.every(val => obj.stack.indexOf(val) >= 0));
            this.filteredData = filteredDataByfilters;
        } 
        if (this.search !== '') {
            // @ts-ignore
            filteredDataBySearch = this.filteredData.filter(obj => obj.name.indexOf(this.search.toLowerCase()) >= 0);
            this.filteredData = filteredDataBySearch;
        }    
    }

    public mounted(): void{
        this.resize();
        this.getfilteredData();
        window.addEventListener("resize", this.resize);
    }
}
</script>

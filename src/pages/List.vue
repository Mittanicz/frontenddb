<template>
    <main-layout>
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
            <c-button class="u-mb-30" @click="showFilter = !showFilter">
                Filters
            </c-button>
        </div>
        <div class="c-cardWrapper">
            <template v-for="(item, index) in filteredData" >
                <router-link class="c-cardWrapper__item" :to="sanitize(item.name)" :key="index">
                    <item-card  :key="index" :item="item"></item-card>
                </router-link>
            </template>
        </div>
        <template v-slot:modals>
            <l-side-bar :isShow="showFilter" @click="showFilter = !showFilter">
                <template v-for="(stack, index) in stacks">
                    <c-checkbox :label="stack.value" :key="index" v-model="stack.checked" @input="getfilteredData()">
                    </c-checkbox>
                </template>
            </l-side-bar>
        </template>
    </main-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainLayout from '@/layout/MainLayout.vue';
import ItemCard from '@/components/ItemCard.vue';
import CCheckbox from '@/components/Checkbox.vue';
import CInput from '@/components/Input.vue';
import CButton from '@/components/Button.vue';
import LSideBar from '@/components/SideBar.vue';
// @ts-ignore
import data from '@/data/data';
import { filter } from 'vue/types/umd';

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
    public name: string = 'list';
    private showFilter: boolean = false;
    filteredData: Array<object> = [];
    search: string =  '';
    stacks =  [
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

    public get selectedFilters(): Array<object> {
        let filters:Array<object> = [];
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

    public getfilteredData(){
        this.filteredData = data;
        let filteredDataByfilters: Array<object> = [];
        let filteredDataBySearch: Array<object> = [];
        if (this.selectedFilters.length > 0) {
            // @ts-ignore
            filteredDataByfilters = this.filteredData.filter(obj => this.selectedFilters.every(val => obj.stack.indexOf(val) >= 0));
            console.log(this.filteredData.filter(obj => this.selectedFilters.every(val => obj.stack.indexOf(val) >= 0)))
            this.filteredData = filteredDataByfilters;
        } 
        if (this.search !== '') {
            // @ts-ignore
            filteredDataBySearch = this.filteredData.filter(obj => obj.name.indexOf(this.search.toLowerCase()) >= 0);
            console.log(this.search.toLowerCase())
            this.filteredData = filteredDataBySearch;
        }    
    }

    created() {
        this.getfilteredData();
    }
}
</script>

<template>
    <l-main-layout>
        <template v-slot:main>
            <header class="c-filter">
                <ul class="c-filter__controls">
                    <li class="c-filter__action">
                        <form v-on:submit="getfilteredData()">
                            <c-input
                                class="u-mb-0"
                                placeholder="Enter key word  ..."
                                v-model="search"
                                value="search"
                                @input="getfilteredData()"
                            />
                        </form>
                    </li>
                    <li class="c-filter__action" @click="filterGrid = false" v-if="isDesktop">
                        <font-awesome-icon :icon="['fas', 'th']" />
                    </li>
                    <li class="c-filter__action" @click="filterGrid = true" v-if="isDesktop">
                        <font-awesome-icon :icon="['fas', 'list']" />
                    </li>
                </ul>
            </header>
            <div v-if="!isDesktop">
                <c-button class="u-mb-30" @click="showSideBar = !showSideBar">
                    Filters
                </c-button>
            </div>
            <div :class="filterGrid ? 'c-cardWrapper u-mb-20' : 'c-cardWrapper c-cardWrapper--grid u-mb-20'">
                <template v-for="(index) in dataToShow">
                    <item-card :item="filteredData[index-1]" :key="index"></item-card>
                </template>
                <template v-if="filteredData.length == 0">
                    <section class="c-card">
                        <div class="c-title">
                            <h1 class="c-title__title">
                                This is not the item you are looking for
                            </h1>
                            <img class="c-title__img" src="@/assets/img/404.svg" width="250px" />
                        </div>
                    </section>
                </template>
            </div>
             <c-button block secondary v-if="dataToShow < filteredData.length || filteredData.length > dataToShow" @click="loadMoreFilteredData()">Load more</c-button>
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
    </l-main-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIcons, faTh, faCubes, faList, faVial } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faJs, faConnectdevelop, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import LMainLayout from '@/layout/MainLayout.vue';
import ItemCard from '@/components/ItemCard.vue';
import CCheckbox from '@/components/Checkbox.vue';
import CInput from '@/components/Input.vue';
import CButton from '@/components/Button.vue';
import LSideBar from '@/components/SideBar.vue';
import data from '@/data/data.json';

library.add(faJs, faHtml5, faIcons, faCss3Alt, faTh, faCubes, faConnectdevelop, faList, faTh, faVial);

@Component({
    components: {
        LMainLayout,
        ItemCard,
        CCheckbox,
        CInput,
        CButton,
        LSideBar,
    },
})
export default class List extends Vue {
    private filteredData: Array<object> = [];
    private showSideBar: boolean = false;
    private filterGrid: boolean = true;
    private search: string = '';
    private dataToShow: number = 5;
    private stacks: Array<object> = [
        {
            checked: false,
            value: 'Components',
        },
        {
            checked: false,
            value: 'Css',
        },
        {
            checked: false,
            value: 'Framework',
        },
        {
            checked: false,
            value: 'Icons',
        },
        {
            checked: false,
            value: 'Javascript',
        },
        {
            checked: false,
            value: 'Testing',
        },
    ];
    public name: string = 'list';
    public isDesktop: boolean = false;

    private resize(): void {
        let width: number = window.innerWidth;
        if (width >= 768) {
            this.isDesktop = true;
            this.showSideBar = true;
        } else {
            this.isDesktop = false;
            this.showSideBar = false;
            this.filterGrid = true;
        }
    }

    public get selectedFilters(): any {
        let filters: any = [];
        // @ts-ignore
        let checkedFiters = this.stacks.filter((obj) => obj.checked);
        checkedFiters.forEach((element) => {
            // @ts-ignore
            filters.push(element.value);
        });
        return filters;
    }

    public sanitize(s: string): string {
        return s.replace(/ /g, '-');
    }

    public getfilteredData(): void {
        this.filteredData = data;
        let filteredDataByfilters: Array<object> = [];
        let filteredDataBySearch: Array<object> = [];
        if (this.selectedFilters.length > 0) {
            // @ts-ignore
            filteredDataByfilters = this.filteredData.filter((obj) =>
                // @ts-ignore
                this.selectedFilters.every((val) => obj.stack.indexOf(val) >= 0)
            );
            this.filteredData = filteredDataByfilters;
            this.loadMoreFilteredData()
        }
        if (this.search !== '') {
            // @ts-ignore
            filteredDataBySearch = this.filteredData.filter((obj) => obj.name.indexOf(this.search.toLowerCase()) >= 0);
            this.filteredData = filteredDataBySearch;
            this.loadMoreFilteredData()
        }
    }

    private loadMoreFilteredData(): any{
        let length: number = this.filteredData.length - this.dataToShow
        if(length < 5){
            this.dataToShow = this.filteredData.length;
        } else {
            this.dataToShow += 5;
        }
    }

    public beforeMount(): void {
        this.resize();
        this.getfilteredData();
        window.addEventListener('resize', this.resize);
    }
}
</script>

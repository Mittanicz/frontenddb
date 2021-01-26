import IItem from './IItem'
export default class Item implements IItem {
    constructor(
        public name: string,
        public displayName: string,
        public logo: string,
        public stack: Array<string>,
        public icons: Array<string>,
        public shortDesc: string,
        public desc: string,
        public pros: Object,
        public cons: Object,
        public githubStars: string,
        public publishDate: string,
        public developerName: string,
        public githubLink: string,
        public website: string,
    ) { }
}
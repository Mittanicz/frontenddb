<template>
    <div v-if="show" class="c-ck">
        <p>Our website uses cookies. By continuing we assume your permission to deploy cookies, as detailed in our 
            <router-link to="/policy">
                      privacy and cookies policy. 
            </router-link>
        </p>
        <c-button secondary @click="dismiss">
            <span>I agree</span>
        </c-button>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CButton from '@/components/Button.vue';

@Component({
    components: {
        CButton,
    },
})
export default class Cookie extends Vue {

    private show: boolean = true;
    private cookieName: string = "feDbCookie";
    private cookieDomain: string = "feDbCookie";
    private cookiePath: string = "/";
    private cookieExpiryDays: Number = 365;
    public name: string = 'c-cookie';

    get cookie(): boolean {
        return !this.getCookie(this.cookieName)
    }

    private getCookie(name): string {
        const value: string = `; ${document.cookie}`
        const parts: Array<string> = value.split(`; ${name}=`)
        return parts.length !== 2 ?
            undefined :
            parts.pop().split(';').shift()
    }

    private setCookie(name, value, expiryDays, path): void {
        const exdate = new Date();
        exdate.setDate(exdate.getDate() + (expiryDays || 365));
        const cookie: Array<string> = [
          `${name}=${value}`,
          `expires=${exdate.toUTCString()}`,
          `path=${(path || '/')}`
        ];

        document.cookie = `${name}=${value}; expires=${exdate.toUTCString()}; path=${(path || '/')}`
    }

    private dismiss():void {
        this.show = false;
        this.setCookie(this.cookieName, 1, this.cookieExpiryDays, this.cookiePath);
    }

    public beforeMount():void {
      this.show = this.cookie
    }    
}
</script>

<template>
    <l-simple-layout>
        <template v-slot:main>
            <section class="l-grid l-grid--widescreen  c-card2">
            <h1>Cookies Policy</h1>
            <p>
            Frontend database uses cookies on www.frontenddb.com. By using the site, you consent to the use of cookies.
            Our Cookies Policy explains what cookies are, how we use cookies, how third­parties we may
            partner with may use cookies on the Service, your choices regarding cookies and further information
            about cookies.
            </p>
            <h2>What are cookies</h2>
            <p>
            Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is
            stored in your web browser and allows the Service or a third­party to recognize you and make your
            next visit easier and the Service more useful to you.
            Cookies can be "persistent" or "session" cookies.
            </p>
            <h2>How www.frontenddb.com uses cookies</h2>
            <p>
            When you use and access the Service, we may place a number of cookies files in your web
            browser.
            We use cookies for the following purposes: to enable certain functions of the Service, to provide
            analytics, to store your preferences, to enable advertisements delivery, including behavioral
            advertising.
            </p>
            We use both session and persistent cookies on the Service and we use different types of cookies to
            run the Service:
            <ul>
                <li>
                    ­ Essential cookies.<br />
                    We may use essential cookies to authenticate users and prevent fraudulent use
                    of user accounts.
                </li>
                <li>
                    Third­party cookies. <br />
                    In addition to our own cookies, we may also use various third­parties cookies to report usage
                    statistics of the Service, deliver advertisements on and through the Service, and so on.
                    What are your choices regarding cookies
                </li>
            </ul>
            <p>
                If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit
                the help pages of your web browser.
                Please note, however, that if you delete cookies or refuse to accept them, you might not be able to
                use all of the features we offer, you may not be able to store your preferences, and some of our
                pages might not display properly.
            </p>
            </section>
        </template>
    </l-simple-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LSimpleLayout from '@/layout/SimpleLayout.vue';

@Component({
    components: {
        LSimpleLayout,
    },
})
export default class Policy extends Vue {
    public name: string = 'policy';
}
</script>

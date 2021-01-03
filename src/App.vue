<template>
    <router-view />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Homepage extends Vue {}
</script>

<style lang="scss">
@import './styles/style.scss';
</style>

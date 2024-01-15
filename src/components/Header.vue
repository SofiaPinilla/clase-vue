<template>
    <header>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

        <div class="wrapper">
            <HelloWorld msg="You did it!" />

            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
                <RouterLink to="/test">Test</RouterLink>
                <RouterLink to="/counter">Counter</RouterLink>
                <RouterLink to="/todos">Todos</RouterLink>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
</script>
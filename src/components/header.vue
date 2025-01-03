<template>
    <nav>
        <router-link to="/">Contador</router-link>
    </nav>
</template>

<style scoped>
nav {
    display: flex;
    justify-content: center;
    padding: 1rem;

    a {
        text-decoration: none;
        color: #fff;
        font-size: 1.2rem;
        margin: 0 1rem;

        &.router-link-exact-active {
            font-weight: bold;
        }
    }
}
</style>

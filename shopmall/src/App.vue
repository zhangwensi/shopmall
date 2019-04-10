<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
html, body{
    height: 100%;
    min-height: 100%;
    padding: 0px;
    margin: 0px;
}
body>div{
    height: 100%;
    min-height: 100%;
}
</style>
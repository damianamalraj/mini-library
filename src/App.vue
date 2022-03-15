<template>
    <div id="App">
        <router-view />
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
html,
body {
    height: 100%;
}
body {
    margin: 0;
    background-color: #222;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    justify-content: center;

    h1 {
        font-family: "Source Sans Pro", sans-serif;
        text-transform: uppercase;
        font-size: 32px;
    }
    p {
        font-family: "PT Mono", monospace;
        text-transform: uppercase;
        font-size: 14px;
    }

    button {
        font-family: "PT Mono", monospace;
        text-transform: uppercase;
        padding: 1rem;
        border-radius: 8px;
        font-weight: bold;
        font-size: 16px;
    }
    button:hover {
        background-color: black;
        color: white;
    }
}
</style>

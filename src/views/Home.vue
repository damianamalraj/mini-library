<template>
    <div class="home">
        <header>
            <h1>8 Classic Childrens books</h1>
            <router-link to="/ReadingList" class="reading-list"
                >Reading List</router-link
            >
        </header>

        <main>
            <div class="book">
                <router-link
                    class="book"
                    :to="'/book/' + book.id"
                    v-for="book of library"
                    :key="book.id"
                >
                    <article
                        class="cover"
                        :style="{ 'background-color': book.bookColor }"
                    >
                        <div>
                            <p>
                                {{ book.title }}
                            </p>
                            <span>
                                {{ book.author }}
                            </span>
                        </div>
                    </article>
                </router-link>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            library: [...this.$store.state.library],
        };
    },
};
</script>

<style lang="scss" scoped>
html,
body {
    height: 100%;
}
.home {
    background-color: #222;
}

h1 {
    color: white;
}
header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .reading-list {
        background-color: white;
        padding: 1rem;
        border: none;
        font-size: 1rem;
        border-radius: 1rem;
        height: fit-content;
        text-decoration: none;
        color: black;
    }
}
main {
    width: 70%;
    margin: auto;
}
.book {
    margin-top: 2.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.cover {
    text-decoration: none;
    color: white;
    border: 1px solid black;
    width: 150px;
    height: 200px;
    margin: 1rem;

    div {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 100%;
        margin-left: 1rem;
        padding: 0 1rem;
        border-left: 1px solid black;
        p {
            font-size: 0.9rem;
            margin: 0;
        }
        span {
            font-size: 0.7rem;
            padding: 0 0 1rem 0;
        }
    }
}
</style>

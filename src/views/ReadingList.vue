<template>
    <div class="reading-list">
        <section>
            <router-link class="back" to="/">
                <img src="../assets/west_black_24dp.svg" alt="" />
            </router-link>
            <br />
            <br />

            <h1>Reading List</h1>
            <article>
                <div v-for="book of books" :key="book.id">
                    <h1>
                        {{ book.title }}
                        <span>{{ book.author }}</span>
                    </h1>

                    <button @click="removeBook(book)">Remove</button>
                </div>
            </article>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            books: [],
        };
    },

    methods: {
        removeBook(book) {
            const index = this.books.indexOf(book);
            this.books.splice(index, 1);

            localStorage.setItem("books", JSON.stringify(this.books));
        },
    },

    created() {
        let storedBooks = localStorage.getItem("books");

        if (storedBooks) {
            this.books = JSON.parse(storedBooks);
        }
    },
};
</script>

<style lang="scss" scoped>
.reading-list {
    margin: 0;
    height: 100vh;
    background-color: #222;
    display: flex;
    section {
        width: 50%;
        margin: auto;

        h1 {
            color: white;
        }
    }
    .back {
        background-color: white;
        height: fit-content;
        padding: 1rem 0.5rem 0.25rem 0.5rem;
        border-radius: 50%;
    }
    article {
        background-color: #333;
        padding: 2rem;

        div {
            color: white;
            padding: 1rem;
            border-bottom: 1px solid white;
            display: flex;
            justify-content: space-between;
            h1 {
                span {
                    font-size: 1rem;
                    color: lightgrey;
                }
            }
        }
    }
}
</style>

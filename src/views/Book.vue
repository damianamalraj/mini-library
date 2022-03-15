<template>
    <div class="book">
        <div class="single-book">
            <router-link class="back" to="/">
                <img src="../assets/west_black_24dp.svg" alt="" />
            </router-link>
            <section>
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
            </section>
            <section>
                <h1>
                    {{ book.title }}
                </h1>
                <h3>
                    {{ book.author }}
                </h3>
                <br />
                <p>
                    {{ book.plot }}
                </p>
                <br />
                <div>
                    <section>
                        <p>Audciance: {{ book.audciance }}</p>
                        <p>Pages: {{ book.pages }}</p>
                    </section>
                    <section>
                        <p>First published: {{ book.year }}</p>
                        <p>Publisher: {{ book.publisher }}</p>
                    </section>
                </div>
                <br />
                <button @click="handler(book)">Oh, I want to read it!</button>
                <!-- <button @click="addToReadingList">Vuex readinglist test</button> -->
            </section>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            library: [...this.$store.state.library],
            //readingList: [...this.$store.state.readingList],

            readingList: [
                {
                    id: "1",
                    title: "Goodnight Moon",
                    author: "Margaret Wise Brown",
                    publisher: "Harper Festival",
                    year: "1947",
                    pages: "30",
                    plot: "In a soothing, repetitive tone, a young rabbit says goodnight to all the things in the room. Instead of plot, Goodnight Moon looks at the world from the eyes of a very young child, calming children with the ritual of naming each object around them. Lulling babies to sleep since 1947, this classic still ranks on bestseller lists, with some estimates of all-time copies sold worldwide topping 48 million. Find out more of the best books to help your child fall asleep.",
                    audciance: "1 - 4 years",
                    bookColor: "blue",
                },
            ],
        };
    },
    created() {
        let storedBooks = localStorage.getItem("books");

        if (storedBooks) {
            this.readingList = JSON.parse(storedBooks);
        }
    },

    methods: {
        handler(book) {
            if (!this.readingList.includes(book)) {
                this.readingList.push(book);
                localStorage.setItem("books", JSON.stringify(this.readingList));
            }
        },

        addToReadingList() {
            if (!this.readingList.includes(this.book)) {
                this.readingList.push(this.book);
            }
        },
    },

    computed: {
        book() {
            return this.library.find((book) => {
                return book.id == this.$route.params.id;
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.book {
    margin: 0;
    height: 100vh;
    background-color: #222;
    display: flex;
    align-items: center;
    .back {
        background-color: white;

        height: fit-content;
        padding: 0.35rem 0.5rem;
        border-radius: 50%;
    }
}
.single-book {
    display: flex;
    justify-content: center;
    width: 70%;
    margin: auto;
}

section:nth-of-type(1) {
    width: 50%;

    .cover {
        text-decoration: none;
        color: white;
        border: 1px solid black;
        width: 450px;
        height: 600px;
        margin: 1rem;

        div {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            height: 100%;
            margin-left: 1rem;
            padding: 0 1rem;
            border-left: 2px solid black;
            p {
                font-size: 2.1rem;
                margin: 0;
                color: #111;
            }
            span {
                color: #222;
                font-size: 1.5rem;
                padding: 0 0 1rem 0;
            }
        }
    }
}
section:nth-of-type(2) {
    width: 50%;
    color: white;

    h1 {
        font-size: 2rem;
    }
    h3 {
        margin: auto;
    }
    div {
        display: flex;
        justify-content: space-around;
        margin: auto;
        background-color: #333;
        padding: 0.5rem 1rem;
    }

    button {
        font-size: 1rem;
        padding: 0.9rem;
        border-radius: 8px;
        border: none;
    }

    button:active {
        background-color: gray;
    }
}
</style>

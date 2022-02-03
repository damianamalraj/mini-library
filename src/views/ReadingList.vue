<template>
    <div>
        <p v-for="book of books" :key="book.id">
            {{ book.title }}
            <button @click="removeBook(book)">Remove</button>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            books: [
                {
                    id: "1",
                    title: "Goodnight Moon",
                    author: "Margaret Wise Brown",
                    publisher: "Harper Festival",
                    year: "1947",
                    pages: "30",
                    plot: "In a soothing, repetitive tone, a young rabbit says goodnight to all the things in the room. Instead of plot, Goodnight Moon looks at the world from the eyes of a very young child, calming children with the ritual of naming each object around them. Lulling babies to sleep since 1947, this classic still ranks on bestseller lists, with some estimates of all-time copies sold worldwide topping 48 million. Find out more of the best books to help your child fall asleep.",
                    audciance: "1 - 4 years",
                    bookColor: "blue"
                },
            ],
            // readingList: null
        };
    },

    methods: {
        removeBook(book){
            const index = this.books.indexOf(book)
            this.books.splice(index, 1)

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

<style></style>

<template>
    <div>
        <p v-for="book of books" :key="book.id">
            {{ book.title }}
            <button @click="removeBook(book.id)">Remove</button>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            books: null,
        };
    },

    methods: {
        removeBook(bookId){
            const index = this.books.indexOf(bookId)
            this.books.splice(index, 1)
        }
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

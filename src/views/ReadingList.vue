<template>
    <div>
        <p v-for="book of readingList" :key="book.id">
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
            readingList: this.$store.state.readingList
        };
    },

    methods: {
        removeBook(bookId){
            const index = this.readingList.indexOf(bookId)
            this.readingList.splice(index, 1)
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

<template>
    <div>
        <p v-for="book of books" :key="book.id">
            {{ book.title }}
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
    created() {
        let storedBooks = localStorage.getItem("books");

        if (storedBooks) {
            this.books = JSON.parse(storedBooks);
        }
    },
};
</script>

<style></style>

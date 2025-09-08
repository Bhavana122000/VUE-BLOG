<template>
    <v-container>
        <h2>{{ blog?.title }}</h2>
        <p>{{ blog?.body }}</p>

        <v-btn color="primary" class="ma-2" @click="editBlog">Edit</v-btn>
        <v-btn color="error" class="ma-2" @click="showDialog = true">Delete</v-btn>
    </v-container>

    <v-dialog v-model="showDialog" max-width="400">
        <v-card>
            <v-card-title>Confirm Delete</v-card-title>
            <v-card-actions>
                <v-btn color="error" @click="confirmDelete">Yes, Delete</v-btn>
                <v-btn text @click="showDialog = false">Cancel</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>

</template>

<style>

</style>

<script>
import axios from 'axios'

export default {
    props: ['id'],
    data() {
        return {
            blog      : null,
            showDialog: false
        }
    },
    created() {
        this.fetchBlog()
    },
    methods: {
        async fetchBlog() {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
            this.blog = res.data
        },
        async confirmDelete() {
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
            this.$root.showMessage('Blog Deleted!')
            this.showDialog = false
            this.$router.push('/')
        },
        editBlog() {
            this.$router.push(`/add?id=${this.id}`)
        }
    }
}
</script>


<template>
    <v-container>
        <h2>{{isEdit? 'Edit Blog' : 'Add New Blog'}}</h2>
        <v-text-field label="Title" v-model="title" variant="outlined"></v-text-field>
        <v-textarea label="Content" v-model="body" variant="outlined"></v-textarea>
        <v-btn color="primary" @click="saveBlog">
            {{ isEdit? "Update" : "Submit" }}
        </v-btn>
    </v-container>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            title: '',
            body: '',
            isEdit: false,
            id: null
        }
    },
    created(){
        if (this.$route.query.id) {
            this.isEdit = true
            this.id = this.$route.query.id
            this.fetchBlog()
        }
    },
    methods: {
        async fetchBlog() {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
            this.title = res.data.title
            this.body = res.data.body
        },
        async saveBlog() {
            if (this.isEdit) {
                await axios.put(`https://jsonplaceholder.typicode.com/posts/${this.id}`, {
                    title: this.title,
                    body: this.body
                })
                this.$root.showMessage('Blog Updated!')
            } else {
                await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
                    title: this.title,
                    body: this.body,
                    userId: 1
                })
                this.$root.showMessage('Blog added!')
            }
            this.$router.push('/')
        }
    }
}
</script>
<template>
    <div>
        <h2 class="text-h4 pa-4">Blog Posts</h2>
        <v-container>
            <transition-group name="fade" tag="div">
                <v-progress-circular
                    v-if="loading"
                    indeterminate
                    color="primary"
                    class="ma-5"
                    size="50"
                >
                </v-progress-circular>
                <BlogCard v-else
                    v-for="post in posts"
                    :key="post.id"
                    :blog="post"
                    @view="goToDetail"
                />
            </transition-group>
        </v-container>
    </div>
</template>

<script>
import axios from 'axios'
import BlogCard from '../components/BlogCard.vue'

export default {
    components: { BlogCard },
    data() {
        return {
            posts: [],
            loading: true
        }
    },
    created() {
        this.fetchPosts()
    },
    methods: {
        async fetchPosts() {
            this.loading = true
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            this.posts = res.data.slice(0, 10)
            this.loading = false
        },
        goToDetail(id) {
            this.$router.push(`/blog/${id}`)
        }
    }
}

</script>

<style>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0s;
}
</style>
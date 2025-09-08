<template>
    <v-app>
        <Navbar />
        <v-snackbar v-model="snackbar.show" :timeout="3000">
            {{ snackbar.message }}
        </v-snackbar>
            <v-main>
                <router-view />
            </v-main>
        <Footer />
    </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
    data() {
        return {
            snackbar: { show: false, message: '' }
        }
    },
    methods: {
        showMessage(message) {
            this.snackbar.show = true
            this.snackbar.message = message
        }
    },
    components: {
        Navbar,
        Footer
    }
}
</script>
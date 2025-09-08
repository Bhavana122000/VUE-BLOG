<template>
    <v-card class="ma-3" @click="$emit('view', blog.id)">
        <v-card-title>{{ blog.title }}</v-card-title>
        <v-card-text>{{ blog.body.substring(0, 100) }}...</v-card-text>
    </v-card>
</template>

<script>
export default {
    props: ['blog'],
}
</script>
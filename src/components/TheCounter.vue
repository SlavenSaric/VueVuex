<template>
    <h2>{{ counter }}</h2>
</template>

<script>
export default {
    computed: {
        counter(){
           return this.$store.state.counter
        }
    }
}
</script>
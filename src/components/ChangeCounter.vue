<template>
    <button @click="inc">Add 2</button>
    <button @click="increase({value: 3})">Add 3</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        // addOne(){
        //    this.$store.dispatch('increment')
        // }
        // ...mapActions(['increment', 'increase'])
        ...mapActions({
            inc: 'increment',
            increase: 'increase'
        })
    }
}
</script>
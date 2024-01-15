<template>
    <div>
        <p>Count: {{ count }}</p>
        <button @click="increment">Increment Count</button>
    </div>
</template>
  
<script>
export default {
    methods: {
        increment() {
            this.$store.commit("increment");
        },
    },
    computed: {
        count() {
            return this.$store.state.count.count;
        },
    },
};
</script>
  
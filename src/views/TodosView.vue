<template>
    <div>
        <!-- {{ allTodos.map(todo => todo.title) }} -->
        <div v-for="todo of allTodos" :key="todo.id">
            {{ todo.title }}
        </div>
    </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";

export default {
    methods: {
        ...mapActions(["fetchTodos"]),
    },
    computed: mapGetters(["allTodos"]),

    // useEffect(() => {}, [])
    created() {
        this.fetchTodos();
    },
  };
</script>
  
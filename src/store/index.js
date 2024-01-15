import { createStore } from "vuex";
import count from "./modules/count";
import todos from "./modules/todos";

const store = createStore({
    modules: {
        count,
        todos
    },
});

export default store;

export const useUserStore = defineStore({
    id: "user",
    state: () => ({
        name: ""
    }),
    actions: {
        async setName(name: string) {
            this.name = name;
        }
    },
    getters: {
        upperCaseName() {
            return this.name.toUpperCase();
        }
    }
});
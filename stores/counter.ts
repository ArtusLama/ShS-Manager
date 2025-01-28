export const useCounter = defineStore("counter", {
    state: () => ({
        count: 0,
    }),
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        }
    },
    getters: {
        getDouble(): number {
            return this.count * 2
        },
    },
})

// make sure to pass the right store definition, `useAuth` in this case.
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCounter, import.meta.hot))
}

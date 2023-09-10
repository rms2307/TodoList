const TodoList = {
  data() {
    return {
      items: [],
      newItem: {
        done: false,
      },
    }
  },
  created() {
    this.items = localStorage.getItem("itemsTodo")
      ? JSON.parse(localStorage.getItem("itemsTodo"))
      : this.items
  },
  updated() {
    localStorage.setItem("itemsTodo", JSON.stringify(this.items))
  },
  methods: {
    limparTudo: function () {
      this.items = []
    },
    addNewItem: function () {
      if (!this.newItem.description) {
        alert("Field description must be filled.")
      } else {
        this.items.push(this.newItem)
        this.newItem = {
          done: false,
        }
        localStorage.setItem("itemsTodo", JSON.stringify(this.items))
      }
    },
  },
}

Vue.createApp(TodoList).mount("#app")

let app = new Vue({
    el: '#app',
    data: {
        btnText: 'Перевернуть',
        todos: [
            { text: 'Изучить JavaScript', seen: true },
            { text: 'Изучить Vue', seen: true },
            { text: 'Создать что-нибудь классное', seen: true }

        ]
    },
    methods: {
        reverseMessage: function () {
            this.btnText = this.btnText.split('').reverse().join('')
        },
        addNewList: function () {
            app.todos.push({ text: 'Новый элемент списка', seen: true })
        },
        deleteList: function (list) { 
            list.seen=false
        }


    }
})
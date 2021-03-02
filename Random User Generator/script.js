var app = new Vue({
    el: '#app',
    data: {
        firstName: " Arjun ",
        lastName: "Gautam",
        email: "arjungautam5431@gmail.com",
        gender: "male",
        picture: "https://avatars.githubusercontent.com/u/36923691?s=460&u=5f759bd16f6be574a613875510a9a7571f7c1b27&v=4"
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            console.log(results)

            this.firstName = results[0].name.first,
                this.lastName = results[0].name.last,
                this.email = results[0].email,
                this.gender = results[0].gender,
                this.picture = results[0].picture.large
        }
    }
})
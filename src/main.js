const BASE_URL = `http://localhost:3000`

new Vue({
    el: '#app',
    data: {
        page: 'login',
        loginStatus: localStorage.getItem("token") ? true : false,
        error: '',
        resolution: {
            description: null,
            image: null,
        },
        listResolution: [],
        login: {
            email: '',
            password: ''
        },
        register: {
            email: '',
            password: '',
            username: ''
        },
        errorLogin: {
            status: false,
            msg: ''
        },
        errorResolution: {
            status: false,
            msg: ''
        },
        errorRegister: {
            status: false,
            msg: ''
        },
        loggedUser: {
            firstName: localStorage.getItem("payload.email")
        },
        successRegister: false,
        showModal: false
    },
    created() {
        this.fetchResolution()
    },
    methods: {
        axiosConfig() {
            return {
                headers: {
                    token: window.localStorage.getItem("resolusitoken")
                }
            };
        },
        registerUser() {
            let input = this.register
            axios({
                method: 'POST',
                url: `http://localhost:3000/user/signup`,
                data: input
            })
                .then(({ data }) => {
                    this.successRegister = true
                })
                .catch(err => {
                    this.errorRegister.status = true
                    this.errorRegister.msg = err.message
                })
        },
        loginUser() {
            let input = this.login
            axios({
                method: 'POST',
                url: `http://localhost:3000/user/signin`,
                data: input
            })
                .then(({ data }) => {
                    console.log(input, 'ini input')
                    window.localStorage.setItem("resolusitoken", data.token);
                    window.localStorage.setItem("resolusiemail", this.login.email);
                    localStorage.setItem('token', data.token)
                    localStorage.setItem('payload', data.payload)
                    this.page = 'article'
                    this.loginStatus = true
                })
                .catch(err => {
                    this.errorLogin.status = true
                    this.errorLogin.msg = err.response.data || err.message
                })
        },
        imageFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.resolution.image = files[0]
        },
        postResolution() {
            let formData = new FormData()
            formData.append('description', this.resolution.description)
            formData.append('image', this.resolution.image)
            axios
                .post(`${BASE_URL}/resolutions/`, formData, { ...this.axiosConfig(), 'Content-Type': 'multipart/form-data'})
                .then(() => {
                    this.showModal = false
                    this.fetchResolution()
                })
                .catch(err => {
                    this.errorResolution.status = true
                    this.errorResolution.msg = err.response.data || err.message
                })
        },
        fetchResolution() {
            axios
                .get(`${BASE_URL}/resolutions/`, this.axiosConfig())
                .then(res => {
                    this.listResolution = res.data
                    this.errorResolution.status = false
                })
                .catch(err => {
                    this.errorResolution.status = true
                    this.errorResolution.msg = err.response.data || err.message
                })
        },
        logoutUser() {
            localStorage.clear()
            this.loginStatus = false
            this.page = 'login'
            this.successRegister = true
        },
        deleteResolution(id) {
            axios
                .delete(`${BASE_URL}/resolutions/${id}`, this.axiosConfig())
                .then(() => {
                    this.fetchResolution()
                })
                .catch(err => {

                })
        }
    },
    computed: {
        fullName() {
            return this.loggedUser.firstName + ' ' + this.loggedUser.lastName
        }
    }
})
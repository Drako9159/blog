import axios from "axios"
const authApi = axios.create({
    baseURL: "https://backendblog.fly.dev/api/posts",
    withCredentials: true
})
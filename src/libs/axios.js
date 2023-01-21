import axios from "axios"

export const getPostsRequest = async () => {
    await axios.get(`https://backendblog.fly.dev/api/posts`)
}
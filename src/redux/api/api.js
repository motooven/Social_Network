import * as axios from "axios";


const instance =axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
               "API-KEY": "0852b3c0-9431-4d96-928f-f8c594ddf4c7"
             }

})

export const usersAPI = {
    getUsers (currentPage, pageSize)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile(userId) {
         return instance.get(`profile/` + userId)
    }

}

//Возвращает промес
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}





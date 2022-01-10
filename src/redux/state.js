//НАШИ ДАННЫЕ С СЕРВЕРА


  let state = {

        profilePage: {
            dialogsData: [
                {id:1, name: 'Sveta'},
                {id:2, name: 'Mash'},
                {id:3, name: 'Nasta'},
                {id:4, name: 'Olga'},
                {id:5, name: 'Vika'}],

            dialogsMessage: [
                {id:1, message: 'Где вы все.'},
                {id:2, message: 'Всем привет..'},
                {id:3, message: 'Как ваши дела...'},
                {id:4, message: 'Пошлите гулять....'},
                {id:5, message: 'Как вы живете?.....'}], },

        dialogsPage: {
            Post: [
                {id:1, name: 'post 1', like: 'like 2'},
                {id:2, name: 'post 2', like: 'like 3'}]  },

        sidebar: {}
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 3,
        name: postMessage,
        like: 0,
    }
    state.dialogsPage.Post.push(newPost)
}



export default state
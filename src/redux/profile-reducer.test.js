import profileReducer, {addPostActionCreator} from "./profile-reducer";


it('new post added', function () {
    //1.Готовим данные
    let action = addPostActionCreator("MazDay")
    let state = {
        Post: [
            {id:1, name: 'post 1', like: 'like 2'},
            {id:2, name: 'post 2', like: 'like 3'}],
    }

    //2.шлем экшен
    let newState = profileReducer(state, action)

    //3.Ожидание результата
    expect(newState.Post.length).toBe(3)
    expect(newState.Post[2].name).toBe("MazDay")
});

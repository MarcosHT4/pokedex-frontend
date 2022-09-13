import {isLoading, setUser} from './authSlice'
import { logInWithEmailAndPassword } from '../../config/firebaseConfig';


export const login = (email, password) => {

    return async (dispatch) => {

        dispatch(isLoading()) 
        const logInResponse = await logInWithEmailAndPassword(email, password);
        const {user} = logInResponse;
        console.log(user)
        dispatch(setUser(user))

        //dispatch(firebase login)
        //await datos user
        //dispatch(setUser(userData))

    };

}
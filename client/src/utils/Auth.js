import decode from "jwt-decode";

class AuthService {

    verify() {

    }

    getToken () {
        return localStorage.getItem("_id")
    }

    getInfo(){

        return decode(localStorage.getItem("_id"))

    }

    isLoggedIn() {

        const currentToken = localStorage.getItem("_id")

        // const decodedToken = 

    }


    setLogIn(token) {

        localStorage.setItem("_id",token) 

    }

    setLogOut () {

        localStorage.removeItem("_id");

    }


}

export default new AuthService();
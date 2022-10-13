import decode from "jwt-decode";

class AuthSerice {


    getInfo(){


    }

    isLoggedIn() {

    }


    setLogIn(token) {

        localStorage.setItem("_id",token) 

    }

    setLogOut () {

        localStorage.removeItem("_id");

    }


}
const valid = ({fullname, username, email, password, cf_password, dob, gender}) => {
    const err = []

    if(!fullname) {
        err.push("Please add your full name.")
    }

    if(!username) {
        err.push("Please add your user name.")
        //err.username = "Please add your user name."
    }

    if(!email) {
        err.push("Please add your email.")
        //err.email = "Please add your email."
    }else if(email){
        if(!validateEmail(email)){
            err.push("Email format is incorrect.")
        }
        //err.email = "Email format is incorrect."
    }

    if(!password) {
        err.push("Please add your password.")
        //err.password = "Please add your password."
    }else if(password){
        if(!validatePass(password)){
            err.push("Password must be at least 8 characters, one letter and one number.")
        }
        //err.password = "Password must be at least 8 characters, one letter and one number."
    }

    if(!cf_password) {
        err.push("Please add your confirm password.")
        //err.cf_password = "Please add your confirm password."
    }else if(password !== cf_password){
        err.push("Confirm password did not match")
        //err.cf_password = "Confirm password đi not match"
    }

    if(!dob) {
        err.push("Please select your date of birth.")
        //err.fullname = "Please select your date of birth."
    }

    if(!gender) {
        err.push("Please select your gender.")
        //err.fullname = "Please select your gender."
    }

    return {
        errMsg: err,
        errLength: err.length
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validatePass(pass) {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(pass);
}

export default valid
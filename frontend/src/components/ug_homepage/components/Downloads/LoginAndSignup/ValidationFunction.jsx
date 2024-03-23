function Validation(values) {
    let errors = {};
    const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if(values.email===""){
        errors.email="Name should not be empty"
    }
    else if(!email_pattern.test(values.email)){
        errors.email='email didnot match'
    }
    else{
        errors.email=""
    }

    if(values.password===""){
        errors.password="Password should not be empty"
    }else if(!password_pattern.test(values.password)){
        errors.password="password pattern shoud match"
    }
    else {
        errors.password=""
    }
    return errors;
}

export default Validation;


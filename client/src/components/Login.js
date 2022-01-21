import React, { Fragment, useState } from "react";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { username, password };
            console.log(body);
            const response = await fetch("http://localhost:5000/user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            console.log(response);
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Login</h1>

            <form onSubmit={onSubmitForm}>
                <div class="form-group">
                     <label for="exampleInputUsername1">Enter Username</label>
                    <input type="username" class="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" placeholder="Username"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Enter Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </Fragment>
    )
}

export default Login;
import React, { Fragment, useState } from "react";

function Register() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { username, password };
            console.log(body);
            const response = await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            console.log(response);
            window.location = "/login";
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <h1 className="text-center mt-5">Register</h1>

            <form onSubmit={onSubmitForm}>
                <div class="form-group">
                    <label for="exampleInputUsername1">Create Username</label>
                    <input 
                        type="username" 
                        class="form-control" 
                        id="exampleInputUsername1" 
                        aria-describedby="usernameHelp" 
                        placeholder="Enter username"
                        value={username} 
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Create Password</label>
                    <input 
                        type="password" 
                        class="form-control" 
                        id="exampleInputPassword1" 
                        placeholder="Enter Password"
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </Fragment>
    )
}

export default Register;
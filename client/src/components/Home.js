import React, { Fragment } from "react";
import InputWishlist from "./InputWishlist";
import ListWishlist from "./ListWishlist";
import { Link } from "react-router-dom";

function Home() {
    return (
        <Fragment>
            <div class="col-md-12 float-right text-right">
                <Link to="/register" className="btn btn-success">Register</Link>
                <Link to="/login" className="btn btn-info">Login</Link>
            </div>

            <InputWishlist />
            <ListWishlist />
        </Fragment>
    )
}

export default Home;
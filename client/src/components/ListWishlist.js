import React, { Fragment, useEffect, useState } from "react";
import EditWishlist from "./EditWishlist"

const ListWishlist = () => {
    const [wishlists, setWishlists] = useState([]);

    const deleteWish = async (id) => {
        try {
            const deleteWish = await fetch(`http://localhost:5000/wishlist/${id}`, {
                method: "DELETE"
            });
            
            setWishlists(wishlists.filter(wishlist => wishlist.wish_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    };

    const getWishlist = async () => {
        try {
            const response = await fetch("http://localhost:5000/wishlist");
            const jsonData = await response.json();

            setWishlists(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }; 
    
    useEffect(() => {
        getWishlist();
    }, []);

    console.log(wishlists);

    return (
        <Fragment>
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {wishlists.map(wishlist => (
                        <tr key={wishlist.wish_id}>
                            <td>{wishlist.description}</td>
                            <td>
                                <EditWishlist wishlists={wishlists}/>
                            </td>
                            <td>
                                <button 
                                    className="btn btn-danger" 
                                    onClick={() => deleteWish(wishlist.wish_id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListWishlist;
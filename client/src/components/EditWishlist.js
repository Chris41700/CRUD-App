import React, { Fragment, useState } from "react"

const EditWishlist = ({ wishlist }) => {
    const [description, setDescription] = useState(wishlist.description);
    
    //Edit Item Function

    const updateItem = async e => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(`http://localhost:5000/wishlist/${wishlist.wish_id}`, {
                method: "PUT",
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
            <button 
                type="button" 
                className="btn btn-warning" 
                data-toggle="modal" 
                data-target={`#id${wishlist.wish_id}`}
            >
                Edit
            </button>

            <div 
                className="modal" 
                id={`id${wishlist.wish_id}`} 
                onClick={() => setDescription(wishlist.description)}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Wish</h4>
                            <button 
                                type="button" 
                                className="close" 
                                data-dismiss="modal"
                                onClick={() => setDescription(wishlist.description)}
                            >
                                &times;
                            </button>
                        </div>

                        <div className="modal-body">
                            <input 
                                type="text" 
                                className   ="form-control" 
                                value={description} 
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>

                        <div className="modal-footer">
                            <button 
                                type="button" 
                                className="btn btn-warning" 
                                data-dismiss="modal"
                                onClick = {e => updateItem(e)}
                            >
                                Edit
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-danger" 
                                data-dismiss="modal"
                                onClick={() => setDescription(wishlist.description)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EditWishlist;
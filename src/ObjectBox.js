import {Avatar, Button} from "@material-ui/core"
import React, { useState } from "react"
import db from "./firebase"
import "./ObjectBox.scss"

function ObjectBox() {
    const [message, setMessage] = useState("")
    const [image, setImage] = useState("")

    const sendObject = (e) => {
        e.preventDefault();

        if (message) {
            db.collection("posts").add({
                username: "Jesiontrop",
                displayName: "Andrey Barkov",
                avatar: "https://www.malatyakale.bel.tr/tema/genel/uploads/profiller/anonymous-avatar-icon-25_1.jpg",
                verified: false,
                text: message,
                date: new Date(),
                image: image
            });
        }

        setMessage("");
        setImage("");
    }

    return (
        <div className="objBox">
            <form>
                <div className="objBox__input">
                    <Avatar src="https://www.malatyakale.bel.tr/tema/genel/uploads/profiller/anonymous-avatar-icon-25_1.jpg"/>
                    <input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="What's happening"
                        type="text"
                    />
                </div>
                <input
                    placeholder="Optional: Enter image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    type="text"
                    className="objBox__imageInput"
                />
                {message ?
                    <Button onClick={sendObject} type="submit" className="objBox__button">
                        New Post
                    </Button>
                    :
                    <Button onClick={sendObject} type="submit" className="objBox__button" disabled>
                        New Post
                    </Button>
                }

            </form>
        </div>
    )
}

export default ObjectBox;
import React, {useState} from "react";
import { Button } from "@material-ui/core";
import "./Welcome.scss"

function Login({isChange}) {

    return(
        <>
            <Button className="logout__obj">Sign In via Google Account</Button>
            <p>Don't have an account? <a className="link" onClick={isChange}>Sign Up</a></p>
        </>
    );
}

function Registration({isChange}) {
    
    return(
        <>
            <Button className="logout__obj">Sign Up via Google Account</Button>
            <p>Do you already have an account? <a className="link" onClick={isChange}>Sign In</a></p>
        </>
    );
}

function Welcome () {
    const [isLogin, setIsLogin] = useState(false);

    function change() {
        setIsLogin(!isLogin);
    }

    return (
        <div className="welcome standart">
            <div className="welcome__logout standart">
                {isLogin 
                    ? <Login isChange={change}/>
                    : <Registration isChange={change}/>
                }
            </div>
            <div className="welcome__image standart">
                <img src="https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png"/>
            </div>
        </div>
    );
}

export default Welcome;
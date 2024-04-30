import React from "react";

const Login = () => {
    return (
        <form>
         <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
           <input type="email" className="form-control" placeholder="name@example.com"/>
           <input type="password" className="form-control" placeholder="Password"/>
         <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
     </form>
    )
};

export default Login
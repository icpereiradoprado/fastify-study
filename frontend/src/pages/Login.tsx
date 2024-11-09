import React from "react";
import { Form } from "react-router-dom";

const Login : React.FC = () => {
    return(
        <div>
            <h1>Login</h1>
            <Form method="POST">
                <input type="text" name="userLogin" placeholder="Usuário..."/>
                <input type="password" name="userPassword" placeholder="Senha..."/>
                <input type="submit" value="Entrar" />
            </Form>
        </div>
    )
}

export default Login;
import './Login.css';
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import React, { useState } from "react";
import { Form } from "react-router-dom";
import { DisplayText } from "../../Components/DisplayText/DisplayText";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { LoginField } from '../../Components/LoginField/LoginField';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const Login : React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    return(
        <>
            <DisplayText text="Login" className="text-4xl text-aling-center"/>
            <Form method="POST">
                <div className="form-fields">
                    <LoginField IconComponent={AcUnitIcon}/>
                    <FormControl variant='standard'>
                        <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
                        <Input 
                            id="standard-adornment-password" 
                            size='small' 
                            type={showPassword? 'text' : 'password'} 
                            endAdornment={
                                <InputAdornment position='end'>
                                    <IconButton
                                        aria-label={
                                            showPassword ? 'hide the password' : 'display the password'
                                        }
                                        onClick={()=>{ setShowPassword(!showPassword) }}
                                    >
                                        { showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }           
                            required
                        />
                    </FormControl>
                </div>
            </Form>
        </>
    )
}

export default Login;
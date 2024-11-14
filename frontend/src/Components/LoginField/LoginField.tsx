import { SvgIconComponent } from "@mui/icons-material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField"

interface ITextFieldProps{
    label?: string,
    IconComponent : SvgIconComponent 
}
const LoginField = ({ label = "Login", IconComponent } : ITextFieldProps) => {
    return (
        <TextField 
            id="" 
            label={label} 
            size='small' 
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position='start'>
                            {IconComponent ? <IconComponent /> : <AccountCircle sx={{color: 'purple'}}/>}
                        </InputAdornment>
                    )
                }
            }}
            required
            variant='standard'
        />
    )
}

export { LoginField };
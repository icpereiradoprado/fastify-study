import './DisplayText.css';

interface IDisplayTextProps{
    text: string,
    className?: string
}
const DisplayText = ({ text, className } : IDisplayTextProps) => {    
    return(
        <div className={className ? className : 'default-text'}>{text}</div>
    )
}

export {DisplayText}
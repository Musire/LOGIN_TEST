const Button = ({ children, ...props }) => {
    return ( 
        <button {...props} type="button" >
            { children }
        </button>
     );
}
 
export default Button;
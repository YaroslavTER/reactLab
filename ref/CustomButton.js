const CustomButtom = React.forwardRef((props, ref) => (
  <button ref={ref} className="custom-button">
    {props.children}
  </button>
));

const ref = React.createRef();
<CustomButton ref={ref}>Click</CustomButton>
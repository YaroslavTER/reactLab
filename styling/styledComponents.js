const Button = styled.button`
  /* css styles */
`;

const ExtendedButton = styled(Button)`
  /* css styles */
`;

const Link = ({className, children}) => (
  <a className={className}>{children}</a>
);

const StyledLink = styled(Link)`
  /* css styles */
  /* 
    Also you can do interpolation
    and use recieved props for
    styles ${props.any}
  */
`

render(
  <>
    <Button>Button</Button>
    <ExtendedButton>Button with extended styles</ExtendedButton>
    <StyledLink any="asd"></StyledLink>
  </>
);


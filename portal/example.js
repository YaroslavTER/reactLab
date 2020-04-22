ReactDOM.createPortal(child, container);

render() {
    return ReactDOM.createPortal(
        this.props.children,
        domNode
    );
}

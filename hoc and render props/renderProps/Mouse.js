class Mouse extends React.Component {
    state = { x: 0, y: 0 }

    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }

    render() {
        return (
        <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
            {this.props.render(this.state)}
        </div>
        )
    }
}

<Mouse render={({ x, y }) => (
    <div style={{ height: '100%' }}>
    <h1>The mouse position is ({x}, {y})</h1>
    </div>
)}/>
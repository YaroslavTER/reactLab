class Subscription extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: retrieveData
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
        DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
        this.setState({
            data: retrieveData(DataSource, this.props)
        });
    }

    render() {
        return (
            <div>
                {this.props.render(this.state.data)}
            </div>
        );
    }
}
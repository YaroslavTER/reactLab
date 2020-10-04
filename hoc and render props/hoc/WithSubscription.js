function withSubscription(WrappedComponent, retrieveData) {
    return class extends React.Component {
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
            return <WrappedComponent data={this.state.data} {...props} />
        }
    }
}

const BlogPostWithSubscribtion = withSubscription(
    BlogPost,
    (DataSource, props) => DataSource.getBlogPost(props)
);

const CommentListWithSubscription = withSubscription(
    ComponentList,
    (DataSource) => DataSource.getComments()
);
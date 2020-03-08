import React, {Component} from 'react';
const {Provider} = React.createContext('light');

const App = () => (
    <Provider>
        <Toolbar theme="dark" />
    </Provider>
);

const Toolbar = () => (
    <div>
        <TemedButton />
    </div>
);

class ThemedButton extends Component {
    static contextType = ThemeContext;

    render() {
        return <Button theme={this.context} />;
    }
};
const App = () => <Toolbar theme="dark" />

const Toolbar = ({theme}) => (
    <div>
        <TemedButton theme={theme} />
    </div>
)

const ThemedButton = ({theme}) => <Button theme={theme} />
const React = (function() {
  let hooks = [],
      currentHookIndex = 0;
  
  return {
  	render(Component) {
      const component = Component();
      component.render();
      currentHookIndex = 0;
      return component;
    },

    useEffect(callback, dependencies) {
      const hasNoDependencies = !dependencies;
      const _dependencies = hooks[currentHookIndex];
      const hasChangedDependencies = _dependencies
        ? dependencies.every(
            (element, index) => 
             element !== _dependencies[index]
          )
        : true;
      
      if(hasNoDependencies || hasChangedDependencies) {
        callback();
        hooks[currentHookIndex] = dependencies;
      }
      currentHookIndex++;
    },
    
    useState(initialValue) {
      const _currentHookIndex = currentHookIndex;
      hooks[currentHookIndex] = hooks[currentHookIndex] || initialValue;
      
      function setState(newValue) {
        hooks[_currentHookIndex] = newValue;
      }
      
      return [hooks[currentHookIndex++], setState]
    }
  }
})();

const useState = React.useState;
const useEffect = React.useEffect;
const	render = React.render;

function Counter() {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('asd');
  
  useEffect(() => {
    console.log(`effect: ${counter}, ${text}`);
  }, [counter, text]);
  
  return ({
    click: () => setCounter(counter + 1),
    type: (inputText) => setText(inputText),
    noop: () => setCounter(counter),
    render: () => console.log(`counter: ${counter}`)
  });
}

let app = render(Counter);
app.click();
app = render(Counter);
app.type('qwe');
app = render(Counter);
app.noop();
app = render(Counter);
app.click();
app = render(Counter);

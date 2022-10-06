import CustomHookComponent from "./components/CustomHookComponent";
import EvenMoreReactComponent from "./components/EvenMoreReactComponent";
import UseContextComponent from "./components/UseContextComponent";
import UseEffectComponent from "./components/UseEffectComponent";
import UseReducerComponent from "./components/UseReducerComponent";
import UseRefComponent from "./components/UseRefComponent";
import UseStateComponent from "./components/UseStateComponent";

function App() {
  return (
    <div>
      <h1>useState</h1>
      <UseStateComponent />
      <h1>useEffect</h1>
      <UseEffectComponent />
      <h1>useContext</h1>
      <UseContextComponent />
      <h1>useReducer</h1>
      <UseReducerComponent />
      <h1>useRef</h1>
      <UseRefComponent />
      <h1>CustomHook</h1>
      <CustomHookComponent />
      <h1>Even More React Component</h1>
      <EvenMoreReactComponent />
    </div>
  );
}

export default App;

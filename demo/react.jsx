import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  render() {
    return <div>{`Hello, ${this.props.name}!`}</div>
  }
}

export default function App(props) {
  const [name, setName] = useState(props.name);

  return (
    <div>
      <label>
        Name:
        <input value={name} onChange={e => setName(e.target.value)} />
      </label>
      <HelloWorld name={name} />
    </div>
  )
}

ReactDOM.render(<App name="world" />);

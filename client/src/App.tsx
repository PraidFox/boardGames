import React, {useEffect} from 'react';
import axios from "axios";

function App() {

  useEffect(() => {
      // axios.get('http://localhost:4000/', {params: {name: "Палмолив"}})
      //     .then(res => console.log("sdasdasd", res))
      axios.post('http://localhost:4000/', {name: "Палмолив"})
          .then(res => console.log("sdasdasd", res))
  }, []);

  return (
    <div className="App">
      Какой-то текст
    </div>
  );
}

export default App;

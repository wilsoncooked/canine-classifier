import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Canine Classifier V2</h1>
      <Link to={`results`}>Upload doggo</Link>
    </>
  );
}

export default App;

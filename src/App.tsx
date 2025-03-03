import "./App.css";
import UpvotesList from "./components/UpvoteList/UpvoteList";

function App() {
  return (
    <section>
      <div>
        <UpvotesList list={0} />
        <UpvotesList list={1} />
        <UpvotesList list={2} />
      </div>
    </section>
  );
}

export default App;

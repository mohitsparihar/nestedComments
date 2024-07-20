import NestedComments from "./components/NestedComments";
import commentsData from "./data/comments.json";
import "./App.css";

function App() {
  const handleSubmit = () => {};

  const handleEdit = () => {};

  const handleDelete = () => {};

  const handleUpVote = () => {};

  const handleDownVote = () => {};

  return (
    <div>
      <h2>Nested Comments</h2>
      <NestedComments
        comments={commentsData}
        onSubmit={handleSubmit}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onUpVote={handleUpVote}
        onDownVote={handleDownVote}
      />
    </div>
  );
}

export default App;

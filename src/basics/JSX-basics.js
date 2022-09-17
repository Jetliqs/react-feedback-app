function App() {
  const title = 'Hello from the App component';
  const body =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, eligendi.';
  const comments = [
    { id: 1, text: 'Comment One' },
    { id: 2, text: 'Comment Two' },
    { id: 3, text: 'Comment Three' },
  ];

  const showComments = true;
  const commentBlock = (
    <div className="comments">
      <h2>Comments ({comments.length})</h2>
      <ul>
        {
          /* map should return JSX => () */
          comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))
        }
      </ul>
    </div>
  );
  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{body}</p>
      {showComments && commentBlock}
    </div>
  );
}

export default App;

import { useParams } from 'react-router-dom';

function Post() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      Post slug: {params.slug}
      <br></br>
      Post id: {params.id}
    </div>
  );
}

export default Post;

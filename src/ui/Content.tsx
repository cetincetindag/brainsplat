import PostPreview from '../utils/PostPreview';
const titles = ["Title 1", "Title 2", "Title 3", "Title 4", "Title 5", "Title 6", "Title 7", "Title 8", "Title 9", "Title 10"];
const Content = () => {
  return (
    <div className="text-white text-3xl w-3/4">
      {titles.map((e) => {
        return (
          <PostPreview title={e} />
        )
      })}
    </div>
  );
}

export default Content;

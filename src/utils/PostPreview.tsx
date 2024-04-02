

const PostPreview = ({title} : {title:string}) => {
  return (
    <div className="min-w-fit max-w-fit max-h-64 min-h-64 p-4 font-roboto-condensed text-white text-lg border border-white rounded-lg">
      <h1 className="text-3xl text-bunker-300 font-semibold">{title}</h1>
      <h2 className="font-serif text-lg pt-2 opacity-90">John White</h2>
      <p className="pt-2">Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.orem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
    </div>
  );
}

export default PostPreview;

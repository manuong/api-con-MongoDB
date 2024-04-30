const NoteCard = ({ title, content, important }) => {
  let smallTitle = null;
  let smallContent = null;

  if (title.length > 29) {
    smallTitle = title.split('').slice(0, 26).concat(' ...').join('');
  }
  if (content.length > 200) {
    smallContent = content.split('').slice(0, 196).concat(' ...').join('');
  }
  return (
    <div className="bg-zinc-700 w-96 h-60 border-2 border-green-700 rounded-lg m-2">
      <div className="bg-zinc-900 rounded-t-lg h-12 flex items-center justify-between p-2">
        <h1 className="text-xl">{smallTitle ? smallTitle : title}</h1>
        {important && (
          <div className="w-24 px-2 rounded-lg border-2 border-green-700 text-green-700">importante</div>
        )}
      </div>

      <p className="p-2">{smallContent ? smallContent : content}</p>
    </div>
  );
};

export default NoteCard;

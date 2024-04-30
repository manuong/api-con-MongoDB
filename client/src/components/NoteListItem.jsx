const NoteListItem = ({ title, content, important }) => {
  let smallTitle = null;
  let smallContent = null;

  if (title.length > 39) {
    smallTitle = title.split('').slice(0, 36).concat(' ...').join('');
  }
  if (content.length > 79) {
    smallContent = content.split('').slice(0, 76).concat(' ...').join('');
  }

  return (
    <div>
      <div className="flex flex-col items-center">
        <ul className="bg-zinc-800 w-11/12 h-12 flex items-center">
          <li className=" border-zinc-700 px-5 w-3/12">{smallTitle ? smallTitle : title}</li>
          <li className=" border-zinc-700 px-5 w-6/12">{smallContent ? smallContent : content}</li>

          <li className="px-5 w-3/12 ">
            {important && (
              <div className="w-24 px-2 rounded-lg border-2 border-green-700 text-green-700">
                importante
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NoteListItem;

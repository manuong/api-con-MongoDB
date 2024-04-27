const NoteCard = ({ title, content, important }) => {
  return (
    <div>
      <h1>{title}</h1>
      {important ? <span>Importante</span> : <span>No Importante</span>}
      <p>{content}</p>
    </div>
  );
};

export default NoteCard;

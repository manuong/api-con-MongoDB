const Landing = () => {
  return (
    <div className="h-screen flex justify-around items-center">
      <div className="text-8xl grid justify-items-end">
        <p>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 via-pink-700 to-rose-600">
            Notes API
          </span>{' '}
          with{' '}
        </p>
        <p>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            MongoDB
          </span>
        </p>
      </div>
      <div className="h-2/5 w-2/5 flex flex-col justify-around items-center">
        <p className="text-xl">
          Esta es una página echa para aprender el uso de una base de datos NO relacional (NoSQL) como
          MongoDB. Para disfrutar pulsa en el siguiente botón
        </p>
        <button className=" bg-blue-600 h-12 w-52 rounded-lg border-2 border-blue-600 hover:text-blue-600 hover:bg-transparent duration-200">
          Login
        </button>
      </div>
    </div>
  );
};

export default Landing;

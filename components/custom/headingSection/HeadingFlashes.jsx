export default function HeadingFlashes({ nombre, flashes }) {
  return (
    <>
      <div className="max-w-[75rem] mx-auto">
        <div
          className="flex gap-3 items-center mb-5 
          "
        >
          <span className=" px-2 rounded-sm py-4 bg-red-500"></span>
          <p className="text-red-500 font-semibold">{nombre}</p>
        </div>
        <h2 className="text-4xl font-bold tracking-normal mb-5">{flashes}</h2>
      </div>
    </>
  );
}

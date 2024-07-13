export default function ErrorsContact({ children }) {
  return (
    <>
      <p className="flex gap-2 text-red-500 items-center text-sm mt-2">
        {children}
      </p>
    </>
  );
}

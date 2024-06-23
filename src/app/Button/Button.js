export default function Button({ children }) {
  return (
    <button className="text-white bg-main-purple rounded-full m-3 p-1 w-full">
      {children}
    </button>
  );
}

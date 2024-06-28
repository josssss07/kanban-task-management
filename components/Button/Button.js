
export default function Button({onClickFun, className=undefined, children }) {
  return (
    <button className={`text-white bg-main-purple rounded-full m-3 p-1 w-full ${className}`} onClick={onClickFun}>
      {children}
    </button>
  );
}

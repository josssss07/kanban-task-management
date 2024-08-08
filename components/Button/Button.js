'use-client';
export default function Button({ className=undefined, onClickFun, children }) {
  return (
    <button className={`text-white bg-main-purple rounded-full  w-full m-3 p-1 ${className}`} onClick={onClickFun}>
      {children}
    </button>
  );
}

import { twJoin } from "tailwind-merge";

export default function Header({ children }) {
  return (
    <div
      className={twJoin(
        "flex",
        "gap-5",
        "w-full",
        "h-16",
      )}
    >
      {children}
    </div>
  );
}

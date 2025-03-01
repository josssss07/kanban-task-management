'use client';
import * as Ariakit from "@ariakit/react";
export default function NavBar({clickBun , children}){
  return (
    <Ariakit.Dialog open={true} onClose={()=>clickBun()}  hideOnInteractOutside={false} modal={false}>
      <Ariakit.DialogDescription className="absolute top-0 h-full border-r-2 bg-[var(--color-dialog)] border-r-[var(--color-lineborder)] md:w-1/5">{children}</Ariakit.DialogDescription>
    </Ariakit.Dialog>
  );
}
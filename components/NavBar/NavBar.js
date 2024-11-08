'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { FocusScope } from "@radix-ui/react-focus-scope";


export default function NavBar({clickBun , children}){
    return (
<Dialog.Root open={true} onClose={()=>{}} className="flex flex-col">
<Dialog.Trigger />
<Dialog.Portal className="">
  <Dialog.Overlay />
  <FocusScope trapped={false}>
  <Dialog.Content  className="absolute top-0 h-full border-r-2 bg-[var(--color-dialog)] border-r-[var(--color-lineborder)] md:w-1/5">
    <Dialog.Title />
    <Dialog.Description className="flex flex-col min-h-[80%]" >{children}</Dialog.Description>
    <Dialog.Close />
  </Dialog.Content>
  </FocusScope>
</Dialog.Portal>
</Dialog.Root>
    );
}
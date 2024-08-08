'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { FocusScope } from "@radix-ui/react-focus-scope";


export default function NavBar({clickBun , children}){
    return (
<Dialog.Root open={true} onClose={()=>{}} className="h-full">
<Dialog.Trigger />
<Dialog.Portal className="h-full">
  <Dialog.Overlay />
  <FocusScope trapped={false}>
  <Dialog.Content  className="absolute top-0 h-full border-r-2 bg-white border-r-lines-light md:w-1/5">
    <Dialog.Title />
    <Dialog.Description className="flex flex-col h-full" >{children}</Dialog.Description>
    <Dialog.Close />
  </Dialog.Content>
  </FocusScope>
</Dialog.Portal>
</Dialog.Root>
    );
}
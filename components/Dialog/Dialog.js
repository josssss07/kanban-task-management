
import * as Dialog from "@radix-ui/react-dialog";
import React from "react";



export default function CustomDialog({open , onChange,title , children}){
    return(<div>
        <Dialog.Root open={open} onOpenChange={onChange}>
            <Dialog.Portal>
                <Dialog.Overlay/>
                <Dialog.Content className= "absolute top-[1rem] left-[30rem] border-2 bg-white p-5 min-w-80 rounded-md border-white" >
                    <Dialog.Title className = "text-heading-l">{title}</Dialog.Title>
                    <Dialog.Description>{children}</Dialog.Description>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
        </div>);
}
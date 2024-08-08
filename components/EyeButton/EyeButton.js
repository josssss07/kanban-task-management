'use client';

import Button from "../../components/Button/Button";
import {Eye} from "feather-icons-react";
import React from "react";


export default function EyeButton( {clickBun}){
    return (
        <>
        <Button className="hide sm:block m-0 rounded-l-none w-min absolute bottom-10 left-0 p-3 ml-0" onClickFun={clickBun}><Eye/></Button>
        </>
    );
}
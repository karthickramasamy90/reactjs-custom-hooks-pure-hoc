import React, { useState, useEffect } from 'react';
import Container from "./HOC";
import HelloWorld from "./HelloWorld";

const SampleComponent = Container(HelloWorld);

function HocContainer() {

    return(
        <>
            <SampleComponent />
        </>
    )
}

export default HocContainer;
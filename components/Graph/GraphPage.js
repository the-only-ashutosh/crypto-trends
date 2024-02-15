'use client'
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import React, { Suspense } from "react";
import { Image } from "react-ui";


export default function GraphPage({imgs}){
    
    return (
    <Suspense>
        <ErrorBoundary>
            <div style={{display:'flex',flexDirection:'column'}}>
                <Image src={`data:image/jpg;base64,${imgs[0]}`} alt="Time Vs Price" width={'75%'} height={'75%'}/>
                <Image src={`data:image/jpg;base64,${imgs[1]}`} alt="Time Vs Volume"  width={'75%'} height={'75%'}/>
            </div>
        </ErrorBoundary>
    </Suspense>
    )
}
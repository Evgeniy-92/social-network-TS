import React, {ComponentType, Suspense} from "react";


export function withSuspense(Component: ComponentType) {
    const SuspenseComponent = () => {
        return <Suspense fallback={<div>Загрузка...</div>}>
            <Component />
        </Suspense>
    }


    return SuspenseComponent
}
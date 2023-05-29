import React, { PropsWithChildren } from 'react'
import { useListContext, ListContextProvider } from 'vtex.list-context'
import { BulletsSchema } from './BulletTypes'
import { useDevice } from 'vtex.device-detector'
import { useCssHandles } from 'vtex.css-handles'
import { getBulletsAsTSXList } from './modules/bulletsAsLis'

export interface BulletGroupProps {
    bullets: BulletsSchema
}

const BulletGroup = ({
    bullets,
    children }
    : PropsWithChildren<BulletGroupProps>) => {
    const { isMobile } = useDevice();
    const { list } = useListContext() || []
    const bulletsGroup = getBulletsAsTSXList(bullets);

    const newListContextValue = list.concat(bulletsGroup)

    const CSS__HANDLES = ["bullet__container"]

    const handles = useCssHandles(CSS__HANDLES)

    return (
        <ListContextProvider list={newListContextValue}>
            {
                isMobile
                    ?
                    <div className={handles.bullet__container}>{bulletsGroup}</div>
                    :
                    children
            }
        </ListContextProvider>
    )
}

export default BulletGroup
import * as C from './styles'

import { useState } from 'react'
import { Item } from '../../types/item'


type Props = { item: Item, onChange: (id: number) => void }


export const CardItem = ({ item, onChange }: Props ) => {

    const [isChecked, setChecked] = useState(item.done)

    return (
        <C.Container done={isChecked}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={
                    e => { setChecked(e.target.checked); onChange(item.id) }

                } />
            <label>{item.name}</label>
        </C.Container>
    )
}
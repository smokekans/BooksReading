import React from 'react'
import { TitleStl, WrapStl, WraperStl, ListStl, СolonStl, LabelStl, BoxStl } from './MyGoals.styled'

export const MyGoals = () => {
  return (
    <section>
        <WrapStl>
            <TitleStl>My goals</TitleStl>
        </WrapStl>
        <WraperStl>
            <ListStl>
                <li>
                    <BoxStl>
                    <СolonStl>00</СolonStl>
                    </BoxStl>
                    <LabelStl>Amount of books</LabelStl>
                    
                </li>
                <li>
                    <BoxStl>
                    <СolonStl>00</СolonStl>
                    </BoxStl>
                    <LabelStl>Amount of days</LabelStl>
                </li>
                <li>
                    <BoxStl>
                    <СolonStl>00</СolonStl>
                    </BoxStl>
                    <LabelStl>Books left</LabelStl>
                </li>
            </ListStl>
        </WraperStl>
    </section>
  )
}

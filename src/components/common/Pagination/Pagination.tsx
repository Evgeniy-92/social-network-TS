import s from "./Pagination.module.css";
import React, {useState} from "react";

type PaginationPropsType = {
    totalItemsCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
}
export const Pagination = (props: PaginationPropsType) => {

    const {totalItemsCount, pageSize, onPageChanged, currentPage} = props

    const numberPages = Math.ceil(totalItemsCount / pageSize)
    const pages = []
    for (let i = 1; i <= numberPages; i++) {
        pages.push(i)
    }
    const portionSize = 10
    const portionCount = Math.ceil(numberPages / portionSize)
    const [portionNumber, setPortionNumber] = useState<number>(1)
    const leftPortionPageNumber = (portionNumber -1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={s.paginationContainer}>
            {portionNumber > 1
                && <button className={s.button} onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}
            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                    return (
                        <span
                            onClick={() => onPageChanged(p)}
                            className={p === currentPage ? s.activePagesStyle : s.pagesStyle}
                        >
                        {p}
                    </span>
                    )
                })
            }
            {portionCount > portionNumber
                && <button className={s.button} onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button> }
        </div>
    )
}
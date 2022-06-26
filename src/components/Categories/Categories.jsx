import { useState } from 'react'

export const Categories = () => {
    const [activeCat, setactiveCat] = useState(0)

    const activCatClick = (index) => {
        setactiveCat(index)
    }
    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => activCatClick(0)}
                    className={activeCat === 0 ? 'active' : ' '}
                >
                    Все
                </li>
                <li
                    onClick={() => activCatClick(1)}
                    className={activeCat === 1 ? 'active' : ' '}
                >
                    Мясные
                </li>
                <li
                    onClick={() => activCatClick(2)}
                    className={activeCat === 2 ? 'active' : ' '}
                >
                    Вегетарианская
                </li>
                <li
                    onClick={() => activCatClick(3)}
                    className={activeCat === 3 ? 'active' : ' '}
                >
                    Гриль
                </li>
                <li
                    onClick={() => activCatClick(4)}
                    className={activeCat === 4 ? 'active' : ' '}
                >
                    Острые
                </li>
                <li
                    onClick={() => activCatClick(5)}
                    className={activeCat === 5 ? 'active' : ' '}
                >
                    Закрытые
                </li>
            </ul>
        </div>
    )
}

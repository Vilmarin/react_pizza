import { useState } from 'react'

export const Categories = () => {
    const [activeCat, setactiveCat] = useState(0)

    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ]

    const activCatClick = (index) => {
        setactiveCat(index)
    }
    return (
        <div className="categories">
            <ul>
                {categories.map((item, index) => (
                    <li
                        key={index + 1}
                        onClick={() => activCatClick(index)}
                        className={activeCat === index ? 'active' : ''}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

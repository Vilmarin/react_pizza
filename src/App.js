import { useEffect, useState } from 'react'
//Components
import './App.css'
import { Categories } from './components/Categories/Categories'
import { Header } from './components/Header/Header'
import { PizzaComponent } from './components/PizzaComponent/PizzaComponent'
import './scss/app.scss'

//Data
import { Sort } from './components/Sort/Sort'

function App() {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://62c35a07876c4700f53b18de.mockapi.io/items')
            .then((res) => {
                return res.json()
            })
            .then((arr) => {
                setItems(arr)
            })
    }, [])

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories />
                        <Sort />
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {items.map((item) => (
                            <PizzaComponent key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App

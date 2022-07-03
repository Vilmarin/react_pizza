//Components
import './App.css'
import { Categories } from './components/Categories/Categories'
import { Header } from './components/Header/Header'
import { PizzaComponent } from './components/PizzaComponent/PizzaComponent'
import './scss/app.scss'

//Data
import pizzas from './data/pizzas.json'
import { Sort } from './components/Sort/Sort'

function App() {
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
                        {pizzas.map((item) => (
                            <PizzaComponent key={item.id} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App

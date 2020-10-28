import React from 'react'
import './Body.css'
import Product from './Product/Product'
function Body() {
    return (
        <div className="body">
            <div className="body_items">
                <Product
                    key={1}
                    id={1}
                    title="mobile"
                    image="https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBOPPO-A12-3-GFUTU629745E657DA2D/1591384302184_0..png"
                    price={2000}
                    rating={3} />
                <Product
                    key={2}
                    id={2}
                    title="phone"
                    image="https://www.lg.com/in/images/mobile-phones/md06155757/gallery/Platinum_07-1100-V3.jpg"
                    price={2220} rating={5} />
                <Product
                    key={3}
                    id={3}
                    title="laptop"
                    image="https://c.s-microsoft.com/en-us/CMSImages/539_Panel1_Hero_Laptop.jpg?version=cad68625-15d0-ac6e-2b35-e73605f16acb"
                    price={456} rating={3} />
                <Product
                    key={4}
                    id={4}
                    title="desktop"
                    image="https://static.bhphoto.com/images/images2500x2500/1563193555_1492759.jpg"
                    price={23100} rating={3} />
                <Product
                    key={5}
                    id={5}
                    title="Spects"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQneA-go5sO1cdcNirtR80YiWvRApCyATwjZA&usqp=CAU"
                    price={2500} rating={5} />
                <Product
                    key={6}
                    id={6}
                    title="Table"
                    image="https://www.royaloakindia.com/thumbimages/ROYIND-royaloak-melbourne-coffee-table.jpg"
                    price={2500} rating={5} />
            </div>
        </div>
    )
}

export default Body

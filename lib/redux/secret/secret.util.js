export function addToBasket(products, newProduct) {
    const repeatedProduct = products.find(product => product.id === newProduct.id)

    if(repeatedProduct !== undefined) {
        return products.map(product => {
            if(product.id === repeatedProduct.id) {
                return {...product, 'count': repeatedProduct.count === undefined ? 1 : repeatedProduct.count + 1}
            }
        })
    } else {
        return [...products, newProduct]
    }
}

export function removeFromBasket(products, id) {
    return products.filter(product => product.id !== id)
}

export function decreaseFromBasket(products, id) {
    const decreasedProduct = products.find(product => product.id === id)

    if(decreasedProduct !== undefined) {
        if(decreasedProduct.count === undefined || decreasedProduct.count === 1) {
            return removeFromBasket(products, id)
        } else {
            return products.map(product => {
                if(product.id === id) return {...product, 'count': product.count - 1}
                else return product
            })
        }
    } else {
        return [...products]
    }
}
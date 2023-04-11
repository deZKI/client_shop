import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._tags = [
            {id: 1, name: 'Шапки'},
            {id: 2, name: 'Шапки'},
            {id: 3, name: 'Шапки'}
        ]
        this._products = [
            {
                name: "Product 1",
                id: 1,
                rating: 4.5,
                img_name: "product1.jpg"
            },
            {
                name: "Product 2",
                id: 2,
                rating: 3.8,
                img_name: "product2.jpg"
            },
            {
                name: "Product 3",
                id: 3,
                rating: 4.2,
                img_name: "product3.jpg"
            },
            {
                name: "Product 4",
                id: 4,
                rating: 4.9,
                img_name: "product4.jpg"
            }
        ]
        this._selectedTag = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setProducts(products) {
        this._products = products
    }

    setSelectedTags(tags) {
        this.setPage(1)
        this._selectedTag = tags
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    get tags() {
        return this._tags
    }

    get products() {
        return this._products
    }

    get selectedTag() {
        return this._selectedTag
    }

    get totalCount() {
        return this._totalCount
    }

    get page() {
        return this._page
    }

    get limit() {
        return this._limit
    }
}
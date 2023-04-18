import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._tags = []
        this._colors = []
        this._products = []
        this._selectedTag = {}
        this._page = 0
        this._totalCount = 0
        this._limit = 0
        this._price = 0
        makeAutoObservable(this)
    }

    setProducts(products) {
        this._products = products
    }

    setPrice(price) {
        this._price = price
    }

    setTags(tags){
        this._tags = tags
    }

    setColors(tags){
        this._colors = tags
    }

    setPage(page) {
        this._page = page
    }

    get tags() {
        return this._tags
    }

    get colors() {
        return this._colors
    }

    get price() {
        return this._price
    }

    get products() {
        return this._products
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
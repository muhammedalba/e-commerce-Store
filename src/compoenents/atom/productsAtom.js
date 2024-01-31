import { atom } from "recoil";



const productsAtom = atom({
        key:"productsAtom",
        default:[
            {id:1,title:"product1"},
            {id:2,title:"product2"},
            {id:3,title:"product3"},
            {id:4,title:"product4"}
        ]
    })
    export default productsAtom;
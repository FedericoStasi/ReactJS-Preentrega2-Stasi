const misProductos = [
    {id:1, nombre:"Les Paul",precio:5000,marca:"Gibson", img:"./public/img/lesPaul.jfif"},
    {id:2, nombre:"Stratocaster",precio:2500,marca:"Fender", img:"./public/img/lesPaul.jfif"},
    {id:3, nombre:"Sg",precio:3900,marca:"Gibson", img:"./public/img/lesPaul.jfif"},
    {id:4, nombre:"Telecaster",precio:4000,marca:"Fender", img:"./public/img/lesPaul.jfif"},
    {id:5, nombre:"Flying V",precio:2250,marca:"Gibson", img:"./public/img/lesPaul.jfif"},
    {id:6, nombre:"Jaguar",precio:1700,marca:"Fender", img:"./public/img/lesPaul.jfif"},
]

export const getProductos= () =>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(misProductos)
        },1500)
    })
}
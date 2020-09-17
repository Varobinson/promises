function timer() {
    return new Promise((resolve, reject)=>{
        const num = 42
        setTimeout(() =>{
            resolve(num)
        }, num)
    })
    .then((val) => {
        console.log(val)
    })

}

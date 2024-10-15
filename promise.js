const Promise=new Promise((resolve, reject) => {
    console.log("first");
    resolve("promise resolved");
    reject("promise rejected");
});
Promise.then(()=> {
    console.log("this is my promise");
}).catch())=>{
    console.log("this is my error page");
});
const postData = async (url, data) => { //Means that here will be some asinchronous code. async cannot be used without await and vice versa
    const res = await fetch(url, { //Here fetch will return some promise but will not complete, so we use await
        method: "POST",
        headers:{ 
            "Content-type": "application/json"
        },
        body: data
    } ); 
    // We dont know how much time, It will proccess the json data, so here we will use await to make code asynchronous (by standart it will wait 30 sec)
    return await res.json(); //res.json  will give error, so we have to change this func to synchronous code
};
  
async function getResource(url) { //Means that here will be some aschronous code. async cannot be used without await and vice versa
    let res = await fetch(url); //Here we only get data not post
    // The Problem is fetch won't stop if some error happens, fetch'll stop only when no connection or some critic errors
    // So, in this case we have to deal with that ourselves, with  ok and status props

    if(!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`); //Throws (Shows) an Error if smth happens
    }

    return await res.json();// Will return simple object why ???
}

export {postData};
export {getResource};
    const user = { name: 'Fluffykins' };

    // const zip = user.address.zip;

    // using logical operators 
    // const zip = 
    //     user &&
    //     user.address &&
    //     user.address.zip;

    // using ternary if-else
    // const zip = 
    //     user 
    //         ? undefined
    //         : user.address
    //             ? undefined
    //             : user.address.zip

    //using try and catch
    let zip
    try {
        zip = user.address.zip
    } catch (error) {
        zip = undefined
    }

    // const zip = user?.address?.zip; // doesn't break 

    console.log(zip); // undefined 
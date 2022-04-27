export const get = async () => {
    console.log('got a get');

    return {
        status: 200,
        body: {
            getMessage: Date.now(),
        },
    };
};

export const post = async () => {
    console.log('got a post');

    return {
        status: 201,
        body: {
            postMessage: Date.now(),
        },
    };
};

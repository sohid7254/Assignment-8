

const loader = async() => {
    await new Promise((resolve)=>setTimeout(resolve, 300))
    return null
};

export default loader;
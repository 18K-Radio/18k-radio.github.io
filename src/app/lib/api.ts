const url = "https://18k-radio.github.io/18K/18k-data.json"

const fetchData = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error);

    }
}

export { fetchData };
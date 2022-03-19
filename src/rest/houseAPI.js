const HOUSE_API = "https://ancient-taiga-31359.herokuapp.com/api/houses";

class HousesApi {
    get = async () => {
        try {
            const resp = await fetch(HOUSE_API);
        const data = await resp.json();
        return data;
        }
        catch(e) {
            console.log("Fetch houses has failed!", e)
        }
    }

    put = async (house) => {
        try {
            const resp = await fetch(`${HOUSE_API}/${house._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch(e) {
            console.log("Updating houses has failed!", e)
        }
        
    }
}

export const housesApi = new HousesApi();
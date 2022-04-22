import axios from "axios"

export const getPersons = async () => {

    try {
        let data = await axios.get("https://jsonplaceholder.typicode.com/users", {
            headers: {
                "Accept": "Aplication.json"
            }
        })
        
        return data
    } catch (err) {
        console.log(err.message)
    }

}
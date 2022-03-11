import axios from "axios";


export async function getAllKanji() {
 try {
     const response = await axios.get('https://kanjiapi.dev/v1/kanji/all')
     let data = response.data;
     /* console.log(data) */
     return data;
 } catch (error) {
    return "There was an error"
 }
}

export async function getKanji(kanji:string) {
    try {
        const response = await axios.get(`https://kanjiapi.dev/v1/kanji/${kanji}`)
        let result = response;
        console.log("the result", result)
        return result;
    } catch (error) {
        return "There was an error"
    }
}




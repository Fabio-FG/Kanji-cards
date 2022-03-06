import React, { useEffect, useState } from 'react';


const DetailsPage = ({kanjiId, data}:any) => {

 const [listItem, setlistItem] = useState("")
console.log("kanjiID", {kanjiId})
    useEffect(() => {
    
     setlistItem(kanjiId)
     console.log("listed Item", listItem)
    }, [])

return <p>item: {listItem}</p>

}

export default DetailsPage;
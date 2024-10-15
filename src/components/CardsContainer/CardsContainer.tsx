 import { useState } from "react"
 
 const CardsContainer:React.FC = () => {

    const [tutors, setTutors ] = useState(null)

    const getTutors = async () => {
        const response = await fetch("http://localhost:3000/tutors")
        const tutorData = await response.json();
        setTutors(tutorData)
        console.log(tutorData)
    }

getTutors();


return (
    <h1>{tutors}</h1>
)

}

export default CardsContainer
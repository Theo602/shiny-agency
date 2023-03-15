import { useContext } from "react";
import { SurveyContext } from "../../utils/context";

function Results(){
    
    const { answers } = useContext(SurveyContext);

    console.log('Resultat : ', answers);

    return(
        <div>
            <h1>Resultats</h1>
        </div>
    )
}

export default Results;
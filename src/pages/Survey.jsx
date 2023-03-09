import { useParams, Link } from "react-router-dom";

function Survey(){
    const { questionNumber } = useParams()
    const question = parseInt(questionNumber);
    const questionPrevious = question === 1 ? 1 : question - 1;
    const questionNext = question + 1;

    return(
        <div>
            <h1>Questionnaire</h1>
            <h2>Question { questionNumber }</h2>

            <Link to={`/survey/${questionPrevious}`}>Précédent</Link>

            {question === 10 ? 
                (<Link to="/results">Resultats</Link>)
                :
               ( <Link to={`/survey/${questionNext}`}>Suivant</Link>)
            }


        </div>
    )
}

export default Survey;
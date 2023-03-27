import { useTheme } from '../../utils/hooks';
import imageEmpty from '../../assets/img/empty.svg';
import {ContainerError, FirstTitle, FigureEmpty, ImgEmpty, SecondeTitle} from './EmptyListStyle';


function EmptyList(){

    const { theme } = useTheme();

    return(

        <ContainerError theme={theme}>

            <FirstTitle theme={theme}>Dommage...</FirstTitle>

            <FigureEmpty>
                <ImgEmpty src={imageEmpty} alt="Image de liste vide"/>
            </FigureEmpty>
            
            <SecondeTitle theme={theme}>Il semblerait que vous n’ayez besoin d’aucune compétence</SecondeTitle>

        </ContainerError>
    )
}

export default EmptyList;
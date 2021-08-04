import styled from "styled-components";
import {UserDetails} from "../../../store/userReducer/UserReducer";
import {useSelector} from "react-redux";
import {Store} from "../../../store/Store";
import {cryptoEnvironment} from "../../../environment/Env";
import {useHistory} from "react-router-dom";


const Div = styled.div`
    display: flex;
    flex-direction: column;
    width:120px;
    overflow:hidden;
    justify-content: center;
`
const ModuleDiv = styled.div`
  display: flex;
  width: 110px;
  height: 30px;
  transition: all .2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    color: ${cryptoEnvironment.styles.mainColor};
  }
`;
const Text = styled.p`
  cursor: default;
  font-size: 15px;
  margin-left: 5px;
`

export interface ModuleListDivProps{
}




export default (props:ModuleListDivProps)=>{
    const history = useHistory();
    const modules = useSelector((store:Store)=>{return store.userReducer.userDetails.modules})

    return (
        <Div>
            {
                modules.map((value:string, index) => {
                    const path:string = value.toLocaleLowerCase();
                    return (
                        <ModuleDiv key={index} onClick={()=>{history.push(`/crypto/${path}`)}}>
                            <Text>{value}</Text>
                        </ModuleDiv>
                    )
                })
            }
        </Div>
    )
}
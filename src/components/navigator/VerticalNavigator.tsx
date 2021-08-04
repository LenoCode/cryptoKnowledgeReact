import styled from "styled-components";
import {cryptoEnvironment} from "../../environment/Env";


export interface VerticalNavigatorItem{
    onClick:Function,
    name:string,
}


export interface VerticalNavigatorProps{
    items:Array<VerticalNavigatorItem>
}



const Div = styled.div`
    display: flex;
    padding-top:5px;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background: ${cryptoEnvironment.styles.mainColor};
    overflow: hidden;
`

const ItemDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30px;
  margin: 20px;
`

const Text = styled.p`
  color:white;
  font-weight: bold;
  font-size: 20px;
  transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.2);
    cursor:default;
  }
`


export default (props:VerticalNavigatorProps)=>{

    return (
        <Div>
            {
                props.items.map((value, index) => {
                    return <ItemDiv key={index}>
                                <Text>{value.name}</Text>
                           </ItemDiv>
                })
            }
        </Div>
    );

}
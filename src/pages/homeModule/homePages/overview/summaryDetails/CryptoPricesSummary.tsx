import styled from "styled-components";

export interface CryptoPricesSummary {

}

const BoxDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`



export default (props:CryptoPricesSummary)=>{

    return (
        <BoxDiv>
            <p>Crypto</p>
        </BoxDiv>
    )
}
import styled from "styled-components";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Store} from "../../../../../store/Store";
import {ActiveProcess} from "../../../../../store/processReducer/ProcessReducer";
import {CryptoRestClient} from "../../../../../utilz/rest/clients/CryptoRest";
import {dispatchActiveProcesses} from "../../../../../store/processReducer/ProcessDispatchFunction";

export interface ActiveProcessSummaryBoxProps{

}

const BoxDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 80%;
`
const Number = styled.h1`
    color:gray;
    font-size: 70px;
`
const TextNumber = styled.h1`
    color:black;
    font-size: 50px;
`
const RightDiv = styled.div`
  display: flex;
  width:30%;
  height: 100%;
`


function initActiveProcessNumber(dispatch:Function){

    CryptoRestClient.getEndPoints().getProcessHistory.get((response) => {
        dispatch(dispatchActiveProcesses(response))
    }, () => {

    }, {status: "ACTIVE"});
}



export default (props:ActiveProcessSummaryBoxProps)=>{
    const dispatch = useDispatch();
    const activeProcess:Array<ActiveProcess> = useSelector((store:Store)=>{return store.processReducer.activeProcesses})


    useEffect(() => {
        initActiveProcessNumber(dispatch);
    }, []);

    return (
        <BoxDiv>
            <LeftDiv>
                <Number>{activeProcess.length}</Number>
                <TextNumber>Active processes</TextNumber>
            </LeftDiv>

            <RightDiv>

            </RightDiv>
        </BoxDiv>
    );
}
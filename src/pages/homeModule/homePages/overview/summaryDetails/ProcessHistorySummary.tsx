import styled from "styled-components";
import {CryptoRestClient} from "../../../../../utilz/rest/clients/CryptoRest";
import {useEffect, useState} from "react";
import {CryptoGetRestProcessHistoryDetailsResponseDto} from "../../../../../utilz/rest/clients/CryptoRestDtos";
import { Table } from "antd";

export interface ProcessHistorySummary {

}

const BoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
  overflow: hidden;
`



const COLUMNS = [
    {
        title:'Name',
        dataIndex: 'name',
        key: 'name'

    },
    {
        title:'Status',
        dataIndex: 'status',
        key: 'status'

    },
    {
        title: 'Start time',
        dataIndex: 'startTime',
        key: 'startTime'

    },
    {
        title: 'End time',
        dataIndex: 'endTime',
        key: 'endTime'

    }
];

function initProcessHistory(setState:Function){
    // @ts-ignore
    CryptoRestClient.getEndPoints().getProcessHistory.get((response) => {
        // @ts-ignore
        response.map((value,index) => value.key=index)
        setState(response);
    }, () => {

    }, {});
}



export default (props:ProcessHistorySummary)=>{

    const [processHistoryList,setProcessHistoryList] = useState<Array<CryptoGetRestProcessHistoryDetailsResponseDto>>([])

    useEffect(()=>{
        initProcessHistory(setProcessHistoryList);
    },[])

    return (
        <BoxDiv>
            <Table dataSource={processHistoryList} columns={COLUMNS}/>
        </BoxDiv>
    );
}
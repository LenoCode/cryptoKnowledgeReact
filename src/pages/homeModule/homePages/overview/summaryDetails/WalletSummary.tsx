import styled from "styled-components";
import {CryptoRestClient} from "../../../../../utilz/rest/clients/CryptoRest";
import {useEffect, useState} from "react";
import {CryptoGetRestCryptoAssetsResponseDto} from "../../../../../utilz/rest/clients/CryptoRestDtos";
import {useDispatch, useSelector} from "react-redux";
import {ActiveProcess} from "../../../../../store/processReducer/ProcessReducer";
import {Store} from "../../../../../store/Store";
import {CryptoCurrenciesAssets} from "../../../../../store/assetReducer/AssetReducer";
import {dispatchCryptoAssets} from "../../../../../store/assetReducer/AssetDispatchFunction";
import { Table } from "antd";

export interface WalletSummaryProps {

}

const BoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const TextDiv=styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  flex:1;
  overflow: hidden;
`
const Text = styled.p`
  font-size:35px;
  color:black;
  margin-right: 20px;
  align-self: center;
`
const Number = styled.p`
  font-size: 30px;
  color: gray;
  align-self: center;
`

const BalancesDiv = styled.div`
  width: 97%;
  flex: 4;
  margin: 10px;`

const COLUMNS = [
    {
        title:'Asset',
        dataIndex: 'asset',
        key: 'asset'

    },
    {
        title:'Free',
        dataIndex: 'free',
        key: 'free'

    },
    {
        title: 'Locked',
        dataIndex: 'locked',
        key: 'locked'

    },
];


function initWalletSummaryProps(dispatch:Function){
    CryptoRestClient.getEndPoints().getCryptoAssets.get((response) => {
        dispatch(dispatchCryptoAssets(response))
        },
        ()=>{},
        {})
}


export default (props:WalletSummaryProps)=>{
    const dispatch = useDispatch();
    const cryptoCurrenciesAssets:CryptoCurrenciesAssets = useSelector((store:Store)=>{return store.assetReducer.cryptoCurrencies})

    useEffect(()=>{
        initWalletSummaryProps(dispatch);
    },[])

    return (
        <BoxDiv>
            <TextDiv>
                <Text>Total value in BTC: </Text>
                <Number>{cryptoCurrenciesAssets.totalValueInBtc}</Number>
            </TextDiv>

            <BalancesDiv>
                <Table columns={COLUMNS} dataSource={cryptoCurrenciesAssets.assets}/>
            </BalancesDiv>
        </BoxDiv>
    )
}
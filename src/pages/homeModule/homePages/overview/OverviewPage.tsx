import {ModuleViewControls} from "../../../../components/viewModuleManager/ViewModuleManagerType";
import {useContext, useEffect, useState} from "react";
import {ViewModuleManagerContext} from "../../../../components/viewModuleManager/ViewModuleManager";
import styled from "styled-components";
import {Button,Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import {HomeModuleContextProps} from "../../HomeModule";
import {UserDetails} from "../../../../store/userReducer/UserReducer";
import {Store} from "../../../../store/Store";
import SummaryBoxes, {BoxProps, GridProps} from "../../../../components/summaryBoxes/SummaryBoxes";
import ActiveProcessSummary from "./summaryDetails/ActiveProcessSummary";
import ProcessHistorySummary from "./summaryDetails/ProcessHistorySummary";
import WalletSummary from "./summaryDetails/WalletSummary";
import CryptoPricesSummary from "./summaryDetails/CryptoPricesSummary";

const Div = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const Content = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`



const gridProps:GridProps = {
        DivGrid:styled.div`
            grid-template-areas:
              "activeProcesses processHistory"
              "wallet  cryptoPrices";
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr;
        `
}
const boxProps:Array<BoxProps> = [
    {
        name:"activeProcesses",
        ComponentDiv:<ActiveProcessSummary/>
    },
    {
        name:"processHistory",
        ComponentDiv:<ProcessHistorySummary/>
    },
    {
        name:"wallet",
        ComponentDiv:<WalletSummary/>
    },
    {
        name:"cryptoPrices",
        ComponentDiv:<CryptoPricesSummary/>
    }
]



export default (props: ModuleViewControls) => {
    const history = useHistory();
    const dispatch = useDispatch();
    // @ts-ignore
    const contextProps: HomeModuleContextProps = useContext(ViewModuleManagerContext);
    const userDetails: UserDetails = useSelector((store: Store) => {
        return store.userReducer.userDetails
    });

    return (
        <Div>
            <Content>
                <SummaryBoxes gridProps={gridProps} boxProps={boxProps}/>
            </Content>

        </Div>
    );
};



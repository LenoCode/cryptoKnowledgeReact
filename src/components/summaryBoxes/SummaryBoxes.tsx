// @ts-ignore
// @ts-ignore

import styled from "styled-components";


export interface GridProps{
    DivGrid:any
}
export interface BoxProps{
    name:string,
    ComponentDiv:any

}

export interface SummaryBoxProps{
    gridProps:GridProps,
    boxProps:Array<BoxProps>
}


const createGrid = (props: GridProps) => {
    return styled(props.DivGrid)`
      display: grid;
      width: 100%;
      height: 100%;
    `
};

const createBox = (props:BoxProps)=>{
    return styled.div`
      grid-area: ${props.name};
      border: black 1px solid;
      margin: 5px;
    `
}


export default (props:SummaryBoxProps)=>{
    const Grid = createGrid(props.gridProps);

    return (
        <Grid>
            {
                props.boxProps.map((value, index) => {
                    const Box = createBox(value);
                    return (
                        <Box key={index}>
                            {value.ComponentDiv}
                        </Box>
                    )
                })
            }
        </Grid>

    );
}
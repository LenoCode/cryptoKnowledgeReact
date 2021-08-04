import {useContext, useEffect, useState} from "react";
import styled from "styled-components";
import {Button,Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";


export interface CircleItem{
    name:string,
    onClick : Function,
}
export interface CircleNavigationMenuProps{
    width:number,
    height:number,
    items:Array<CircleItem>
}

const Div = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const Content = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const GrayCircle = styled.div`
  position: relative;
  width:100px;
  height: 100px;
  border-radius: 100%;
  background: transparent;
`

const create = (x:any,y:any)=> {
    return styled.p`
      font-size: 15px;
      position: absolute;
      left: ${x}px;
      top: ${y}px;
    `;
}

function rotate(angleDegree:number,x:number,y:number,centerX:number,centerY:number){
    const angle = angleDegree * (Math.PI / 180);

    const unitVector = {
        x:x - centerX,
        y:y - centerY,
        magnitude:0,
    }
    unitVector.magnitude = ( Math.sqrt( Math.pow(unitVector.x,2) + Math.pow(unitVector.y,2) ))

    unitVector.x = unitVector.x / unitVector.magnitude;
    unitVector.y = unitVector.y / unitVector.magnitude;

    const _x = (((unitVector.x ) * Math.cos(angle)) - (unitVector.y) * Math.sin(angle)) * unitVector.magnitude;
    const _y = (((unitVector.y) * Math.cos(angle))+ (unitVector.x) * Math.sin(angle)) * unitVector.magnitude;

    return [_x+centerX,_y+centerY];
}

function onMenuCircleWheelScroll(event: React.WheelEvent<HTMLDivElement>, radius: any, items: Array<any>, setItems: Function) {
    items.map((value, index) => {
        const rotatedValues = rotate(10, value.x, value.y, 100, 100);
        value.x = rotatedValues[0];
        value.y = rotatedValues[1];
    });

    setItems([...items]);
}

function mapItemsToMenuObjects(props:CircleNavigationMenuProps):Array<any>{
    // @ts-ignore
    const objects = []
    let xInitial = props.width;
    let yInitial = 0;
    props.items.map((value, index) => {
        const object ={
            x: xInitial,
            y: yInitial,
            name: value.name,
            onClick: value.onClick
        };

        objects.push(object);

        const newValues = rotate(20,object.x,object.y,props.width/2,props.height/2);
        xInitial = newValues[0];
        yInitial = newValues[1];

    });
    // @ts-ignore
    return objects;
}

function createTextComponents(items: Array<any>):JSX.Element[]{
    const componentList: JSX.Element[] = []
    // eslint-disable-next-line array-callback-return
    items.map((value: any, index: number) => {
        const Text = styled.p`
          font-size: 15px;
          position: absolute;
          left: ${value.x}px;
          top: ${value.y}px;
          `;
        componentList.push( (<Text key={index}>{value.name}</Text>))
    })
    return componentList
}

function init(props:CircleNavigationMenuProps){
    const items = mapItemsToMenuObjects(props);
    return createTextComponents(items);
}

export default (props: CircleNavigationMenuProps) => {
    const Circle = styled.div`
      position: absolute;
      width: ${props.width}px;
      height: ${props.height}px;
      background: gray;
      border-radius: 100%;
    `;

    const center = {x:props.width/2,y:props.height/2};
    const [items,setItems] = useState(mapItemsToMenuObjects(props));
    const TextComponents = createTextComponents(items);
    return (
        <Div>
            <Content>
                <Circle onWheel={(event) => {onMenuCircleWheelScroll(event, center, items, setItems)}}>
                    {TextComponents}
                </Circle>
            </Content>

        </Div>
    );
};



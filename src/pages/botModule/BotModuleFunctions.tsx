
export function onMenuCircleWheelScroll(event: React.WheelEvent<HTMLDivElement>, menuItemPixels: any,setMenuItemPixels:Function) {

    console.log(event.pageX,event.pageY);
    const delta = (1/event.deltaY) * (Math.abs(event.deltaY)) * 10;
    menuItemPixels.angle = degrees_to_radians(delta);

    const newX = ( (menuItemPixels.x.UserPanel)*Math.cos(menuItemPixels.angle) - (menuItemPixels.y.UserPanel)*Math.sin(menuItemPixels.angle)  )
    const newY = ( (menuItemPixels.y.UserPanel) * Math.cos(menuItemPixels.angle) + (menuItemPixels.x.UserPanel) * Math.sin(menuItemPixels.angle))

    menuItemPixels.x.UserPanel = newX
    menuItemPixels.y.UserPanel = newY

    setMenuItemPixels({...menuItemPixels});
}


function degrees_to_radians(degrees:any)
{
    var pi = Math.PI;
    return degrees * (pi/180);
}
import React, { Component } from 'react';
import { View, Text, ART } from 'react-native';

const {
  Group,
  Shape,
  Surface,
} = ART;


var point = { x: 0, y: 0 }

class MarkerLine extends Component {


  constructor(props) {
    super(props);
  }

  _calculatePath = (startingPoint = { x: 100, y: 100 }, endingPoint = { x: 150, y: 400 }) => {
    let dx = endingPoint.x - startingPoint.x
    let dy = endingPoint.y - startingPoint.y
  
    // DRAWING ARROW
    //'M100 200 L110 210 L100 220'
    let arrowCenterPoint = `${endingPoint.x} ${endingPoint.y}`//"110 210"
    var arrowStartPoint = `${endingPoint.x - 10} ${endingPoint.y - 10}`//"100 200"
    var arrowEndPoint = `${endingPoint.x - 10} ${endingPoint.y + 10}`//"100 220"
    
    // composing arrow path eg: 'M100 200 L110 210 L100 220'
    this.arrowPath = `M${arrowStartPoint} L${arrowCenterPoint} L${arrowEndPoint}`

    //DRAWING CURVE LINE
    //"M110 210 H90 C80 210, 50 210, 50 180 V20"
    
    startPoint = arrowCenterPoint
    let controlPoint1 = `${endingPoint.x - dx} ${endingPoint.y}`
    let controlPoint2 = `${endingPoint.x - dx - 30} ${endingPoint.y}`
    let controlPoint3 = `${endingPoint.x - dx - 30} ${endingPoint.y - 50}`
    
    this.linePath = `M${startPoint} H${endingPoint.x - dx + 10} C${controlPoint1}, ${controlPoint2} ${controlPoint3} V${startingPoint.y}`
  }

  render() {
    
    var { startingPoint, endingPoint } = this.props;  
    this._calculatePath(startingPoint, endingPoint);

    return (
      <View>
        <Surface width={500} height={500}>
          <Group x={100} y={0}>
            <Shape
              d={this.arrowPath}
              stroke="#000"
              strokeWidth={1}/>
            <Shape
              d={this.linePath}
              stroke="#000"
              strokeWidth={1}/>
          </Group>
        </Surface>
      </View>
    );
  }

}

export default MarkerLine;

import styled, { keyframes } from "styled-components";

const rotate = (x, y) => keyframes`
    0%{
        -ms-transform: rotate(${x}deg);
        -moz-transform: rotate(${x}deg);
        -webkit-transform: rotate(${x}deg);
        -o-transform: rotate(${x}deg);
        transform: rotate(${x}deg);
    }
    50%{
        -ms-transform: rotate(${y}deg);
        -moz-transform: rotate(${y}deg);
        -webkit-transform: rotate(${y}deg);
        -o-transform: rotate(${y}deg);
        transform: rotate(${y}deg);
    }
    100%{
        -ms-transform: rotate(${x}deg);
        -moz-transform: rotate(${x}deg);
        -webkit-transform: rotate(${x}deg);
        -o-transform: rotate(${x}deg);
        transform: rotate(${x}deg);
    }
`;

const Rotate = styled.span`
    -webkit-animation: ${(props) => rotate(props.x, props.y)} 2s ease-in-out infinite;
    -moz-animation: ${(props) => rotate(props.x, props.y)} 2s ease-in-out infinite;
    -ms-animation: ${(props) => rotate(props.x, props.y)} 2s ease-in-out infinite;
    -o-animation: ${(props) => rotate(props.x, props.y)} 2s ease-in-out infinite;
    animation: ${(props) => rotate(props.x, props.y)} 2s ease-in-out infinite;

`;

const compass = [
    {
        name: 'N',
        x: -23,
        y: 11
    },
    {
        name: 'NNE',
        x: 11,
        y: 33
    },
    {
        name: 'NE',
        x: 33,
        y: 56
    },
    {
        name: 'ENE',
        x: 56,
        y: 78
    },
    {
        name: 'E',
        x: 78,
        y: 101
    },
    {
        name: 'ESE',
        x: 101,
        y: 123
    },
    {
        name: 'SE',
        x: 123,
        y: 146
    },
    {
        name: 'SSE',
        x: 146,
        y: 168
    },
    {
        name: 'S',
        x: 168,
        y: 191
    },
    {
        name: 'SSW',
        x: 191,
        y: 213
    },
    {
        name: 'SW',
        x: 213,
        y: 236
    },
    {
        name: 'WSW',
        x: 236,
        y: 258
    },
    {
        name: 'W',
        x: 258,
        y: 281
    },
    {
        name: 'WNW',
        x: 281,
        y: 303
    },
    {
        name: 'NW',
        x: 303,
        y: 326
    },
    {
        name: 'NNW',
        x: 326,
        y: 348
    }
]

function Compass({today}) {
    let res = compass.filter(f => f.name === today.wind_direction_compass)
    let result = res[0]

  return (
    <Rotate className='material-icons' x={result.x} y={result.y}>
      navigation
    </Rotate>
  );
}

export default Compass;

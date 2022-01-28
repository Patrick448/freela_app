import Colors from '../constants/Colors';
import {Svg, Path, Defs, LinearGradient, Stop, Rect, ClipPath, Circle} from 'react-native-svg';
import { Dimensions } from 'react-native';


const size = (Dimensions.get('window').width - 75.2)/2; 

export const TabBg= ({      
    color = '#FFFFFF',      
    ...props      
  }) => {      
    return (      
      <Svg
      
        width={1000}      
        height={61}      
        viewBox="0 0 1000 50"      
        {...props} >   
        <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                <Stop offset="0" stopColor={Colors.secondaryColor} stopOpacity="1" />
                <Stop offset="1" stopColor={Colors.primaryColor} stopOpacity="1" />
            </LinearGradient>
            <ClipPath id="clip" >
                    <Rect
                    x="0"
                    y="0"
                    width={size}
                    height="100%"
                  
                />   
                { /*<Circle fill="black" cx="130" cy="50%" r="30" />*/}
                <Path
                    x={size} 
                    d="M 75.2 0 v 61 H 0 V 0 
                        c 4.1 0 7.4 3.1 7.9 7.1
                        C 10 21.7 22.5 33 37.7 33 
                        c 15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1 h-.1 z"      
                          
                />

                <Rect
                    x={size+75.2}
                    y="0"
                    width={size}
                    height="100%"
                   
                /> 
            </ClipPath>
         
        </Defs>

        <Rect
            clipPath="url(#clip)"
            x="0"
            y="0"
            width={size*2 + 75.2}
            height="100"
            fill="url(#grad)"
        />  
        {/*<Path      
          d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"      
          fill="url(#grad)"      
        />   */ }  
      </Svg>      
    )      
  };
import React, { Component } from 'react'

class ButtonRL extends Component {
   
    render() {
        var styles={
            position:'fixed',                                  
            bottom:'80px',
            left:'90%'
            

        }
        var simbolo='>'
        if(this.props.dir==="izquierdo"){
            styles.left='2%'
            simbolo='<'
        }
        
        
        return (
            
            <div  >
                <button style={styles}>{simbolo}</button>
            </div>
        )
    }
}

export default ButtonRL


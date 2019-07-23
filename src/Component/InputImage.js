import React from 'react';
import image from "./img.jpg"

const InputImage= () => {
    return (
        <div>
             <img src={image} width="100px" height="100px"alt='not found'/>
            {/* <form>
                <center>
                    <fieldset>
                        <img src="../fabian-grohs.jpg" width="100px" height="100px"alt='not found'/>
                        <h2>FabianGorhs</h2>
                        <p style={{fontSize:"250px",zindex:"100",fontWeight:"bold"}}>laptop computer showing codes</p>
                        </fieldset>
                        </center>
            </form> */}
        </div>
    );
};

export default InputImage;
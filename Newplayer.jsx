import { useState } from 'react';
function Newplayer({addnewPlayer,player}){
        const [value, setValue] = useState('');
    
        const add = () => {
            if (value == '') {
                alert('Please Enter the value');
                return;
            }
    
            addnewPlayer(value);
    
            setValue('');
        };
    
        console.log("Child List",player)
        return (
            <div className='add-player-form'>
                    <input type="text" 
                    onChange={(e) => { setValue(e.target.value);}
                } value={value} />
                <button onClick={add} type="text" value="Add Player">Submit</button>
            </div>
        );
}
export default Newplayer
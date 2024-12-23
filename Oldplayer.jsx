function Oldplayer({players}){
return(
    <div className="players">
    <div className="player">
        <div className="player-name"><a className="remove-player">X </a>jim
        </div>
        <div className="player-score">
            <div className="counter">
                <div className="counter-score">31</div>
            </div>
        </div>
    </div>
    <div className="player">
        <div className="player-name"><a className="remove-player">X
            </a>Chandu</div>
        <div className="player-score">
            <div className="counter">
                <div className="counter-score">20</div>
            </div>
        </div>
    </div>
    <div className="player">
        <div className="player-name"><a className="remove-player">X </a>Brek
        </div>
        <div className="player-score">
            <div className="counter">
                <div className="counter-score">25</div>
            </div>
        </div>
    </div>
    {
            players.map ((player) => {
                return (
                <div className='player' key={player}>
                <div className='player-name'>
                    <a className='remove-player'>X</a>
                    {player}
                </div>
                </div>
                )
            })
            
        }
</div>
)
};
export default Oldplayer
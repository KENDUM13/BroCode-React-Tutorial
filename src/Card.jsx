import profilePic from './assets/kendum.png'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>DUM's note</h2>
            <p className='card-text'>I practice react</p>
        </div>
    )
}

export default Card
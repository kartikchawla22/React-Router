import './home-page.css';
import profileImage from '../../Assets/images/Kartik_Chawla_original.jpg';


function HomePage() {
    console.log("here")
    return (
        <div className="home-container">

            <img className="profile-picture" src={profileImage} alt="Profile Image" />
            <div className="details-container">
                <div className="details">
                    <span className="key">Name: </span>
                    <span className="value">Kartik Chawla</span>
                </div>
                <div className="details">
                    <span className="key">Student ID: </span>
                    <span className="value">200504265</span>
                </div>
                <div className="details">
                    <span className="key">Course: </span>
                    <span className="value">Mobile Applications Development</span>
                </div>
                <div className="details">
                    <span className="key">Subject: </span>
                    <span className="value">Mobile Web Applications</span>
                </div>
            </div>
        </div>
    )
}

export default HomePage
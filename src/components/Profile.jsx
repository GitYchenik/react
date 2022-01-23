import React from 'react';
import classes from './style/Profile.module.css'
//основная страница правая нижняя 
const Profile = () => {
    return (
        <div className={classes.content}>
            <img src='https://sun9-35.userapi.com/yqDTUSL01tK_rlXAoJlI7lKESP82QBdS9uZVWA/DP8DugK6zYs.jpg'></img>

            <div>Avatar+description</div>
            <div>My post</div>
            <div>New post</div>
            <div className={classes.item}>post1</div>
            <div>post2</div>
            <div>post3</div>
        </div>
    )
}

export default Profile;
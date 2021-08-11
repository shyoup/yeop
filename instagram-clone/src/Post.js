import React from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'

function Post() {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt="hyeop_92"
                    src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/201111416_208072207837303_993554199430242986_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=qy00gAkB3QsAX_eUqYY&edm=AP_V10EBAAAA&ccb=7-4&oh=e6e6b21cd528e189ab919e86a150a31e&oe=611B6432&_nc_sid=4f375e"
                ></Avatar>
                <h3>Username</h3>
            </div>
            {/* header -> avatar + username */}

            <img className="post__image" src="https://wallpaper.dog/large/10882397.jpg"/>
            {/* image */}
            <h4 className="post__text"><strong>hyeop_92</strong>shyoup </h4>
            {/* username + caption */}
        </div>
    )
}

export default Post
import React from 'react'
//Contact Page

class Contact extends React.Component{
    render(){
        return(
            <div id='contact'>
               <h1>
                If you would like to get in contact with me, Just click on the social media below!
                </h1>
                <ul>
                    <a href="https://github.com/Thomas-Muscarello">
                        <img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="HTML tutorial" class="social_media">
                        </img>
                    </a>
                    <a href="https://www.linkedin.com/in/tmuscarello/">
                        <img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG38.png" alt="HTML tutorial" class="social_media">
                        </img>
                    </a>
                    <a href="https://www.youtube.com/channel/UC4OeBnWMMThkJI4yoNeZdXQ">
                        <img src="https://i.pinimg.com/originals/09/f4/72/09f4726125ab5fa8cbcf754b9ba07e7c.jpg" alt="HTML tutorial" class="social_media">
                        </img>
                    </a>

                </ul>
                

               
            </div>
        )
    }
}

export default Contact
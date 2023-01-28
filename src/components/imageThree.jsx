import '../assets/css/image-Three.css'
export function ImageThree(){
    return(
        <div>
         <div className='imageDiv'>
            <div className='ImgHeadlineThree'>
                <img src={require("../assets/images/logo-privacy.png")} alt="" width="230" height="55" />
                <h3>How iPhone helps</h3>
                <h3>protect your privacy</h3><br />
                <h4>Watch the film</h4>
               
            </div>
            <div>
                <figure className="imageThree">
                </figure>
            </div>
         </div>
        </div>
    )
}

import fan_img_1 from './images/fan_1.png'

const Fan = () => {
  return (
    <div className='fan'>
        <div className='fan_content'>
            <div className='fan_content_img'>
                <div className='fan_content_img_content'>
                <img src={fan_img_1} alt='fan_img_1' />
                </div>
            </div>
            <div className='fan_content_text'>
                <div className='fan_content_text_content'>
                    <h3>Connect With Creators, Fans, & Friends</h3>
                    <p>Direct messages, reactions, and comments are just a few ways to make new friends on Lava</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fan
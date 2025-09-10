import qr_0 from './images/qr_0.png'

const Download = () => {
  return (
    <div className='download'>
        <div className='download_content'>
            <div className='download_content_img'>
                <div className='download_content_img_content'>
                    <img src={qr_0} alt='download_img' />
                    <p>Lava on iOS</p>
                    <p>Scan or Tap</p>
                </div>
            </div>
            <div className='download_content_title'>
                <div className='download_content_title_content'>
                    <h1>So what are you waiting for?</h1>
                    <p>Download the Lava mobile app to snag a cool username before your mom finds out that we exist</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Download
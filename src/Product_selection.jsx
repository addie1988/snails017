import { useState, useEffect, useRef } from "react";
import music_1 from "./images/music_1.png";
import featured_img_1 from "./images/featured_1.png";
import featured_img_2 from "./images/featured_2.png";
import featured_img_3 from "./images/featured_3.png";
import featured_img_4 from "./images/featured_4.png";
import featured_img_5 from "./images/featured_5.png";
import featured_img_6 from "./images/featured_6.png";
import broadcast_img_1 from "./images/broadcast_1.png";
import Fan from "./Fan";


const Product_selection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const carouselRef = useRef(null);
  const animationRef = useRef(null);

  // 建立基礎圖片陣列
  const baseImages = [
    featured_img_1,
    featured_img_2,
    featured_img_3,
    featured_img_4,
    featured_img_5,
    featured_img_6,
  ];
  // 創建三組圖片陣列以實現無縫循環
  const images = Array(100).fill(baseImages).flat(); // 無限組圖片

  useEffect(() => {
    let lastTimestamp = 0;
    const animationSpeed = 0.002; // 降低動畫速度

    const animate = (timestamp) => {
      if (!isHovered) {
        const deltaTime = timestamp - lastTimestamp;
        lastTimestamp = timestamp;

        setCurrentPosition((prevPosition) => {
          let newPosition = prevPosition + deltaTime * animationSpeed;

          // 當播放到第二組結束時，無縫重置到第一組的相同位置
          if (newPosition >= 100) {
            newPosition = 0;
          }

          return newPosition;
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered]);

  return (
    <div className="product_selection">
      <div className="product_selection_content">
        <div className="music">
          <div className="music_content">
            <div className="music_content_img">
              <div className="music_content_img_content">
                <img src={music_1} alt="music_img" />
              </div>
            </div>
            <div className="music_text">
              <div className="music_text_content">
                <h3>Discover Social Audio</h3>
                <p>
                  Listen to clips, posts, and podcasts on your personalized feed
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="featured">
          <div className="featured_content">
            <div className="featured_content_img">
              <div
                className="featured_content_img_content"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="carousel_container">
                  <div
                    ref={carouselRef}
                    className="carousel_track js-infinite-scroll"
                    style={{
                      transform: `translateX(-${currentPosition}%)`,
                      transition: "transform linear",
                    }}
                  >
                    {images.map((img, index) => (
                      <div key={index} className="carousel_item">
                        <img
                          src={img}
                          alt={`featured_img_${(index % 6) + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="featured_content_text">
              <div className="featured_content_text_content">
                <h3>FeatCurate Playlistsured</h3>
                <p>Organize posts to put your own spin on trends and topics</p>
              </div>
            </div>
          </div>
        </div>
        <div className="broadcast">
          <div className="broadcast_content">
            <div className="broadcast_content_img">
              <div className="broadcast_content_img_content">
                <img src={broadcast_img_1} alt="broadcast_img" />
              </div>
            </div>
            <div className="broadcast_content_text">
              <div className="broadcast_content_text_content">
                <h3>Voice Your Ideas</h3>
                <p>Share your conversations with the world through the authenticity of audio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Fan />
    </div>
  );
};

export default Product_selection;

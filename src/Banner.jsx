import { useState, useEffect } from 'react';
import banner_img_4 from "./images/banner_img_4.png";
import banner_img_5 from "./images/banner_img_5.png";
import banner_img_6 from "./images/banner_img_6.png";
import banner_img_7 from "./images/banner_img_7.png";
import banner_img_8 from "./images/banner_img_8.png";


const Banner = () => {
  const [, setScrollY] = useState(0); // 移除未使用的 scrollY 變數
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // 螢幕尺寸檢測
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setIsTablet(width > 768 && width <= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // 觸控優化 - 為手機端添加觸控事件
  useEffect(() => {
    if (isMobile) {
      const handleTouchStart = () => { // 移除未使用的 e 參數
        // 在手機端，觸控時也觸發擴散效果
        setIsScrollingDown(true);
      };

      const handleTouchEnd = () => {
        // 觸控結束時收回
        setTimeout(() => {
          setIsScrollingDown(false);
        }, 1000);
      };

      const imageList = document.querySelector('.main_image_list');
      if (imageList) {
        imageList.addEventListener('touchstart', handleTouchStart, { passive: true });
        imageList.addEventListener('touchend', handleTouchEnd, { passive: true });
        
        return () => {
          imageList.removeEventListener('touchstart', handleTouchStart);
          imageList.removeEventListener('touchend', handleTouchEnd);
        };
      }
    }
  }, [isMobile]);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setScrollY(currentScrollY);
          
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsScrollingDown(true);
          } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
            setIsScrollingDown(false);
          }
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  return (
    <div className='banner'>
        <div className='banner_content'>
            <div className='banner_img'>
                <div className='banner_img_content'>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <p>FIND YOUR VOICE</p>
                </div>
            </div>
            <div className='banner_text'>
                <div className='banner_text_content'>
                    <h1>Audio has never been this social</h1>
                    <p>Create, curate, & discover stories from around the world on Lava</p>
                    <a href="#">Get The App</a>
                </div>
            </div>
            <div className='main_image'>
                <div className='main_image_content'>
                    <ul className={`main_image_list ${isScrollingDown ? 'fan-spread' : 'fan-gather'} ${isMobile ? 'mobile' : ''} ${isTablet ? 'tablet' : ''}`}>
                        <li className="image-item fan-item-1" style={{ 
                          transform: `translate(${isScrollingDown ? (isMobile ? '-60px' : isTablet ? '-80px' : '-100px') : '0px'}, ${isScrollingDown ? (isMobile ? '-45px' : isTablet ? '-60px' : '-75px') : '0px'}) rotate(${isScrollingDown ? (isMobile ? '-15deg' : isTablet ? '-20deg' : '-25deg') : '0deg'})`,
                          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s'
                        }}>
                          <img src={banner_img_4} alt="banner_img_4" />
                        </li>
                        <li className="image-item fan-item-2" style={{ 
                          transform: `translate(${isScrollingDown ? (isMobile ? '-30px' : isTablet ? '-40px' : '-50px') : '0px'}, ${isScrollingDown ? (isMobile ? '-60px' : isTablet ? '-80px' : '-100px') : '0px'}) rotate(${isScrollingDown ? (isMobile ? '-8deg' : isTablet ? '-10deg' : '-12deg') : '0deg'})`,
                          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
                        }}>
                          <img src={banner_img_5} alt="banner_img_5" />
                        </li>
                        <li className="image-item fan-item-3" style={{ 
                          transform: `translate(${isScrollingDown ? (isMobile ? '0px' : isTablet ? '0px' : '0px') : '0px'}, ${isScrollingDown ? (isMobile ? '-30px' : isTablet ? '-40px' : '-50px') : '0px'}) rotate(${isScrollingDown ? '0deg' : '0deg'})`,
                          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}>
                          <img src={banner_img_6} alt="banner_img_6" />
                        </li>
                        <li className="image-item fan-item-4" style={{ 
                          transform: `translate(${isScrollingDown ? (isMobile ? '30px' : isTablet ? '40px' : '50px') : '0px'}, ${isScrollingDown ? (isMobile ? '-60px' : isTablet ? '-80px' : '-100px') : '0px'}) rotate(${isScrollingDown ? (isMobile ? '8deg' : isTablet ? '10deg' : '12deg') : '0deg'})`,
                          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
                        }}>
                          <img src={banner_img_7} alt="banner_img_7" />
                        </li>
                        <li className="image-item fan-item-5" style={{ 
                          transform: `translate(${isScrollingDown ? (isMobile ? '60px' : isTablet ? '80px' : '100px') : '0px'}, ${isScrollingDown ? (isMobile ? '-45px' : isTablet ? '-60px' : '-75px') : '0px'}) rotate(${isScrollingDown ? (isMobile ? '15deg' : isTablet ? '20deg' : '25deg') : '0deg'})`,
                          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
                        }}>
                          <img src={banner_img_8} alt="banner_img_8" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
import { useState, useEffect } from 'react';
import story_img_1_1 from "./images/story_1_1.png";
import story_img_1_2 from "./images/story_2_1.png"; 
import story_img_3_1 from "./images/story_3_1.png";
import Download from './Download'

const Story = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.story_1, .story_2, .story_3');
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;
        const windowHeight = window.innerHeight;

        // 當區塊進入視窗範圍時
        if (sectionTop < windowHeight * 0.75 && sectionBottom > windowHeight * 0.25) {
          section.style.opacity = '1';
          section.style.transform = 'translateY(0)';
          
          // 為內容添加動畫
          const content = section.querySelector('.story_1_content, .story_2_content, .story_3_content');
          if (content) {
            content.style.opacity = '1';
            content.style.transform = 'translateY(0)';
          }
          
          setActiveSection(index);
        } else {
          section.style.opacity = '0';
          section.style.transform = 'translateY(100px)';
          
          const content = section.querySelector('.story_1_content, .story_2_content, .story_3_content');
          if (content) {
            content.style.opacity = '0';
            content.style.transform = 'translateY(50px)';
          }
        }
      });
    };

    // 初始化樣式
    const sections = document.querySelectorAll('.story_1, .story_2, .story_3');
    sections.forEach(section => {
      section.style.transition = 'all 0.8s ease-out';
      section.style.opacity = '0';
      section.style.transform = 'translateY(100px)';
      
      const content = section.querySelector('.story_1_content, .story_2_content, .story_3_content');
      if (content) {
        content.style.transition = 'all 1s ease-out 0.3s';
        content.style.opacity = '0';
        content.style.transform = 'translateY(50px)';
      }
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始執行一次

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>   
      <div className="story">
        <div className="story_content">
          <div className="story_1">
            <div className="story_1_content">
              <div className="story_1_content_text">
                <div className="story_1_content_text_content">
                  <h1>Hear Cool Stories</h1>
                  <p>Your personalized feed recommends audio clips based on things you care about whether that's a recap of last nights game, a breakdown of your favorite musician's album, or the latest news in tech.</p>
                </div>
              </div>
              <div className="story_1_content_img">
                <div className="story_1_content_img_content">
                  <img src={story_img_1_1} alt="story_img_1_1" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="story_2">
            <div className="story_2_content">
              <div className="story_2_content_img">
                <div className="story_2_content_img_content">
                  <img src={story_img_1_2} alt="story_img_1_2" />
                </div>
              </div>
              <div className="story_2_content_text">
                <div className="story_2_content_text_content">
                  <h1>Be a Trendsetter</h1>
                  <p>Explore what's happening in the world through popular hashtags then record your opinions by yourself or with friends to become a thought leader in the conversation.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="story_3">
            <div className="story_3_content">
              <div className="story_3_content_text">
                <div className="story_3_content_text_content">
                  <h1>Build Your Audience</h1>
                  <p>Start a podcast without any equipment, experience, or expertise. Lava empowers you to record your conversations, share them with your followers, then add them to playlists. Lava is what podcasting should be: easy.</p>
                </div>
              </div>
              <div className="story_3_content_img">
                <div className="story_3_content_img_content">
                  <img src={story_img_3_1} alt="story_img_3_1" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="story_4">
            <Download />
          </div>
        </div>
      </div>
    </>
  );
}

export default Story;

import React, { useState } from 'react';

const App = () => {
    const [showProducts, setShowProducts] = useState(false);

    const handleMouseEnter = () => {
        setShowProducts(true);
    };

    const handleMouseLeave = () => {
        setShowProducts(false);
    };

    return (
        <div>
            <header>
                <div className="nav-buttons">
                    <button>Home</button>
                    <div
                        className="product-button"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button>
                            Products <span style={{ cursor: 'pointer' }}>▼</span>
                        </button>
                        {showProducts && (
                            <div className="product-dropdown">
                                <ul>
                                    <li>Product 1</li>
                                    <li>Product 2</li>
                                    <li>Product 3</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <button>Pricing</button>
                </div>

                <div className="user-profile">
                    <img
                        src="https://thumbs.dreamstime.com/b/profile-pic-icon-isolated-white-background-your-web-mobile-app-design-133862807.jpg"
                        alt="User Avatar"
                        className="avatar"
                    />
                    <span className="username">Chinmay</span>
                </div>
            </header>

            <main>
                <h1>Beautiful analytics to grow smarter</h1>
                <p className="subheading">
                    Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                </p>

                <div className="action-buttons">
                    <button className="demo-btn">Demo</button>
                    <button className="signup-btn">Sign Up</button>
                </div>

                <div className="image-container">
                    <img
                        src="https://hoist.digital/user/pages/06.content/blog/how-to-grow-your-business-with-google-analytics/How_to_grow_your_business_with_Google_Analytics_Browser_Click_on_Tech.png"
                        alt="How to grow your business with Google Analytics"
                        className="promo-image"
                    />
                </div>

                <p className="footer-text">Join 4,000+ companies ready growing</p>

                {/* Platform Logos Section */}
                <div className="platform-section">
                    <div className="platform-item">
                    <img src="/images\boltshift.png" alt="" className="platform-logo"/>
                        <span>Boltshift</span>
                    </div>
                    <div className="platform-item">
                    <img src="/images/images.png" alt="" className="platform-logo"/>
                        <span>Lightbox</span>
                    </div>
                    <div className="platform-item">
                    <img src="/images/feather_dev.png" alt="" className="platform-logo"/>
                        <span>FeatherDev</span>
                    </div>
                    <div className="platform-item">
                    <img src="/images/sphe.png" alt="" className="platform-logo"/>
                        <span>Spherule</span>
                    </div>
                    <div className="platform-item">
                    <img src="/images/global.png" alt="" className="platform-logo"/>
                        <span>GlobalBank</span>
                    </div>
                    <div className="platform-item">
                    <img src="/images/Instagram_logo_2022.svg.webp" alt="" className="platform-logo"/>
                        <span>Instagram</span>
                    </div>
                    <div className="platform-item">
                    <img src="/images/linkedin.png" alt="" className="platform-logo"/>
                        <span>Linkedin</span>
                    </div>
                </div>   
                <p className="subheading1">Features</p>   

                <h2 className="fea">Analytics that feels like it's from the future</h2> 
                <p className="subheading3">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. 
                                        Trusted by over 4,000 startups.</p>
                                        <div className="features-row">
  <div className="feature">
    
    <img src="https://cdn.prod.website-files.com/64c3d4eb4782619c91c82cad/64c3e0641b5a21af97cb4a14_logo-03.png" alt="Spherule" className="platform-logo" />
    <h2>Share team inboxes</h2>
    <p>
      Whether you have a team of 2 or 200, our shared team inboxes keep everyone
      on the same page and in the loop.
    </p>
  </div>
  <div className="feature">
  
  <img src="https://cdn.prod.website-files.com/64c3d4eb4782619c91c82cad/64c3e0641b5a21af97cb4a14_logo-03.png" alt="Spherule" className="platform-logo" />
    <h2>Deliver instant answers</h2>
    <p>
      An all-in-one customer service platform that helps you balance everything
      your customers need to be happy.
    </p>
  </div>
  <div className="feature">

  <img src="https://cdn.prod.website-files.com/64c3d4eb4782619c91c82cad/64c3e0641b5a21af97cb4a14_logo-03.png" alt="Spherule" className="platform-logo" />
    <h2>Manage your team with reports</h2>
    <p>
      Measure what matters with Untitled's easy-to-use reports. You can filter,
      export, and drill down on the data in a couple of clicks.
    </p>
  </div>
</div>
<div className="features-row">
  <div className="feature">
    
    <img src="https://cdn.prod.website-files.com/64c3d4eb4782619c91c82cad/64c3e0641b5a21af97cb4a14_logo-03.png" alt="Spherule" className="platform-logo" />
    <h2>Connect with customers
    </h2>
    <p>
    Solve a problem or close a sale in real-time with chat if no one is available, customers are seamlessly routed to email without confusion.
    </p>
  </div>
  <div className="feature">
  
  <img src="https://cdn.prod.website-files.com/64c3d4eb4782619c91c82cad/64c3e0641b5a21af97cb4a14_logo-03.png" alt="Spherule" className="platform-logo" />
    <h2>Connect the tools you already use
    </h2>
    <p>
      
Explore 100+ integrations that make your day-to-day workflow more efficient and familiar Plus, our extensive developer tools.

    </p>
  </div>
  <div className="feature">

  <img src="https://cdn.prod.website-files.com/64c3d4eb4782619c91c82cad/64c3e0641b5a21af97cb4a14_logo-03.png" alt="Spherule" className="platform-logo" />
    <h2>Our people make the difference
    </h2>
    <p>
      
We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help
    </p>
  </div>
</div>

<div className="sisyphus-container">
    <img src="/images/sisy.png" alt="Nietzsche" className="feature-logo" />
    <p className="subheading1">Sisyphus</p>
</div>
<h2 className="hello">We've been using Untitled to kick start every new project and can't imagine working without it.</h2>

<img src="/images/user_profile.png" alt="Nietzsche" className="user_profile" />

<p className='user'>Chinmay</p>
<p className='user1'>Web Dev , Zysk Tech</p>

<p className="subheading1">Features</p>
<h2 className="hey">Cutting-edge features for advanced analytics.</h2>
<p className="subheading4">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. 
                                        Trusted by over 4,000 startups.</p>
                                        <img src="/images/analyst.jpg" alt="Nietzsche" className="analyst" />
                                        <div className="features-row">
  <div className="feature">
    
    <img src="https://cdn.prod.website-files.com/64c3d4eb4782619c91c82cad/64c3e0641b5a21af97cb4a14_logo-03.png" alt="Spherule" className="platform-logo" />
    <h2>Share team inboxes</h2>
    <p>
      Whether you have a team of 2 or 200, our shared team inboxes keep everyone
      on the same page and in the loop.
    </p>
    <button className="learn-btn">Learn more</button>
  </div>
  <div className="feature">
  
  <img src="https://cdn.prod.website-files.com/64c3d4eb4782619c91c82cad/64c3e0641b5a21af97cb4a14_logo-03.png" alt="Spherule" className="platform-logo" />
    <h2>Deliver instant answers</h2>
    <p>
      An all-in-one customer service platform that helps you balance everything
      your customers need to be happy.
    </p>
    <button className="learn-btn">Learn more</button>
  </div>
  <div className="feature">

  <img src="https://cdn.prod.website-files.com/64c3d4eb4782619c91c82cad/64c3e0641b5a21af97cb4a14_logo-03.png" alt="Spherule" className="platform-logo" />
    <h2>Manage your team with reports</h2>
    <p>
      Measure what matters with Untitled's easy-to-use reports. You can filter,
      export, and drill down on the data in a couple of clicks.
    </p>
    <button className="learn-btn">Learn more</button>
  </div>
</div>

<h2 className='ask'> Frequently asked questions </h2>
<p className="subheading4">Everything you need to know about the product and billing.</p>
<div className='questions'><p className='ques'>
Is there a free trial available?
</p>
<p className='ans'>Yes, you can try us for free fat 30 days. If you want, well provide you with a fros, personalized 30-minute onboarding call to get you up and running as soon as possible.
</p>
<p className='ques'>
Can I change my plan later?
</p>
<p className='ques'>What is your cancellation policy?</p>
<p className='ques'>Can other info be added to an invoice?
</p>
<p className='ques'>How does billing work?</p>

<p className='ques'>How do I change my account email?</p>

<p className='ques'>Still have questions?</p>

<p className='ques'>Can't find the answer you're looking for? Please chat to our friendly team.</p>

<button className="learn-btn">Get in touch</button>
</div>
            </main>
            
            
        </div>
        
    );
};

export default App;

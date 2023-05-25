import React from 'react';
import './home.css';

const home = () => {
    return (
        <div className='home'>
           
            <div className='overlay'>
                <img className='truck' src='https://images.unsplash.com/photo-1676497588897-1132345fc596?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'></img>
            </div>

            <div className= "homeContent-container">
                <h2>Love to Travel?</h2>
                <p>Search Destinations and Excursions.</p>
                <button>Set Sail!</button>
            </div>


            <div className="destinations">
                
                <h2>Hot Destinations</h2>
                
                <p className='lettering' >Popular Tourist Destinations for Adventurers</p>
                
                <div className='morocco-block'>
                    <div className='morocco-snippet'>
                        <h3>Marakesh, Morocco</h3>
                        <p className="destination-text" >Marrakesh, Morocco is an awe-inspiring destination that captivates the senses and leaves an indelible mark on its visitors. This enchanting city seamlessly blends centuries-old traditions with a vibrant contemporary culture, creating an atmosphere that is nothing short of extraordinary. The bustling Medina, a UNESCO World Heritage site, invites you to navigate its labyrinthine streets, revealing hidden treasures like colorful souks, aromatic spice markets, and intricately designed palaces. The magnificent architecture, exemplified by the breathtaking Bahia Palace and the iconic Koutoubia Mosque, showcases the city's rich history and cultural heritage. As the sun sets, Djemaa el-Fna, the bustling main square, transforms into a mesmerizing spectacle of acrobats, storytellers, and musicians, where the aroma of sizzling street food fills the air. Marrakesh is a sensory delight, where the vibrant colors, exotic sounds, and tantalizing flavors converge to create an amazing experience.</p>
                    </div>

                    <div className="morocco-pics">
                        <img className="preview-old-town" src='https://media.istockphoto.com/id/1418845761/photo/amazing-view-of-kasbah-ait-ben-haddou-near-ouarzazate-in-the-atlas-mountains-of-morocco.jpg?b=1&s=170667a&w=0&k=20&c=Zy-qUWPc0ZlKmJVYTGA-oh7t05AhXVyVMEhIOqibzkw='></img>
                        <img className="preview-spice" src='https://media.istockphoto.com/id/1452433155/photo/curious-asian-chinese-female-tourist-looking-at-colourful-dried-flowers-on-a-market-in-a.jpg?b=1&s=170667a&w=0&k=20&c=E4f7lilEk6jsdDj68nyW0PvtWNqVPt0v0oG3bEyGzRg='></img>
                    </div>
                    
                </div>
                
                <div className='japan-block'>
                    <div className="japan-pics">
                        <img className="preview-temple" src='https://images.unsplash.com/photo-1574236170880-fbbca132d83d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGphcGFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'></img>
                        <img className="preview-shrine" src='https://images.unsplash.com/photo-1505069446780-4ef442b5207f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amFwYW58ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60'></img>
                    </div>
                    
                    <div className='japan-snippet'>
                        <h3 className='kyoto'>Kyoto, Japan</h3>
                        <p className="japan-text" >Kyoto, Japan, is a place of pure wonder that takes your breath away and transports you to a realm of timeless beauty. This ancient capital city holds a wealth of cultural treasures, from its majestic temples and serene gardens to its captivating geisha traditions. The historic district of Gion offers a glimpse into Japan's storied past, with its well-preserved wooden machiya houses and the graceful geiko and maiko gliding through the narrow streets. The iconic Fushimi Inari Shrine with its thousands of vibrant torii gates is a testament to the city's spiritual significance. Delicate cherry blossoms in spring and fiery autumn foliage bring a kaleidoscope of colors to Kyoto's landscapes, enhancing its ethereal charm. The serene gardens, such as Kinkaku-ji (Golden Pavilion) and Arashiyama Bamboo Grove, offer moments of tranquility amidst the bustling city. Kyoto's rich culinary scene delights with traditional kaiseki cuisine and mouthwatering matcha treats. With its blend of tradition and modernity, Kyoto is a mesmerizing destination that beckons travelers to immerse themselves in its exquisite beauty and experience the essence of Japan's cultural heritage.</p>
                    </div> 
                </div>

                <div className='guatemala-block'>
                    <div className='guatemala-snippet'>
                        <h3>Guatemala City, Guatemala</h3>
                        <p className="destination-text" >Guatemala City, the dynamic capital of Guatemala, is an extraordinary metropolis that pulsates with energy and offers a captivating blend of old-world charm and modern vibrancy. This bustling urban center serves as the country's political, cultural, and economic hub, and it showcases a rich tapestry of history and culture. The city's historic center, with its stunning architecture and grand plazas, reflects its colonial past, while the modern Zona Viva district brims with upscale restaurants, trendy bars, and vibrant nightlife. The National Palace, located in the heart of the city, is an architectural marvel that impresses with its grandeur. Museums such as the National Museum of Archaeology and Ethnology and the Popol Vuh Museum provide fascinating insights into Guatemala's ancient civilizations and indigenous heritage. A stroll through the lively Central Market immerses visitors in a sensory feast of sights, sounds, and aromas, where local vendors offer a wide array of traditional crafts, fresh produce, and delectable street food. Guatemala City also acts as a gateway to the country's natural wonders, with nearby attractions like the Pacaya Volcano and Lake Amatitlán offering opportunities for outdoor adventures. With its rich history, vibrant culture, and warm hospitality, Guatemala City is a captivating destination that leaves visitors in awe of its unique allure.</p>
                    </div>

                    <div className="guetamala-pics">
                        <img className="preview-ruins" src='https://images.unsplash.com/photo-1592229506179-7995edeb6226?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGd1YXRlbWFsYXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'></img>
                        <img className="preview-treeHouse" src='https://images.unsplash.com/photo-1544646280-e243b3ab7d1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzczfHxndWF0ZW1hbGF8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60'></img>
                    </div>
                    
                </div>
            </div>         
        </div>
    )
}

export default home;
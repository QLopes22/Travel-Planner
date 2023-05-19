import React from 'react';
import './list.css';

const Data = [
    {
        "loc":[
          {
              "state":"Andhra Pradesh",
              "lat":"15.912900" ,
              "long":"79.739990"
          },
          {
             "state":"Arunachal Pradesh",
             "lat":"28.217999" ,
             "long":"94.727753"
          },
          {
              "state":"Assam",
              "lat":"26.200603" ,
              "long":"92.937576"
          },
          {
              "state":"Bihar",
              "lat":"25.096073" ,
              "long":"85.313118"
          },
          {
              "state":"Chattisgarh",
              "lat":"21.278658" ,
              "long":"81.866142"
          },
          {
              "state":"Goa",
              "lat":"15.299326" ,
              "long":"74.123993"
          },
          {
              "state":"Gujarat",
              "lat":"22.258652" ,
              "long":"71.192383"
          },
          {
              "state":"Haryana",
              "lat":"29.058777" ,
              "long":"76.085602"
          },
          {
              "state":"Himachal Pradesh",
              "lat":"31.104830" ,
              "long":"77.173393"
          },
          {
              "state":"Jharkhand",
              "lat":"23.610182" ,
              "long":"85.279938"
          },
          {
              "state":"Karnataka",
              "lat":"15.317277" ,
              "long":"75.713890"
          },
          {
              "state":"Kerala",
              "lat":"10.850516" ,
              "long":"76.271080"
          },
          {
              "state":"Madhya Pradesh",
              "lat":"22.973423" ,
              "long":"78.656891"
          },
          {
              "state":"Maharashtra",
              "lat":"19.751480" ,
              "long":"75.713890"
          },
          {
              "state":"Manipur",
              "lat":"24.663717" ,
              "long":"93.906265"
          },
          {
              "state":"Meghalaya",
              "lat":"25.572491" ,
              "long":"91.310760"
          },
          {
              "state":"Mizoram",
              "lat":"23.164543" ,
              "long":"92.937576"
          },
          {
              "state":"Nagaland",
              "lat":"26.117500" ,
              "long":"94.288300"
          },
          {
              "state":"Orissa",
              "lat":"20.188650" ,
              "long":"84.440849"
          },
          {
              "state":"Punjab",
              "lat":"31.147129",
              "long":"75.341217"
          },
          {
              "state":"Rajasthan",
              "lat":"27.023804",
              "long":"74.217934"
          },
          {
              "state":"Sikkim",
              "lat":"27.532972",
              "long":"88.512215"
          },
          {
              "state":"Tamil Nadu",
              "lat":"11.127123",
              "long":"78.656891"
          },
          {
              "state":"Telangana",
              "lat":"18.112436",
              "long":"79.019302"
          },
          {
              "state":"Tripura",
              "lat":"23.940847",
              "long":"91.988152"
          },
          {
              "state":"Uttar Pradesh",
              "lat":"26.846708",
              "long":"80.946159"
          },
          {
              "state":"Uttarakhand",
              "lat":"29.379910",
              "long":"79.477386"
          },
          {
              "state":"West Bengal",
              "lat":"22.986757",
              "long":"87.854973"
          }
      ],
        "state": [
          {
            "id": "1",
            "name": "Andaman & Nicobar",
            "capital": "Port Blair",
            "about": "The Andaman and Nicobar Islands located in the east of the Indian mainland geographically, float in splendid isolation in the Bay of Bengal. Once a hill range extending from Myanmar to Indonesia, these picturesque undulating islands, islets numbering around 572, are covered with dense rain-fed, damp and evergreen forests and endless varieties of exotic flora and fauna. Most of these islands (about 550) are in the Andaman Group, 28 of which are inhabited. The smaller Nicobars, comprise some 22 main islands (10 inhabited). The Andaman and Nicobars are separated by the Ten Degree Channel which is 150 Kms. wide.",
            "climate": "The islands have a tropical climate. The South-west Monsoon sets in Andaman Nicobar islands towards the end of May and the North-east Monsoon in November. There is no fury of hot summer, no chilling winter, no water clogging or traffic jams. For those who want to enjoy boating, swimming, snorkeling, sightseeing all 12 months is season. North Indians find relief from burning heat and chilling winter if they visit the island from May/June/July and in December/January. Season for nature lovers is May to December when forest is lush green and waterfalls are at their prime. Divers can enjoy the best during December to April and bird watchers during winter times.",
            "history": "The Andaman & Nicobar Islands have been inhabited for several thousand years, at the very least. The earlier archaeological evidence yet documented goes back some 2,200 years; however, the indications from genetic, cultural and linguistic isolation studies point to habitation going back 30,000 – 60,000 years, well into the Middle Palaeolithic. In the Andaman Islands, the various Andamanese people maintained their separated existence through the vast majority of this time, diversifying into distinct linguistic, cultural and territorial groups.",
            "time": "Andaman has a moderate temperature all through the year within the range of 23°C to 31°C. It has a tropical climate. There are no severe climate conditions except for tropical storms and rains in late summers and monsoons.Summers (March to May) are warm but pleasant with sea breeze and have humidity level about 80%. It is suitable for all kinds of tourist activities.",
            "food": "The cuisine Of Andaman is like the island itself-tropical, exotic and refreshing. The sea that is all around has a defining effect on the island's culture, livelihood and cuisine. There is little here, in which you will not find traces of the sea. The food here, hence, is dominated by seafood preparations and you don't want to miss the fish delicacies here. Other than seafood too, the staple diet is essentially non-vegetarian.However, as the island is becoming an increasingly popular tourist spot, the resorts and other eating places will give you options of Indian, Chinese and a few more cuisines.Also, the fruits here are popular and refreshing. You can find Mangoes, Bananas, Pineapples, Guava and more. One can also sip in the truly refreshing and tropical coconut water here.",
            "img": [
              "https://bit.ly/35d0J79",
              "https://images.thrillophilia.com/image/upload/s--QOn_Mi_R--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/021/355/original/1538650912_shutterstock_1093195946.jpg.jpg?1538650912",
              "https://www.keyshotels.com/blog/wp-content/uploads/2017/08/port-blair-sea-fish.jpg",
              "https://dynamic.tourtravelworld.com/package-images/photo-big/dir_17/486726/202664.jpg",
              "https://bit.ly/2XhHw19",
              "https://bit.ly/2qTdWTu"
            ],
        //     "products": [
        //       {
        //         "name": "Pearls",
        //         "description": "A gift for your special someone or close friends? What can be better than some shining pearls straight from the Bay of Bengal! They are the best kind of go-to items you can buy in coastal areas. While they are plenty of jewelry stores and local artisans claiming to sell authentic and good quality pearl items like ornaments, home decor, purses, accessories, and more, make sure you always do a quality check before you proceed to purchase them. The Andaman Islands have a huge variety of these gorgeous riches from the sea.",
        //         "image": "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/08/Pearls.jpg",
        //         "category": "Jewellery"
        //       },
        //       {
        //         "name": "Spices",
        //         "description": "You can buy superior quality of spices and herbs including the likes of cardamom, cloves, cinnamon, vanilla, betel, and black pepper that is grown and nurtured in abundance in the Andaman islands. These aromatic spices are some of the best things to buy in Andaman and Nicobar for your own home and for gifting to others. You’ll find various spice gardens and plantations in Andaman, and you can visit any of them to find the authentic flavors of this part of India.",
        //         "image": "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/08/Spices.jpg",
        //         "category": "Grocery"
        //       },
        //       {
        //         "name": "Fishbone Articles",
        //         "description": "Though it sounds weird, fishbone items are quite a rage now and make great articles for home decor and gifting. For starters, fishbone dolls make awesome souvenirs and gifting items. Usually made from the bones of the fish that is either dead or has been eaten, these splendidly unique items will surely look fabulous in the showcase and keep the viewer what they’re made of! Crafted by the skilled artisans of Andaman, these are essentially a best-out-of-the-waste craft items that will make some of the best things to purchase in Andaman and should not be missed out",
        //         "image": "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/08/Fishbone-Articles.jpg",
        //         "category": "Home-Decor"
        //       },
        //       {
        //         "name": "Timber Crafts",
        //         "description": "Wooden items tend to be beautiful and always end up catching attention. The finesse of the wooden goods in Andaman and Nicobar is so eye-catching that you won’t be able to resist the temptation to buy loads of articles from the stores and markets here. From home decor items, toys, accessories, ornaments, to kitchen apparatus, you won’t have a dearth of timber-based things to buy in Andaman and Nicobar islands",
        //         "image": "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/08/Timber-Crafts.jpg",
        //         "category": "Home-Decor"
        //       },
        //       {
        //         "name": "Shells",
        //         "description": "While collecting shells from the beaches of Andaman is a strict no no, it doesn’t mean you cannot bring back home these beautiful pieces of the ocean. Instead of going through the trouble of collecting them from the beaches, you can simply buy them from various stores and handicraft centers that sell them. You can either buy them in the form of lampshades, ashtrays, vases, ornaments, accessories, bags, wall hangings, buttons, key-chains, or as packets of colorful and raw shells that you can convert into something beautiful on your own later. Don’t forget to keep the receipt safe, as you’ll be required to show that at the airport during security checks",
        //         "image": "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/08/Shells.jpg",
        //         "category": "Jewellery"
        //       },
        //       {
        //         "name": "Jute Items",
        //         "description": "Jute handicrafts are available in abundance in Andaman and make for some of the most famous things to buy in Andaman. It’s among the most important and flourishing industries in Andaman and Nicobar that have started to gain all the more importance nowadays since various local sellers and big marketplaces are shifting from plastic bags to jute and cloth bags in order to help save the environment. You can select from a wide range of jute goods like bags, footwear, hats, jewelry items, clothes, and more. You can either buy jute from the local markets or the big emporiums here.",
        //         "image": "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/08/Jute-Items.jpg",
        //         "category": "Home-Decor"
        //       },
        //       {
        //         "name": "Coconut Handicrafts",
        //         "description": "Who doesn’t love some refreshing coconut water and the tender coconut pulp? But what if we tell you that even the hard shell can be used for making something good and doesn’t have to be thrown away? That’s right. You’ll come across various shops and stores in Andaman selling beautiful bowls, showpieces, vases, wind chimes, home decor items, toys, animal figurines, bags, and lampshades made out of coconut shells cut into various shapes and sizes. And they’ll be so pretty and eye-catching that you won’t be able to say no to buying them!",
        //         "image": "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/08/Coconut-Handicrafts.jpg",
        //         "category": "Home-Decor"
        //       },
        //       {
        //         "name": "Nicobari Mats",
        //         "description": "The tribals of Nicobar islands are known to be skilled in weaving beautiful mats and hangings made out of various natural and locally grown items. Though you can’t really visit the Nicobar Islands as per a ban imposed by the Indian government long ago safety purposes, you can buy these unique articles from select markets and emporiums in Andaman. These mats and tapestries are made by the tribes of Nicobar and they are representative of the vivid culture of these people, indigenous in every way. They are some of the quirkiest things to buy in Nicobar.",
        //         "image": "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/08/Nicobari-Mats.jpg",
        //         "category": "Home-Decor"
        //       },
        //       {
        //         "name": "Sarongs & Hats",
        //         "description": "Sarongs as well as hats are a necessity in Andaman, as you need the latter for your trip to the beach and the former will protect you against the harsh tropical sun of this place. The best part – there’s no need to get it from your home destination, as various colourful, quirky, and reasonably priced varieties of these are available for purchase almost everywhere in Andaman. You can find comfortable sarongs made out of simple cotton and/or georgette fabric that makes it wavy and trendy. You can find hats of various shapes, sizes, and colors here made out of material like jute.",
        //         "image": "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/08/Sarongs-And-Hats.jpg",
        //         "category": "Clothing & Accessories"
        //       },
        //       {
        //         "name": "Cane Goods",
        //         "description": "Don’t forget to buy authentic cane and bamboo products in Andaman that make up a crucial part of the local markets of Andaman. You can find them in plenty of forms like trendy hats, bags, pitchers, vases, mugs, wall hangings, keychains, photo frames, flutes, and much more. You will be able to find pretty items made from cane and bamboo at almost every gift shop and local market in Andaman and will make for great gifting items, souvenirs, and home decor items.",
        //         "image": "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/08/Cane-Goods.jpeg",
        //         "category": "Home-Decor"
        //       }
        //     ],
        //     "tourist": [
        //       {
        //         "name": "NEIL ISLAND",
        //         "info": "Neil Island is one of India’s Andaman Islands, in the Bay of Bengal. Bharatpur Beach has coral reefs teeming with tropical fish. Laxmanpur Beach is known for its sunset views. Howrah Bridge is a natural rock formation accessible at low tide. Near the island’s wharf is Neil Kendra village, with a curving, sandy bay dotted with boats. Off the southeast coast, the tiny Sir Hugh Rose Island is a sanctuary for turtles.",
        //         "images": "https://uploads-ssl.webflow.com/5b56319971ac8c7475a9d877/5c4f5622a29a8f65c7f25f3e_IMG_7728%20Neil%20Island%20(21).jpg",
        //         "location": "https://www.google.co.in/maps/place/Neill+Island,+Andaman+and+Nicobar+Islands+744104/data=!4m2!3m1!1s0x3088d9a13824c715:0xddd01ec98b4eb529?sa=X&ved=2ahUKEwjTjPqquvPlAhU56nMBHbmRBCAQ8gEwJXoECBAQBA"
        //       },
        //       {
        //         "name": "CELLULAR JAIL,PORT BLAIR",
        //         "info": "It has been an important historical part of Port Blair. Notable freedom fighters such as Veer Savarkar, Yogendra Shukla, Batukeshwar Dutt, and Babarao Savarkar were some of the inmates here. Don’t miss the light and sound show(Monday, Wednesday and Friday) when you visit Cellular jail. ",
        //         "images": "https://www.holidify.com/images/cmsuploads/compressed/3616_20190213160612jpg",
        //         "location": "https://www.google.co.in/maps/place/Cellular+Jail+National+Monument/@11.6738247,92.7479768,15z/data=!4m2!3m1!1s0x0:0x616a8c6623fdba3f?sa=X&ved=2ahUKEwihqtPEuvPlAhU4IbcAHThdBsAQ_BIwJnoECA4QCA"
        //       },
        //       {
        //         "name": "CORBYN'S COVE,PORT BLAIR",
        //         "info": "Surrounded by lush green palms, this happens to be one of the busier beaches in the Andamans. It’s located right outside of Port Blair about 8 km. The drive there itself is a scenic treat to the eyes.",
        //         "images": "https://live.staticflickr.com/982/40047849690_7a78e1f816_b.jpg",
        //         "location": "https://www.google.co.in/maps/place/Corbyn+Cove+Beach/@11.6449942,92.7458387,17z/data=!3m1!4b1!4m5!3m4!1s0x308894fccfdb049d:0x60d5e3776ddced65!8m2!3d11.6449942!4d92.7480274"
        //       },
        //       {
        //         "name": "SAMUDRIKA NAVAL MARINE MUSEUM,PORT BLAIR",
        //         "info": "This museum is a perfect blend of historical and modern Andaman. A massive blue whale, in its skeletal form, of course, greets you as you enter the museum. There is also an aquarium with fish of all shapes and sizes, from a parrotfish to the rare and venomous species of stonefish and corals.",
        //         "images": "https://andamantripadvisor.in/files/social/social_b18e537c1984e883f43807737a639be4.jpg",
        //         "location": "https://www.google.co.in/maps/place/Samudrika+Marine+Museum/@11.6718057,92.7263692,15z/data=!4m2!3m1!1s0x0:0xd7352994a1c32fb8?sa=X&ved=2ahUKEwi64_yEu_PlAhWMILcAHYtnBf0Q_BIwC3oECBAQCA"
        //       },
        //       {
        //         "name": "HAVELOCK ISLAND(SWARAJ DWEEP)",
        //         "info": "Havelock Island is part of Ritchie’s Archipelago, in India’s Andaman Islands. It’s known for its dive sites and beaches, like Elephant Beach, with its coral reefs. Crescent-shaped Radhanagar Beach is a popular spot for watching the sunset. On the island’s east side, rocky sections mark long, tree-lined Vijaynagar Beach.",
        //         "images": "https://www.tripsavvy.com/thmb/SF7NoKaUPvXKxBkDbmPrC-GSddU=/2121x1414/filters:fill(auto,1)/GettyImages-508601155-592e840f5f9b5859500d0724.jpg",
        //         "location": "https://www.google.co.in/maps/place/Swaraj+Dweep/@11.9656084,92.9194242,12z/data=!3m1!4b1!4m5!3m4!1s0x3088d3d85e0fe039:0x25c8aaaa513ef4bf!8m2!3d11.9760503!4d92.9875565"
        //       }
        //     ]
        //   },
        //   {
        //     "id": "2",
        //     "name": "Punjab",
        //     "capital": "Chandigarh",
        //     "about": "Deriving its name from five full-bodied rivers–Sutlej, Beas, Ravi, Jhelum, and Chenab–which flow through its vast plains, Punjab is representative of abundant things. Located on the north-western edge of India, it is one of the smaller albeit prosperous states of the nation, and home to a lively, hospitable and dynamic people. Widely acknowledged as the cradle of civilization, it is a land of ethnic and religious diversity, having borne and shaped a number of religious movements that include Sikhism, Buddhism and Sufism. The Punjabi language, too, finds its origin in the Indo-European linguistic family that includes Persian and Latin.",
        //     "climate": "The Summer in Punjab actually commences from mid April but the temperature starts rising from February onwards. Rainfall ranges from 250mm to 1000mm. Agriculture in the state highly depends on the rains. The winter season in Punjab is mostly experienced in the month of January, when the temperature falls to 5°C in the night and hovers around 12°C in the day. In the post winter transitional season, hail-storms and brief showers occur which cause damage to the crops. The wind becomes dry by the end of March. The Punjab climate has been a significant factor in shaping the economy of the state.",
        //     "history": "The history of Punjab goes back thousands of years. Undivided Punjab has been the cradle of the Indus Valley Civilization, the remains of which can be seen at the Ropar archaeological site and its dedicated museum. This fertile ancient land finds mention even in Mahabharata and Ramayana. Infact it is believed that the Ramayana was written here by Valmiki ji. Places like Rupnagar, Kiratpur, Dholbaha, Rohira and Ghuram...all in Punjab; have unearthed artifacts that date back centuries. In Sanghol are 107 statues of the Kushan period evoking memories of a flourishing Buddhist monastery. This monastery was visited by Hiuen Tsang in the 7th century.",
        //     "time": "The best time to visit Punjab is in the spring, from February to April, and in the autumn, from September to November.",
        //     "food": "Punjab is synonymous to food and incomplete without its mouthwatering delicacies. Rich in colour, ingredients, spices and the most elaborate and grand cooking styles, Punjabi food derives several elements of its cuisine from Pakistan, the then undivided Punjab.The national cuisine borrows some of its most popular and lip-smacking items from Punjab's menu from Paratha, Tandoori Chicken, Naan, Pakodas to delicacies of Paneer. The food here represents a particular festivity, vibrancy and cultural richness in every day, a big part of which revolves around having good and rich food. There is also an almost perfect balance between the vegetarian and non-vegetarian choices, the options being equally irresistible for both. Punjabi cuisine is nearly identified with generous use of 'Ghee' or butter to give the food a rich flavour. Also onion, ginger, garlic and strong spice leave strong and distinct flavours in the menu here. Butter Chicken, Tandoori Chicken, Shahi Paneer, Chole Bhature, Makki di roti, Sarson da Saag, Dal fry, Amritsari fish, Aloo gobhi, Rajma Chawal, Punjabi Kadhi, Lassi are the dishes that define the food here, and the list is almost infinite. Gajar ka Halwa, Jalebi, Kulfi, Rabri, Gulab Jamun, Barfi, Motichoor Laddo are also equally tempting traditional sweets in the area.",
        //     "img": [
        //       "https://bit.ly/2XjaMVx",
        //       "https://bit.ly/356rXMx",
        //       "https://bit.ly/33RDGhU",
        //       "https://bit.ly/33TedVo",
        //       "https://bit.ly/2QiHPrf",
        //       "https://bit.ly/2plyIe9"
        //     ],
        //     "products": [
        //       {
        //         "name": "Jutties",
        //         "description": "Punjabi jutties is the name given to the typical footwear of Punjab. They are unusual in bearing a grand display of patterns and designs. There is such beautiful embroidery displayed on the jutties that you can’t help being impressed. Lots of hard work goes into making of these jutties, as they stand for the elegance and glory of Punjab. A wide range of fancy materials, like beads, pearls, colored threads, small mirrors and seashells, are used for making these jutties. Punjabi jutties are comfortable to wear and also render a royal look to the wearer.",
        //         "image": "https://medias.fashionnetwork.com/image/upload/v1/medias/39c04f8b153f62ec5928d6eb221a0f4a2142309.jpg",
        //         "category": "Clothing & Accessories"
        //       },
        //       {
        //         "name": "Phulkaris",
        //         "description": "Phulkari is a form of craft in which artistic embroidery embellishes a shawl, saree, dupatta (head scarf) or the entire dress. The phulkari that covers the entire dress, making the base material invisible, is called bagh (a garden of flowers). Bagh is generally used for special occasions, like marriages and festivals. A special kind of thread is used for phulkari, which is called pat. The designs used are varied, like animal, vegetable, sun, moon, scenes of human life, natural beauty and the list continues. In fact, anything that one can think about, other than religious connotations, are represented in phulkari. Some varieties of Phulkari and Bagh are Chope, Vari-da-bagh, Ghunghat bagh, Bawan Bagh, Darshan Dwar, Suber, Champa, Surjamukhi, & Satrang.",
        //         "image": "http://punjabicart.com/sites/default/files/product/product-1494-4453.jpg",
        //         "category": "Clothing & Accessories"
        //       },
        //       {
        //         "name": "Parandis",
        //         "description": "Parandis are the attractive hangings that are worn in the hair. They are widely used by the Punjabi women, especially those living in the rural areas. They usually plait their long hair and decorate the same with parandi, worn at the end of the plait. These parandis are woven out of attractive silk threads, clustered together artistically. They are available in a variety of designs and patterns.",
        //         "image": "https://www.ekdumdesi.com/wp-content/uploads/2017/11/22.jpg",
        //         "category": "Clothing & Accessories"
        //       },
        //       {
        //         "name": "Shawls",
        //         "description": "Punjabi shawls are world famous, for their intricate designs, coziness and reasonable price. There are different varieties of shawls available in Punjab, like angora, jamavar, embroidered pashmina, beaded pashmina, cashmillon shawls, kulu shawls and jacquard shawls. Ludhiana, Jalandhar and Amritsar are the main centers producing these shawls.",
        //         "image": "https://www.jennysargeant.com/upload/images/shopprod/10100/french-cashmere-shawl-circa-1850_10100_catalogue_list_size3.jpg",
        //         "category": "Clothing & Accessories"
        //       },
        //       {
        //         "name": "Durries",
        //         "description": "Punjabi durries are flat woven rugs, which are either used as bedcovers or as carpets. Generally for large gatherings, whether political, religious or others, durries are spread on the floor, for sitting purposes. These durries are very popular, owing to their stunning traditional designs, woven skillfully with all the minute details. They are quite economical and at the same time, add enormously to the richness of a house's interiors. Though they are widely available in all parts of Punjab, Amritsar and Chandigarh are the main centers for the production of durries.",
        //         "image": "https://www.rugsville.in/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/u/rugsville-trellis-durries-blue-ivory-13699-5x8-rug-13699-58-02.93.jpg",
        //         "category": "Home-Decor"
        //       }
        //     ],
        //     "tourist": [
        //       {
        //         "name": "GOLDEN TEMPLE",
        //         "info": "The Golden Temple, also known as Harmandir Sahib or Darbār Sahib, is a Gurdwara located in the city of Amritsar, Punjab, India. It is the holiest Gurdwara and the most important pilgrimage site of Sikhism.The temple is built around a man-made pool (sarovar) that was completed by Guru Ram Das in 1577.Guru Arjan – the fifth Guru of Sikhism, requested Sai Mian Mir – a Muslim Pir of Lahore to lay its foundation stone in 1589.In 1604, Guru Arjan placed a copy of the Adi Granth in Harmandir Sahib, calling the site Ath Sath Tirath (lit. shrine of 68 pilgrimages).The temple was repeatedly rebuilt by the Sikhs after it became a target of persecution and was destroyed several times by the Muslim armies from Afghanistan and the Mughal Empire.The army led by Ahmad Shah Abdali, for example, demolished it in 1757 and again in 1762, then filled the pool with garbage and blood of cows.Maharaja Ranjit Singh after founding the Sikh Empire, rebuilt it in marble and copper in 1809, overlaid the sanctum with gold foil in 1830. This has led to the name the Golden Temple.",
        //         "images": "https://iptb.b-cdn.net/wp-content/uploads/2018/07/Golden-Temple-Punjab-1.jpg",
        //         "location": "https://www.google.co.in/maps/place/Harmandir+Sahib/@31.6199803,74.8764849,15z/data=!4m5!3m4!1s0x0:0x604384897626248e!8m2!3d31.6199803!4d74.8764849"
        //       },
        //       {
        //         "name": "WAGAH BORDER",
        //         "info": "Located at a distance of 22 km from Lahore and 28 km from Amritsar, Wagah Border marks the boundaries between Indian and Pakistani borders. It runs along the Grand Trunk Road between Amritsar in Punjab, India, and Punjab in Lahore, Pakistan. People from all over the country visit this place to witness the Beating Retreat Ceremony that is held every day before sunset. This ceremony includes the closing of the international gates and lowering the flags of both countries. It is a spectacle to be witnessed and is an occasion where the heart of every Indian is filled with pride and enthusiasm. The flag ceremony has been conducted by the Indian Border Security Force and Pakistan Rangers since 1959.Every evening, just before the sunset, the soldiers from the Indian and Pakistan military meet at this border post to engage in a 30-minute display of military camaraderie and showmanship. Officially, the purpose of the ceremony is to formally close the border for the night and lower the national flag. However, it is an entertainment ceremony and a  display of national pride for the thousands of people who come here every day. During the build-up to the ceremony, the crowd engages in chanting the Indian national anthem, rounds of applause and Bollywood-style dancing on Hindi songs.",
        //         "images": "https://m.economictimes.com/thumb/msid-68217133,width-1200,height-900,resizemode-4,imgsize-703119/daily-retreat-ceremony-along-attari-wagah-border-cancelled-bsf.jpg",
        //         "location": "https://www.google.co.in/maps/place/Wagah/@31.604757,74.574136,15z/data=!4m2!3m1!1s0x0:0x325315a52b19a1a9?sa=X&ved=2ahUKEwiupo-auvPlAhVL6XMBHYYYC8UQ_BIwJHoECA4QCA"
        //       },
        //       {
        //         "name": "JALLIANWALA BAGH",
        //         "info": "Jallianwala Bagh is a historic garden and ‘memorial of national importance’ in Amritsar, India, preserved in the memory of those wounded and killed in the Jallianwala Bagh Massacre that occurred on the site on the festival of Vaisakhi, 13 April 1919.It houses a museum, gallery and a number of memorial structures.The 7-acre (28,000 m2) garden site of the massacre is located in the vicinity of the Golden Temple complex, the holiest shrine of Sikhism and is managed by the Jallianwala Bagh National Memorial Trust, which was established as per the 'Jallianwala Bagh National Memorial Act, 1951'.",
        //         "images": "https://m.telegraphindia.com/unsafe/620x350/smart/static.telegraphindia.com/derivative/THE_TELEGRAPH/1688144/16X9/image93c380cd-0486-4cc0-90e0-865235d0ac34.jpg",
        //         "location": "https://www.google.co.in/maps/place/Jallianwala+Bagh/@31.0529259,74.7523128,8z/data=!4m5!3m4!1s0x0:0xcb013976169cb75b!8m2!3d31.6206437!4d74.8801088"
        //       },
        //       {
        //         "name": "BHAKRA NANGAL DAM",
        //         "info": "Bhakra Dam is a concrete gravity dam on the Sutlej River in Bilaspur, Himachal Pradesh in northern India. The dam forms the Gobind Sagar reservoir.The dam, located at a gorge near the (now submerged) upstream Bhakra village in Bilaspur district of Himachal Pradesh of height 226 m. The length of the dam (measured from the road above it) is 518.25 m and the width is 9.1 m. Its reservoir known as 'Gobind Sagar' stores up to 9.34 billion cubic metres of water. The 90 km long reservoir created by the Bhakra Dam is spread over an area of 168.35 km2. In terms of quantity of water, it is the third largest reservoir in India, the first being Indira Sagar dam in Madhya Pradesh with capacity of 12.22 billion cu m and second Nagarjunasagar Dam.",
        //         "images": "https://akm-img-a-in.tosshub.com/indiatoday/images/bodyeditor/201810/dam647_081117121907_1-x404.jpg?9FIZpe39SqXGiX7EIroLsVdcLWjDaUeV",
        //         "location": "https://www.google.co.in/maps/place/Bhakhra+Dam/@31.4111964,76.4334066,15z/data=!4m5!3m4!1s0x0:0x7cb91e54289880ac!8m2!3d31.4111964!4d76.4334066"
        //       },
        //       {
        //         "name": "SUKHNA LAKE",
        //         "info": "Sukhna Lake in Chandigarh, India, is a reservoir at the foothills (Shivalik hills) of the Himalayas. This 3 km² rainfed lake was created in 1958 by damming the Sukhna Choe, a seasonal stream coming down from the Shivalik Hills. Originally the seasonal flow entered the lake directly causing heavy siltation. To check the inflow of silt, 25.42 km² of land was acquired in the catchment area and put under vegetation. In 1974, the Choe was diverted and made to bypass the lake completely, the lake being fed by three siltation pots, minimising the entry of silt into the lake itself.",
        //         "images": "https://www.trawell.in/admin/images/upload/472763834Chandigarh_Sukhna_Lake_Main.jpg",
        //         "location": "https://www.google.co.in/maps/place/Sukhna+Lake/@30.742074,76.8039478,14z/data=!3m1!4b1!4m5!3m4!1s0x390fed34138d9147:0x8a7a0db7c410d5a2!8m2!3d30.7421379!4d76.8187557"
        //       },
        //       {
        //         "name": "SHAHPUR KANDI FORT ",
        //         "info": "The Shahpur Kandi Fort, named after Shah Jahan, nestles on the banks of the Ravi River in the picturesque foothills of the Himalayas. Located on the outer periphery of Pathankot, it was built in the 16th century, and stands surrounded by outstanding natural beauty. A part of the fort functions as a rest house today.Shahpur Kandi fort is located 7Kms from Pathankot and presently it has been converted into a beautiful rest house. It is named after Shah Jahan and was built by Bhao Singh in 16th Century. It is majestically located on the banks of river Ravi. There are a few small heritage monuments like tombs and a mosque.",
        //         "images": "https://assets.traveltriangle.com/blog/wp-content/uploads/2019/09/Nurpur-Fort.jpg",
        //         "location": "https://www.google.co.in/maps/place/Shahpurkandi+Fort/@32.3876397,75.6833134,15z/data=!4m2!3m1!1s0x0:0xba3db5cd0bf52e84?sa=X&ved=2ahUKEwjcsKHxufPlAhWq8HMBHYWrCaMQ_BIwE3oECAsQCA"
        //       }
        //     ]
        //   },
        //   {
        //     "id": "3",
        //     "name": "Rajasthan",
        //     "capital": "Jaipur",
        //     "about": "Recognized as the \"Land of Kings\" and having sheer variety of experiences to offer, Rajasthan is the largest state of India located on the northwestern side and is one of India's most popular tourist destinations.\nSteeped in tales of chivalry and romance, also famous for striking desert landscape, massive forts, mesmerizing lakes and fabulous palaces, Rajasthan represents the quintessential India. Also, the crafts and folk arts originated here are world famous.With the legendary cities of Jaipur, Udaipur, Jaisalmer, and Jodhpur, built by the Rajput warriors, and the artisan communities and indigenous tribal, Rajasthan is a unique combination of royal and tribal India. Rajputs ruled the Land of Royalty for a long time and till today they are regarded in very high esteem.",
        //     "climate": "Summers in Rajasthan last from April to June and are particularly harsh with temperatures rising up to 48°C during the day. That being said, if you do plan to visit Rajasthan in the summer, head to places like Mount Abu, Kumbhalgarh or Ranakpur. The weather here is pleasant and the views offered are breath-taking. For other cities, the weather is optimal in the early evenings for roaming around outside in the early mornings and late evenings, and it is advisable to stay indoors otherwise.Monsoon is a far more pleasant experience, the temperatures tend to drop across the state and the rain showers transform the arid landscape of Rajasthan. July to September is a particularly good time to visit if you wish to avoid the crowds you'd usually find during peak tourist season. Bundi, the lake city of Udaipur and the Keoladeo National Park are picturesque and are a must visit if you plan to travel to Rajasthan during the Monsoon.",
        //     "history": "The state of Rajasthan in India has a history dating back thousands of years. It was the site of the Indus Valley Civilization. The early medieval period saw the rise of the Mughal Empire. The Mughals granted high positions to Rajput rulers who allied with them. However, some Rajput kingdoms did not accept Mughal suzerainty and were constantly at war with them. The Mughal rule effectively ended in the 18th century, when the Maratha Empire conquered much of the subcontinent.\n\nMaratha rule was soon replaced by British rule in India. The British also made allies out of local rulers, who were allowed to rule their princely states. This period was marked by famines and economic exploitation. However, the British period also saw the growth of railways, telegraph and modern industry in the region. After Indian Independence in 1947, the various princely states of Rajasthan were integrated into India.",
        //     "time": "The temperatures continue to drop once the monsoon has passed, and come October winter sets in that lasts till March. During December and January, there can be a severe variation in temperatures during the day and the night. In fact, temperatures are known to drop as low as 0°C and below. This is the best time to visit Rajasthan as the desert sun is not as intense and the days are pleasant. Most of the festivals held in winter are planned as tourist attractions, with visitors coming in from different parts of the world.",
        //     "food": "Rajasthanis love their food which can be evidenced in the time and energy they put into their preparations. The cuisine of Rajasthan is primarily vegetarian and offers a fabulous variety of mouthwatering dishes. The food here is such that it is suitable for the weather, availability of water, and other environmental factors of the area. Rajasthan is much of what its culture is, and the culture here derives a lot of its colour, festivity, significance and of course, spice, often literally from the diverse and exquisite cuisine here. The delicacies of the state are indeed some of the richest, unique and most loved preparations of India. Names such as Dal Bati Churma, Moong Dal ka Halwa, Ghevar, Rabdi and numerous more are popular all across, especially in North India, with their popularity spreading beyond the confines of the state, Your trip might be incomplete if you don't try the scrumptious dishes that the land has to offer, especially the Rajasthani thali. ",
        //     "img": [
        //       "https://upload.wikimedia.org/wikipedia/commons/0/09/Thar_Khuri.jpg",
        //       "https://ihplb.b-cdn.net/wp-content/uploads/2011/02/Forts.jpg",
        //       "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/09/Gadisar-Lake-in-Rajasthan..jpg",
        //       "https://mk0egoveletsonla87wv.kinstacdn.com/wp-content/uploads/2018/07/Rajatshan-tourism-1.jpg",
        //       "https://cdn1.tripoto.com/media/filter/tst/img/1682588/Image/1568655470_things_to_do_in_udaipur_rajasthan.jpg",
        //       "https://static.toiimg.com/thumb/68427211/3.jpg?width=748&height=499"
        //     ],
        //     "products": [
        //       {
        //         "name": "Jewellery",
        //         "description": "Renowned for its jewellery industry, Rajasthan is one of the world's largest centres for hand-cutting gems. It is also known for its spectacular variety of gold and silver jewellery. Every region in Rajasthan has its unique style and there's something to cater to everyone's tastes. Jaipur in particular, is famous for the Kundan and Meenakari styles of jewellery making, while Pratapgarh's unique style, which involves gold work on glass, is referred to as 'thewa'. So whether you're looking for rustic jewellery or something more regal, gold and silver or even precious stones, Rajasthan is truly a gem of a place for jewellery shopping.",
        //         "image": "https://www.zerokaata.com/zerokaata-studio/wp-content/uploads/2018/06/rj-bangadi.jpg",
        //         "category": "Jewellery"
        //       },
        //       {
        //         "name": "Rajasthani Miniature Paintings",
        //         "description": "Originally brought to Rajasthan by the Mughals, Rajasthani artists mastered the art of miniature painting and made it their own. The paintings themselves are inspired by the royal and romantic life of the Mughals. There are several styles of Rajasthani miniature paintings to choose from such as the Mewar, Bundi, Kota, Marwar, Bikaner, Jaipur and Kishangarh styles. The painters paint on a variety of materials such as silk, ivory, cotton and paper and a lot of intricate detailing is done to make these works of art pop with life and colour. Beautiful, unique and a great part of the history and culture of Rajasthan, Rajasthani miniature paintings are a must-buy for any visitor to Rajasthan.",
        //         "image": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Nih%C3%A2l_Chand_001.jpg",
        //         "category": "Home-Decor"
        //       },
        //       {
        //         "name": "Stone Carvings",
        //         "description": "From time immemorial, Rajasthan has been known for its sheer variety of hard rock found in the region. Blessed with an abundant bounty of building material, Rajasthani architects have gone on to construct some amazing structures including forts, temples and palaces which still stand strong today. When it came to construction, no stone was spared. From white marble to pink Dholpur stonr to green Kota stone, white and gray soapstone - everything was utilised to construct elegant statues, idols, figurines, carved panels and elaborate 'jharokas' for gardens and pavilions. The art of carving idols, figurines and utensils out of different types of stone is still in practice in Jaipur, Kota, Barmer, Ajmer and Dungarpur, and these places are worth a visit if you'd like to buy yourself a souvenir.",
        //         "image": "https://i.pinimg.com/originals/f0/de/91/f0de91518d96d1f76a70664aeb0f95bf.jpg",
        //         "category": "Home-Decor"
        //       },
        //       {
        //         "name": "Terracotta",
        //         "description": "An age-old craft in Rajasthan, terracotta earthenware is made by mixing together sawdust, fine mud and clay before moulding it. Every village and community has its own potters who make pots for everyday use along with other vessels such as hookahs, chillums, piggy banks, pickle jars, etc. so you can purchase these with ease anywhere in the state.But if you're looking for something a little more unique, visit Alwar for its paper-thin (kagzi) pottery, Bikaner for its painted pottery, Jaisalmer for its stone wares, Molela for wall plaques depicting the images of historic and religious figures, and Pokaran for tiny clay bells that sound just like their metal counterparts.",
        //         "image": "https://rukminim1.flixcart.com/image/1664/1664/j70sccw0-1/showpiece-figurine/8/9/z/stawdg-sarvsiddhi-original-imaexdyruyfxf6ed.jpeg?q=90",
        //         "category": "Home-Decor"
        //       },
        //       {
        //         "name": "Blue Pottery",
        //         "description": "Another art form that was introduced to Rajasthan by the Mughals, blue pottery came to Jaipur from Persia and Afghanistan. This style of pottery is made from quartz and not clay. Materials that are used include quartz, raw glaze, sodium sulphate, and multani mitti (fuller's earth). The beautiful hues of blue and turquoise are obtained through the use of copper oxide and cobalt oxide which give it a distinctive look. Suitable for everyday use, the biggest advantage of blue pottery is that it does not develop cracks unlike regular earthen pots. Blue pottery is usually designed with Mughal era arabesque patterns, as well as animal and bird motifs. There are a number of products you can purchase including plates, flower vases, soap dishes, surahis (small pitchers), trays, coasters, fruit bowls, door knobs and glazed tiles with hand painted floral designs. The craft is mainly practiced in Jaipur and to a lesser extent in Sanganer, Mahalan, and Neota as well.",
        //         "image": "https://www.ohmyrajasthan.com/uploads/6/1521891357Blue-Pottery-handicraftglobal.jpg",
        //         "category": "Home-Decor"
        //       },
        //       {
        //         "name": "Wooden Articles",
        //         "description": "Most of the landscape of Rajasthan is dry and arid desert, but there are a few pockets of lush jungle around Jaipur, Banswara, Kota and Udaipur which provide quality wood for craftsmen to create wooden articles. The furniture in particular is of special interest to those looking for antiques. Besides furniture, you'll also find a number of articles including toys, snuff boxes, chests, animal figurines and other interesting memorabilia.",
        //         "image": "https://adventure.com/wp-content/uploads/2018/05/Rajasthani-block-printing-Bargru-block-printing-community-Photo-credit-Lorna-Parkes-2.jpg",
        //         "category": "Home-Decor"
        //       },
        //       {
        //         "name": "Phads And Pichwais",
        //         "description": "The ancient art of scroll painting known as Phad survives to this day in Rajasthan. A typical Phad is a long, rectangular piece of cloth (between 15 to 30 feet in length) with paintings illustrating the life and heroic exploits of the two popular folk heroes, Pabuji and Devnarayan. Phads are painted by the Joshis of Shahpura, near Bhilwara, based on subjects like Bhagwat Purana and other popular folk stories.",
        //         "image": "https://cdn2.allevents.in/thumbs/thumb59f6f85803a5f.jpg",
        //         "category": "Home-Decor"
        //       },
        //       {
        //         "name": "Metal Crafts",
        //         "description": "Once a land of kings and warriors, metal in Rajasthan was used to craft weapons. These days however, metal figurines, pillboxes, photo frames and vases are the staple of Rajasthani metal crafts. Vibrant colours and complicated patterns are a unique characteristic of the metal crafts of Rajasthan and they make great decorative pieces for the home. Tourists interested in purchasing these articles can find them with ease as they are available all throughout the state.",
        //         "image": "http://aitcofficial.org/wp-content/uploads/2017/10/Dokra.jpg",
        //         "category": "Home-Decor"
        //       },
        //       {
        //         "name": "Carpets And Durries",
        //         "description": "Carpets and dhurries were first manufactured in Rajasthan when weavers from Afghanistan were invited to the royal Mughal ateliers in the 17th century AD. Since then, the craft has flourished and these simple rugs have now become one of the state's most famous weaving traditions. The dhurries are usually made by weavers in villages who use looms to create an interesting blend of patterns - mostly geometric, sometimes floral, in a dazzling combination of colours. Make a trip to Bikaner, Jaisalmer and Salawas in Jodhpur to purchase dhurries made of cotton yarn or camel hair. The areas around Tonk, a town that is about 95 km south of Jaipur are worth a visit to purchase namdahs, a type of felted woollen carpet.",
        //         "image": "http://www.obeetee.com/img/Banner5.JPG",
        //         "category": "Home-Decor"
        //       }
        //     ],
        //     "tourist": [
        //       {
        //         "name": "Jaipur",
        //         "info": "Planned by Vidyadhar Bhattacharya, Jaipur holds the distinction of being the first planned city of India. Renowned globally for its coloured gems, the capital city of Rajasthan combines the allure of its ancient history with all the advantages of a metropolis. The bustling modern city is one of the three corners of the golden triangle that includes Delhi, Agra and Jaipur.The story goes that in 1876, the Prince of Wales visited India on a tour. Since the colour pink was symbolic of hospitality, Maharaja Ram Singh of Jaipur painted the entire city pink. The pink that colours the city makes for a marvellous spectacle to behold. Jaipur rises up majestically against the backdrop of the forts Nahargarh, Jaigarh and Garh Ganesh Temple.",
        //         "images": "https://images.thrillophilia.com/image/upload/s--QrPjqNho--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/046/475/original/1525775826_Jaipur_Main.jpg.jpg?1525775826",
        //         "location": "https://www.google.co.in/maps/place/Jaipur,+Rajasthan/@26.8851417,75.6504723,11z/data=!3m1!4b1!4m5!3m4!1s0x396c4adf4c57e281:0xce1c63a0cf22e09!8m2!3d26.9124336!4d75.7872709"
        //       },
        //       {
        //         "name": "Amber Palace",
        //         "info": "Amber (pronounced Amer) is at a distance of about 11 kilometres from Jaipur. Now a UNESCO World Heritage Site, it was the bastion of the Kachwahas of Amber, until the capital was moved to the plains, to what is today Jaipur. The palace, located in craggy hills, is a beautiful melange of Hindu and Mughal styles. Raja Man Singh I began construction in 1592 and the palace, which was built as a strong, safe haven against attacking enemies, was completed by Mirja Raja Jai Singh.",
        //         "images": "https://images.thrillophilia.com/image/upload/s--UGQa1Iny--/c_fill,f_auto,fl_strip_profile,h_600,q_auto,w_975/v1/images/photos/000/110/813/original/1492513727_amber_fort_4.jpg.jpg?1492513727",
        //         "location": "https://www.google.co.in/maps/place/Amber+Palace/@26.9854865,75.8513454,15z/data=!4m5!3m4!1s0x0:0x6221df6747147e2b!8m2!3d26.9854865!4d75.8513454"
        //       },
        //       {
        //         "name": "Jantar Mantar",
        //         "info": "Now a UNESCO World Heritage Site, Jantar Mantar in Jaipur is considered to be the largest of the five astronomical observatories built by Maharaja Sawai Jai Singh II, the founder of Jaipur. It contains sixteen geometric devices, designed to measure time, track celestial bodies and observe the orbits of the planets around the sun.",
        //         "images": "https://cdn1.goibibo.com/t_tg_fs/jaipur-jantar-mantar-148133403933-orijgp.jpg",
        //         "location": "https://www.google.co.in/maps/place/Amber+Palace/@26.9854865,75.8513454,15z/data=!4m2!3m1!1s0x0:0x6221df6747147e2b?sa=X&ved=2ahUKEwjnp4SljfjlAhVy7XMBHZF7CYwQ_BIwH3oECCkQCA"
        //       },
        //       {
        //         "name": "Hawa Mahal",
        //         "info": "Hawa Mahal, literally the Palace of Winds, was built in 1799 by the poet king Sawai Pratap Singh as a summer retreat for him and his family. It also served as a place where the ladies of the royal household could observe everyday life without being seen themselves. This unique five-storey structure is a blend of Hindu and Islamic architecture, and the exterior, with its small latticed windows (called jharokhas), resembles the crown of Lord Krishna. The windows also serve as an air-conditioner of sorts, blowing cool air throughout the palace, making it the perfect retreat during summers.",
        //         "images": "https://static.toiimg.com/photo/50355399/.jpg",
        //         "location": "https://www.google.co.in/maps/place/Hawa+Mahal/@26.9239363,75.8267438,15z/data=!4m2!3m1!1s0x0:0x860e5d531eccb20c?sa=X&ved=2ahUKEwiOlby_jfjlAhV_7XMBHZ8cAgoQ_BIwH3oECA0QCA"
        //       },
        //       {
        //         "name": "Albert Hall Museum(Central  Museum)",
        //         "info": "The building gets its name from The Victoria and Albert Museum in London, the inspiration for its design. The exquisitely built Albert Hall is housed in the centre of Ram Niwas Garden. Sir Swinton Jacob conceptualised and designed it using styles from the Indo-Sarcenic architecture and the Prince of Wales laid the foundation stone of the building in 1876.",
        //         "images": "https://live.staticflickr.com/2845/12542763994_d8b41967a3_b.jpg",
        //         "location": "https://www.google.co.in/maps/place/Albert+Hall+Museum/@26.9115755,75.8194875,15z/data=!4m2!3m1!1s0x0:0x5bb4333133c6968?sa=X&ved=2ahUKEwif6p7qjfjlAhXX6nMBHTSzBt8Q_BIwHXoECBQQCA"
        //       },
        //       {
        //         "name": "Jal Mahal",
        //         "info": "One of the most wonderful sights in Jaipur is the beautiful Jal Mahal or Lake Palace. The light, sand coloured stone walls and the deep blue of the water make for a wonderful contrast. The palace appears to float in the centre of Man Sagar Lake, where its magnificent exteriors can be enjoyed by tourists.",
        //         "images": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Jal_Mahal_in_Man_Sagar_Lake.jpg",
        //         "location": "https://www.google.co.in/maps/place/Jal+Mahal/@30.7925977,76.9116041,15z/data=!4m5!3m4!1s0x0:0x8baca857b9f1b33d!8m2!3d30.7925977!4d76.9116041"
        //       },
        //       {
        //         "name": "Chittorgarh Fort",
        //         "info": "The Chittor Fort or Chittorgarh is one of the largest forts in India. It is a UNESCO World Heritage Site. The fort was the capital of Mewar and is located in the present-day town of Chittor. It sprawls over a hill 180 m in height spread over an area of 280 ha above the plains of the valley drained by the Berach River.",
        //         "images": "https://www.chittorgarh.com/images/chittorgarh_fort.jpg",
        //         "location": "https://www.google.co.in/maps/place/Chittorgarh+Fort/@24.8878991,74.6450926,15z/data=!4m5!3m4!1s0x0:0x4ef923088d726382!8m2!3d24.8878991!4d74.6450926"
        //       },
        //       {
        //         "name": "The Ajmer Sharif Dargah",
        //         "info": "This is a Sufi shrine which encloses the ‘maqbara’ (grave) of Garib Nawaz, the Sufi saint Khwaja Moinuddin Chisti. Built in the 13th century, the shrine is popular among people of all faiths who flock here to have their prayers answered. ",
        //         "images": "https://resources.thomascook.in/images/holidays/sightSeeing/ajmerdargha.jpg",
        //         "location": "https://www.google.co.in/maps/place/Khawaja+Gharib+Nawaz/@26.4561878,74.628106,15z/data=!4m5!3m4!1s0x0:0x17da9f02930d903b!8m2!3d26.4561878!4d74.628106"
        //       },
        //       {
        //         "name": "Jaisalmer fort",
        //         "info": "Jaisalmer Fort is situated in the city of Jaisalmer, in the Indian state of Rajasthan. It is believed to be one of the very few \"living forts\" in the world (such as Carcassonne, France), as nearly one fourth of the old city's population still resides within the fort.For the better part of its 800-year history, the fort was the city of Jaisalmer. The first settlements outside the fort walls, to accommodate the growing population of Jaisalmer, are said to have come up in the 17th century.",
        //         "images": "http://www.rajasthantourplanner.com/blog/wp-content/uploads/2016/08/jaisalmer-fort-1024x654.jpg",
        //         "location": "https://www.google.co.in/maps/place/Jaisalmer+fort/@26.9128394,70.9130454,15z/data=!4m2!3m1!1s0x0:0xc75a821a459f586?sa=X&ved=2ahUKEwjbrseGj_jlAhW773MBHaWHAgcQ_BIwJ3oECCQQCA"
        //       }
        //     ]
        //   },
        //   {
        //     "id": "4",
        //     "name": "Kerala",
        //     "capital": "Thiruvananthapuram,",
        //     "about": "Kerala - home to the languid backwaters, long coastlines, sprawling tea gardens, and colourful dance forms, is also famously known as 'God?s Own Country'. Located on the Malabar coast of Southern India, it is a tiny sliver of paradise that is also one of the best tropical tourist destinations one can look for. Whether you want to bask in the sun and sand of the palm tree-lined Kovalam beach or want to take a hike to Munnar hill station, or even if you're going to walk down the bustling streets of Kochi, Kerala has everything on offer to take your pick from!The land of literate and simple citizens, Kerala amuses you with its spectacular dance forms, music and handicrafts. Considered to be one among the ten paradises of the world, Kerala is known for long palm tree beaches, beautiful rivers, pious inland water bodies and a calm, green atmosphere.",
        //     "climate": "The coastal state of Keralalying on the Southwestern tip of India has commonly been called the tropical paradise of India. Bounded by Arabian Sea at one side and the Western Ghats on the other, the beautiful land with stunning beauty has an equable and tropical climate offering a pleasing atmosphere throughout the entire year. This coastal state has hot and humid climate during April-May and pleasant, cold climate in December-January. Summer extends from the month of April to June when the temperature reaches to a maximum of 33 degrees centigrade. Summer is followed by South West Monsoon that starts pouring in the month of June and continues till September. With the arrival of winter there is certain drop in the temperature and you can feel a slight chill due to the cold wind. Winter in Kerala lasts from from November to January or February.",
        //     "history": "According to the Tamil classic Purananuru, the Chera king Senkuttuvan conquered the lands between Kanyakumari and the Himalayas.[25] Lacking worthy enemies, he besieged the sea by throwing his spear into it.[25][26] According to the 17th century Malayalam work Keralolpathi, the lands of Kerala were recovered from the sea by the axe-wielding warrior sage Parasurama, the sixth avatar of Vishnu (hence, Kerala is also called Parasurama Kshetram 'The Land of Parasurama'[27]). Parasurama threw his axe across the sea, and the water receded as far as it reached. According to legend, this new area of land extended from Gokarna to Kanyakumari.[28] The land which rose from sea was filled with salt and unsuitable for habitation; so Parasurama invoked the Snake King Vasuki, who spat holy poison and converted the soil into fertile lush green land. Out of respect, Vasuki and all snakes were appointed as protectors and guardians of the land.",
        //     "time": "The Best time to visit Kerala is Winter Season between September and March when the Kerala has comfortable climate and pleasant weather with less humidity in all the tourist places. People who are looking for ayurvedic treatments prefer Monsoon season from June to August",
        //     "food": "Kerala cuisine is a combination of vegetables, meats and seafood flavoured with a variety of spices. One can notice the dominance of rice, coconut, seafood and variety of non-vegetarian dishes and the lavish use of spices like Pepper, Cardamom, Cloves, Ginger and chillies that add to the taste and flavour of Kerala's traditional food.With the Romans, Greeks, Dutch, Portuguese and many more invaders making their way to the ports of Kerela, it's no surprise that Kerala's food is so diverse and distinct from the rest of the country. There are differences seen in the taste and styles of north and south Kerala- the menu ranges from lip-smacking Mappila biryani, Sadya and brilliant non-vegetarian dishes, you are sure to find something new every day! Kerala is a paradise for seafood lovers; from an array of prawns, lobsters, rockfish and squid among the others, the place won't disappoint you. The Sadya is a substantial feast served on a banana leaf and consists of 24-28 dishes in a single meal. Onam Sadyas are something you should try if you're in Kerala. Other favourite dishes include Avial, Kozhikodan Halwa, Appam-stew combo, Kappa, Puttu-Meen curry and Paal Payasam. ",
        //     "img": [
        //       "https://dmgupcwbwy0wl.cloudfront.net/system/images/000/246/174/b6e6fbfe0a70425bfa209af67b1a1ac6/x1000gt/shutterstock_1154918653.jpg?1552906145",
        //       "https://invest-india-revamp-static-files.s3.ap-south-1.amazonaws.com/s3fs-public/2018-07/Kerala_2.png",
        //       "https://www.bookitforgetit.com/wp-content/uploads/2016/10/Kerala-is-a-state-in-the-southwest-region-of-India.jpg",
        //       "https://img.veenaworld.com/group-tours/india/kerala/klhl-i/klhl-i-bnn-1.jpg",
        //       "https://i2.wp.com/www.abtravelworld.com/wp-content/uploads/2019/04/Kerala-beach.jpg?fit=980%2C500&ssl=1",
        //       "https://www.myjewishlearning.com/wp-content/uploads/2010/07/Kerala_Backwaters.jpeg"
        //     ],
        //     "products": [
        //       {
        //         "name": "Coffee",
        //         "description": "It is no wonder that 10 million tonnes of coffee are consumed every year, such as the magic of this humble cup of beverage. If you too belong to the coffee-loving brigade, your Kerala shopping expedition can never really begin for you without getting your hands on an aromatic bag of locally grown Kaapi.  The delicious Malabar Monsoon Coffee available here is also a fantastic option to choose. Rich in flavour, aroma and colour as well, this coffee beans powder not only makes for a fantastic item to buy in Kerala not only for yourself but also as a souvenir or gift for your friends and family",
        //         "image": "https://blog.thomascook.in/wp-content/uploads/2018/04/South-Indian-Coffee-e1524192277128.jpg",
        //         "category": "Grocery"
        //       },
        //       {
        //         "name": "Aroma Oila",
        //         "description": "Kerala is famous for its Ayurvedic treatments for various purposes from treating certain ailments to beauty procedures too. There are many places to visit in Kerala that are world famous for their Ayurvedic treatments, yoga and more. The massages are carried out through different therapies using various aroma oils, based on the concept of aromatherapy. Even most of the resorts and hotels in the state have spa centres offering rejuvenating massages. Therefore buying aroma oils has inadvertently become an important part of your Kerala Shopping experience. You will find top quality aroma oils here of different varieties, used for different purposes.",
        //         "image": "https://blog.thomascook.in/wp-content/uploads/2018/04/oil-e1524192373817.jpg",
        //         "category": "Grocery"
        //       },
        //       {
        //         "name": "Spices",
        //         "description": "The warm and humid climate of Kerala is perfect for the cultivation of a variety of rich spices like cardamom, star anise, black pepper, turmeric, cinnamon, clove etc. This makes it perfect for you to go shopping in Kerala for these lovely and aromatic spices as well. What makes it even cooler, is the fact that since the usually expensive spices are grown here, you can get them at really competitive prices.",
        //         "image": "https://blog.thomascook.in/wp-content/uploads/2018/04/Spices-e1524192420166.jpg",
        //         "category": "Grocery"
        //       },
        //       {
        //         "name": "Tea",
        //         "description": "Just like coffee, tea also finds its fans almost everywhere in the world and Kerala has some superb offerings on that front too. The Nilgiri tea cultivated here is made from superb tea leaves which have a beautiful flavour. The delicate and smooth taste and colour of this tea are simply amazing. This makes this product an equally worthy item to buy when Shopping in Kerala. It is both a practical thing to invest in and also makes for a wonderful gift.",
        //         "image": "https://blog.thomascook.in/wp-content/uploads/2018/04/Tea-e1524192323272.jpg",
        //         "category": "Grocery"
        //       },
        //       {
        //         "name": "Cashew Nuts",
        //         "description": "Just like spices, tea and coffee, cashew nuts too find their origination in the fertile land of God’s Own Country. Hence, if you want to stock up on your supply of nuts, it is a great way to do so while you are out for your Kerala shopping trip. You can get them at a fairly lower price here, without compromising on the quality.",
        //         "image": "https://blog.thomascook.in/wp-content/uploads/2018/04/cashewsraw-e1524192462208.jpg",
        //         "category": "Grocery"
        //       },
        //       {
        //         "name": "Banana Chips",
        //         "description": "Banana chips are another famous and must-buy items of the state, making them an unavoidable part of your Kerala Shopping spree. These yummy and light snacks made out of raw bananas is profusely available all over Kerala. Just make sure you taste them beforehand and bargain if purchasing in a bulk.",
        //         "image": "https://blog.thomascook.in/wp-content/uploads/2018/04/Banana-Chips-2-e1524192613182.jpg",
        //         "category": "Grocery"
        //       },
        //       {
        //         "name": "Wooden Caskets And Boat Models",
        //         "description": "Known locally as Nettur Caskets and Chandan Vallam, these ornately crafted wooden chests can only be found shopping in Kerala. You can use these dainty boxes to store knick-knacks such as rings or earrings or simply place them in your drawing room to receive some admirations from guests. Same goes for boats or Urus, which are the lovely little models of the popular snake boats of Kerala, used in the boat racings.",
        //         "image": "https://images-na.ssl-images-amazon.com/images/I/81MaDwVCwnL._SL1500_.jpg",
        //         "category": "Home-Decor"
        //       },
        //       {
        //         "name": "Kathakali Masks",
        //         "description": "Often represented through the expressive and vibrant masks and dance of Kathakali, the classical dance form is really the face of the state. This certainly calls for shopping in Kerala for this beautiful masks which you can hang in your home or stick one as a fridge magnet.",
        //         "image": "https://lh3.googleusercontent.com/cLxTE0sa4lLI0saF3tOSVUM02sGbBfUhM00LWcoY0xz3RLxO3QcMvHuJpsHtm2F326iU4Kg_xQcu9_iI78q08Hd0ak8g-qUwUgWjxO09LSTe2c4BMiaw59WvbeYIb_ErkhISXY5UIJgYTFHuIFVHgBudA5lGDGVtWhvJNiM-k4EoSHS5zKtt3bnM050ZAwHXyzbbwnV8m5aacUDpSbC5mghpvvzY1fi1wdu7E0sOx0EAn-rbtrR0va4YS9FtURZklvoxQRT_4cdUyhv4RRY2Ygk4Aapz8eQo8WIrvzXxxohk6itJZWk3vvnmVvRbhz1xgNb_j25Vk2TfWDR9QvjLs62VeoVT1mAbVA8uaBWqa7rErGDPYur87OPOG6uWk_SQq5CIEgPsJKhzpGfdbFKLO-jUj92XAcvyYbuXynn9FqzUcqylbo3ajjf7vIe0OIlZjvbHYaVoXin3n7CuXQKO1Dto5scYfO_0dVBbo50tM_Iec9819X3VJjDNU0s4FPtufSiTqUikzBnIyRxGZZD1S9Zezq1S5EKjb4xhBmqtg4sMg6LTwGAJJAxBQktFiPLWORu6MjHPNMAuURW0-icb4EFFC41znR3FHIoor5AOV7gFniF3V5hs4sbpqoC1DXfW55xUtR661kO5f9KYCJbGTHeM95r96fQ9ziooAdULiKyuUD3Vfy3IVMx9memGuRtinG3ZbNnvhoM-aLc1KgY=w1299-h870-no",
        //         "category": "Clothing & Accessories"
        //       },
        //       {
        //         "name": "Jewellery",
        //         "description": "Jewellery is another important must-do items in the list of things to do in Kerala. The intricate designs embellished with different precious and semi-precious gems or pearls is simply fascinating. To celebrate the womanhood in you or to gift someone you adore, you can buy these superb pieces of jewellery in gold, depicting the true Malayali style, and the artificial one too, which are as good as the real ones.",
        //         "image": "https://blog.thomascook.in/wp-content/uploads/2018/04/jewellery-e1524192715888.jpg",
        //         "category": "Jewellery"
        //       },
        //       {
        //         "name": "Cocunut And Coir Items",
        //         "description": " Kerala is well known for its abundance of coconuts. This makes it an ideal place to grab some coconut or coir based products such as rugs, wall hangings, pure coconut oil, mats, delicacies made of coconut and other cool stuff made from its husk.",
        //         "image": "https://blog.thomascook.in/wp-content/uploads/2018/04/Crafts-e1524192661475.jpg",
        //         "category": "Home-Decor"
        //       }
        //     ],
        //     "tourist": [
        //       {
        //         "name": "Munnar",
        //         "info": "The idyllic hill station Munnar - famous for its tea estates, exotic lush greenery and craggy peaks, is located in the Western Ghats, in the state of Kerala. It serves as the commercial centre for some of the world’s largest tea estates. In addition, Munnar has many protected areas which are home to endemic and highly endangered species like the Nilgiri Thar and the Neelakurinji.One of the biggest tea-plantation area of South India, Munnar is one of the most beautiful and popular hill-stations of Kerala. Situated on the banks of three rivers- Madupetti, Nallathanni and Periavaru, Munnar is also blessed with natural view-points apart from the tea-plantations. Munnar is divided into Old Munnar, where the tourist information office is, and Munnar, where the bus station and most guest houses are located. The Eravikulam National Park, Salim Ali Bird Sanctuary and tea plantations are its major attractions.",
        //         "images": "https://images.thrillophilia.com/image/upload/s---dSM_iYr--/c_fill,f_auto,fl_strip_profile,g_auto,h_600,q_auto,w_975/v1/images/photos/000/126/889/original/1522671846_Munnar.jpg.jpg?1522671846",
        //         "location": "https://www.google.co.in/maps/place/Munnar,+Kerala+685612/@10.0806491,77.0466683,14z/data=!3m1!4b1!4m5!3m4!1s0x3b0799794d099a6d:0x63250e5553c7e0c!8m2!3d10.0889333!4d77.0595248"
        //       },
        //       {
        //         "name": "Alleppey",
        //         "info": "Allepey is also popular for its Houseboat cruises that pass through the serene backwaters, where you can catch glimpses of green paddy fields, choir making activities, beautiful avifauna and witness the life of locals in Kerala. Towards the shore lies the Alleppey beach in the Arabian Sea, a beautiful example of the gems you’d find along the Malabar Coast. The appeal of this beach is only amplified by the history attached to it, and a walk down the 137-year old pier is a must. Be sure to catch a traditional snake boat race in the months of August and September and try out some toddy (palm wine) at a local toddy shop for adding a touch of authenticity to your travel experience in Allepey.",
        //         "images": "https://miro.medium.com/max/2560/1*MjHGGH7V_SeoC9t2zmC-lA.jpeg",
        //         "location": "https://www.google.co.in/maps/place/Alappuzha,+Kerala/data=!4m2!3m1!1s0x3b0884f1aa296b61:0xb84764552c41f85a?sa=X&ved=2ahUKEwj6uuG_nPnlAhXSzDgGHaOWA00Q8gEwJXoECBwQBA"
        //       },
        //       {
        //         "name": "Wayanad",
        //         "info": "Wayanad is best known for the wildlife reserves - Wayanad wildlife reserve which is home to an exquisite variety of flora and fauna. Wayanad wildlife reserve is an integral part of the Nilgiri biosphere reserve peacefully located amidst the serene hills of Western Ghats. Wayanad homes a wide variety of wildlife like elephants, leopards, and bears. Wayanad is a perfect weekend idea from the cities of South India. If taking a road trip from Bangalore, you will drive through three national parks: Nagarhole, Bandipur and Mudumalai.",
        //         "images": "https://www.wayanad.com/files/slides/3253378071.jpg",
        //         "location": "https://www.google.co.in/maps/place/Wayanad,+Kerala/@11.7141243,75.8289888,10z/data=!3m1!4b1!4m5!3m4!1s0x3ba60cf91a9c5f0d:0x71dd4da2e1d3e46f!8m2!3d11.6853575!4d76.1319953"
        //       },
        //       {
        //         "name": "Kochi",
        //         "info": "The city is marked by influences of Arabs, Dutch, Phoenicians, Portuguese, Chinese and the British city as well as that of the Indian rule of the Chera Dynasty followed by rule of the Feudal Lords. A gaggle of islands interconnected by ferries, this cosmopolitan town has upmarket stores, art galleries and some of the finest heritage accommodations. In a true vintage-meets-future fashion, pubs, restaurants, shopping hubs and futuristic stores crowd Ernakulum, Jew Town and Fort Kochi while palaces, beaches, temples and heritage sites marking their presence too. Kochi is also an important place to see Kathakali and Kalarippayattu performances and annual Biennale Festival.",
        //         "images": "https://www.holidify.com/images/bgImages/KOCHI.jpg",
        //         "location": "https://www.google.co.in/maps/place/Kochi,+Kerala/@9.9823428,76.1608472,11z/data=!3m1!4b1!4m5!3m4!1s0x3b080d514abec6bf:0xbd582caa5844192!8m2!3d9.9312328!4d76.2673041"
        //       },
        //       {
        //         "name": "Thekkady",
        //         "info": "Home to the country's largest Tiger Reserve- Periyar, Thekkady is a great way to enjoy a jungle vacation.Periyar National Park, being a major attraction, is one place where you can enjoy bamboo rafting in the catchment area of Mullaiperiyar Dam, hiking, and in the midst of the wilderness, shopping! Popular for its good eating joints, you can also enjoy its vast stretches of spice gardens and various adventure sports. You can also enjoy a night trek in the wilderness of Periyar. The early morning ride in the boat within the sanctuary is an extremely awesome experience and you might be able to spot wild elephants, bisons, wild boars, various kinds of birds, etc",
        //         "images": "https://static.toiimg.com/photo/56892948/.jpg",
        //         "location": "https://www.google.co.in/maps/place/Thekkady,+Kumily,+Kerala/data=!4m2!3m1!1s0x3b06f8812df2a199:0x468af17958c54ae8?sa=X&ved=2ahUKEwiwlMjtnfnlAhVzpOkKHeYdD04Q8gEwJXoECBUQBA"
        //       },
        //       {
        //         "name": "Varkala",
        //         "info": "Varkala is a coastal town in the southern part of Kerala known for the unique 15m high 'Northern Cliff' adjacent to the Arabian Sea. It is popular for its hippie culture, shacks on the cliff serving great seafood and playing global music and the samadhi of Kerala's saint Sree Narayana Guru. Varkala is also known for Jardana Swami Temple, also known as Dakshin Kashi.Varkala has some of the best pristine beaches, hills, lakes, forts, lighthouses, natural fisheries and springs - all of this together makes this town a little paradise. ",
        //         "images": "https://www.varkkala.com/uploads/slides/2435199045.jpg",
        //         "location": "https://www.google.co.in/maps/place/Varkala,+Kerala/data=!4m2!3m1!1s0x3b05ef26d90220fb:0xa3ec40c67d4dd020?sa=X&ved=2ahUKEwiat__AnvnlAhUpzjgGHckOB_wQ8gEwIHoECBYQBA"
        //       },
        //       {
        //         "name": "Poovar",
        //         "info": "Poovar is a small rustic town situated 27 kms from Thiruvananthapuram with unspoilt, unexplored golden sand beaches and beautiful backwaters of Kerala.Also known as a fishing village, the tranquil Poovar island lies between the Arabian Sea and the Neyyar River. Hiring a boat, (especially during the sunset)that will take you through the mangrove forest of backwaters is a must-do activity. The boat ride costs around INR 3000- INR 4000. The town has some of the beautiful resorts and hotels that are known for the hospitality they offer.",
        //         "images": "https://www.keralatourism.org/images/service-providers/photos/property-3322-Exterior-11040-20180831082544.jpg",
        //         "location": "https://www.google.co.in/maps/place/Poovar,+Kerala+695525/@8.3223957,77.0598044,15z/data=!3m1!4b1!4m5!3m4!1s0x3b05a9085a9c7bad:0xae2a78c866e7e46d!8m2!3d8.3177774!4d77.0708759"
        //       },
        //       {
        //         "name": "Kovalam",
        //         "info": "Kovalam is an idyllic coastal town located around 13 km from Thiruvananthapuram in Kerala. Famous for its three adjacent crescent-shaped shallow water and low tidal beaches, Kovalam is dotted with resorts and ayurvedic massage centres.Lighthouse beach, Samudra Beach and Hawa beach/Eve's Beach form the highlight of this town. Kovalam essentially means a ‘grove of coconut trees', and the little town is filled with these palms.",
        //         "images": "https://www.kovalam.com/files/slides/8838110887.jpg",
        //         "location": "https://www.google.co.in/maps/place/Kovalam,+Kerala/data=!4m2!3m1!1s0x3b05a5090a19ec65:0xb67f315bc0b762ac?sa=X&ved=2ahUKEwi284Swn_nlAhXgzTgGHcQ1D_UQ8gEwJHoECBgQBA"
        //       },
        //       {
        //         "name": "Sabarimala",
        //         "info": "More than 30 million pilgrims visit the temple in Sabarimala annually, making it the largest in India and second largest in the world, after Hajj Pilgrimage of Mecca in Saudi Arabia. Located inside the Periyar Tiger Reserve, in the Pathanamthitta district of Kerala, Sabarimala is a temple town on the bank of the River Pampa.Named after the mythological character, Sabarimala shelters the famous Ayyapa temple. The temple is also known as Dharma Sashta and is believed to be the son of Shiva and Mohini, the feminine incarnation of Lord Vishnu. ",
        //         "images": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201911/PTI11_16_2019_000158B-770x433.jpeg?eFOiXxMDU61sAiFgEzJPjbOtsTtRQPKo",
        //         "location": "https://www.google.co.in/maps/place/Sabarimala,+Kerala/data=!4m2!3m1!1s0x3b065b984dd41c11:0x953037d850a3006e?sa=X&ved=2ahUKEwi1uorbn_nlAhVUzTgGHRcCDFcQ8gEwJ3oECBYQBA"
        //       },
        //       {
        //         "name": "Kumarakom",
        //         "info": "Located at a distance of 16km from Kottayam in Kerala and located on the banks of Vembanad Lake, Kerala's largest lake, Kumarakom is a cluster of many small man-made islands reclaimed from the lake.Part of the Kuttanad region, Kumarakom along with Alleppey, has beautiful backwater areas and they collectively form the most important tourist centres of Kerala. Known for paddy fields, fishing, a network of backwaters, delicious local cuisine, traditional Kettuvalloms (rice barges) houseboats and luxury and budget resorts. ",
        //         "images": "https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2013/10/kumarakom-natures.jpg",
        //         "location": "https://www.google.co.in/maps/place/Kumarakom,+Kerala/data=!4m2!3m1!1s0x3b0881caaef0a8f7:0xc23075c3529e921?sa=X&ved=2ahUKEwiXmIWboPnlAhVqxzgGHW_sCNsQ8gEwH3oECBwQBA"
        //       },
        //       {
        //         "name": "Kollam",
        //         "info": "A treasure trove of natural wonders and historical edifices, Kollam is an enchanting town with backwaters and picturesque landscapes. Located 70kms away from Thiruvananthapuram, Kerala, Kollam is a commercial centre and home to India’s cashew producing industry. Popularly known as Quilon, it is often regarded as the gateway to the backwaters of Kerala.",
        //         "images": "https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Jatayu%E2%80%99s-Earth-Centre-kollam-kb6592.jpg",
        //         "location": "https://www.google.co.in/maps/place/Kollam,+Kerala/@8.9040558,76.5250328,12z/data=!3m1!4b1!4m5!3m4!1s0x3b05fc5bdda9c621:0x8bf03195267372f7!8m2!3d8.8932118!4d76.6141396"
        //       },
        //       {
        //         "name": "Trivandrum",
        //         "info": "Offering an appealing blend of a strongly rooted heritage and a nostalgic colonial legacy, the city of Trivandrum has an exceptional vibe to it. Despite being the capital of Kerala, the city has, quite astonishingly, managed to keep itself far removed from the ruthless aura that generally surrounds a capital city. Built upon seven hills, this city has long since left the days when it was only used by seafaring explorers behind - today, Trivandrum is a swanky metropolis with a quaint urban charm and plenty of scenic places to visit. Proudly retaining its age-old cultural charm, Trivandrum offers a huge variety of sights including incredible museums, beautifully designed palaces, sacred temples and mesmerizing beaches, making the city one of the best tourist spots in South India.",
        //         "images": "https://images.thrillophilia.com/image/upload/s--xqlxdexK--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/037/624/original/trivandrum.jpg.jpg?1458192663",
        //         "location": "https://www.google.co.in/maps/place/Thiruvananthapuram,+Kerala/data=!4m2!3m1!1s0x3b05bbb805bbcd47:0x15439fab5c5c81cb?sa=X&ved=2ahUKEwjHvvn_oPnlAhVV4jgGHRluCM4Q8gEwFnoECB0QBA"
        //       }
        //     ]
        //   },
        //   {
        //     "id": "5",
        //     "name": "Maharashtra",
        //     "capital": "Mumbai",
        //     "about": "Maharashtra, the land of everything unlimited invites you into its widespread plethora of attractions. It is adorned by the beautiful Sahyadri ranges of the Western Ghats with high mountains that disappear into the morning mist, while the sprawling belt of the Konkan Coast mesmerises the eyes by its white beaches. The ruins of the ancient forts and palaces in Pune and Ratnagiri among others proudly narrates the story of the then mighty rulers of Maharashtra. Centuries-old temples situated in places like Pandharpur, Ozar are still rooted in their traditions, offering sanctuary to pilgrims. As do the small hill stations of Mahabaleshwar, Lonavala, Matheran, nestled cosily in nature, provide respite to travellers from the hustle and bustle of the cities.Often called the 'Gateway to the Heart of India', Maharashtra is the third largest state and second most populous state than in the country. Owing to its proximity to the Western Ghats, it is blessed with a picturesque backdrop of the mountains on one side and has the beautiful Konkan coastal belt on the other.",
        //     "climate": "Summer: March, April and May are the hottest months. During April and May thunderstorms are common all over the state. Temperature varies between 22°C-39°C during this season.\nRainy: Rainfall starts normally in the first week of June. July is the wettest month in Maharashtra, while August too gets substantial rain. Monsoon starts its retreat with the coming of September from the state\nWinter: Cool dry spell, with clear skies gentle breeze and pleasant weather prevails from November to February. But the eastern part of Maharashtra sometimes receives some rainfall. Temperature varies between 12°C-34°C during this season\n",
        //     "history": "The modern state of Maharashtra is bordered by the Arabian Sea to the West, Gujrat and the Union Territory of Dadara Nagar haveli to the North West,Madhya Pradesh to the North & North East, Chhattisgadh to the East, Karnataka to the South, Andhra Pradesh to the South East and Goa to the South West.The antiquity of the human habitation in the state goes back to the stone age period (1.27 million years ago). Numerous sites with the stone age tools have been reported on the bank of various rivers as well as in the river vallies. Numerous Chalcolithic sites have been located and some like Inamgaon(1300 BCE to 700 BCE) were extensively excavated.",
        //     "time": "There is no particular best time to explore the state since the eevry season has its own pros and cons. However, winters are most suitable since the weather remains calm and pleasant. Summers are too scorching but are perfect to visit hilly regions. In monsoons also, heavy downpours are observed but, rains add to the beauty of mountainous areas.",
        //     "food": "Maharashtrian cuisine is one which can tickle and surprise your taste buds. The food ranges from mild to really spicy food as well as flattering deserts that you will love to indulge in. Vada Pav (Potato filled cutlets with Buns), Misal (A spicy gravy of pulses garnished with onions), Onion fries, etc. are the everyday food of the people here and are items with which the state cuisine is identified.The staple diet of Maharashtra includes rice, Dal, chapattis and a vegetable dish generally accompanied by pickle for taste. An eclectic and vibrant mix of cultures derived from the people with diverse backgrounds who move here, gives the cuisine here countless varieties, with absolutely nothing that you cannot find here. Each of these varied and colourful elements and cuisine styles finds themselves a unique place in the state's menu. Typically, a South-Indian breakfast will lead to a Maharashtrian lunch, a Gujarati snack and end with a Punjabi Dinner. Add a Bengali sweet if you want. This is how Maharashtra borrows food cultures from all over and makes them its own.",
        //     "img": [
        //       "https://www.tripsavvy.com/thmb/sOKirs6tks8NcKlhytwechtqOm4=/4241x2386/smart/filters:no_upscale()/GettyImages-1008831236-5c65d6bf4cedfd00014aa310.jpg",
        //       "https://ihpl.b-cdn.net/pictures/travelguide/other-images/dest_head_img-550.jpeg",
        //       "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/08/05/713821-mumbai-pune-expressway-03.jpg",
        //       "https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2014/12/Untitled-design-17-1.png",
        //       "https://cdn1.goibibo.com/t_tg_fs/mumbai-juhu-beach-152537165081-orijgp.jpg",
        //       "https://r-cf.bstatic.com/images/hotel/max1024x768/103/103705059.jpg"
        //     ],
        //     "tourist": [
        //       {
        //         "name": "Mumbai",
        //         "info": "Mumbai, the capital city of the Indian state of Maharashtra, is a spectacular paradox of chaos and hope, glamour and squalor, modernity and tradition. Famously known as the City of Dreams, Mumbai – formerly known as Bombay - Mumbai is a beautifully blended melting pot of cultures and lifestyles.One of the main centres in the country of art, culture, music, dance and theatre, Mumbai is a dynamic, cosmopolitan city that has been running for years solely on the indomitable spirit of the Mumbaikars.",
        //         "images": "https://www.holidify.com/images/bgImages/MUMBAI.jpg",
        //         "location": "https://www.google.co.in/maps/place/Mumbai,+Maharashtra/data=!4m2!3m1!1s0x3be7c6306644edc1:0x5da4ed8f8d648c69?sa=X&ved=2ahUKEwib5sWm5frlAhW5xTgGHf10CCMQ8gEwKXoECBcQBA"
        //       },
        //       {
        //         "name": "Ajanta And Ellora Caves",
        //         "info": "Ajanta and Ellora caves, considered to be one of the finest examples of ancient rock-cut caves are located near Aurangabad in the state of Maharashtra, India. Adorned with beautiful sculptures, paintings and frescoes, Ajanta and Ellora caves are an amalgamation of Buddhist, Jain and Hindu monuments as the complex includes both Buddhist monasteries as well as Hindu and Jain temples. The Ajanta caves are 29 in number and were built in the period between 2nd century BC and 6th century AD whereas the Ellora Caves are more spread out and 34 in number and dates to the period between 6th and 11th Century AD.Ajanta and Ellora caves are designated as UNESCO World Heritage Sites and are quite popular among travellers from all over the world. ",
        //         "images": "https://static.toiimg.com/photo/52533940/.jpg",
        //         "location": "https://www.google.co.in/maps/place/Ajanta+Caves/@20.5518603,75.7032521,15z/data=!4m5!3m4!1s0x0:0x7ca8d7c57639691f!8m2!3d20.5518603!4d75.7032521"
        //       },
        //       {
        //         "name": "Panchgani",
        //         "info": "Deriving its name from the five hills surrounding it, Panchgani is a popular hill station near Mahabaleshwar, famous for its various sunset/sunrise points and scenic valley view.Located at an altitude of 1, 334 mts. , Panchgani is a hill station in Maharashtra, known for its scenic views. Five hills form the Sahyadri mountain ranges offer Panchgani its name. The picturesque backdrop of hills on one side and coastal plains on the other makes for an amazing view. In the British era, the place was treated as a summer resort and hence many colonial period establishments can be seen here. Mahabaleshwar is like a twin city to Panchgani.",
        //         "images": "https://images.thrillophilia.com/image/upload/s--sxUdO_kN--/c_fill,f_auto,fl_strip_profile,g_center,h_642,q_auto,w_1280/v1/images/photos/000/049/457/original/1553066319_panchgani_places_feature.jpg.jpg",
        //         "location": "https://www.google.co.in/maps/place/Panchgani,+Maharashtra/data=!4m2!3m1!1s0x3bc2660326292d1b:0x7b364992c7d16bfc?sa=X&ved=2ahUKEwjjjrmF5vrlAhW8xDgGHa-4BGgQ8gEwJ3oECBgQBA"
        //       },
        //       {
        //         "name": "Mahabaleshwar",
        //         "info": "Mahabaleshwar is a hill station located in the Western Ghats, in Satara district of Maharashtra. Known for its captivating beauty and the beautiful strawberry farms, the city comprises of ancient temples, boarding schools, manicured and lush green dense forest, waterfalls, hills, valleys. The city is definitely among the most sought after weekend getaways from Mumbai. Charming views, enticing valleys, serene lakes and a refreshing delight for your taste buds - the best way to summarize this natures gift.",
        //         "images": "https://www.holidify.com/images/bgImages/MAHABALESHWAR.jpg",
        //         "location": "https://www.google.co.in/maps/place/Mahabaleshwar,+Maharashtra+412806/@17.925819,73.6137621,13z/data=!3m1!4b1!4m5!3m4!1s0x3bc2655313cba1bb:0xca8196c7aa20a0a8!8m2!3d17.9307285!4d73.6477342"
        //       },
        //       {
        //         "name": "Lonavala",
        //         "info": "Popular hill station close to Pune and Mumbai, Lonavla is the place to be during monsoons. With lots of waterfalls, lakes and hills around, Lonavala is frequented by all sorts of people, especially hikers and trekkers.Lonavala, being a part of the Sahyadri hills, offers an alluring and bewitching experience of nature's most gifted region. Surrounded by dense forests, waterfalls, dam alongside lakes, Lonavala is a must-visit if you admire nature and want a gateway to having a soulful weekend or a good trip. Also, visit Khandala and Rajmachi on the way to Lonavala.",
        //         "images": "https://cdn1.goibibo.com/t_tg_fs/pune-lonavala-150034126364-orijgp.jpg",
        //         "location": "https://www.google.co.in/maps/place/Lonavla,+Maharashtra/data=!4m2!3m1!1s0x3be801098bdf8145:0x696b4a60a5e28658?sa=X&ved=2ahUKEwiYz_Di5vrlAhV-xjgGHRRIDJsQ8gEwG3oECBsQBA"
        //       },
        //       {
        //         "name": "Alibag",
        //         "info": "A little coastal town tucked away in the Konkan region of Maharashtra, Alibaug is a very popular weekend getaway holiday destination and has earned itself the name of 'mini-Goa', owing to the high tourist footfall all year round. Steeped in colonial history, Alibaug is a quaint little town located about 110 kilometres from Mumbai, and is replete with sandy beaches, clean unpolluted air and plenty of forts and temples, ensuring that despite being a small town, you never run out of activities to do.Alibaug has numerous beaches, and all the beaches are only a few minutes’ drives away from each other, so you won’t have to worry about which beach to visit and which one to leave out. The most visited in the beach in Alibaug is, of course, Alibag beach, which offers a spectacular of view of not only the sunrise and sunset but of the Colaba fort as well, which you can take a short boat ride to.",
        //         "images": "https://www.holidify.com/images/bgImages/ALIBAG.jpg",
        //         "location": "https://www.google.co.in/maps/place/Alibag,+Maharashtra/@18.6581318,72.8637615,14z/data=!3m1!4b1!4m5!3m4!1s0x3be87a3b9826f96b:0xa9634e5680f68b81!8m2!3d18.6568523!4d72.8705888"
        //       },
        //       {
        //         "name": "Shirdi",
        //         "info": "The home of great saint Sai Baba, Shirdi is a religious site close to Nasik with various temples apart from the famous Sai Baba temple and a few historical sites.Located in the Ahmednagar district of Maharashtra, Shirdi holds a strong importance as a holy and pilgrim place by Sai Baba devotees. The small town is filled with religious spots and activities which will soothe and calm your soul on its visit. The air here carries chants lingering with spirituality and the whole grandness about the same too will leave you spellbound. There are many religious places to be seen in Shirdi such as Chavadi, Samadhi Mandir, Dwarkamai masjid, Shani Shignapur, to name a few.",
        //         "images": "http://jivantahotel.com/blog/wp-content/uploads/2017/02/www.jivatahotel.com_.png",
        //         "location": "https://www.google.co.in/maps/place/Shirdi,+Maharashtra/@19.7605623,74.4590232,14z/data=!3m1!4b1!4m5!3m4!1s0x3bdc5ba7461768af:0xd802d2c2943c99c!8m2!3d19.7645364!4d74.4762124"
        //       },
        //       {
        //         "name": "Nashik",
        //         "info": "Nashik (Nasik), named after a relic associated with Ramayana, is a city in Maharashtra located on the banks of river Godavari. Nashik plays host to the famous Kumbh Mela every 12 years. The city is home to plenty of exotic temples and is known in Hindu mythology as the place where Ravana's sister, Surpanakha, tried to seduce Lord Ram and got her nose cut off by Lakshman in the process. Its religious importance doesn't end there. It also plays host to the thousands of tourists visiting Shirdi and Trimbakeshwar. Apart from its temples, Nashik also has forts, waterfalls and vineyards to look out for. With multiple vineyards present in Nashik, the most popular being Sula, the wine-tourism industry is mushrooming in this part of Maharashtra. Nashik gives you the chance to experience a fabulous cocktail of extremes - from temples to vineyards, hills to waterfalls, this place offers a lot to see.",
        //         "images": "https://3.bp.blogspot.com/-9E9gZXWCViM/XJ3nDqdji3I/AAAAAAABVxg/eYWwfQDFXOEruwo_ZgBoEiPL1D3LH6z6gCLcBGAs/s1600/Gondeshwar_temple.jpg",
        //         "location": "https://www.google.co.in/maps/place/Nashik,+Maharashtra/@19.9909493,73.7334397,12z/data=!3m1!4b1!4m5!3m4!1s0x3bddd290b09914b3:0xcb07845d9d28215c!8m2!3d19.9974533!4d73.7898023"
        //       },
        //       {
        //         "name": "Pune",
        //         "info": "Pune is a bustling metropolis of Maharashtra, ranked number one in India in the ease of living. Often referred to as the Oxford of the East, it is a hub of diverse people and activities and is in rapidly growing into one of the top metropolitan cities in the country. Pune is a city that perfectly blends modernity with tradition sprinkled with colonial-era charm, and it deserves the title of being the cultural capital of Maharashtra.Behind the modern commercialized façade of Pune lies the roots of ancient Poona, which gave birth to the Maratha Empire and had a very crucial role to play in the history of India’s independence. Pune is globally known for the Osho Ashram which attracts followers from all over the world. Dotted with palaces and temples, the most important of these are the Shaniwar Wada palace and the Aga Khan Palace. ",
        //         "images": "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/08/05/713821-mumbai-pune-expressway-03.jpg",
        //         "location": "https://www.google.co.in/maps/place/Pune,+Maharashtra/@18.5245649,73.7228783,11z/data=!3m1!4b1!4m5!3m4!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!8m2!3d18.5204303!4d73.8567437"
        //       },
        //       {
        //         "name": "Kashid",
        //         "info": "A Beach town, popular for its white sand and blue seas situated in Konkan region of Maharashtra, Kashid is the perfect destination for a quiet weekend getaway from Mumbai.A soothing and calm place in nature's lap, Kashid is mildly enchanting with its quiet environment and picturesque location. This beach town is known also for its majestic mountains and whispering Casuarinas. A delightful place for those seeking a serene environment, Kashid is has a calm shore that stretches to a vast extent and presents with a spellbound appearance. Kashid's spotless water and clean beach makes it one of the most beautiful spots in the nearby areas. A drive through the area in itself is a great experience. Chaul, which lies near Kashid, has many Buddhist caves that are of public interest, and also famous churches and temples. The Korlai Fort is another beautiful attraction here.",
        //         "images": "https://www.holidify.com/images/bgImages/KASHID.jpg",
        //         "location": "https://www.google.co.in/maps/place/Kashid,+Maharashtra/@18.4401081,72.8902862,14z/data=!3m1!4b1!4m5!3m4!1s0x3be8687c8a4e9b5d:0x8d857627a2ac7f9d!8m2!3d18.4376235!4d72.9091436"
        //       },
        //       {
        //         "name": "Aurangabad",
        //         "info": "Aurangabad, which was declared by the Government as the Tourism Capital of Maharashtra back in 2010, is a famous tourist hub which greets its visitors with a richly woven tapestry of sights and sounds. The city got its name for being the erstwhile capital of Mughal Emperor Aurangzeb in the 17th century AD. The town is used as the base to explore the extremely famous caves of Ajanta and Ellora, Daulatabad Fort which is renowned for its strong defence systems, Mausoleums of Aurangzeb and Bibi-Ka-Maqbara famous for its architecture and Grishneshwar Temple, one of the only 12 Shiva Jyotirlingas in India.The most famous tourist attraction of Aurangabad is the Ajanta and Ellora Caves. Declared a World Heritage Site by UNESCO, the Ajanta Caves is home to 29 different caves, all of which showcase Buddhist artwork belonging to the period ranging from 200 B.C to 650 A.D.",
        //         "images": "https://www.holidify.com/images/bgImages/AURANGABAD.jpg",
        //         "location": "https://www.google.co.in/maps/place/Aurangabad,+Maharashtra/@19.8700826,75.2351603,12z/data=!3m1!4b1!4m5!3m4!1s0x3bdb9815a369bc63:0x712d538b29a2a73e!8m2!3d19.8761653!4d75.3433139"
        //       },
        //       {
        //         "name": "Kolhapur",
        //         "info": "Kolhapur is situated on the banks of the river Panchaganga in the south-west region of Maharashtra.  Situated 230 kilometres away from Pune, Kolhapur is one of the princely states and boasts of a rich legacy dating back to the times of the Marathas. Presently, Kolhapur is known for Kolhapuri sandals and necklaces that are sold worldwide. Kolhapur derives its name from a mythological story of Kolhasur - a demon who was slain by Goddess Mahalakshmi. The famous Mahalakshmi temple is situated here in the honour of Goddess Mahalakshmi. Kolhapuri chappals, Kolhapuri jewellery and Kolhapuri cuisine are famous all over India. It is a tourist-friendly destination, having no problem in commuting to accommodation and food. ",
        //         "images": "https://cdn1.goibibo.com/t_tg_fs/maharashtra-kolhapur-150034412831-orijgp.jpg",
        //         "location": "https://www.google.co.in/maps/place/Kolhapur,+Maharashtra/@16.7084568,74.1688267,12z/data=!3m1!4b1!4m5!3m4!1s0x3bc1000cdec07a29:0xece8ea642952e42f!8m2!3d16.7049873!4d74.2432527"
        //       }
        //     ]
        //   },
        //   {
        //     "id": "6",
        //     "name": "Uttarakhand",
        //     "capital": "Dehradun",
        //     "about": "Famously known as Devbhumi, or the Land of the Gods, Uttarakhand is a land of untouched natural beauty and sublime spirituality. Carved out from Uttar Pradesh, the state, formerly known as Uttaranchal, is a place that not only boasts of a scintillating view of the Himalayas but also exhibits a cultural ethos which speaks of a simplistic and harmonic coexistence with nature. With oaks, birches, silver firs and rhododendrons adorning the steep mountain slopes, Uttarakhand offers you a glimpse into an untainted and idyllic world.Uttarakhand is a very popular pilgrimage site, as it is the originating spot of the Ganga and the Yamuna, two of the most sacred rivers for Hindus. Uttarakhand is home to the Char Dhams, the four most pious sites of pilgrimage revered by the Hindus ? Gangotri, Yamunotri, Kedarnath, and Badrinath. Thousands of tourists visit Uttarakhand annually to pay homage to the Char Dhams.",
        //     "climate": "Climate ranges from subtropical in the southern foothills, averaging summer temperatures of about 30° C (about 86° F) and winter temperatures of about 18° C (about 64° F).Warm temperate conditions prevail in the Middle Himalayan valleys, with summer temperatures usually hovering about the mark of 25° C (about 77° F) and cooler winters.Cool temperate conditions dominate the higher areas of the Middle Himalayas, where the summer temperatures are usually around 15 to 18° C (59 to 64° F) and winters drop below the freezing point.",
        //     "history": "Ancient rock paintings, rock shelters, paleolithic stone tools (hundreds of thousands of years old), and megaliths provide evidence that the mountains of the region have been inhabited since prehistoric times. There are also archaeological remains which show the existence of early Vedic (c. 1500 BCE) practices in the area. The Pauravas, Khasas, Kiratas, Nandas, Mauryas, Kushanas, Kunindas, Guptas, Karkotas, Palas, Gurjara-Pratiharas, Katyuris, Raikas, Chands, Parmars or Panwars, Mallas, Shahs and the British have ruled Uttarakhand in turns.It is believed that the sage Vyasa scripted the Hindu epic Mahabharata in the state. Among the first major dynasties of Garhwal and Kumaon were the Kunindas in the 2nd century BCE who practised an early form of Shaivism and traded salt with Western Tibet.",
        //     "time": "Uttarakhand can be visited throughout the year except for the peak monsoon season in July and August. Uttarakhand is an ever embracing state, but summer is the best time to visit this state when the temperature is cold and pleasant. July and August must be avoided as the state receives high rainfall during these months making it wet and damp. Winters are icy, and some parts of the state also experience snowfalls during this period making it even more picturesque and beautiful.",
        //     "food": "The distinctive characteristic food of Uttarakhand lies in the way it is prepared- wood and charcoal are burnt which helps to keep the nutritional content intact. The food is simple, prepared with local ingredients, using herbs and spices which make the food highly energetic. The cooking methods here, are generally elaborate and time-consuming and make use of a generous dash of distinct spices.Uttarakhand doesn?t have one uniform cuisine; instead, the local dishes keep changing as you move from place to place. The staples are mostly North Indian, though, with a significant part of the eateries and restaurants ? especially in an around the pilgrimage sites ? being vegetarian.The cooking often uses a generous use of 'Ghee' which completes charcoal and dishes. The food is also usually prepared using lentils and pulses. The area fosters both Garhwali and Kumauni cuisines which are somewhat similar in elements but differ slightly in their styles. Even though the food is mostly vegetarian, one can find equally mouth-watering preparations of chicken and mutton in the area. Rice and Hash seeds known as 'Bhaang' are essential elements of any platter here. Bhatt ki Churdkani, Arsa (a sweet dish), Kafuli(a preparation of local green leafy vegetables), Phannu, Badi, Rus(development of several lentils), Gulgula (a sweet snack), Kandalee ka Saag, Palau are the local and unique preparations almost special to the area.",
        //     "img": [
        //       "https://cdn1.goibibo.com/india-uttarakhand-149361554819o.jpg",
        //       "https://images.thrillophilia.com/image/upload/s--RZhmz_7S--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/082/491/original/1464188297_I2GZl5w7lL-1920x1080.jpg.jpg?1464188297",
        //       "https://www.holidaytravel.co/uploaded_files/destination_img/2017_46592e7e82dbb7balmora.jpg",
        //       "https://www.holidify.com/images/compressed/flexPage_35.jpg",
        //       "https://www.holidify.com/images/compressed/664.jpg?v=1.1",
        //       "https://www.chardham-tours.com/wp-content/uploads/2018/07/uttarakhand-tour-packages.jpg"
        //     ],
        //     "products": [
        //       {
        //         "name": "Jams & Pickles",
        //         "description": "One of the famous things to buy while shopping in Uttarakhand is the fresh jam. It is way more delicious and fresh than the ones you buy from those shelves in supermarts. Once you taste these jams, you will feel like you are actually eating fruit. The variety of jams is galore too. You have mixed fruit, apple, strawberry, blueberries, mango, etc. You can even buy fresh pickles in Uttarakhand. Some of the best pickles to buy are mushrooms, lotus stem, and mixed pickle.",
        //         "image": "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/04/Jams-Pickles1.jpg",
        //         "category": "Grocery"
        //       },
        //       {
        //         "name": "Local Wine",
        //         "description": "If you are a wine connoisseur, then you should try the local wines made in the wineries of Uttarakhand. Sure, they don’t taste better than Sula or those expensive French wine, but they will definitely get you tipsy. These wines are made with a variety of sources like apple cider and grapes. It is worth a try. They are not very expensive either. You will find local wine shops easily in the streets and markets from where you can buy as many bottles of wine as you want.",
        //         "image": "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/04/Local-Wine.jpg",
        //         "category": "Grocery"
        //       },
        //       {
        //         "name": "Honey",
        //         "description": "Honey is another thing you should buy while shopping in Uttarakhand. Why not when Uttarakhand has a lot of beekeeping farms. Taste the freshness and sweetness in every drop of that natural honey. The best part is that it is organic. There is no adulteration or additives added into honey which is why it stays perishable for years. You will find a variety of flavors too, like litchi flavored honey.",
        //         "image": "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/04/Honey.jpg",
        //         "category": "Grocery"
        //       },
        //       {
        //         "name": "Woolen Clothing",
        //         "description": "One of the best things to buy from any hill station is woolen clothing. Buy hand-knitted scarfs, socks, sweaters, and shawls from the handicraft bazaars of Uttarakhand. These woolen items will keep you safe from the harsh winters on the hill station. There is no other way. Also, you will remember for years how you bought that sweater or scarf on your trip to Uttarakhand. These woolen items also make nice souvenirs to gift to your loved ones.",
        //         "image": "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/04/Woolen-Clothing.jpg",
        //         "category": "Clothing & Accessories"
        //       },
        //       {
        //         "name": "Ringaal Handicraft",
        //         "description": "One of the things Uttarakhand is famous for is bamboo handicrafts made by Ringaal people in the Kumaon region. These beautiful bamboo art pieces are a 100% eco-friendly and last long. You will find bags, purses, lampshades, furniture, and what not, all spun out of bamboo. Everything is crafted so well that you will not be able to help yourself from buying. There are kitchen utility items, carpets, and even cute baskets made from bamboo. Get one of these for yourself on your next vacation.",
        //         "image": "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/04/wickerwork.jpg",
        //         "category": "Home-Decor"
        //       },
        //       {
        //         "name": "Rambaans Handicraft",
        //         "description": "Local people in uttarakhand are very talented. Who would have thought that they would weave something out of jute and hemp? Rambaans is a local art form made using hemp and jute fiber. You will find bags, purses, wall hangings, and showpieces hanging at the shops in various markets in Uttarakhand. Again, these items are more sustainable and upcycled products. So, buying them will make you feel good and using them will make you happier.",
        //         "image": "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/04/jute.jpg",
        //         "category": "Home-Decor"
        //       },
        //       {
        //         "name": "Angora & Pashmina",
        //         "description": "One of the things that you should buy while shopping in Uttarakhand is Angora or pashmina shawls. Angora and pashmina fabrics are woven from the hair of mountain goats and these fabrics are the warmest clothing you can have. You will find beautiful shawls with intricate embroidery at various shops in Uttarakhand. To test whether it is real pashmina or not, pass the fabric through your ring. If it does, it is real.",
        //         "image": "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/04/pashmina.jpg",
        //         "category": "Clothing & Accessories"
        //       },
        //       {
        //         "name": "Wooden Crafts",
        //         "description": "There is one thing that you will find in abundance in Uttarakhand and that is wooden craft. In fact, the Himalayan state excels in the art of woodwork. The Gunjyal tribe is known for its excellent craftsmanship and they can create anything out of wood. Buy walking sticks, jewelry boxes, animal figurines and other useful items made from the wood of mountain trees.",
        //         "image": "https://img.traveltriangle.com/blog/wp-content/tr:w-700,h-400/uploads/2019/04/wooden-toys-1137943_1280.jpg",
        //         "category": "Home-Decor"
        //       },
        //       {
        //         "name": "Aipan",
        //         "description": "An important native art coming from the region of Kumaon in Uttarakhand, Aipan is a folk art that is associated with the legends of the region’s tradition. The art is the perfect combination of skill and imagination that are demonstrated on the shawls and stoles, wall hangings, bookmarks, coasters, photo frames etc.",
        //         "image": "https://i.pinimg.com/originals/41/13/7d/41137d61c87a864bafba83468ddb7d06.jpg",
        //         "category": "Home-Decor"
        //       },
        //       {
        //         "name": "copperware",
        //         "description": "Making use of the copper is deeply integrated into the traditions of Uttarakhand. The art of copperware can be seen practiced in several parts of the state where the artists indulge in making items like copper pots, water tillers, drinking glasses, musical instruments, masks and other essential elements out of copper.",
        //         "image": "https://www.floraldance.co.uk/wp-content/uploads/2018/02/Styled-shoot-camp-katur-low-res-26-of-157.jpg",
        //         "category": "Home-Decor"
        //       }
        //     ],
        //     "tourist": [
        //       {
        //         "name": "Rishikesh",
        //         "info": "Located in the foothills of the Himalayas along the convergence of Ganga and Chandrabhaga River, Rishikesh (also called as Hrishikesh) is known for its adventure activities, ancient temples, popular cafes and as the \"Yoga Capital of the World\". With whitewater rafting industry growing and varied camping and cafe spots springing up, Rishikesh has grown immensely as a favourite, catering to people with different needs.Over the years, the tranquil town has become extremely popular as the top spiritual destination in the world, especially after the Beatles association with Maharishi Mahesh Yogi here in the late '60s. As it lies on the holy banks of river Ganga, Rishikesh has been a hub of Sadhus (saints) with numerous ashrams teaching spirituality, yoga, meditation and Ayurveda springing up, the most popular of which is the Beatles Ashram.",
        //         "images": "https://www.holidify.com/images/bgImages/RISHIKESH.jpg",
        //         "location": "https://www.google.co.in/maps/place/Rishikesh,+Uttarakhand/@30.0876602,78.2005685,12z/data=!3m1!4b1!4m5!3m4!1s0x39093e67cf93f111:0xcc78804a6f941bfe!8m2!3d30.0869281!4d78.2676116"
        //       },
        //       {
        //         "name": "Nainital",
        //         "info": "The gem of Uttarakhand - Nainital is a charming hill station that sits prettily at the green foothills of the Kumaon ranges in the Himalayas. Located at an elevation of around 1938 metres, the epicentre of the town’s popularity and beauty lies within the gorgeous Naini Lake, after which the town is named. Founded by the British due to its resemblance to the Cumbrian Lake district, Nainital brims with elegant colonial structures that amplify the beauty of this place. It is a perfect weekend getaway from the Indian capital of Delhi.This quaint little town experiences a pleasant climate throughout the year, making it a tourist getaway, especially preferred by families and honeymooners. The Naini Lake, along with the other lakes in the area, has earned this town the title of ‘City of Lakes’. Whether you want to go boating on the beautiful Naini Lake or any of the other lakes, relish some local delicacies, shop at the Tibetan Market and Mall Road, or take a ropeway ride to soak in the beauty of the Himalayas from Snow View Point, Nainital is sure to leave an imprint on you that will last a lifetime.",
        //         "images": "https://www.holidify.com/images/bgImages/NAINITAL.jpg",
        //         "location": "https://www.google.co.in/maps/place/Nainital,+Uttarakhand/@29.3835928,79.4377611,14z/data=!3m1!4b1!4m5!3m4!1s0x39a0a1bc28fd9d61:0x7cae7ba916987db3!8m2!3d29.3919202!4d79.4542033"
        //       },
        //       {
        //         "name": "Mussorie",
        //         "info": "If your idea of the perfect holiday involves tranquil hills, untouched nature and a holiday experience that is unadulterated in the truest sense of the term, Mussoorie is the place you should be heading to. Nestled amidst the foothills of the Garhwal Himalayan ranges, Mussoorie, also known as Queen of The Hills, stands at an altitude of 7000 feet above sea level, and has a cool, pleasant climate throughout the year. The pristine, natural beauty of Mussoorie makes it a very popular choice of holiday for honeymooners. If you want to enjoy the beautiful sight of the rolling green slopes juxtaposed with the snow-capped peaks of the Himalayas, Mussoorie is the place for you to be.This beautiful hill station is the perfect retreat from the sweltering weather of the plains, and the fact that it was a very popular holiday destination during the British era can be seen from the multitude of British remnants engulfing the city, such as the archaic architecture of the hotels and churches dotting the entire terrain.",
        //         "images": "https://www.holidify.com/images/bgImages/MUSSOORIE.jpg",
        //         "location": "https://www.google.co.in/maps/place/Mussoorie,+Uttarakhand/@30.4547186,78.0414204,13z/data=!3m1!4b1!4m5!3m4!1s0x3908d0cfa61cda5b:0x197fd47d980e85b1!8m2!3d30.4597892!4d78.0643723"
        //       },
        //       {
        //         "name": "Badrinath",
        //         "info": "Perched on the Garhwal hill tracks, near Alaknanda River, the most sacred Badrinath Temple or the Badrinarayan Temple is dedicated to Lord Vishnu. The temple is also one of the four Char Dham and Chota Char Dham pilgrimage yatras.  Situated at the height of 10,279 feet, the temple is surrounded by lofty snow-clad Himalayas. Believed to be originally established by the saint, Adi Shankaracharya, the black stone idol of Lord Vishnu is 1m tall and is considered to be one of the 8 swayam vyakta kshetras or self-manifested statues of Vishnu. It also finds its mention in the 108 Divya Desams devoted to Lord Vishnu in India.The religious importance and purity of Badrinath Temple allures scores of devotees.Badrinath Temple has a Tapt Kund, a hot water spring which is considered to have medicinal values. River Alaknanda is known to originate from here. The vibrant festivals of Mata Murti Ka Mela and the Badri Kedar Festival give you another reason to visit the temple.",
        //         "images": "https://www.holidify.com/images/bgImages/BADRINATH%20.jpg",
        //         "location": "https://www.google.co.in/maps/place/Badrinath,+Uttarakhand+246422/@30.7417338,79.4852149,15z/data=!3m1!4b1!4m5!3m4!1s0x39a78e9f973108e7:0xf05a8b5e0c71473!8m2!3d30.7433085!4d79.4937634"
        //       },
        //       {
        //         "name": "Haridwar",
        //         "info": "Haridwar, considered to be among the seven holiest cities in India, is an ancient city located on the banks of River Ganga in the Garhwal region of Uttarakhand. Dotted with temples, ashrams and narrow lanes across the city, Haridwar is a famous Hindu temple town where millions of devotees come to take a dip in the holy Ganges. It's believed that taking a dip in the holy Har Ki Pauri relieves you of all your sins.Every evening, Haridwar is witness to a set of rituals for the famous Ganga Aarti at the Ghats (River Banks) where thousands of devotees come together to pray to the river. Once in every twelve years, Haridwar is host to the mega-gathering during the world famous Kumbh Mela which sees millions of visitors from all over the country.",
        //         "images": "https://www.holidify.com/images/bgImages/HARIDWAR.jpg",
        //         "location": "https://www.google.co.in/maps/place/Haridwar,+Uttarakhand/@29.9526313,78.0458849,12z/data=!3m1!4b1!4m5!3m4!1s0x3909470eb8ee57c9:0x4e449176a640f5f3!8m2!3d29.9456906!4d78.1642478"
        //       },
        //       {
        //         "name": "Jim Corbett National Park",
        //         "info": "The oldest National Park in India, Jim Corbett National Park was established in 1936 as Hailey National Park and is home to the critically endangered species of the Royal Bengal Tiger. It was the first place where Project Tiger was launched in 1973. Located in Uttarakhand and along the banks of Ramaganga River, it is home to around more than 480 species of flora and fauna. Spread over an area of more than 500 sq km covering riverine belts, hills, marshy depressions, lakes, streams and grasslands. The Park is divided into 5 zones: Bijrani, Dhikala, Jhirna, Domunda and Sonanandi and all of them have different gates. A visit to Corbett National Park is incomplete without a jungle safari, so make sure you go for a safari. There are many resorts inside the national park for a perfect getaway.",
        //         "images": "https://www.holidify.com/images/cmsuploads/compressed/djbfhsdfb_20181212152809.jpeg",
        //         "location": "https://www.google.co.in/maps/place/Jim+Corbett+National+Park/@29.5300138,78.7724716,17z/data=!3m1!4b1!4m5!3m4!1s0x390a24ffffffffff:0x3017b72d3d253fd7!8m2!3d29.5300138!4d78.7746603"
        //       },
        //       {
        //         "name": "Kedarnath",
        //         "info": "Kedarnath is one of the most sacred Hindu temples as it is a part of Chhota Char Dham Yatra in Uttarakhand. The temple is the highest among the 12 Jyotirlingas dedicated to Lord Shiva. This abode of Lord Shiva can only be reached from Gaurikund through a trek and remains closed for the six months of winters due to heavy snowfall. Kedar is another name of Lord Shiva, the protector, and the destroyer, and its believed that a journey to this sacred land opens up doorways to \"Moksha\" or salvation.Located on the Garhwal Himalayan Range in the Rudraprayag District, the Kedarnath Temple is situated at the height of 3,583 metres. Set amidst the snow-clad mountains near Chorabari Glacier with Mandakini River flowing in front of it, Kedarnath witnesses lakhs of devotees every year due to its religious significance. ",
        //         "images": "https://www.holidify.com/images/bgImages/KEDARNATH.jpg",
        //         "location": "https://www.google.co.in/maps/place/Kedarnath,+Uttarakhand+246445/@30.7344814,79.0625578,16z/data=!3m1!4b1!4m5!3m4!1s0x39083ee051e628b1:0x167ce4efaf440f1e!8m2!3d30.7346267!4d79.0668943"
        //       },
        //       {
        //         "name": "Auli",
        //         "info": "Dotted with the apple orchards, old oaks and pine trees there is no dearth of natural beauty in Auli. Apart from skiing you can also go for numerous treks in the hills of Garhwal Himalayas and enjoy the spellbinding views of the snow-draped mountains. Auli is a popular hill resort in the Himalayan range dating back to 8th Century AD.Auli is a popular skiing destination in India because of its glittering slopes and clean environment. Dotted with apple orchards, oaks and deodars, Auli is a popular hill town with numerous ski resorts situated amidst the Himalayan range. Located at 2800 meters above sea levels, it is home to mountain ranges of Nanda Devi, Mana Parvat and Kamat Kamet. Many religious destinations are also scattered around Auli. It is believed that Shankracharya had blessed Auli with his visit.",
        //         "images": "https://www.holidify.com/images/cmsuploads/compressed/sdfsdsdgsdgsdg_20181211083314.jpg",
        //         "location": "https://www.google.co.in/maps/place/Auli,+Himachal+Pradesh+171210/@30.9494163,77.739048,15z/data=!3m1!4b1!4m5!3m4!1s0x390f50aafcc75db9:0xdc3ec1a504bf4830!8m2!3d30.949417!4d77.7478028"
        //       },
        //       {
        //         "name": "Dehradun",
        //         "info": "Nestled amidst the Doon Valley in the state of Uttarakhand, Dehradun is a very popular hill station that beckons solo travellers, families and couples alike. Proudly boasting of a scenic backdrop of the Garhwal Himalayas, Dehradun is located at an altitude of 1400 feet above sea level and has a pleasant climate all year round. Regardless of whether you want to explore family-friendly tourist spots, try thrilling adventure activities with your friends, or watch a mesmerizing sunset with your partner amidst the mountains, Dehradun is the answer.As you would expect from a city located in the foothills of the Himalayas, Dehradun abounds in caves, waterfalls and natural springs. One such extremely popular spot is Robber's Cave, which is a natural cave surrounded by hills.",
        //         "images": "https://www.holidify.com/images/bgImages/DEHRADUN.jpg",
        //         "location": "https://www.google.co.in/maps/place/Dehradun,+Uttarakhand/@30.3254098,77.9470938,12z/data=!3m1!4b1!4m5!3m4!1s0x390929c356c888af:0x4c3562c032518799!8m2!3d30.3164945!4d78.0321918"
        //       },
        //       {
        //         "name": "Almora",
        //         "info": "Famous for its rich cultural heritage, unique handicrafts, sumptuous cuisine and magnificent wildlife, coupled with an easy accessibility, Almora promises its tourists a visit full of fun and unforgettable moments. This agrarian town has two major rivers- Koshi (Kaushaki) and Suyal (Salmali) flowing through it. \"The enchanting beauties of the Himalayas, their bracing climate and the soothing green that envelopes you leaves nothing more to be desired. I wonder whether the scenery of these hills and the climate are to be surpassed, if equaled, by any of the beauty spots of the world. After having been nearly three weeks in Almora Hills, I am more than ever amazed why our people need go in Europe in search of health. \" - Mahatma Gandhi",
        //         "images": "https://www.holidify.com/images/bgImages/ALMORA.jpg",
        //         "location": "https://www.google.co.in/maps/place/Almora,+Uttarakhand/data=!4m2!3m1!1s0x39a0b7328910d81f:0x9811d25dd87d8ed5?sa=X&ved=2ahUKEwj84dL0kIDmAhXSzDgGHWwiAgcQ8gEwKHoECBgQBA"
        //       },
        //       {
        //         "name": "Dhanaulti",
        //         "info": "With minimal human intrusion, without overloading or overwhelming your senses or expectations, Dhanaulti slowly seeps into your conscience like a long lost pleasant dream, bringing with it comfort and quiet, and giving you the much needed break from your humdrum routine life.Located at a distance of 62 km from Mussoorie, this little town in Uttarakhand is an offbeat destination located at a height of about 2200 meters above sea level.",
        //         "images": "https://www.holidify.com/images/foreign/compressed/attr_123716.jpg",
        //         "location": "https://www.google.co.in/maps/place/Dhanaulti,+Uttarakhand/@30.4042688,78.2158203,14z/data=!3m1!4b1!4m5!3m4!1s0x3908df1c5802cb27:0x8d7cc78f77682e05!8m2!3d30.4049903!4d78.2333743"
        //       },
        //       {
        //         "name": "Ranikhet",
        //         "info": "Ranikhet meaning Queen's farm, is a hill station developed by the Britishers around ancient temples, undulating Himalayan hills and forests.Ranikhet with its cool climate and simple natural beauty can freshen up your senses to the very core. It is also popular as the Headquarters of the Kumaon Regiment of the Indian Army and has the Kumaon Regimental Centre Museum. The museum has a splendid display of weapons, photo etc. to introduce you the grandness and significance of military and its various historical instances. Ranikhet is popular for its views of the Nanda Devi Peak, trekking ranges, mountainous climbs, golf courses, orchards and temples.",
        //         "images": "https://www.holidify.com/images/bgImages/RANIKHET.jpg",
        //         "location": "https://www.google.co.in/maps/place/Ranikhet,+Uttarakhand/@29.6420292,79.4020335,13z/data=!3m1!4b1!4m5!3m4!1s0x39a0abd4273fb1dd:0x17d59cc393c2ccdc!8m2!3d29.6433615!4d79.4321825"
        //       },
        //       {
        //         "name": "Lansdowne",
        //         "info": "Perched amidst the Garhwal Hills of Uttarakhand, Lansdowne is a quaint little hill town that not many tourists know of. Off the beaten tourist trail, Lansdowne is an untouched, pristine town, miles away from the hustle and bustle of the city. Situated at 5670 feet above sea level, Lansdowne is more famously known for being home to the Garhwal Rifle regiment of the Indian Army. This hill station is neither commercialised nor heavily urbanised, making it the perfect getaway for anyone looking to take a break amidst peace and solitude.The local population of Lansdowne is surprisingly somewhere around just 20,000, and almost all the buildings in the town are fading reminders of the colonial era. The town itself gets its name from the then Viceroy of India, Lord Lansdowne. ",
        //         "images": "https://www.holidify.com/images/bgImages/LANSDOWNE.jpg",
        //         "location": "https://www.google.co.in/maps/place/Lansdowne,+Uttarakhand+246155/@29.8433325,78.6711537,15z/data=!3m1!4b1!4m5!3m4!1s0x390982b9e5122989:0x2798532cabd61501!8m2!3d29.8377457!4d78.6871069"
        //       },
        //       {
        //         "name": "Bhimtal",
        //         "info": "Located at a distance of 23 kilometres from Nainital in Uttarakhand, Bhimtal is an offbeat version of Nainital, most famous for the picturesque Bhimtal Lake. Bounded with a dense forest of oaks, pine and shrubs, a small island in the middle of the lake and a few ancient temples - that is Bhimtal for you!Perched at the height of 1370m above the sea level, Bhimtal is an idyllic and less-crowded version of Nainital. In stark contrast to Nainital, Bhimtal is a scenic hill station, the charm of which lies in the tranquil atmosphere. Apart from Bhimtal Lake, which is a popular attraction for paddle boating, birding and nature walk, the 17th-century Bhimeshwar Temple is another must-visit spot in the hilltown. Well connected by road, Bhimtal is an ideal weekend getaway from Delhi.",
        //         "images": "https://www.holidify.com/images/cmsuploads/compressed/18461307841_3e8be80572_b_20180205182813.jpg",
        //         "location": "https://www.google.co.in/maps/place/Bhimtal,+Uttarakhand+263136/@29.3489227,79.5360265,14z/data=!3m1!4b1!4m5!3m4!1s0x39a098214690ff0d:0x3adc3244429741dc!8m2!3d29.346082!4d79.5519144"
        //       },
        //       {
        //         "name": "Joshimath",
        //         "info": "Joshimath, also known as Jyotirmath, is a hill town perched at the height of 6150 feet in Chamoli district of Gharwal region of Uttarakhand. Joshimath serves as an important religious centre for Hindu pilgrims and lies in the proximity to one of the four 'maths' founded by Adi Guru Shri Shankaracharya in the 8th century. This 'math' dedicated to the holy text of Hindus called Atharva Veda.Overlooking the confluence of rivers Alaknanda and Dhauliganga at Vishnu Prayag, Joshimath is also the winter home of Lord Badri as the idol is shifted from Badrinath to Joshimath during winters. ",
        //         "images": "https://www.holidify.com/images/tooltipImages/JOSHIMATH.jpg",
        //         "location": "https://www.google.co.in/maps/place/Joshimath,+Uttarakhand+246443/@30.5541844,79.5457361,14z/data=!3m1!4b1!4m5!3m4!1s0x39a79cad49e7760f:0x9897a724d1bf7174!8m2!3d30.5505524!4d79.5659633"
        //       },
        //       {
        //         "name": "Mukteshwar",
        //         "info": "Mukteshwar is a small hill town located around 50 km from Nainital in Uttarakhand. Known for adventure sports and a dazzling view of Himalayan ranges, Mukteshwar is named after the 350-year-old Shiva Temple housed here called Mukteshwar Dham. The quaint town got its name from the belief that Lord Shiva killed a demon here and gave him Mukti or salvation. With lush green trails and narrow lanes, Mukteshwar is a popular destination for trekking, apart from rock climbing and rappeling. Major attractions here are the picturesque orchards, coniferous forests, rolling meadows, and little cottages and homes built in quaint colonial style. The charm of Mukteshwar lies in spending tranquil time - enjoying nature and listening to the chirping of the birds.",
        //         "images": "https://www.holidify.com/images/bgImages/MUKTESHWAR.jpg",
        //         "location": "https://www.google.co.in/maps/place/Mukteshwar,+Uttarakhand/@29.4679952,79.6325108,14z/data=!3m1!4b1!4m5!3m4!1s0x39a0bbfdf924848f:0x72b5b5db99b0efdb!8m2!3d29.4604149!4d79.6558242"
        //       },
        //       {
        //         "name": "Rudra Prayag",
        //         "info": "Lying at the confluence of River Alaknanda and River Mandakini, Rudraprayag is a sacred place regarded as one of the Panch Prayags and place of great religious significance. Settled in Uttarakhand, this beautiful town is full of mysterious charm and the spiritual vibes that will calm your senses.Offering spectacular views and mesmerizing panoramic vistas, the town boasts of being blessed by Mother Nature in its full glory. The town derives its name from the Hindu deity Lord Shiva who is said to have appeared at the place in the form of Lord Rudra. Rudraprayag is sprinkled with several ancient temples and serves as a gateway to two major pilgrimages of Kedarnath and Badrinath, offering its visitors a surrounding of serenity and tranquility. Tourists also get enchanted by its natural dazzling beauty and spellbinding landscapes. Tourists and devotees flock this place in large number seeking spirituality as well as nature's splendors.",
        //         "images": "https://www.holidify.com/images/cmsuploads/compressed/RudraprayagConfluence_20171012211252.JPG",
        //         "location": "https://www.google.co.in/maps/place/Rudraprayag,+Uttarakhand+246171/@30.285391,78.9709604,15z/data=!3m1!4b1!4m5!3m4!1s0x3909b7aea36f26f1:0x9eb43bf27ef18d47!8m2!3d30.2844141!4d78.9811407"
        //       },
        //       {
        //         "name": "Uttarkashi",
        //         "info": "Endearingly called as Devbhoomi, Uttarkashi, literally meaning 'Kashi of the North', is a quaint little town tucked away in the hill state of Uttarakhand. Revered by the Hindus as one of their propitious religious sites, the townhouses two of the total four holy shrines of Hindu mythology. It is one of the most visited cities of religious relevance in the area and gives you a sense of heightened divinity and an out of the world experience. The region was more in the favour of religious tourism initially but lately the spurring of trekking and adventure activities invites a lot of non religion tourists as well. Replete with ashrams and mandir, the town has got a spiritual vibe to it. All in all, the entire place boasts of divine heritage, mesmerising natural beauty, scenic panoramas and a wonderful irenic atmosphere.Uttarkashi is one of the younger parts of Uttarakhand, formed in 1960. There is an uncanny purity about the place, making it one of the most visited cities of religious relevance in the area.",
        //         "images": "https://upload.wikimedia.org/wikipedia/commons/3/37/Uttarkashi_trip.jpg",
        //         "location": "https://www.google.co.in/maps/place/Uttarkashi,+Uttarakhand/@30.7249569,78.4114192,14z/data=!3m1!4b1!4m5!3m4!1s0x3908ed2ff38e31ef:0x7fdeebfe93c9add1!8m2!3d30.7268307!4d78.4354042"
        //       },
        //       {
        //         "name": "DevPrayag",
        //         "info": "Marked by the confluence point of rivers Alaknanda and Bhagirathi, Devprayag is a religious hub and is quite popular among tourists coming for pilgrimage or seeking some solitude close to nature.Situated amidst rolling Himalayan ranges, Devprayag is a popular pilgrimage centre for Hindus. Dotted with ancient temples and idols amidst the lush green surroundings, this place is a very beautiful and serene place. It derives much of its religious significance from the dynamic and vibrant natural elements that surround it such as the rivers. Dasharathachal Peak, Chandrabadani temple and Raghunathji temple are among some of the popular attractions here.",
        //         "images": "https://www.holidify.com/images/bgImages/DEVPRAYAG.jpg",
        //         "location": "https://www.google.co.in/maps/place/Devprayag,+Uttarakhand/@30.1458785,78.5961056,16z/data=!3m1!4b1!4m5!3m4!1s0x3909090d5b91180d:0x5d7916d17f992317!8m2!3d30.1459471!4d78.5992925"
        //       }
        //     ]
        //   },
        //   {
        //     "id": "7",
        //     "name": "Himachal Pradesh",
        //     "capital": "Shimla",
        //     "about": "A place of immense beauty and charm, Himachal is endowed with clear and serene lakes, lofty mountains, ancient temples and cheerful people. Home to some of the best tourist destinations like Kullu, Manali, Chamba and Shimla, Himachal is paradise on earth inviting an onslaught of tourists all around the year. The natural beauty of Himachal along with the hills and valleys add peace to your holiday while the pilgrimages make the land divine.Owing to the massive production of apples, Himachal Pradesh is known as the State of apples. The state is known for its eco-friendly environment, picturesque natural scenery, colourful culture, adventure sports, warm and hospitable people and a variety of fairs, festivals and celebrations throughout the year. McLeod Ganj, the abode of the 14th Dalai Lama is another favourite spot a must visit in the traveller's paradise.",
        //     "climate": "There is a huge variation in the climatic conditions of Himachal Pradesh due to variation in altitude (450–6500 metres). The climate varies from hot and sub-humid tropical (450–900 metres) in the southern low tracts, warm and temperate (900–1800 metres), cool and temperate (1900–2400 metres) and cold glacial and alpine (2400–4800 metres) in the northern and eastern high elevated mountain ranges.\nBy October, nights and mornings are very cold. Snowfall at elevations of nearly 3000 m is about 3 m and lasts from December start to March end. About 4500 m, is perpetual snow.\nThe spring season starts from mid February to mid April. The weather is pleasant and comfortable in the season.",
        //     "history": "During the Vedic period, several small republics known as Janapada existed which were later conquered by the Gupta Empire. After a brief period of supremacy by King Harshavardhana, the region was divided into several local powers headed by chieftains, including some Rajput principalities. These kingdoms enjoyed a large degree of independence and were invaded by Delhi Sultanate a number of times.Mahmud Ghaznavi conquered Kangra at the beginning of the 11th century. Timur and Sikander Lodi also marched through the lower hills of the state and captured a number of forts and fought many battles.Several hill states acknowledged Mughal suzerainty and paid regular tribute to the Mughals.The Kingdom of Gorkha conquered many kingdoms and came to power in Nepal in 1768.",
        //     "time": "Best time to visit Himachal is between February and June (spring and summer). The state also undergoes a beautiful transformation during the winters, i.e. between October and February making it an ideal time to experience snow (at places located on higher altitudes)",
        //     "img": [
        //       "https://cdn1.goibibo.com/india-himachal-pradesh-147709567681o.jpg",
        //       "https://www.clubmahindra.com/sites/default/files/Himachal%20Pradesh%20Tourism%20-%20A%20detailed%20Guide%20For%20Family%20Trip%20To%20Himachal%20Pradesh_Header.jpg",
        //       "https://toib.b-cdn.net/wp-content/uploads/2018/01/shimla.jpg",
        //       "https://static.toiimg.com/thumb/70229685/janjehli.jpg?width=748&height=499",
        //       "https://majesticjourney.in/wp-content/uploads/2019/04/himachal-pradesh-header.jpg",
        //       "https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2014/10/Untitled-design-8-1.png"
        //     ],
        //     "products": [
        //       {
        //         "name": "Dorjes",
        //         "description": "Dorjes are weapon-like structures which are used as a ritual object to symbolize both the properties of a diamond and a thunderbolt. They are essentially a type of club with a ribbed spherical head. They make beautiful show pieces or gift items. You can pick one up while shopping at Old Manali.",
        //         "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Vajra.jpg/751px-Vajra.jpg"
        //       },
        //       {
        //         "name": "Thangkas",
        //         "description": "Thangkas are paintings made on cotton, or silk appliqué cloth, usually depicting a Buddhist deity, or a spiritual scene. Generally, thangkas last a very long time and retain much of their lustre, but due to their delicate nature, they have to be kept in dry places where moisture will not affect the quality of the silk. They are commonly called a scroll-painting.",
        //         "image": "https://farm2.staticflickr.com/1330/4724590679_0f16938940_b.jpg"
        //       },
        //       {
        //         "name": "Kullu Caps",
        //         "description": "Generally made out of pure wool, Kullu caps are very warm and protect your head from the severe cold of the mountains. One of the very prominent products of Manali handlooms, Kullu caps are known for their beautiful blend of attractive colors and fine quality (though traditionally the caps are coloured green). You can pick one up from numerous shops on the Mall Road.",
        //         "image": "https://discoverkullumanali.in/wp-content/uploads/2015/07/Kullu-caps-1024x551.png"
        //       },
        //       {
        //         "name": "Prayer Weels",
        //         "description": "It is an exclusive Tibetan praying instrument that always bears the chant \"Om Mani Padme Hum\". It is a cylindrical object that turn on an axle with a long handle. A slight rotation of the wrist turns the wheel around. Inside this cylinder, written on paper or skin, are esoteric Buddhist mantras. It is believed that praying is done automatically if one sets the wheel in motion. They make beautiful gifts and souvenirs.",
        //         "image": "https://farm3.staticflickr.com/2743/4323371424_5457186b01_b.jpg"
        //       },
        //       {
        //         "name": "Kinnauri and Kullu Shawls ",
        //         "description": "Kullu shawls are available in extremely beautiful and flamboyant colors and patterns. Just as the names suggest, these shawls originate from Kullu and Kinnaur. The designs on Kinnauri shawls hold a religious significance as the range of colors used in various patterns symbolize the religious and mythological history of the region. These shawls are undoubtedly among the best things to buy in Manali.",
        //         "image": "https://farm6.staticflickr.com/5284/5306483758_32ff9b9f8a_b.jpg"
        //       },
        //       {
        //         "name": "Woolen Clothing",
        //         "description": "Whether you are looking for sweaters, cardigans or warm wool caps and mufflers, Manali is a heaven for woolen shopping, especially if you are visiting during the winters. Pay a visit to the Manu Market and you are bound to leave with a bagful of smart woollens.",
        //         "image": "https://pixfeeds.com/images/needlework/knitting/1280-496861438-knitted-winter-clothes.jpg"
        //       },
        //       {
        //         "name": "Tibetan and Himalayan Handicrafts",
        //         "description": "From intricately carved furniture and incense to the ever so intriguing singing bowl, the shops in Manali have it all on offer. Pick from a wide selection of Tibetan handicrafts and take back home a piece of the Himalayas. Tibet Art Collections is the ideal place to visit for such artifacts.",
        //         "image": "https://farm5.staticflickr.com/4149/5411821559_ab37e1dfc8_b.jpg"
        //       }
        //     ],
        //     "tourist": [
        //       {
        //         "name": "Manali",
        //         "info": "Nestled in between the snow-capped slopes of the Pir Panjal and the Dhauladhar ranges, Manali is one of the most popular hill stations in the country. With jaw-dropping views, lush green forests, sprawling meadows carpeted with flowers, gushing blue streams, a perpetual fairy-tale like mist lingering in the air, and a persistent fragrance of pines and freshness -  Manali has been blessed with extraordinary scenic beauty. From museums to temples, from quaint little hippie villages to bustling upscale streets, river adventures to trekking trails, Manali has every reason to be the tourist magnet it is, all year round.Clean roads, swaying eucalyptus trees, endearing little eateries, small kitschy local market places, and cafes which serve delicious local food at unbelievable prices, Old Manali is a serene, tranquil place, whose lingering silence is broken only by the twittering of the birds and the sound of the roaring waters of the Kullu river.",
        //         "images": "https://www.holidify.com/images/bgImages/MANALI.jpg",
        //         "location": "https://www.google.co.in/maps/place/Manali,+Himachal+Pradesh/@32.2394177,77.1696102,14z/data=!3m1!4b1!4m5!3m4!1s0x39048708163fd03f:0x8129a80ebe5076cd!8m2!3d32.2396325!4d77.1887145"
        //       },
        //       {
        //         "name": "Shimla",
        //         "info": "Situated at a height of 2200m, Shimla is the capital and the largest city of Himachal Pradesh in India. Set amidst beautiful hills and mystical woods, Shimla has been a very popular hill-station among Indian families and honeymooners since the last 50 years.\n\nBritish loved this city so much that they made Shimla their summer capital in 1864 and used to rule the sub-continent from here whenever the temperature rose in the nearby plains. Shimla still retains its old world charm with beautiful colonial architecture, pedestrian-friendly Mall Road and beautiful churches.",
        //         "images": "https://www.holidify.com/images/bgImages/SHIMLA.jpg",
        //         "location": "https://www.google.co.in/maps/place/Shimla,+Himachal+Pradesh/@31.0782147,77.1240016,13z/data=!3m1!4b1!4m5!3m4!1s0x390578e3e35d6e67:0x1f7e7ff6ff9f54b7!8m2!3d31.1048145!4d77.1734033"
        //       },
        //       {
        //         "name": "Mcleodganj",
        //         "info": "Mcleodganj is a hill station near Dharamshala, popular among trekkers. Its culture is a beautiful blend of Tibetan with some British influence.Also known as Little Lhasa and famous around the world for being home to the Tibetan spiritual leader Dalai Lama, Mcleod Ganj is a beautiful town situated near upper Dharamsala. Nestled amidst majestic hills and lush greenery, this town is culturally blessed by a prominent Tibetan influence owing to the major settlement of Tibetans here. Mcleodganj has one of the most mesmerising landscapes in the entire state of Himachal Pradesh and attracts a lot of tourists throughout the year. The towns of Dharamsala, Mcleodganj, Bhagsu Nag and Kangra are situated very close to each other and tourists must cover all these destinations while travelling here. Few of the most eminent and religiously significant monasteries in India are located here, including the Namgyal Monastery and Tsuglagkhang, where the spiritual leader Dalai Lama resides. Tourists must also visit the scenic Dal Lake and Triund, which are apt for quiet picnics.",
        //         "images": "https://www.holidify.com/images/bgImages/MCLEODGANJ.jpg",
        //         "location": "https://www.google.co.in/maps/place/McLeod+Ganj,+Dharamshala,+Himachal+Pradesh/@32.2450192,76.3068294,15z/data=!3m1!4b1!4m5!3m4!1s0x391b56d4e3d36d19:0xa3e8725f0584be76!8m2!3d32.2425758!4d76.3212781"
        //       },
        //       {
        //         "name": "Dalhousie",
        //         "info": "The tiny tinsel town Dalhousie tucked away in the lap of Himachal Pradesh is a piece of paradise for all the travellers. It boasts of old world charm, mesmerising natural landscape, pine-clad valleys, flower bedecked meadows, fast flowing rivers, magnificent misty mountains and some of the most spectacular views in the world. The air smells of the Scottish and Victorian architecture and the ambience reminds you of the pristine British flavours.Dalhousie, one of the favourite among most tourists travelling to Himanchal Pradesh is famously known for its mesmerizing natural beauty and its old world charm. This hill station was one of the most favourite summer destinations of the ruling Britishers and this is truly reflected in the majestic Victorian style mansions in this region. Situated far from the buzzing cities in the country, this quaint town transports you to a pollution-free environment in the lap of nature. Dalhousie is known for its scenic beauty has a number mountains and river streams that tourists must visit. Among them the most famous are Panch Pulla, Satdhara Falls and the Daikund peak.",
        //         "images": "https://www.holidify.com/images/bgImages/DALHOUSIE.jpg",
        //         "location": "https://www.google.co.in/maps/place/Dalhousie,+Himachal+Pradesh/@32.5402904,75.9560874,14z/data=!3m1!4b1!4m5!3m4!1s0x391c9138637f1ae1:0xbac8f1954c198c20!8m2!3d32.5387385!4d75.9709978"
        //       },
        //       {
        //         "name": "Spiti Valley",
        //         "info": "Long winding roads and valleys that present unforgettable glimpses of cold desert and snow-crowned mountains welcome you when you set foot into Spiti Valley. Bordered on all sides by the Himalayas, Spiti Valley, located in Himachal Pradesh, has an altitude of 12,500 feet above sea level, and gets just around 250 days of sunshine in the year, making it one of the coldest places in the country. With the thick Himalayan snow cutting Spiti off from the rest of the country for around 6 months a year, the summer months are the only time Spiti is directly accessible via motorway.The term Spiti means 'The Middle Land', as Spiti Valley separates India from Tibet. Scantily populated, Spiti is an adventure lover’s paradise, with a number of trekking trails that tourists can choose from. All of these treks start from Kaza (Spiti’s capital from where you make your base camp) to various peaks from where you can get panoramic views of the Himalayan mountains. An easy 1.5-kilometre trek along the Spiti River from Dhankar Monastery to Dhankar Lake promises gorgeous views of the villages below. The Dhankar Lake itself is a place where you can sit back and relax amidst the cool mountain air.",
        //         "images": "https://www.holidify.com/images/bgImages/SPITI.jpg",
        //         "location": "https://www.google.co.in/maps/place/Spiti+Valley,+Marango+Rangarik,+Himachal+Pradesh+172114/@32.2461362,78.0261612,15z/data=!3m1!4b1!4m5!3m4!1s0x3906a40ef42dc09b:0x52b583a91132a239!8m2!3d32.246137!4d78.034916"
        //       },
        //       {
        //         "name": "Kasol",
        //         "info": "A small village in Himachal situated along the banks of the river Parvati, Kasol is a tourist attraction that is rapidly gaining fame as a very popular hub for trekkers, backpackers, and nature lovers. Commonly known as the Amsterdam of India, this quaint little village is resplendent in natural scenic beauty, and is one of the few places in the country that is yet to be ruined by urbanization and commercialization. Situated between the towns of Bhuntar and Manikaran, Kasol might seem like a plain, nondescript village from the outside, but it is one of the best places in the country to just sit back and chill in the lap of nature.With the waters of the Parvati river gurgling along and a stunning view of the snow-capped mountains in the background, taking a stroll along the river is one of the best ways to spend a day in Kasol. With smooth boulders and clean white sand separating the green grass from the frothing sea-green waters of the river, every single bend in the river opens up to a breathtaking panorama of cliffs, pine trees, and gushing waterfalls.",
        //         "images": "https://www.holidify.com/images/compressed/dest_wiki_6702.jpg",
        //         "location": "https://www.google.co.in/maps/place/Kasol,+Himachal+Pradesh+175105/@32.0098591,77.312116,17z/data=!3m1!4b1!4m5!3m4!1s0x39045c4474aa31e9:0xf112d2e32b47949d!8m2!3d32.0099986!4d77.3149625"
        //       },
        //       {
        //         "name": "Dharamshala",
        //         "info": "Dharamsala is famed as the holy residence of the Dalai Lama and houses the Tibetan monk in exile. Dharamsala is located in Kangra district at a distance of 18km from Kangra City. The city is distinctively separated as upper and lower divisions with different altitudes. The lower division is the Dharamsala town itself whereas the upper division is popularly known as Mcleodganj.This is situated on the upper hilly stretch of land of Kangra Valley which is placed just against the picturesque scene of Dhauladhar ranges. Being a Tibetan hub, Dharamsala is considered to be one of the best places to learn and explore Buddhism and Tibetan Culture.",
        //         "images": "https://www.holidify.com/images/bgImages/DHARAMSALA.jpg",
        //         "location": "https://www.google.co.in/maps/place/Dharamshala,+Himachal+Pradesh/@32.2167773,76.3016556,14z/data=!3m1!4b1!4m5!3m4!1s0x391b50df65bd7311:0x3e08bdb100c6dc10!8m2!3d32.219042!4d76.3234037"
        //       },
        //       {
        //         "name": "Tirthan Valley",
        //         "info": "The land of untouched and mystifying beauty, Tirthan Valley is a destination with a plethora of delights. Lying nearly 3 km from the entrance of Great Himalayan National Park, this place is abundant in adventurous activities and a paradise for nature lovers. 'The great Himalayas with snow covered tops looking over the Tirthan River, this valley is best known for its trout fishing and for surprisingly high influx of foreigners. Magical ambience and lush green paths leading to nearby tiny and quaint hamlets accompanied by amazing weather throughout the year, Tirthan valley is great for those holiday makers who seek adventure as well as peace.",
        //         "images": "https://www.holidify.com/images/bgImages/TIRTHAN-VALLEY.jpg",
        //         "location": "https://www.google.co.in/maps/place/Tirthan+Valley/@31.6376776,77.3418905,17z/data=!3m1!4b1!4m5!3m4!1s0x3905add9fd04eb17:0xa5d8ce3f5d2f42df!8m2!3d31.6376776!4d77.3440792"
        //       },
        //       {
        //         "name": "Kasauli",
        //         "info": "Located on the way from Chandigarh to Shimla, Kasauli is a hilly cantonment town which makes for an ideal peaceful holiday location, away from the rush.Kasauli is a small town in the south-west part of Himachal and is on the relatively lower edges of Himalayas. Nestled amidst beautiful woody forests of pine and cedar trees, Kasauli owes its mystical and serene ambience to the lavish Victorian buildings built by the Britishers who resided here years back. These structures speak volumes of the glorious past of this hill station. A lot of endangered species of fauna are also found in the dense forests in this region. Kasauli is not about particular attractions or activities, but about the serene environment and enchanting calmness that it provides. If you want to just find a good getaway from the hectic life of your city, Kasauli provides the ideal environment to soothe your nerves.",
        //         "images": "https://www.holidify.com/images/cmsuploads/compressed/iuubub_20181011181109.jpg",
        //         "location": "https://www.google.co.in/maps/place/Kasauli,+Himachal+Pradesh/@30.8995898,76.9503449,14z/data=!3m1!4b1!4m5!3m4!1s0x390f88e0ddfe0b27:0x2cf1b6ec9befd181!8m2!3d30.90129!4d76.9648753"
        //       },
        //       {
        //         "name": "Bir Billing",
        //         "info": "Bir is a small town located in the state of Himachal Pradesh in northern India. Bir Billing is a popular destination located in Joginder Nagar valley known for adventures sports such as paragliding, treks and also as the town for meditation. There is an influence of Tibetan culture due to Tibetan community settlement in this town.Bir is considered as one of the best spots in the world for paragliding. The take-off site is called Billing and the landing site is Bir and the overall altitude change is around 800m.  There are some pretty cafe dotting the town serving some delicious food. People can also go for short hikes, visit the monasteries, take a ride in the nearby Jogindernagar-Pathankot Narrow Gauge train or just spend a day at the tea gardens. The town of Bir is also an important centre of spiritual studies and meditation.",
        //         "images": "https://www.lifelovelemons.com/wp-content/uploads/2019/01/paragliding.jpg",
        //         "location": "https://www.google.co.in/maps/place/Bir+Billing+Paragliding/@32.0336832,76.720241,17z/data=!3m1!4b1!4m5!3m4!1s0x3904b8bf6cf4bee3:0x93c650f1243d9dd7!8m2!3d32.0336832!4d76.7224297"
        //       },
        //       {
        //         "name": "Kinnaur",
        //         "info": "Kinnaur, also known as \"Land of God\" is about 235 Km from Shimla and is known for its serenity and beauty of the lush green and rocky mountainscape having Satluj, Baspa and Spiti river meandering through it. A brotherly fusion of Hinduism and Buddhism at one place reflects the existence of a culture of a different sort which is well preserved by its people in this era of modernization. Hindus visit Kinnaur to see the famous Kinner Kailash, believed to be the home of Lord Shiva and the Shivaling rocks, the stories of Pandavas and their link with Kinnaur is a great attraction.There are also old Buddhist monasteries and temples in the vicinity which hold special importance and are revered by Buddhists. Apart from religion, Kinnaur also has a vast scope in adventure sports like trekking and skiing. There are about nine known routes for trekking and some which are five days or six-day trips",
        //         "images": "https://www.holidify.com/images/bgImages/KINNAUR.jpg",
        //         "location": "https://www.google.co.in/maps/place/Kinnaur,+Himachal+Pradesh/@31.5918866,77.8154937,9z/data=!3m1!4b1!4m5!3m4!1s0x390643bef5f84a51:0xddfea72b01d3f354!8m2!3d31.6509576!4d78.4751945"
        //       },
        //       {
        //         "name": "Kufri",
        //         "info": "Kufri in Shimla district, Himachal Pradesh is one of the most sought after holiday destinations, and more so for couples, because of its proximity to Shimla and relatively higher altitude which makes it a place with snow all through the winters.Kufri is just about 10 km from Shimla and is quite a retreat if you're in Shimla and snow is something which excites you. While there's not much to see in Kufri as such, but the panoramic views and temples after a bit of trekking are worth the time. Kufri itself is mostly treated as a spot for the tourists visiting Shimla and it is advisable to club sightseeing in Shimla or nearby areas like Chail, Mashobra, Naldehra or Narkanda as well if you intend to visit Kufri. Also, Kufri is a relatively crowded and popular attraction as almost everyone visiting Shimla comes here.",
        //         "images": "https://www.holidify.com/images/bgImages/KUFRI.jpg",
        //         "location": "https://www.google.co.in/maps/place/Kufri,+Himachal+Pradesh/@31.1003579,77.2589384,15z/data=!3m1!4b1!4m5!3m4!1s0x390583e9fa930c1d:0x557edf73688dd0d5!8m2!3d31.0978583!4d77.2678137"
        //       },
        //       {
        //         "name": "Chamba",
        //         "info": "Chamba is a Himalayan town located in Chamba district of Himachal Pradesh. Known for the ancient temples, the caves, and the edifices that speak highly of Indian history, Chamba is famous for the gob-smacking views of the Pir Panjal, Zanskar and Dhauladhar ranges set in the backdrop of a picture-postcard town. This epitome of the Himalayan town is located at an elevation of 996 meters on the banks of river Ravi flanked by Jammu and Kashmir, Lahaul and Kangra.Chamba is popular for its traditional handicrafts and art along with the miniature Pahari paintings - a form of Indian painting that originated from the Himalayan hill kingdoms of North India during the 17th to 19th centuries. It is also the base camp for several treks in the great Himalayan ranges. This, along with the stunning beauty and tranquil environs beckons travellers looking for an offbeat location among the much-popular Himachali towns.",
        //         "images": "https://www.holidify.com/images/cmsuploads/compressed/Pir_Panjal_&_Chamera_Lake_20190210174543.jpg",
        //         "location": "https://www.google.co.in/maps/place/Chamba,+Himachal+Pradesh/@32.5473433,76.0962028,13z/data=!3m1!4b1!4m5!3m4!1s0x391cbdcc1d2b79c9:0x4d6719d7059007af!8m2!3d32.5533633!4d76.1258083"
        //       },
        //       {
        //         "name": "Chail",
        //         "info": "Chail is a quiet hill station close to Shimla, known for the world's highest cricket ground and the heritage hotel, Chail Palace, in the midst of pine and deodar trees.Surrounded by lush greenery and mesmerizing views from such a great height, known as a hiker's paradise, Chail is bound to give a tourist a memorable travelling experience to a tourist. This place is famous for having the world's highest cricket and polo grounds and has a luxurious resort situated on three hilltops. Once the summer capital of theÊPatialaÊKings, the palace has now been converted into a hotel and a tourist destination. This is the quintessential destination for tourists looking for a calm and relaxed vacation away from the more bustling and crowded tourist destinations in this state. Being the summer capital of the majestic kings of Patiala, the most famous place to visit in Chail is their palace which has now been converted into a heritage hotel. One must also visit the Chail Wildlife Sanctuary and the famous cricket ground.",
        //         "images": "https://www.holidify.com/images/bgImages/CHAIL.jpg",
        //         "location": "https://www.google.co.in/maps/place/Chail,+Himachal+Pradesh+173217/@30.9685464,77.1758651,14z/data=!3m1!4b1!4m5!3m4!1s0x390f7ff448852819:0x3580141bd7f106e6!8m2!3d30.9676214!4d77.1916497"
        //       },
        //       {
        //         "name": "Mandi",
        //         "info": "Packed with a thick green cover of pine and deodar trees, the town of Mandi is situated at the junction of Kullu and Dharamshala. It is often referred to as 'Varanasi of Hills', or 'Choti Kashi' as the town has as many as 81 temples spread across its area.Lying on the banks of River Beas, Mandi also displays some old palaces and temples that can be dated back to the 5th Century AD. Serving as a gateway to some famous valleys such as Kullu, Manali, Spiti and Lahaul, Mandi is must on your north India itinerary which never fails to enchant its visitors. Mandi is also the nearest town to various treks like Prashar lake and Janjheli.",
        //         "images": "https://www.holidify.com/images/tooltipImages/MANDI.jpg",
        //         "location": "google.co.in/maps/place/Mandi,+Himachal+Pradesh/@31.7094734,76.9232438,14z/data=!3m1!4b1!4m5!3m4!1s0x3904e238c88ea491:0x87e6743a04fb62fe!8m2!3d31.7087153!4d76.9320104"
        //       },
        //       {
        //         "name": "Kullu",
        //         "info": "Kullu, a popular tourist destination generally coupled with Manali, is an open valley with panoramic views and majestic hills covered with Deodar and Pine trees.Situated at an altitude of 1230 meters, Kullu is a nature lover's paradise. Abundant with lush greenery, pristine river streams and a wonderful climate, Kullu is known as one of the most popular tourist spots in Himachal Pradesh. Kullu is also popular as a sister town to Manali which is on much higher altitude and provides more scenic views. Typically travellers cover both Kullu and Manali in one trip. Tourists coming to Kullu and Manali can indulge in a lot of adventure sports activities like river rafting, trekking, mountaineering etc. Set in the lap of nature, the picturesque landscape of this small town is mesmerizing. Kullu also has few important temples like the Raghunath Temple and Jagannathi Devi Temple. Apart from temples, the Pandoh Dam and Chandrakhani Pass are also must-visits in this region. Kullu is also used as the base town to reachÊManikaran, Kasol, Malana, Bhunter and Rohtang Pass too.",
        //         "images": "https://www.holidify.com/blog/wp-content/uploads/2014/09/286594254_5455f2e097_o.jpg",
        //         "location": "https://www.google.co.in/maps/place/Kullu,+Himachal+Pradesh+175101/@31.9545843,77.0937828,14z/data=!3m1!4b1!4m5!3m4!1s0x3904f6a95c673edb:0x40f8c144f79ad609!8m2!3d31.957851!4d77.1094597"
        //       },
        //       {
        //         "name": "Kaza",
        //         "info": "Kaza, sitting huddled in the corner of Himachal Pradesh is a tranquil getaway on the plains of the Spiti River. Lapped by majestic mountains covered in snow, meandering and bubbling rivers and streams and picturesque barren landscape with scattered patches of green, Kaza is a dream destination.It is divided in to two parts: old and new Kaza, each accommodating government offices and king's palace respectively. Monasteries, Gompas and other historic wonders add charm to this already magical city. Today, this city is a wonderful blend of modernity and unique ancient culture that will leave you enchanted with its mystery.",
        //         "images": "https://www.holidify.com/images/bgImages/KAZA.jpg",
        //         "location": "https://www.google.co.in/maps/place/Kaza,+Himachal+Pradesh+172114/@32.2251708,78.0523144,14z/data=!3m1!4b1!4m5!3m4!1s0x3906a374a0af9f8b:0x6ec85005a1175d47!8m2!3d32.2275991!4d78.0709903"
        //       },
        //       {
        //         "name": "Palampur",
        //         "info": "Nestled between the majestic Dhauladhar Ranges, Palampur is known for its tea plantations and its excellent quality of tea. Palampur was first noticed by the Englishmen and was soon turned into a bustling town as the centre of trade and commerce. Their presence in this town is beautifully reflected in the Victorian style mansions and castles. The remnants of its glorious past can be seen in the beautiful amalgamation of the beautiful English style buildings and the picturesque landscapes. Palampur is one of the unexplored destinations offer a quaint and serene environment to tourists. Among the tourist attractions here, Tashi Jong Monastery, and the tea gardens should be on the must-visit list for anyone.",
        //         "images": "https://www.holidify.com/images/compressed/5199.jpg",
        //         "location": "https://www.google.co.in/maps/place/Palampur,+Himachal+Pradesh/@32.1192814,76.5056556,13z/data=!3m1!4b1!4m5!3m4!1s0x3904b3e0d1e63ac9:0x11046afda32dfd59!8m2!3d32.1108599!4d76.5362526"
        //       },
        //       {
        //         "name": "Nahan",
        //         "info": "Away from the buzzing crowd of the city, Nahan is a perfect romantic getaway. Lying among the lofty Shivalik range overlooking lush green fields, dirt free roads and clean streets, this small hill station serves as an ideal holiday destination.Nahan has its past spun around many tales and legends. Founded by Raja Karan Prakash in 1621 as a capital, it is believed that this town derives its name from a sage named Nahar who lived at the same site where this town stands today. As per another version, the town gets its name from an incident where the king who was trying to kill a lion was stopped by a saint named Baba Banwari Das who said Nahar meaning 'don't kill'. The quaint town today, is dotted with gardens, temples and a manmade lake. Visit Nahan, a cantonment town of Himachal for an unforgettable experience.",
        //         "images": "https://www.holidify.com/images/cmsuploads/compressed/kangojodi_20180806205221.jpg",
        //         "location": "google.co.in/maps/place/Nahan,+Himachal+Pradesh+173001/@30.5600418,77.2758363,14z/data=!3m1!4b1!4m5!3m4!1s0x390f0c0853d80c9b:0xdaf447e96e7ae7c3!8m2!3d30.5599327!4d77.295483"
        //       },
        //       {
        //         "name": "Kangra",
        //         "info": "Kangra is a district in Himachal Pradesh with Dharamshala as the administrative headquarters. With might Beas River flowing through the Valley, Kangra is also known for the backdrop of Dhauladar range, ancient temples and endless tea plantations. Repeated mention of the Valley in the holy Hindu texts, present Kangra as 'Devbhumi' or Land of the Gods.Kangra is a district which encompasses Dharamshala and McleodGanj within its boundaries. The beautiful tea plantations are located in Palampur and areas around which lies 36 km away from Kangra city.",
        //         "images": "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1276735357_20191007124639_20191007124659.png",
        //         "location": "https://www.google.co.in/maps/place/Kangra,+Himachal+Pradesh+176001/@32.1029683,76.2551163,14z/data=!3m1!4b1!4m5!3m4!1s0x391b458198590ddf:0xad8e3ff3dfe5b1fe!8m2!3d32.0998031!4d76.2691006"
        //       },
        //       {
        //         "name": "Narkanda",
        //         "info": "Situated at a height of 9000 feet, this town attracts tourists for its ethereal natural beauty and its beautiful apple orchards. Surrounded by tropical forests and majestic hills, this is one place that tourists to Himachal Pradesh should not miss. Narkanda also has a lake called the Tannu Jabar Lake which is one of the most important tourist attraction here. There also exists a temple near the lake which is a must visit for all tourists and devotees coming here. Narkanda also has various trekking routes which all adventure-seekers should go for. Narkanda has a beautiful hill called Hatu Nag which one can trek up to. This hill offers a panoramic view of the town below and all adventure lovers travelling to this town should try it. One can also go for skiing during the winters.",
        //         "images": "https://www.holidify.com/images/bgImages/NARKANDA.jpg",
        //         "location": "https://www.google.co.in/maps/place/Narkand,+Himachal+Pradesh+171213/@31.2587059,77.4544286,16z/data=!3m1!4b1!4m5!3m4!1s0x390591661a142a1d:0x5feef9c405007657!8m2!3d31.2577718!4d77.4601581"
        //       },
        //       {
        //         "name": "Manikaran Sahib",
        //         "info": "Located at a distance of 4km from Kasol in the Parvati Valley along the banks of river Parvati in the Kullu District of Himachal Pradesh, Manikaran is known as a famous pilgrimage destination for both Sikhs and Hindus. A good number of temples, Gurudwara Manikaran Sahib and hot springs forms the religious pattern of the place and attract several people.There are three hot springs where one can take a bath, one being inside the Gurudwara itself and the other two being privatised by the guesthouses. Different sections for men and women are made at the bathing place. The water in these springs contains sulphur which ais capable of curing diseases. The hot springs again have religious and spiritual beliefs connected to it. The water is hot enough to prepare food by directly placing the vessels and is served as langar.",
        //         "images": "https://www.holidify.com/images/bgImages/MANIKARAN-SAHIB.jpg",
        //         "location": "https://www.google.co.in/maps/place/Gurudwara+Manikaran+Sahib/@32.0270448,77.3427227,17z/data=!3m1!4b1!4m5!3m4!1s0x39045ce615555555:0x3a27550ec7c38e2a!8m2!3d32.0270448!4d77.3449114"
        //       },
        //       {
        //         "name": "Solang Valley",
        //         "info": "When heading to Manali for a vacation, two absolutely essential destinations in the itinerary are Rohtang and Solang Valley. 14 kilometres to the north west of the main town of Manali, Solang Valley is one of the most popular tourist destinations in Himachal Pradesh. Situated on the way to Rohtang from Manali, every year the valley welcomes tourists in huge numbers. A favourite for adventure enthusiasts, parachuting to paragliding, horse riding to driving mini-open jeeps specially available for tourists of all age groups, Solang Valley has it all.",
        //         "images": "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_633164246_20190904103856_20190904103926.jpg",
        //         "location": "https://www.google.co.in/maps/place/Solang+Valley/@32.3174354,77.1513273,17z/data=!3m1!4b1!4m5!3m4!1s0x3904873b67f51935:0x711b3f450dfe5abf!8m2!3d32.3174354!4d77.153516"
        //       },
        //       {
        //         "name": "Beas Kund Trek",
        //         "info": "Other than being famous a tourist destination, Manali is also the way to one of the most undertaken treks - the Beas Kund Trek. This trek is a perfect weekend getaway plan which takes you away from the hustle and bustle of the city life. Get a chance to feast your eyes on the outstanding views of Pir Pinjal mountain ranges over the Beas river, let your soul get wooed by the spectacular meadows of Dhundi and Bakarthach and finally, the glacial lake at Beas Kund which is worth all the hiking.",
        //         "images": "https://www.holidify.com/images/cmsuploads/compressed/6103594064_86a392d5b5_b_20180813140617.jpg",
        //         "location": "https://www.google.co.in/maps/place/Beas+Kund+Trek/@32.3528046,77.1130119,17z/data=!3m1!4b1!4m5!3m4!1s0x39048168b4e9b33b:0x5d36383cf7bef7ea!8m2!3d32.3528046!4d77.1152006"
        //       },
        //       {
        //         "name": "Kheerganga Trek",
        //         "info": "Kheer Ganga (3050 meters) lies at the extreme end of Parvati valley and the last inhibited village while trekking to pin valley via Pin-Parvati pass. Kheerganga's panoramic skies and vast greenery are a much-needed delight to the trekker's eyes and especially the tired legs. It is a holy place with a hot water spring, a small temple of Lord Shiva and a bathing tank. It makes a rare combination for any trekker to bath in hot spring water when everything is covered by snow.",
        //         "images": "https://www.holidify.com/images/compressed/dest_wiki_6702.jpg",
        //         "location": "https://www.google.co.in/maps/place/Kheerganga+Trekking/@31.9929633,77.4864388,17z/data=!3m1!4b1!4m5!3m4!1s0x39044773d4420251:0xf3ca2f9d1ab1a5f9!8m2!3d31.9929633!4d77.4886275"
        //       }
        //     ],
        //     "food": "A staple meal in the state would consist of Dals, rice, broth, roti and sabzi. Meat, especially red meat is also a favourite, and almost all delicacies here are prepared with a rich gravy, fragrant with local aromatic spices and herbs. With few of these constants in place, Himachal's cuisine differs over its varied terrains and climates, and the geography gives newer alterations and versions to the food, making the overall platter rich and vibrant. Sidu (a preparation of wheat), Patande (a local version of pancakes), Chouk, Bhagjery, Chutney of 'Til', Khatta, Kali Dal, Aloo palda, Auriya Kadoo (a preparation of pumpkin), Spicy lotus stems are the highlights of the state's cuisine. One also finds Momos and Noodles in the area. Himachal is also known for the fresh and juicy varieties of fruits here. One should not miss these and maybe even take some home. It also hosts the Food Festival of Dham, which celebrates the variety, richness, colour and festivity of the local cuisine, food styles and habits."
        //   },
        //   {
        //     "id": "8",
        //     "name": "Gujarat",
        //     "capital": "Gandhinagar",
        //     "about": "Located in the westernmost part of India, Gujarat is home to several architectural marvels and is famous for its vibrant culture and rich heritage, apart from the scenic landscapes and mouth-watering cuisine. Offering a broad range of the most spectacular attractions, Gujarat, also known as 'The Land of Legends', presents a perfect blend of art, history, music and culture.Being the sole home of the pure Asiatic Lions, Gujarat also offers splendid views of the scenic beauty ranging from the Great Rann of Kutch to the hills of Satpura. Apart from the picturesque landscapes and the more than 1600 kilometres long coastline, Gujarat also offers its tourists with some magnificent ancient cave paintings, historic murals, holy temples, historic capitals, wildlife sanctuaries, beaches, hill resorts and fascinating handicrafts. Gujarat is a dry state but the cultural exuberance of the Gujratis will give rejuvenate you.",
        //     "climate": "Situated near the Chenab River, about 120 km to the north of Lahore, Gujarat is a coastal state lying on the west coast of India. Blessed with the longest coastline (1290 km) in the country, Gujarat is a serene and pristine land where the azure seas meet sparkling sands. We, at Indianholiday, are providing you a detailed guide on Climate in Gujarat.Gujarat is positioned between 20° 6' N to 24° 42' N latitude and 68° 10' E to 74° 28' E longitude. The westernmost state in India, Gujarat is bordered by Pakistan and Rajasthan state in the north east, Madhya Pradesh in the east, and Maharashtra and the Union Territories of Daman, Diu, Dadra and Nagar Haveli in the south.",
        //     "history": "The history of Gujarat began with Stone Age settlements followed by Chalcolithic and Bronze Age settlements like Indus Valley Civilisation. Gujarat's coastal cities, chiefly Bharuch, served as ports and trading centers in the Nanda, Maurya, Satavahana and Gupta empires as well as Western Kshatrapas period. After the fall of the Gupta empire in the 6th century, Gujarat flourished as an independent Hindu/Buddhist state. The Maitraka dynasty, descended from a Gupta general, ruled from the 6th to the 8th centuries from their capital at Vallabhi, although they were ruled briefly by Harsha during the 7th century. The Arab rulers of Sindh sacked Vallabhi in 770, bringing the Maitraka dynasty to an end. The Gurjara-Pratihara Empire ruled Gujarat after from the 8th to 10th centuries. As well as, for some periods the region came under the control of Rashtrakuta Empire and Pala Empire. In 775 the first Parsi (Zoroastrian) refugees arrived in Gujarat from Greater Iran.",
        //     "time": "The best time to visit Gujarat is during the winter season, i.e. between October and February. Since it is a dry region and experiences high temperatures and humidity; visiting the state in the monsoons (July to September) may also be a good idea especially in the regions that receive less or no rainfall. During summers, i.e. between March and June, the temperature soars high, making it difficult for travellers to explore most of the attractions, but there are some places worth visiting like the Saputara Hill Station and the natural reserves that provide quite some respite in the scorching heat.",
        //     "img": [
        //       "https://www.gujarattourism.com/file-manager/photo-gallery/1433844143-adalaj-vav.jpg",
        //       "https://www.swantour.com/blogs/wp-content/uploads/2018/04/Gujarat-Tourism.jpg",
        //       "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/11/12/753361-statueofunity-reuters-110118.jpg",
        //       "https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2015/11/Museums-in-Gujarat.jpg",
        //       "https://www.gujarattourism.com/file-manager/photo-gallery/shamlaji.png",
        //       "https://www.visittnt.com/images/gujarat/gujarat-tourism.jpg"
        //     ],
        //     "products": [
        //       {
        //         "name": "Bandhej",
        //         "description": "The best place for Bandhani and cotton fabric shopping in Ahmedabad is at Bandhej. Started in 1985 by Archana Shah, Bandhej has become synonymous with sustainable clothing. Its designs are elegant and change with the trends and seasons. Best picks at Bandhej would include kurtas, dupattas and tunic skirts.",
        //         "image": "https://cdn.shopify.com/s/files/1/1027/2035/products/5_fad6153f-6343-4c4c-b66e-d8a41764155b.jpg?v=1571438909"
        //       }
        //     ],
        //     "tourist": [
        //       {
        //         "name": "Ahmedabad",
        //         "info": "A rapidly growing metropolis, an industrial hub, an educational hotspot, and a city with a magnificent past – Ahmedabad is one of the most important cities in Gujarat. Located on the banks of the Sabarmati River, Ahmedabad is the former capital of Gujarat, and its delicious food, colourful culture is making it a fast-growing tourist destination. The historic city of Ahmedabad or the old part of the city was declared as the UNESCO World Heritage Site.Home to a plethora of remarkable temples like Swaminarayan Temple, intriguing museums and classy markets, with a little bit of colonial history attached to it, Ahmedabad is an excellent example of how a city can still retain every bit of its old-world charm while still rapidly progressing on the path of globalisation.",
        //         "images": "https://www.holidify.com/images/cmsuploads/compressed/Jama_Masjid_Ahmedabad_heritage_20190515120421.jpg",
        //         "location": "https://www.google.co.in/maps/place/Ahmedabad,+Gujarat/data=!4m2!3m1!1s0x395e848aba5bd449:0x4fcedd11614f6516?sa=X&ved=2ahUKEwiM-bWC84fmAhVSwjgGHQ1sCLQQ8gEwHXoECBwQBA"
        //       },
        //       {
        //         "name": "Kutch",
        //         "info": "Virtually an island that resembles the shape of a tortoise, Kutch is an erstwhile princely state of India holding onto its grandeur nature from the past.Kutch is probably one of the most beautiful, yet surreal places in India. With the vast expanses of white salt desert in the Rann of Kutch area, this is an amazing experience to witness. One would be able to see just stretches of pure white land as far as the eyesight goes. The place comes to life during the winters when the Rann Festival is held during December-February everywhere in which there are huge camp settlements with cultural programs, functions and adventure activities like hot-air ballooning. Kutch is also among the largest district of India with a terribly low population density.",
        //         "images": "https://www.holidify.com/images/cmsuploads/compressed/Great_Rann_of_Kutch_20180205161526.jpg",
        //         "location": "https://www.google.co.in/maps/place/Kutch,+Gujarat/@23.7083639,68.8013806,8z/data=!3m1!4b1!4m5!3m4!1s0x39511e0750db4489:0x2049bf8ec25dea88!8m2!3d23.7337326!4d69.8597406"
        //       },
        //       {
        //         "name": "Gir National Park",
        //         "info": "Gir National Park is the only remaining home for the Asiatic Lions that are almost a definition to this park in Gujarat, which has a lot more to offerGir provides you with the unique experience of visiting a place which almost singularly plays a crucial and defining role in the preservation and sustaining of a certain species. The preservation of these lions was initiated by the Nawab of Junagadh when these were just about to enter the phase of extinction due to hunting. Official count said that there were 411 lions in 2010. Also, there are roughly different 2375 species of fauna here with 38 species of mammals, over 300 species of birds, 37 species of reptiles and over 2000 species of insects.",
        //         "images": "https://www.holidify.com/images/bgImages/GIR-NATIONAL-PARK.jpg",
        //         "location": "https://www.google.co.in/maps/place/Gir+National+Park/@21.1329211,70.7843612,13z/data=!3m1!4b1!4m5!3m4!1s0x3be2bfc278812b53:0x3408d6d983464baf!8m2!3d21.1243054!4d70.8241507"
        //       },
        //       {
        //         "name": "Somnath",
        //         "info": "Somnath, literally meaning 'lord of the moon' is a pilgrim center and is home to one of the 12 Jyotirlingas. It is a town which derives much of its identity from the mythology, religion, and legends that surround it.Primarily a temple town, Somnath is a place where a strong scent of religion and legends lingers around tourism and even daily life. Its spiritual environment is ornamented by the huge number of temples in the area, however, Somnath also offers beaches, museums and other attractions. While the Somnath temple and Somnath beach are the primary places to visit here, Gita Mandir, Balukha Tirtha, Kamnath Mahadev Temple, Somnath Museum are some of the other places that one can visit.",
        //         "images": "https://www.holidify.com/images/bgImages/SOMNATH.jpg",
        //         "location": "https://www.google.co.in/maps/place/Somnath,+Gujarat/@20.9031968,70.3730104,14z/data=!3m1!4b1!4m5!3m4!1s0x3bfd328b9ce28aeb:0x6d2efaa0d9eda083!8m2!3d20.9060022!4d70.3843721"
        //       },
        //       {
        //         "name": "Porbandar",
        //         "info": "The birth place of Mahatma Gandhi, Porbandar is a beautiful beach town with some temples and dams, and is now also a popular trading hub.The coastal city with a significant event in its history is a tourist destination which modestly offers a number of attractions. Apart from the haveli where Gandhiji was born which has now been converted into a temple, there are a few more temples, dams, reservoirs, serene beaches and wildlife spots as well to add to your experience in Porbandar. It attracts pilgrims with temples such as the Sudama Mandir, Bharat Mandir, Ram Dhoon Mandir, Hanuman temple and more.",
        //         "images": "https://www.holidify.com/images/cmsuploads/compressed/Hari_Mandir_Porbandar_20190116141529.jpg",
        //         "location": "https://www.google.co.in/maps/place/Porbandar,+Gujarat/@21.6354569,69.595266,13z/data=!3m1!4b1!4m5!3m4!1s0x3956345051c2f8e5:0x9e2165b8de9bd8ca!8m2!3d21.6416979!4d69.6293059"
        //       },
        //       {
        //         "name": "Vadodara",
        //         "info": "Vadodara or Baroda is a cosmopolitan city located in Gujarat. Home to some of the most exemplary displays of architecture, Vadodara is a fitting memorial to Maratha leader Sayaji Rao Gaekwad III who had envisioned a dream to make this Big City an educational, industrial and commercial centre.Known for one of the most lavish palaces in India- the Lakshmi Vilas Palace and plenty more legendary monuments, Vadodara is the cultural capital of Gujarat. ",
        //         "images": "https://www.holidify.com/images/bgImages/VADODARA.jpg",
        //         "location": "https://www.google.co.in/maps/place/Vadodara,+Gujarat/@22.3220425,73.0329975,11z/data=!3m1!4b1!4m5!3m4!1s0x395fc8ab91a3ddab:0xac39d3bfe1473fb8!8m2!3d22.3071588!4d73.1812187"
        //       },
        //       {
        //         "name": "Dwarka",
        //         "info": "Famous for having one of the 12 Jyotirlingas, Dwarka is best known as the home of Lord Krishna and will enchant you with the holiness that the air here carries. Located on the western tip of the Saurashtra peninsula in Gujarat, Dwarka is popularly known as the \"home of Lord Krishna\". The name Dwarka literally translates to dwar meaning 'door' and ka meaning 'moksha' meaning the ‘door to salvation. And so the aura of the religious town reverberates with spiritual holiness and chants of the devotees seeking moksha. Dwarka boasts of being the only city that is a part of both Char Dham (four principal holy places) and also Sapta Puris (seven holy cities) mentioned in the Hindu religion. For this reason, it enjoys a remarkable religious significance and attracts thousands of pilgrims all year round. In addition to this, the town is replete with grandeur temples, marvellous architecture and places of cultural significance. The beachside and the seashores are an added tourist attraction.",
        //         "images": "https://www.holidify.com/images/bgImages/DWARKA.jpg",
        //         "location": "https://www.google.co.in/maps/place/Dwarka,+Gujarat/@22.2467142,68.9518839,14z/data=!3m1!4b1!4m5!3m4!1s0x39569c266399e37b:0xb5866e461a106e0a!8m2!3d22.2441975!4d68.9684562"
        //       },
        //       {
        //         "name": "Junagadh",
        //         "info": "Being the capital of Junagadh Princely State once, the town shines with historical significance with many historical monuments to see.Junagad is also very close to the Girnar Hills and the world renowned Gir National Park. Catch a glimpse of the wild in the Sakkabaug Zoo and the Wildlife Museum. Also visit the Girnar Hills and get a feel of the serene yet religious atmosphere. The fort at Uperkot is another tourist magnet.",
        //         "images": "https://www.holidify.com/images/bgImages/JUNAGADH.jpg",
        //         "location": "https://www.google.co.in/maps/place/Junagadh,+Gujarat/@21.5305516,70.3675688,12z/data=!3m1!4b1!4m5!3m4!1s0x3958018c6a277f53:0x13b52f8520a86e48!8m2!3d21.5222203!4d70.4579436"
        //       },
        //       {
        //         "name": "Gandhinagar",
        //         "info": "Gandhinagar, the capital city of Gujarat, is located at a distance of around 23 km from Ahmedabad on the western bank of Sabarmati river. Gandhinagar, one of India's few planned cities encompasses Akshardham Temple, one of the country's most beautiful temple. Gandhinagar offers a rich cultural heritage, beautiful temples and serene environment to all its visitors. Among other attractions are an enthralling Children's Park and uniquely built stepwell. The holy places in Gandhinagar like the Hanumanji Temple and the Brahmani Temple which in spite of not being so famous, are also worth visiting for an enriching experience.",
        //         "images": "https://upload.wikimedia.org/wikipedia/commons/7/77/Akshardham_Gandhinagar_Gujarat.jpg",
        //         "location": "https://www.google.co.in/maps/place/Gandhinagar,+Gujarat/@23.2206942,72.575507,12z/data=!3m1!4b1!4m5!3m4!1s0x395c2b987c6d6809:0xf86f06a7873e0391!8m2!3d23.2156354!4d72.6369415"
        //       },
        //       {
        //         "name": "Diu",
        //         "info": "Located near the port of Veraval, Diu is a small island which was earlier a Portuguese colony, and is now guarded by beaches all around.The Diu Fort, a primary imprint of the Portuguese on the area's heritage and architecture makes up a popular tourist attraction. Another interesting place is the Vanakbara, a small fishing village whose charm has tints of colourful fishing boats and humming of day to day activity. This perfect add-on to a visit to Gujarat will complete your experience with interesting museums such as the Sea Shell Museum, temples and churches.",
        //         "images": "https://www.holidify.com/images/cmsuploads/compressed/1024_20190430184549.jpg",
        //         "location": "https://www.google.co.in/maps/place/Diu,+Daman+and+Diu+362520/@20.7141776,70.9608083,14z/data=!3m1!4b1!4m5!3m4!1s0x3be31ce77c7a67bf:0x4664503a0396202!8m2!3d20.7144094!4d70.9873719"
        //       },
        //       {
        //         "name": "Bhuj",
        //         "info": "A desert city with long history of kings and empires make Bhuj one of the most interesting and unique historical places to see.The city has a long history of kings and empires - and hence many historic places to see. The city was left in a state of devastation after the 2001 earthquake and is still in the recovery phase. Bhuj connects you to a range of civilizations and important events in South Asian history through prehistoric archaeological finds, remnants of the Indus Valley Civilization (Harappan), places associated with the Mahabharata and Alexander the Great's march into India and tombs, palaces and other buildings from the rule of the Naga chiefs, the Jadeja Rajputs, the Gujarat Sultans and the British Raj. ",
        //         "images": "https://www.holidify.com/images/bgImages/BHUJ.jpg",
        //         "location": "https://www.google.co.in/maps/place/Bhuj,+Gujarat/@23.2507239,69.5988791,12z/data=!3m1!4b1!4m5!3m4!1s0x3950e209000b6f17:0x7077f358af0774a6!8m2!3d23.2419997!4d69.6669324"
        //       },
        //       {
        //         "name": "Surat",
        //         "info": "Surat, having its name associated with Saurashtra (the good land), is a port city in Gujarat. The second most populated city in the state, Surat is a global diamond cutting centre and a commercial hub of textiles. Known as 'the city of flyovers', it attracts tourists who are interested in the colonial history of the region and the exotic wildlife.Packed on the south bank of a sharp bend in the Tapi River (Tapti), Surat is located 306 km south of the state capital, Gandhinagar. Once known for silk-weaving, it emerged as a major textile and diamond hub of India, with the shops in the New Textile Market area often crowded with buyers and shoppers. Prominent tourist attractions in Surat are the Surat Castle, Science Centre Complex and the Diamond Gallery among others.",
        //         "images": "https://www.holidify.com/images/cmsuploads/compressed/17192531_1054548924649434_1507851808365750554_o_20180329163703.jpg",
        //         "location": "https://www.google.co.in/maps/place/Surat,+Gujarat/@21.1591425,72.6822074,11z/data=!3m1!4b1!4m5!3m4!1s0x3be04e59411d1563:0xfe4558290938b042!8m2!3d21.1702401!4d72.8310607"
        //       }
        //     ],
        //     "food": "Gujarati cuisines vary in taste and flavour as one moves from region to region. The most distinct of them are the ones from Surat, Kathiawad, Kachchh and North Gujarat. The food is mostly vegetarian, and you can sense the hints of sweetness and spice distinctly in the dishes. As per tradition, the food here is served in metal platters or commonly known to people as a 'thali'. A typical Gujarati meal would include Dal, Kadhi, Salad, Puri, Chappatis, Pickles, Papad and some trendy sweets. Dhokla, Thepala, Fafda, Kachori, Khandvi, Handwoh, Ganthia, Oondhiya, Debra, Surat Paun are just some of the many Gujarati delicacies that define the food here. Other than these Basundi, Puran Poli, Shrikhand, Ghevar, Malpua are the traditional sweet dishes that you cannot miss and are famous all over the country."
          }
        ]
      }
]

const list = () => {
    return (
        <div className="destination-cards">
            <div className=''>
                {Data.map(({id, name, capital, about, climate, history, time, img}) => {
                    return(
                        <div key={id} className="singleDestination">
                            <div className='image Div'>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzE1jXIG58ebeihCEj7vvtCRAlqg0OWxR_O-wr5pLbTA&usqp=CAU&ec=48665701'></img>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default list;
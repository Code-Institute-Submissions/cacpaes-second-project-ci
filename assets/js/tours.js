//variable to transport the locations to be marked on map;
var locations = [];

/*
funtion responsible for open the tour details section and by tourid, 
set the geographic coordinates on locations array
*/
function tourSelected(tourId) {
    //variables to get the html elements that will host the dynamic content
    var tourDetailsDiv = document.getElementById("tourDetails");
    var h2PointA = document.getElementById("h2-pointA");
    var h2PointB = document.getElementById("h2-pointB");
    var h2PointC = document.getElementById("h2-pointC");
    var pPointA = document.getElementById("p-pointA");
    var pPointB = document.getElementById("p-pointB");
    var pPointC = document.getElementById("p-pointC");
    var imgPointA = document.getElementById("img-pointA");
    var imgPointB = document.getElementById("img-pointB");
    var imgPointC = document.getElementById("img-pointC");
    var aPointA = document.getElementById("a-pointA");
    var aPointB = document.getElementById("a-pointB");
    var aPointC = document.getElementById("a-pointC"); 
    
    tourDetailsDiv.style.display='block';
    tourDetailsDiv.scrollIntoView();

    //update the html elements of Tour sectiion by tourId value
    //set the locations array that will be marked on the map 
    if (tourId == "tour1")
    {
        locations = [
            { lat: -23.556985456407368, lng: -46.6458763984729 },
            { lat: -23.544558309148307, lng: -46.643824730683605 },
            { lat: -23.550114427773106, lng: -46.64513414697759 }
        ];    
        h2PointA.innerHTML = "Itaúnas Beach, Conceição da Barra";
        h2PointB.innerHTML = "Itália Building";
        h2PointC.innerHTML = "Famiglia Mancini";

        pPointA.innerHTML = "In the municipality of Conceição da Barra, on the border with Bahia, is the beach of Itaúnas.It extends for 25km between the mouth of the Itaúnas River and the Riacho Doce, which separate the territory of Espírito Santo and Bahia.The beach is part of a Conservation Unit, the Itaúnas State Park, listed as a Natural Heritage Site by UNESCO.The region has several rustic and charming inns, with a lot of young people and with several options for tours to do in the region.";
        pPointB.innerHTML = "Built in 1956, the Itália Building has long been the highest in the city, with 165 me is one of the most visited attractions in the capital, due to 360º view of the city that its terrace, where is located the restaurant Terrace Italy provides.With 44 floors, 19 elevators, 52 000 m², seating for ten thousand and four thousand windows on its facade, the building is protected by Heritage. Inside there is a library, a games room and also the Teatro Italy.";
        pPointC.innerHTML = "On charming and romantic Rua Avanhandava – a leafy, almost European-feeling side street in Centro – this traditional trattoria is one of the city's most atmospheric, with throngs of Chianti fiascos hanging from the ceiling and an old-school family-style Italian ambience. In reality portions serve three, which is how many you'll need to divvy up the perusing of the gigantic menu of pasta, meat and seafood dishes.";
    
        imgPointA.src = "assets/images/tours/bixiga.jpg"; 
        imgPointB.src = "assets/images/tours/terraco_ita.jpg"; 
        imgPointC.src = "assets/images/tours/famiglia_mancini.jpg"; 

        aPointA.href = "http://www.portaldobixiga.com.br/";
        aPointB.href = "https://www.edificioitalia.com.br/";
        aPointC.href = "http://www.famigliamancini.com.br/";
    }
    else if(tourId == "tour2")
    {
        locations = [
            { lat: -23.56117795896671, lng: -46.655838987458196 },
            { lat: -23.560658526904586, lng: -46.6946764027999 },
            { lat:  -23.54929767878088, lng: -46.612906331635756}
        ];           
        h2PointA.innerHTML = "Museum of Art of São Paulo – MASP";
        h2PointB.innerHTML = "Tomie Ohtake Institute";
        h2PointC.innerHTML = "Immigration Museum of São Paulo State";

        pPointA.innerHTML = "Located in the heart of the city, Paulista Avenue, the Museu de Arte de São Paulo Assis Chateaubriand – is one of the most important museums in the Southern Hemisphere and one of the main postcards of the city. It is on the list of the ten most visited tourist attractions of São Paulo, with a collection of about eight thousand pieces.It features works by great names of the national painting (Candido Portinari, Di Cavalcanti, Anita Malfatti and Almeida Junior) and international (Raphael, Mantegna, Botticceli, Delacroix, Renoir, Monet, Cézanne, Picasso, Modigliani, Toulouse-Lautrec, Van Gogh, Matisse and Chagall). The inauguration took place in 1968 and 1982, the MASP was listed by Condephaat – Council of Historical Heritage Protection, Archaeological, Artistic and Tourist of the State and in 2003 by IPHAN.";
        pPointB.innerHTML = "Opened in 2001, the Instituto Tomie Ohtake has no permanent collection, but hosts exhibitions of contemporary art, which are reference in the last 50 years, and works of the artist who gives name to the space. Designed by architect Ruy Ohtake, the complex has avant-garde architecture. Its 65 000 m² are divided between work, culture and leisure. With total area of ​​7,500 m², it has seven exhibition rooms, four workshops, a bookstore, an object store, documentation area, auditorium, restaurant, café, theater and cinema.";
        pPointC.innerHTML = "The Museum of the São Paulo State Immigration is primarily responsible for preserving the memory of the people who arrived in Brazil in the mid- nineteenth and twentieth centuries, and that their work helped build and transform the state capital and the country.Acting as a meeting point of different immigrant communities, the origins of the current museum date back to 1887, when it was founded the Immigrants Lodge, a place that had the duty to receive and forward to working travelers brought by the government. One of the main sights of the city, not only the historical value, but also for its centuries-old architecture, the museum has rich attractions such as the wall on which are etched in wood over 14,000 surnames, from different corners of the globe.";
        
        imgPointA.src = "assets/images/tours/masp.jpg"; 
        imgPointB.src = "assets/images/tours/tomie_ohtake.jpg"; 
        imgPointC.src = "assets/images/tours/museu_imigracao.jpg"; 

        aPointA.href = "https://masp.org.br/";
        aPointB.href = "https://www.institutotomieohtake.org.br/";
        aPointC.href = "https://museudaimigracao.org.br/";        
    }
    else if(tourId == "tour3")
    {
        locations = [
            { lat: -23.587327692598006, lng: -46.655691683582624 },
            { lat: -23.533938300775326, lng: -46.639746945276805 },
            { lat: -23.581564931258065, lng: -46.66705397411149 }
        ]; 

        h2PointA.innerHTML = "Ibirapuera Park";
        h2PointB.innerHTML = "São Paulo Hall";
        h2PointC.innerHTML = "Skye Bar & Restaurant";

        pPointA.innerHTML = "Opened in 1954, the Ibirapuera Park is not only the most visited and well-known park in São Paulo, as well as one of the most important areas of culture and leisure city. Conceived by icons such as Oscar Niemeyer, along the lines of the world’s great parks, the Ibirapuera attracts all kinds of public. Since athletes, who go to enjoy the jogging track, a bike lane, the bike rack, the courts and soccer fields ; even those who go in search of culture and attend the OCA, Auditorium, African Museum, Biennale, MAM, among others.It is very easy to understand why this is one of the favorite places in the city: offers snack bars, seating areas, children’s playground, multimedia source and activities all day long. For those seeking only a moment of tranquility in the midst of nature, this is also the ideal place since it is home to several animal and plant species.";
        pPointB.innerHTML = "Built with concrete structure and brick masonry in Louis XVI style with sculptures and minute details, the Julio Prestes would be the starting station of the railway Sorocabana, the main coffee shipping vein in São Paulo.Headquarters of the State Symphony Orchestra of São Paulo, occupying total area of ​​25,000 m², the area offers similarity between the volumes, geometry and proportions found in areas recognized genre in the world. The Sala São Paulo today is considered the best concert hall in Latin America.";
        pPointC.innerHTML = "It is located right beside Restaurante Skye, with their sophisticated decoration and typical Brazilian, French, Italian and Japanese dishes. In the bar, the bar food menu consists mainly of varieties of pizzas and sushi, while drinks range from common to the more exotic, such as blends of vodka with wasabi.Both are run by Chef Emmanuel Bassoleil, French chef at the head of Unique’s hotel kitchen since its grand opening in 2002.The atmosphere is relaxed and modern with a varied public from different nationalities and all ages, from younger crowds to couples.Dinner plates are served in a nightclub atmosphere, with DJs getting starting at 9pm, and who mainly play electronic music.Access is independent of the hotel entrance, by panoramic elevator. It usually gets crowded on weekends.";
        
        imgPointA.src = "assets/images/tours/ibirapuera.jpg"; 
        imgPointB.src = "assets/images/tours/saopaulo_hall.jpg"; 
        imgPointC.src = "assets/images/tours/skye_bar.jpg"; 

        aPointA.href = "https://www.prefeitura.sp.gov.br/cidade/secretarias/meio_ambiente/parques/regiao_sul/index.php?p=14062";
        aPointB.href = "http://www.salasaopaulo.art.br/home.aspx";
        aPointC.href = "https://www.hotelunique.com/en/restaurant-bar/skye/";          
    }
    else if(tourId == "tour4")
    {
        locations = [
            { lat: -23.541612431424202, lng: -46.629461104799795 },
            { lat: -23.591206545074716, lng: -46.68975778945486 },
            { lat: -23.561011814622862, lng: -46.65653011829159 }
        ]; 

        h2PointA.innerHTML = "Municipal Market";
        h2PointB.innerHTML = "JK Iguatemi - Shopping";
        h2PointC.innerHTML = "Paulista Avenue";

        pPointA.innerHTML = "The major feature at downtown is the popular market. Rua 25 de Março attracts people from all over Brazil that seek feedstock, handcraft and even carnival costumes. Mercado Municipal, right next to it, is a mandatory stop to buy spices, food and beverage. On the surroundings of Rua José Paulino, at Bom Retiro, and on Brás there is a clothing market. Rua São Caetano, traditionally known as Bride’s Street, is entirely dedicated to dresses and wedding accessories. For those who seek electronics and car accessories, there is Rua Santa Ifigênia.";
        pPointB.innerHTML = "The gathering of international best brand luxury stores is the main focus of Shopping Malls Cidade Jardim, JK and Iguatemi. Besides brands like Armani, Chanel, and Tiffany & Co., each center has special stores: Cidade Jardim hosts the only Lego store in SP, while Iguatemi has unique boutiques from stylist Diane Von Furstenberg and shoe designer Christian Louboutin. Now at Shopping Mall JK Iguatemi, a new luxury place in the city, there are TopShop and Miu Miu, which are already consolidated all over the globe.";
        pPointC.innerHTML = "The most popular avenue of the city concentrates all that is best in São Paulo. It is possible to visit museums and cultural centers, find a park amid great skyscrapers, check book launchings, enjoy the happy hour in one of its many bars, enjoy the evening at nightclubs, watch theatrical performances and movie sessions of the most diverse productions, and go shopping: all in one place! Even with all the excitement, Avenida Paulista allows contact with nature: the Trianon Park offers benches, spaces for walking and eventual cultural performances such as concerts, meetings for discussions and small plays, to relax amidst the remaining flora Atlantic forest. Another interesting option is Park Mario Covas, where the Central of Tourist Information – CIT is located.";
        
        imgPointA.src = "assets/images/tours/mercado.jpg"; 
        imgPointB.src = "assets/images/tours/jk_iguatemi.jpg"; 
        imgPointC.src = "assets/images/tours/paulista.jpg"; 

        aPointA.href = "https://portaldomercadao.com.br/";
        aPointB.href = "https://iguatemi.com.br/jkiguatemi/";
    }

    //reinit the map
    initMap();
}

/*
google init function. It was changed to get dinamically the array of locations to be marked
(passed by tourSelected function) and sets the center point of the map to the 2 index of locations
array, centralizing the map exactly where the user is going to see.
*/
function initMap(){
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: locations[2]
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var markers = locations.map(function(location, i){
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
        imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });            
}
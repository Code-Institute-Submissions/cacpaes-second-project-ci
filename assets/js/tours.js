

/*
funtion responsible for open the tour details section.
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

    if (tourId == "tour1")
    {
        
        h2PointA.innerHTML = "Itaúnas Beach, Conceição da Barra";
        h2PointB.innerHTML = "Praia dos Padres, Guarapari";
        h2PointC.innerHTML = "Praia do Bosque, São Mateus";

        pPointA.innerHTML = "In the municipality of Conceição da Barra, on the border with Bahia, is the beach of Itaúnas.It extends for 25km between the mouth of the Itaúnas River and the Riacho Doce, which separate the territory of Espírito Santo and Bahia.The beach is part of a Conservation Unit, the Itaúnas State Park, listed as a Natural Heritage Site by UNESCO.";
        pPointB.innerHTML = "Located on the way to Rodovia do Sol, Guarapari has more than 50 beaches and you can certainly explore a good part of the Espírito Santo coast there.Praia dos Padres is one of the city's favorites and is located in the midst of coconut trees that surround the beach and make the view even more incredible.";
        pPointC.innerHTML = "If you are one of those people who love deserted beaches and preserved nature, Praia do Bosque is your place.It is located in the municipality of São Mateus, on the northern coast of the state, which is less explored by tourists, and precisely because of this it is possible to find places as calm as Praia do Bosque.";
    
        imgPointA.src = "assets/images/beach1.jpg"; 
        imgPointB.src = "assets/images/beach2.jpg"; 
        imgPointC.src = "assets/images/beach3.jpg"; 

        aPointA.href = "https://www.tripadvisor.ie/Attraction_Review-g2000712-d2407993-Reviews-Itaunas_Beach-Conceicao_da_Barra_State_of_Espirito_Santo.html";
        aPointB.href = "https://www.tripadvisor.com/Attraction_Review-g941641-d2408025-Reviews-Praia_dos_Padres-Guarapari_State_of_Espirito_Santo.html";
        aPointC.href = "http://www.terracapixaba.com/2018/05/praia-do-bosque.html";

    }
    else if(tourId == "tour2")
    {
                  
        h2PointA.innerHTML = "Nossa Senhora da Penha Convent Museum";
        h2PointB.innerHTML = "Reis Magos Church";
        h2PointC.innerHTML = "Domingos Martins House of Culture";

        pPointA.innerHTML = "Opened in 2000, the Museum of Nossa Senhora da Penha is located in the former house of the Pilgrims.The place displays several objects with more than 400 years of the historical collection of the Convent, are in the exhibition sacred, liturgical and clothing pieces, all narrating the daily life of the Sanctuary.";
        pPointB.innerHTML = "Completed in 1580, listed by IPHAN and recently restored, it is one of the best examples of Jesuit architecture in Brazil. The Reis Magos Church and Residence is one of the main examples of the Brazilian Jesuit architectural heritage, as it is one of the buildings that suffered less interference in the centuries that followed its construction.";
        pPointC.innerHTML = "The House of Culture and Historical Museum has a collection of photographs, documents, objects and furniture that belonged to immigrants and descendants of Germans, Pomeranians and Italians who colonized the municipality.";
        
        imgPointA.src = "assets/images/historical1.jpg"; 
        imgPointB.src = "assets/images/historical2.jpg"; 
        imgPointC.src = "assets/images/historical3.jpg"; 

        aPointA.href = "https://www.tripadvisor.ie/Attraction_Review-g303319-d2408107-Reviews-Nossa_Senhora_da_Penha_Convent-Vila_Velha_State_of_Espirito_Santo.html";
        aPointB.href = "https://www.tripadvisor.ie/Attraction_Review-g2342774-d6436867-Reviews-Igreja_dos_Reis_Magos-Serra_State_of_Espirito_Santo.html";
        aPointC.href = "https://www.tripadvisor.com/Attraction_Review-g1076184-d4376371-Reviews-Casa_Cultural_Domingos_Martins-Domingos_Martins_State_of_Espirito_Santo.html";

        
       
    }
    else if(tourId == "tour3")
    {
        

        h2PointA.innerHTML = "Vale Botanical Park";
        h2PointB.innerHTML = "Sônia Cabral";
        h2PointC.innerHTML = "Rua da Lama";

        pPointA.innerHTML = "With 33 hectares of green area, the Vale Botanical Park is located in the belt of the Tubarão Complex. It is a leisure space and, mainly, a conservation unit of the Atlantic Forest, one of the most important forests in the country.Those who visit the place have the opportunity to visit the first permanent Sensory Garden in Espírito Santo, a structure that aims to stimulate the five senses and promote a different way of interacting with nature.";
        pPointB.innerHTML = "It was built in 1606 and initially housed the old Church of Nossa Senhora da Misericórdia. In 1912, the building was remodeled by the architect André Carloni, during the government of Jerônimo Monteiro (1908-1912), in order to build a seat for the Legislative Assembly. ";
        pPointC.innerHTML = "Frequented since 1980, mostly by professors and students from UFES (Federal University of Espírito Santo), Rua da Lama is located on Avenida Anísio Fernandes Coelho, in Jardim da Penha, and received this nickname because, before being paved, the street covered in mud on rainy days. ";
        
        imgPointA.src = "assets/images/visit1.jpg"; 
        imgPointB.src = "assets/images/visit2.jpg"; 
        imgPointC.src = "assets/images/visit3.jpg";  
        
        aPointA.href = "http://www.vale.com/brasil/PT/initiatives/environmental-social/botanic-park-v/Paginas/default.aspx";
        aPointB.href = "https://secult.es.gov.br/palacio-da-cultura-sonia-cabral";
        aPointC.href = "http://www.amobrasil.com.br/blog/rua-da-lama-porque-esse-nome";
    }
    else if(tourId == "tour4")
    {
        

        h2PointA.innerHTML = "Vila Velha";
        h2PointB.innerHTML = "Serra";
        h2PointC.innerHTML = "Capixaba Handicraft Store";

        pPointA.innerHTML = "Crossing the Third Bridge, we arrive at the Penha Convent. The souvenir shop at the top of the mountain, and other shops near the entrance proton, sell the most varied religious products.In Vila Velha it is also possible to find the most varied items of Espírito Santo, such as clothes, products from the cinnamon-green culture and even artisanal gastronomic products.";
        pPointB.innerHTML = "Tourists can also find handicrafts in the municipality of Serra. On the edge of Jacaraípe is the Associação de Artesãos da Serra (Asas). Come meet the Holy Spirit? Prestige capixaba crafts take beautiful memories home!";
        pPointC.innerHTML = "On weekends, Praça dos Namorados hosts the traditional Feira de Artesanato Artes na Praça, which offers handicrafts and typical foods, in addition to artistic shows. The objective of the Artes na Praça program is to value the work of artisans in Espírito Santo .";
        
        imgPointA.src = "assets/images/shop1.jpg"; 
        imgPointB.src = "assets/images/shop2.jpg"; 
        imgPointC.src = "assets/images/shop3.jpg"; 

        aPointA.href = "https://www.tripadvisor.ie/Tourism-g303319-Vila_Velha_State_of_Espirito_Santo-Vacations.html";
        aPointB.href = "https://www.tripadvisor.ie/Tourism-g2342774-Serra_State_of_Espirito_Santo-Vacations.html";
        aPointC.href = "https://www.tripadvisor.com/Attraction_Review-g303320-d6716228-Reviews-Praca_dos_Namorados-Vitoria_State_of_Espirito_Santo.html";
    }

   
}



$(document).ready(function(){            
            
    $.ajax({
        type:"GET",
        // url:"https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=90dae9f5f3e14560834026bd02fde424",
        url:"https://newsapi.org/v2/top-headlines?country=in&apiKey=90dae9f5f3e14560834026bd02fde424",
        beforeSend:function(){
            
            $("#loader1").show();
        },
        success:function(data){
            $("#loader1").hide();                                           
            var artcle = (data['articles']); 
            var newst ="";
            
            for(var i in artcle){                        
                var myTitle =artcle[i].title;
                var newsurl = artcle[i].url;
                var newsimg = artcle[i].urlToImage;
                var newsdescptn = artcle[i].description;
                newst += "<div class='card' style='width: 18rem;'> <img class='card-img-top' src='";
                newst += newsimg+"' alt='" +myTitle;
                newst += "'> <div class='card-body'>  <h5 class='card-title'>";
                newst +=  myTitle + "</h5> <p class='card-text'>";
                newst +=  newsdescptn + "</p>  <a href='" +newsurl+ "'>More..</a>  </div>  </div>";                                                     
                
    
            } 
            $("#displaynews").html(newst);
            console.log("here");
        }
    });
    $("#searchit").click(function(){
        $.ajax({
        type:"GET",               
        url:"https://newsapi.org/v2/top-headlines?country=in&apiKey=90dae9f5f3e14560834026bd02fde424",
        beforeSend:function(){
            
            $("#loader1").show();
        },
        success:function(data){
            $("#loader1").hide();                                                               
            var artcle = (data['articles']); 
            var newst ="";
            var filterval = $("#filcat").val();
            for(var i in artcle){                        
                var myTitle =artcle[i].title;
                var newsurl = artcle[i].url;
                var newsimg = artcle[i].urlToImage;
                var newsdescptn = artcle[i].description;
                var newscontent = artcle[i].content;
                
                if(filterval != ""){
                   var filtervalu = filterval.toLowerCase();
                    if(
                        ((newscontent!=null)&& (!newscontent.toLowerCase().includes(filtervalu)))
                        || ((newsdescptn!=null)&& (!newsdescptn.toLowerCase().includes(filtervalu)))
                        ||
                         ((myTitle!=null)&& (!myTitle.toLowerCase().includes(filtervalu)))
                    ){
                        continue;                  
                    }
                   
                }
                console.log(filterval);
                newst += "<div class='card' style='width: 18rem;'> <img class='card-img-top' src='";
                newst += newsimg+"' alt='" +myTitle;
                newst += "'> <div class='card-body'>  <h5 class='card-title'>";
                newst +=  myTitle + "</h5> <p class='card-text'>";
                newst +=  newsdescptn + "</p>  <a href='" +newsurl+ "'>More..</a>  </div>  </div>";                                                     
                
    
            } 
            $("#displaynews").html(newst);
            console.log("here");
        }
    }); 
    });
});
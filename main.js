/////
$('#resultprice').hide();
function myfunction() {
    document.getElementById("dropp").classList.toggle("show");
}

var sum=[]
///////OOP
function Book(title,genre,author,price,src) {
    var object = {};
     object.title = title;
     object.genre = genre;
     object.author = author;
     object.price = price;
     object.src=src;
     return object;
   }
   ///// creat object of book
   var book1=Book('A TIME TO KILL ','DRAMA','JOHN GRISHAM','20$',src="https://booklistqueen.com/wp-content/uploads/a-time-to-kill-john-grisham.jpg")
   var book2=Book('THE HOUSE OF MIRTH ','DRAMA','EDITH WHARTON','15$',src="https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/8402/9781840224191.jpg")
   var book3=Book('THE SUN ALSO RISES','ROMANCE',' EDITH WHARTON','17$',src="https://upload.wikimedia.org/wikipedia/commons/8/8b/The_Sun_Also_Rises_%281st_ed._cover%29.jpg")
   var book4=Book('NUMBER THE STARS','ROMANCE','LOIS LOWRY','19$',src="https://m.media-amazon.com/images/I/51LCU-JANQL._SL500_.jpg")
   var book5=Book('BRAVE NEW WORLD','DRAMA','EDITH WHARTON','18$',src="https://the-comics-journal.sfo3.digitaloceanspaces.com/wp-content/uploads/2022/05/Brave-New-World-1.jpg")
   var book6=Book('SOOLY','ROMANCE','JOHN GRISHAM','13$',src="https://www.blufftonicon.com/sites/default/files/images/articles/2021/47350-robert-mccools-icon-book-review-sooley.png")
   var book7=Book('THE DECORATION OF HOUSES','THRILLER','EDITH WHARTON','30$',src="https://rukminim1.flixcart.com/image/416/416/k1jlyfk0/book/4/2/9/the-decoration-of-houses-classic-reprint-original-imafh2zzdhednxew.jpeg?q=70")
   var book8=Book('THE COMPLETE SHORT STORIES','ROMANCE','EDITH WHARTON','10$',src="https://m.media-amazon.com/images/I/414NsbXzWZS._AC_SY780_.jpg")
   var book9=Book('ON THE HORIZON','romantic','JOHN GRISHAM','15$',src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1564709502l/51307102.jpg")
   var book10=Book('The Boys from Biloxi','DRAMA','JOHN GRISHAM','15$',src="https://m.media-amazon.com/images/I/41o6f5UYZDL._AC_SY780_.jpg")
   var array=[book1,book2,book3,book4,book5,book6,book7,book8,book9,book10]
   

///////function search the book with the author
function Author(){
  for (var i = 0; i < array.length; i++) {
        if($('#author').val()===array[i].author)
        
    $('tr').append('<th ><img class="imgg" src='+array[i].src+'><br><button onclick=buy() class="price">' +array[i].price+'</button></th>')
    
    $('#resultprice').hide();

    }
    }


   function buy() {
      
      $('.price').on("click", function(){
        $('#resultprice').show();

        var price=parseInt(this.innerText)
        if(!sum.includes(price)){
          sum.push(price)
        }
     /////we use function reduce to every click in the buton then that sum youre result
     (document.getElementById("demo").innerHTML)=sum.reduce((acc,element)=>acc+element)+"$"
     
     
})

  }
///////function search the book with the genre 
  function Genre(){
    for (var i = 0; i < array.length; i++) {
        if($('#genre').val()===array[i].genre)
        
    $('tr').append('<th ><img class="imgg" src='+array[i].src+'><br><br><button onclick=buy() class="price">' +array[i].price+'</button></th>')
    $('#resultprice').hide();

    }
    }

    


  
var result=document.getElementById('resultprice')

    

    
      
   /////function sing up local store


   function singup(){
    ////The preventDefault() tells the user  that if the event does not get explicitly handled the action should not be taken
    event.preventDefault()
var email=document.getElementById("email").value;
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
var user={
  email:email,
  username: username,
  password: password,

};
/////JSON.stingify can change the value to boolean number and string too and to exchange data to a web server. 
var aymen= JSON.stringify(user);
/////The localStorage object allows you to save value or key  in the browser.
localStorage.setItem(username,aymen);
console.log("user add")
alert("add succsefuly")

  
   }



//##########
// 1'den 100'e kadar olan sayıları basit bir şekilde Javascript ile konsola yazdıran uygulama.
// Bu uygulama belki sizi dönemlik ödevlerinizden belkide hocalarınızla sürtüşmenizden kurtarabilir.
// Bu uygulama Aktila Cengiz tarafından örnek olarak yapılmıştır.
// İyi kullanımlar dileriz.
//##########

// Burada Number yani sayılarımızı tanımlıyoruz.
var sayi = 0;
var sayi2 = 0;
var toplam = 0; 

// burada bekleme mesajlarımızı değişken olarak beliritiyoruz.
var holdMessage = "Programa hoş geldiniz."
var holdMessage2 = "Bu program 1'den 100'e kadar olan sayıları göstermek ve toplamak üstüne kuruldur."

// Bekleme mesajlarımızı belirli bir süre dahilinde attırıyoruz.
setTimeout(function()  {
console.log(holdMessage)
}, 1 * 100)
setTimeout(function()  {
    console.log(holdMessage2)
},3 * 1000)

setTimeout(function()  {
while(sayi <= 100) {
    
    sayi++;
    
    // Eğer sayı integer olarak dönüyorsa sayıyı konsola attırıyoruz.
   if(Number(sayi) === sayi && sayi % 2 === 0) {
       console.log(sayi)
       toplam += sayi;
   } 
}
}, 3 * 3000)

// 100'e kadar olan çift sayıların toplamını burada belirtir.  
setTimeout(function()  {
console.log("genel toplam: " + toplam)
},4 * 3000)

//#######
// Finish Here
//#######


//  Istifadeci eger bowluq gonderse promptdan
//  Ifde yazdirki bes bowluq daxil etmek olmaz
//
// let entering = prompt("Daxil et", '');
// if (entering === ' ') {
//     alert("Bosluq qoymaq olmaz");
// }else {
//     alert(entering);
// }

//
//  Ikinci task oduki3 dene regem qebul edirsen 3 edededin ededi ortasini cixarirsan
// Burada istifadeci bowluq ve string gondererse yazi yeni istifadeciye demelisenki alertde
// bes yazi ve ya bowluq gondermek olmaz
//

let entering1 = prompt("Birinci eded" , '');

let entering2 = prompt("ikinci  eded" , '');

let entering3 = prompt("Ucuncu eded" , '');

//
// if ((typeof entering1 ==='string')){
//     alert("HErif olmaz")
// }



let SumEntering = (Number(entering1)+ Number(entering2) + Number(entering3))/3;
alert(SumEntering);


// 3 cu task ise 3 dene ededdi ededi ortalamani yoxlayannan
// sora hansi ededin o ededi ortalamadan boyukduse
// onu alertde cixarmalisan bir nov bunnan evvelku taskin davamidi


if(entering1 > SumEntering){
    alert(entering1);
}else if (entering2 > SumEntering){
    alert(entering2);
}else if (entering3 > SumEntering){
    alert(entering3);
}else {
    alert(SumEntering);
}
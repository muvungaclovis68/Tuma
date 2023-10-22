/*function calculPrix(){
    var poids = document.getElementById("poids").value;
    var destination = document.getElementById("destination").value;

    var prixKg=5.00;
    var total=prixKg*poids;

    switch(destination){
        case 'Butembo':
            total+=10.00;
            break;
        case 'Goma':
            total+=20.00;
            break;
        case 'Kinshasa':
            total+=30.00;
            break;
        case 'Kisangani':
            total+=40.00;
            break;
        case 'Lubumbashi':
            total+=40.00;
            break;
        }
    document.getElementById("result").innerHTML="le cout total pour la la livraison de votre colis est:"+total.toFixed(2)+ "$";

}
document.getElementById("submit").addEventListener("click",
function(event){
    event.preventDefault();
    calculPrix();
});*/

function calculPrix(){
    var poids = document.getElementById("poids").value;
    var destination = document.getElementById("destination").value;
    var depart = document.getElementById("depart").value;
    var date = document.getElementById("date").value;
    var nom = document.getElementById("nom").value;
    var contact = document.getElementById("contact").value;


    var prixKg=5;
    var total=prixKg*poids;

    switch(destination){
        case 'Butembo':
            total+=10;
            break;
        case 'Goma':
            total+=20;
            break;
        case 'Kinshasa':
            total+=30;
            break;
        case 'Kisangani':
            total+=40;
            break;
        case 'Lubumbashi':
            total+=40;
            break;
        }
        document.getElementById("result").innerHTML="le cout total pour la livraison de votre colis est:"+total.toFixed(2)+ "$"+" le colis vient de : "+depart+" la destination c'est : "+destination;
        document.getElementById("detail").innerHTML="date d'envoi du colis:"+date +" le poids du colis est : "+poids+ "Kg" +" le colis c'est: "+nom+" le contact du proriètaire est: "+contact;
}
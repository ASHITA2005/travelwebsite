function search() {
    const searchbar = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list");
    const product = document.querySelectorAll(".box");
    
    for (var i = 0; i < product.length; i++) {
        const pname = product[i].getElementsByClassName("hotel")[0];
        
        if (pname) {
            let textValue = pname.textContent || pname.innerHTML;
            
            if (textValue.toUpperCase().indexOf(searchbar) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none";
            }
        }
    }
}
search();

const catalog = document.querySelector("#catalog")




const products = [
	{
		name:"Aqua Regia",
		img: "Content/content_images/parfum_windows.svg",
		price: 228 ,
		InStoc: "Yes",
		volume:"50 ml"
	},
	{
		name:"Pas Ce Soir Extrait",
		img: "Content/content_images/parfum_flora.svg",
		price: 256,
		InStoc: "Yes",
		volume:"100 ml"
	},
	{
		name:"Beso Dorado",
		img: "Content/content_images/parfum_queens.svg",
		price: 267,
		InStoc: "Yes",
		volume:"100 ml"
	},
	{
		name:"Halfeti Leather",
		img: "Content/content_images/parfum_jake`s.svg",
		price: 249,
		InStoc: "Yes",
		volume:"100 ml"
	},
	{
		name:"COMME DES GARCONS Black",
		img: "Content/content_images/parfum_windows.svg",
		price: 212,
		InStoc: "Yes",
		volume:"100 ml"
	},
	{
		name:"COMME DES GARCONS Black",
		img: "Content/content_images/parfum_flora.svg",
		price: 212,
		InStoc: "Yes",
		volume:"100 ml"
	},
	{
		name:"COMME DES GARCONS Black",
		img: "Content/content_images/parfum_queens.svg",
		price: 212,
		InStoc: "No",
		volume:"100 ml"
	},
	{
		name:"COMME DES GARCONS Black",
		img: "Content/content_images/parfum_jake`s.svg",
		price: 212,
		InStoc: "Yes",
		volume:"100 ml"
	},
	{
		name:"COMME DES GARCONS Black",
		img: "Content/content_images/parfum_windows.svg",
		price: 212,
		InStoc: "Yes",
		volume:"100 ml"
	},
	{
		name:"COMME DES GARCONS Black",
		img: "Content/content_images/parfum_flora.svg",
		price: 212,
		InStoc: "Yes",
		volume:"100 ml"
	},
	{
		name:"COMME DES GARCONS Black",
		img: "Content/content_images/parfum_windows.svg",
		price: 212,
		InStoc: "Yes",
		volume:"100 ml"
	},
	{
		name:"COMME DES GARCONS Black",
		img: "Content/content_images/parfum_flora.svg",
		price: 212,
		InStoc: "No",
		volume:"100 ml"
	},
	{
		name:"COMME DES GARCONS Black",
		img: "Content/content_images/parfum_jake`s.svg",
		price: 212,
		InStoc: "Yes",
		volume:"100 ml"
	},
	{
		name:"COMME DES GARCONS Black",
		img: "Content/content_images/parfum_windows.svg",
		price: 212,
		InStoc: "Yes",
		volume:"100 ml"
	},
	{
		name:"COMME DES GARCONS Black",
		img: "Content/content_images/parfum_jake`s.svg",
		price: 212,
		InStoc: "No",
		volume:"100 ml"
	},
]

// functia de afisare a produselor
function showProducts(products) {
	catalog.innerHTML = "";
	products.forEach((product) => {
		catalog.innerHTML += `
		<div class = 'product'>
			<img src = '${product.img} '>	
			<div class = 'name'>
				<h3>${product.name}</h3>
				<h3>${product.volume}</h3>
			</div>
			<div class = price_info>
				<h4> ${product.price} $</h4>
				<h4>In stoc: ${product.InStoc} </h4>
			</div>
		</div>
		`
	})
}


function sortByPrice(value) {
	if (value == "asc") {
		products.sort((item, prevItem) => {
			return item.price - prevItem.price
		})
	} else if (value == "desc") {
		products.sort((item, prevItem) => {
			return prevItem.price - item.price
		})
	}
	showProducts(products)
}

showProducts(products);

/* 
	Am schimbat pretu produselor din string in int si am adaugat simbolul $ l-am adaugat la afisare
*/
/* 
	Am creat o functie care afiseaza produsele pentru a o folosi cind avem nevoie
*/
/* 
	Am creat functia de ordonare dupa pret si am chemato din html cu ajutorul evenimentului onclik
*/
/* 
	Examineaza codul, daca ai intrebari adreseaza-te :)
*/
let menuArray = [];
class Menu {
  constructor(title, texts, price, imgUrl) {
    this.title = title;
    this.texts = texts;
    this.price = price;
    this.img = imgUrl;
  }
}

menuArray.push(
  new Menu(
    "testFood",
    "Paella with shrimp, mussels, pork, chicken, saffron rice, peas, and bell peppers.",
    "30.99",
    "https://www.thespruceeats.com/thmb/AQ5diUdXp9a9bXJMwtSTtG0lpr8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SeafoodPaellaWithPorkandChicken-Westend61_GettyImages-b0e7019672484c8a91c250d399d1d163.jpg"
  ),
  new Menu(
    "Crispy Fried Oysters With Cornmeal Batter",
    "Fresh oysters, cornmeal batter, eggs, buttermilk, flour, and spices. Served with tartar sauce or rémoulade.",
    "44.99",
    "https://www.thespruceeats.com/thmb/TSY9sgPUTIRHw73LH5lmcWZAipA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fried-oysters-with-cornmeal-batter-3058714-hero-01-72bfb78fb3f945108b40c7b612c60d93.jpg"
  ),
  new Menu(
    "Shrimp Ceviche",
    "Shrimp cured in lime juice, mixed with tomatoes, onions, cucumbers, cilantro, avocado, and chili peppers.",
    "64.99",
    "https://www.thespruceeats.com/thmb/7o0pqbOlZoVfrd5QrOqdrb0w8iU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/shrimp-ceviche-recipe-5213319-hero-01-8d349ee0591048a588ffac66b3c5870c.jpg"
  ),
  new Menu(
    'Beef Wellington',
    "Tender beef fillet, mushroom duxelles, Parma ham, and puff pastry. Served with red wine reduction.",
    '59.99',
    'https://www.thespruceeats.com/thmb/H1VKmdNz66CPosoP3cwLXU5RtTk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/make-a-classic-beef-wellington-easy-435726-hero-03-1210c31e884044bcb9c1d1475ca818c3.jpg'
  ),
  new Menu(
    'Steak au Poivre',
    "Peppercorn-crusted steak, seared and topped with a creamy cognac and beef stock reduction sauce.",
    '129.99',
    'https://www.thespruceeats.com/thmb/9_J6fGTFQz5sQNucdwvFLGtGd2w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ClassicFrenchSteakauPoivre-TheSpruce-5c62efe3c9e77c0001662762.jpg'
  ),
  new Menu(
    'Grilled Filet Mignon with Bearnaise Sauce',
    "Grilled filet mignon, topped with Bearnaise sauce made of egg yolks, butter, vinegar, shallots, and tarragon.",
    '69.99',
    'https://www.thespruceeats.com/thmb/5fYyZdcgUtV_wYmp8OACRXO-x2o=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/grilled-filet-mignon-with-bearnaise-sauce-3573497-hero-01-9b0abe87c0524a799724135b99b483c8.jpg'
  )
);



export function createMenuList() {
  const contentContainer = document.querySelector("#content");
  const menuContent = document.createElement("div");

  contentContainer.innerHTML = "";
  menuContent.id = "menu-content";

  const menuListText = document.createElement("h1");
  menuListText.textContent = "Menu List ";
  menuListText.id = "menu-h1";

  const menuList = createItems();

  menuContent.appendChild(menuListText);
  menuContent.appendChild(menuList);
  contentContainer.appendChild(menuContent);
  boxContent();
}

function createItems() {
  const menuItems = document.createElement("div");
  menuItems.id = "menuItems";
  for (let i = 0; i < menuArray.length; i++) {
    const boxItem = document.createElement("div");
    boxItem.className = "box-item";
    menuItems.appendChild(boxItem);
  }
  return menuItems;
}

function boxContent() {
  const boxItems = document.querySelectorAll(".box-item");
  
  boxItems.forEach((box, index) => {
    const boxTextItems = document.createElement("div")
    const boxText = document.createElement("h4");
    const boxDescription = document.createElement("p");
    const price = document.createElement("p")
    const img = document.createElement('img')

    boxTextItems.className = 'box-text-items'

    boxText.textContent = menuArray[index]["title"];
    boxText.className = "item-header"

    boxDescription.textContent = menuArray[index]["texts"];
    boxDescription.className = "item-description"

    price.textContent = menuArray[index]["price"];
    price.className = "item-price"

    img.src = menuArray[index]['img']
    img.className = "item-img"


    boxTextItems.appendChild(boxText)
    boxTextItems.appendChild(boxDescription)
    boxTextItems.appendChild(price)
    box.appendChild(img)
    box.appendChild(boxTextItems)
    
    

  });
}

import './App.css';

function App() {
  
  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo isDiscount="yes" name="Black Panther" category="LEBARAN"/>
    </div>
  );
}

function FotoProduk() {
  return (
      <div className="Foto">
        <img src="Sepatu.jpg" />
      </div>
  );
}

function CheckDiscount(props) {
  const {isDiscount} = props;
  if(isDiscount == "yes") {
    return (
      <p>Diskon 50% Off</p>
    );
  } 
  else if(isDiscount == "coming") {
    return (
      <p>Akan ada diskon ...</p>
    );
  }
  else {
    return (
      <p>Belum ada diskon..!!</p>
      );
  }
}


function ProdukInfo(props) {
  const {category, name, isDiscount} = props;
  const benefits = ["Tidak mudah rusak", "Anti air", "Bahan berkualitas", "Nyaman digunakan"];
  const ListBenefits = benefits.map((itemBenefits) =>
    <li>{itemBenefits}</li>
  )
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR 2.399.000</p>
        <CheckDiscount isDiscount={isDiscount}/>
        <p className="Info">
          One of the most recognizable shoes in the AJ collection, the Air Jordan 3 Retro features lightweight, visible cushioning just like the original from '88. Signature details and materials celebrate the game-changing icon.
        </p>
        <ul>
          {ListBenefits}
        </ul>
        <a onClick={(e) => TambahCart(name, e)} href="#">Add to Cart</a>
      </div>
    </div>
  );
}

function TambahCart(e) {
  return console.log("Membeli " + e);
}

export default App;

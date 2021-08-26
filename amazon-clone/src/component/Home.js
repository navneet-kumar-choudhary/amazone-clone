import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/* product id, title, price, rating, image */}
      <div className="home_row">
        <Product
          id="123456789"
          title="ASUS TUF Gaming F15 (2020), 15.6-inch (39.62 cms) FHD 60Hz, Intel Core i5-10300H 10th Gen, NVIDIA GeForce GTX 1650 4GB Graphics, Gaming Laptop(8GB/512GB SSDWindows 10/Gray/2.3 Kg), FX566LH-BQ275T"
          price={57990.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/914o5xV1+8L._SY355_.jpg"
        />
        <Product
          id="123456785"
          title="Epson Eco Tank L3101 All-in-One Ink Tank Printer (Black)"
          price={11599.0}
          rating={3}
          image="https://m.media-amazon.com/images/I/41j1xxCYh+L._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="123456775"
          title="Bigmuscles Nutrition Premium Gold Whey 1Kg [Belgian Chocolate] | Whey Protein Isolate & Whey Protein Concentrate | 25g Protein Per Serving | 0g Sugar | 5.5g BCAA"
          price={1239.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/51JJtqTByuL._SY450_.jpg"
        />
        <Product
          id="123456765"
          title="realme Buds Wireless in-Ear Bluetooth with mic (Yellow)"
          price={1599.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/61e9td4-rjL._SY355_.jpg"
        />
        <Product
          id="123456775"
          title="boAt A400 USB Type-C to USB-A 2.0 Male Data Cable, 2 Meter (Black)"
          price={299.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/61DMW4mrhDL._SY355_.jpg"
        />
      </div>

      <div className="home_row">
        <Product
          id="123456755"
          title="LG Ultragear 24 inch (60.96 cm) 144Hz, Native 1ms Full HD Gaming Monitor with Radeon Freesync - TN Panel with Display Port, HDMI, Height Adjust Stand - 24GL650F (Black)"
          price={26999.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/71sO9GijqwL._SX679_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;

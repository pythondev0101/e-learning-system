
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import React, { useEffect } from "react";
import AboutUs from './pages/AboutUs';
import AOS from "aos";
import "aos/dist/aos.css";
import PrimeNavBar2 from './components/PrimeNavBar2';
import ScrollToTop from './components/ScrollToTop';
import ContactUs from './pages/ContactUs';
import Branches from './pages/Branches';
import Testimonies from './pages/Testimonies';
import ServicesPage from './pages/ServicesPage';
import PreRegister from './pages/PreRegister';


function App() {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

 
  return (

    
    <>
      
      <Router>
        <Redirect to="/home" />
        <PrimeNavBar2 />
        <ScrollToTop />
        <Switch>
          <Route path='/home' exact component={HomePage} />
        </Switch>
        <Switch>
          <Route path='/about-us' exact component={AboutUs} />
        </Switch>
        <Switch>
          <Route path='/services' exact component={ServicesPage} />
        </Switch>
        <Switch>
          <Route path='/contact-us' exact component={ContactUs} />
        </Switch>
        <Switch>
          <Route path='/branches-cebu' exact component={cebuBranches} />
        </Switch>
        <Switch>
          <Route path='/branches-bohol' exact component={boholBranches} />
        </Switch>
        <Switch>
          <Route path='/branches-tacloban' exact component={TaclobanBrances} />
        </Switch>
        <Switch>
          <Route path='/branches-calbayog' exact component={calbayogBrances} />
        </Switch>
        <Switch>
          <Route path='/branches-palawan' exact component={palawanBrances} />
        </Switch>
        <Switch>
          <Route path='/testimonies' exact component={Testimonies} />
        </Switch>
        <Switch>
          <Route path='/branches-butuan' exact component={butuanBrances} />
        </Switch>
        <Switch>
          <Route path='/pre-register' exact component={PreRegister} />
        </Switch>
      </Router>
    </>
  );
}

const fakeInfo = [
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
  ' aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  ' Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  ' Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,',
  ' eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  ' Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni',
  ' dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,',
  ' consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam ',
  'aliquam quaerat voluptatem.'
].join();


function cebuBranches() {
  const cebuAsset = 'https://assets2.rappler.com/2021/01/Cebu-city-skyline-may-10-2018-1622443368874-546.jpg';
  const addressInfo = 'Room 308, 3rd Floor, Doña Luisa Bldg. Fuente Osmena circle, Cebu City';
  const landmarkInfo = 'On the top of KFC, In front of Osmeña circle, beside of Rajah Park Hotel';
  const mapInfo = 'https://www.google.com/maps/place/Honorio+Grupo+Street,+Tagbilaran+City,+Bohol,+Philippines/@9.6408684,123.8569655,1106m/data=!3m1!1e3!4m5!3m4!1s0x33aa4db0f8eac7c7:0xd2d6f576ec192ecf!8m2!3d9.6416934!4d123.8557049';
   return <Branches title='CEBU CITY BRANCH' photo={cebuAsset} address={addressInfo} landmark={landmarkInfo} maplink={mapInfo} info={fakeInfo}/>;
 }

function boholBranches() {
 const boholAsset = 'https://www.tripsavvy.com/thmb/XOMN62FAfyWZLa8H_C5FDTQM0Dc=/1916x1078/smart/filters:no_upscale()/GettyImages-135558476-8533a33260d9436c9bc432ce630ec732.jpg';
  const addressInfo = 'Room 201 A. 2nd floor,. Saint Jude Building, Gallares St., corner H Grupo St., Tagbilaran City';
  const landmarkInfo = 'Near at Borja Family Hospital, beside of Rio Andre building';
  const mapInfo = 'https://www.google.com/maps/place/Do%C3%B1a+Luisa+Building,+Fuente+Osme%C3%B1a+Cir,+Cebu+City,+6000+Cebu,+Philippines/@10.3105477,123.8915571,552m/data=!3m2!1e3!4b1!4m5!3m4!1s0x33a9994ee442fda9:0x104653d874a24e93!8m2!3d10.3105477!4d123.8937512';
  return <Branches title='TAGBILARAN CITY BOHOL' photo={boholAsset} address={addressInfo} landmark={landmarkInfo} maplink={mapInfo} info={fakeInfo}/>;
}

function TaclobanBrances(){
  const taclobanlAsset = 'https://pix10.agoda.net/geo/city/181894/317d9608ed084bfb080b1aa7906b9913.jpg?s=1920x822';
  const addressInfo = 'Room 4B, 4th floor, CATJOY BUILDING, P.Burgos St. Tacloban City.';
  const landmarkInfo = 'On the top of CAKERY, Beside of Megabites Foodshoppe, NEAR IN IRONWOOD HOTEL';
  const mapInfo = 'https://www.google.com/maps/place/Prime+Language+%26+Tech.+Center+Inc./@11.240696,125.001742,550m/data=!3m2!1e3!4b1!4m5!3m4!1s0x3308710f40169959:0x920829207b89e85a!8m2!3d11.240696!4d125.0039361';
   return <Branches title='TACLOBAN CITY BRANCH' photo={taclobanlAsset} address={addressInfo} landmark={landmarkInfo} maplink={mapInfo} info={fakeInfo} />
}

function calbayogBrances(){
  const calbayogAsset = 'https://calbayogjournal.com/assets/uploads/2017/Sep/09122017_1648020000001.jpg';
  const addressInfo = 'Room 305, 3rd floor,  Virsco home depot,  888 bldg.  Rosales blvd.,  Calbayog City.';
  const landmarkInfo = 'in front of Legislative hall,  beside of GSP - Girl scout building';
  const mapInfo = 'https://www.google.com/maps/@12.067563,124.5949671,3a,75y,43.97h,81.53t/data=!3m6!1e1!3m4!1sQDbPRZ-qIEOLT1zbE5CZJA!2e0!7i13312!8i6656';
   return <Branches title='TACLOBAN CITY BRANCH' photo={calbayogAsset} address={addressInfo} landmark={landmarkInfo} maplink={mapInfo} info={fakeInfo}/>;
}

function palawanBrances(){
  const palawanAsset = 'https://assets2.rappler.com/2021/01/Cebu-city-skyline-may-10-2018-1622443368874-546.jpg';
  const addressInfo = '3rd floor, Yusay incorporated building,Lacao st. puerto princesa city, palawan';
  const landmarkInfo = 'Back of 123convenience store & silvertown building near at chowking & jollibee Rizal.';
  const mapInfo = 'https://www.google.com/maps/@9.740458,118.7407115,3a,75y,274.38h,111.33t/data=!3m6!1e1!3m4!1sLiMp3oLY74XMAvrPRxC7vw!2e0!7i13312!8i665';
   return <Branches title='PUERTO PRINCESA CITY PALAWAN BRANCH' photo={palawanAsset} address={addressInfo} landmark={landmarkInfo} maplink={mapInfo} info={fakeInfo}/>;
}

function butuanBrances(){
  const butuanAsset = 'https://i2.wp.com/www.cdodev.com/wp-content/uploads/2020/03/86493806_190260235664556_6278073100948996096_o.jpg?fit=960%2C540';
  const addressInfo = '3RD FlOOR . , RAMCOR BUILDING P. BURGOS ST. , BUTUAN CITY';
  const landmarkInfo = 'BESIDE SANTOS. TIU BLDG. AND ABOVE ROSE BAKESHOP';
  const mapInfo = 'https://www.google.com/maps/@9.740458,118.7407115,3a,75y,274.38h,111.33t/data=!3m6!1e1!3m4!1sLiMp3oLY74XMAvrPRxC7vw!2e0!7i13312!8i665';
   return <Branches title='BUTUAN CITY BRANCH' photo={butuanAsset} address={addressInfo} landmark={landmarkInfo} maplink={mapInfo} info={fakeInfo}/>;
}


export default App;
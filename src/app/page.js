import Navbar from "./Components/Navbar/Navbar";
import BookingApp from "./Components/Hero/Hero";
import Populardestinations from "./Components/PopularDestination/Populardestination";
import styles from "./globals.css";
import Footer from "./Components/Footer/footer";
import { Link } from "react-router-dom";


export default function home(){
    return (
        <div>
            <div>
                <div>
                    <Navbar/>
                </div>
                <div>
                    <BookingApp/>
                </div>
                <div>
                    <Populardestinations/>
                </div>
                
                <div>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}
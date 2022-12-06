import "../App.css"
import "./Listing.css"

export default function Listing(){
    return (
        <div class="listing">
            <h2>123 Green Street</h2>
            <img src="https://www.bhg.com/thmb/0Fg0imFSA6HVZMS2DFWPvjbYDoQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg"></img>
            <div class="listing_info">
                <ul>$2200 per month</ul>
                <ul>2 bed</ul>
                <ul>2 bath</ul>
                <ul>10000 sqft.</ul>
                <ul>House</ul>
                <ul><a class="more_link">See more..</a></ul>
            </div>
        </div>
    );
}

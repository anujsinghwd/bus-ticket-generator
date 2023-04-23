import React from 'react';

const logoImg = `https://raw.githubusercontent.com/anujsinghwd/banjarey-images/main/0001-3352367735_20210624_123322_0000-removebg-preview.png`;

export default function Ticket() {
    return (
        <section id='tktContainer'>
            <div className="ticketMainContainer">
                <div className="tktHeader">
                    <div className='logoImage'>
                        <img src={logoImg} />
                    </div>
                    <div>
                        Banjarey Bus Ticket
                    </div>
                </div>

                <div className="location_date_info">
                    <div className="from heading_text">
                        <h4>FROM</h4>
                        <h3>ahemedabad</h3>
                    </div>
                    <div className="to heading_text">
                        <h4>TO</h4>
                        <h3>ahemedabad</h3>
                    </div>
                    <div className="date_info heading_text">
                        <h4>DATE OF JOURNEY</h4>
                        <h3>13-04-2023</h3>
                    </div>

                    <div className="seat_info heading_text">
                        <h4>SEAT NO</h4>
                        <h3>20</h3>
                    </div>
                </div>

                <div className="time_status_info">
                    <div className="reporting_time heading_text">
                        <h4>REPORTING TIME</h4>
                        <h3>10:10 PM</h3>
                    </div>
                    <div className="departure_time heading_text">
                        <h4>DEPARTURE TIME</h4>
                        <h3>9:30 AM</h3>
                    </div>
                    <div className="status_info heading_text">
                        <h4>STATUS</h4>
                        <h3>BOOKED</h3>
                    </div>
                    <div className="ticket_id_info heading_text">
                        <h4>TICKET ID</h4>
                        <h3>BTP04042023345</h3>
                    </div>
                </div>

                <div className="general_info">
                    <div className="name heading_text">
                        <h4>PASSENGER NAME</h4>
                        <h3>Anuj Singh</h3>
                    </div>
                    <div className="tkt_pnr heading_text">
                        <h4>TICKET PNR</h4>
                        <h3>3245235235</h3>
                    </div>
                    <div className="fare_info heading_text">
                        <h4>TOTAL FARE</h4>
                        <h3>2000</h3>
                    </div>
                </div>

                <div className="address_info">
                    <div className="boarding_point">
                        <h4>BOARDING POINT ADDRESS</h4>
                        <h3>111, SUMERU COMPLEX, HOTEL NEELKANTH INN, PALDI, DELHI</h3>
                    </div>
                    <div className="bus_type">
                        <h4>BUS TYPE</h4>
                        <h3>Ashok leyland 2x1(41)NAC Seater-Sleep</h3>
                    </div>
                </div>

                <div className="contact_info">
                    <div className="contact_no heading_text">
                        <h4>Shree Pasrhwanath Travels(Delhi)</h4>
                        <h3>8373829123, 9928263723</h3>
                    </div>
                </div>

            </div>
            <div className="footer_info">
                <div className="info">
                    <h3>** Always carry ticket printout and your ID proof while travelling</h3>
                    <h5>** In case of Bus cancellation, do not cancel the ticket yourself. Contact us at banjareytravelpartner.com and we will Issue a refund.</h5>
                </div>
            </div>
        </section>
    )
}

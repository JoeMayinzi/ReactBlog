import React from 'react';
import datas from './servicesData/data';
console.log(datas)

function Services(props) {
    return (
        <section>
            <div className='services-hero d-flex align-items-center justify-content-center'>
                <h2>Nos services</h2>
            </div>
            <div className='container service-container mt-5'>
                <div className="grid">
                    {datas.map(data => <div class="card" style={{width : "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">{data.serviceName}</h5>
                            <p className="card-text">{data.description}</p>
                        </div>
                    </div>)}
                </div>
            </div>
        </section>
    );
}

export default Services;
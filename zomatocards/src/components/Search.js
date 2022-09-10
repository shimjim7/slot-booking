import React, { useEffect, useState } from 'react'
import Fooddata from './FoodData'
import "./style.css"
import Form from 'react-bootstrap/Form'
import Cards from './Cards'
import Set from './Set'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Search = () => {

    const [fdata, setFdata] = useState(Fooddata);
    const [copydata, setCopyData] = useState([]);

    const chanegData = (e) => {
        let getchangedata = e.toLowerCase();

        if (getchangedata == "") {
            setCopyData(fdata);
        } else {
            let storedata = copydata.filter((ele, k) => {
                return ele.rname.toLowerCase().match(getchangedata);
            });

            setCopyData(storedata)
        }
    }


    useEffect(() => {

        setTimeout(() => {
            setCopyData(Fooddata);
        }, 3000);

    }, [])

    return (
        <>

        
      <Navbar bg="light" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
            
              alt=""
              src="https://drive.google.com/uc?export=view&id=11YIhfZHQQKpS7bf7Fa9ogerKXdvJzh31"
              width="30"
              
              className="d-inline-block align-top"

            />{' '}
            Celestial Biscuit IGDTUW
          </Navbar.Brand>
        </Container>
      </Navbar>

            <div className="container d-flex justify-content-between align-items-center">
               
                <h2 style={{ color: "#1b1464", cursor: "pointer" }} className="mt-3">Search Filter App</h2>
            </div>


            <Form className='d-flex justify-content-center align-items-center mt-3'>
                <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">

                    <Form.Control type="text"
                        onChange={(e) => chanegData(e.target.value)}
                        placeholder="Search Venue" />
                </Form.Group>
                <button className='btn text-light col-lg-1' style={{ background: "#24014E" }}>Submit</button>
            </Form>

            


            <section className='iteam_section mt-4 container'>
                <h2 className='px-4' style={{ fontWeight: 400 }}>Venues available</h2>

                <div className="row mt-2 d-flex justify-content-around align-items-center">
                    {copydata && copydata.length ? <Cards data={copydata} /> : <Set  sdata={fdata}/>}
                </div>
            </section>
            
        </>
    )
}

export default Search
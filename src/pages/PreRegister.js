import React, {useState} from 'react';
import './PreRegister.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Modal, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Thank you !
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <img src={props.photo} alt="" class="img-fluid"/> */}
          <h4>Demo Message</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
            <Link to='/home'>
                <Button onClick={props.onHide}>Close</Button>
            </Link>
          
        </Modal.Footer>
      </Modal>
    );
  }

const PreRegister = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
     <>

        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow([false, ])}
        />  
        <div class="reg-style">

            <div class="reg-container">
                <form method="POST" class="appointment-form" id="appointment-form">
                    <h2>Student Pre Register</h2>
                    <div style={{height: 50}}>

                    </div>
                    <h3>Information</h3>
                    <div class="form-group-1">
                        <input type="text" name="name" id="name" placeholder="First Name" required />
                        <input type="text" name="name" id="name" placeholder="Last Name" required />
                        <input type="text" name="name" id="name" placeholder="Suffix" required />
                        <input type="email" name="email" id="email" placeholder="Email" required />
                        <input type="text" name="name" id="name" placeholder="Address" required />
                        <form className='date-picker' noValidate>
                        <TextField
                            id="date"
                            label="Birthday"
                            type="date"
                            defaultValue="2017-05-24"
                            className='date-text'
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        </form>
                        <input type="number" name="phone_number" id="phone_number" placeholder="Contact Number" required />
                        <h3>
                            choose your branch
                        </h3>
                        <div class="select-list">
                            <select name="branch" id="branch">
                                <option slected value="">Cebu</option>
                                <option value="society">Tacloban</option>
                                <option value="language">Calbayog</option>
                                <option value="language">Bohol</option>
                                <option value="language">Palawan</option>
                                <option value="language">Butuan</option>
                            </select>
                        </div>
                        <h3>Setup your Account</h3>
                        <input type="text" name="name" id="name" placeholder="username" required />
                        <input type="password" name="name" id="name" placeholder="password" required />
                        <input type="password" name="name" id="name" placeholder="re-type password" required />
                    </div>
                    
                   
                    <div class="form-submit">
                        
                        <input onClick={() => setModalShow(true)} type="submit" name="submit" id="submit" class="submit" value="Pre Register Now" />
                    </div>
                </form>
            </div>

            </div>
     </>
    )
}

export default PreRegister

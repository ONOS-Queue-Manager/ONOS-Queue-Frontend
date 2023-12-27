import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/insertqueue.css';
import swal from 'sweetalert';
import {
  Container,
  Row,
  Col,
  Form,
  Grid,
  Button,
  InputGroup,
  Modal,
} from 'react-bootstrap';


const InsertQueue = () => {
  const [validated, setValidated] = useState(false);
  const [fName, setFname] = useState('');
  const [id, setID] = useState('');
  const [tableID, setTableID] = useState('');
  const [device, setDevice] = useState('');
  const [deviceType, setDeviceType] = useState('');
  const [operational, setOperational] = useState('');

  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
    } else {
      setValidated(false);

      e.preventDefault();

      axios
        .post('https://car-care-360.onrender.com/api/authentication/register', {
          fName,
          id,
          tableID,
          device,
          deviceType,
          operational,
         
        })
        .then(() => {
          swal('Send Request!', '', 'success'); // Show success message
          setFname('');
          setID('');
          setTableID('');
          setDevice('');
          setDeviceType('');
          setOperational('');
          navigate('/queueManage');
        })
        .catch((error) => {
          swal('Request Faild!', '', 'error'); // Show success message
          setFname('');
          setID('');
          setTableID('');
          setDevice('');
          setDeviceType('');
          setOperational('');
        });
    }
  };



  return (
    <Container>
      <div className='register__customer__container '>
         
          {/* Right side with form components */}
          <Col item xs={12} md={6}>
            {/* Form */}
            <div className='register__customer__form'>
            <h2 data-testid="cypress-title" className='register__customer__heading'>
                Insert Queue
              </h2>
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className='text-left'
              >
                <Row className=' pb-2'>
                  <Form.Group as={Col} controlId='text' item xs={12} md={6}>
                    <Form.Label className='d-flex justify-content-start'>
                      Flow Name
                    </Form.Label>

                    <Form.Control
                      type='text'
                      placeholder='Enter Flow Name'
                      maxLength={25}
                      required
                      value={fName}
                      onChange={(e) => setFname(e.target.value)}
                    />
                    <Form.Control.Feedback type='invalid'>
                      *Please enter flow name
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    controlId='formGridPassword'
                    item
                    xs={12}
                    md={6}
                  >
                    <Form.Label className='d-flex justify-content-start'>
                      ID
                    </Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter ID'
                      maxLength={25}
                      required
                      value={id}
                      onChange={(e) => setID(e.target.value)}
                    />
                    <Form.Control.Feedback type='invalid'>
                      *Please enter your correct id
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className=' pb-2'>
                  <Form.Group
                    as={Col}
                    controlId='formGridAddress'
                    item
                    xs={12}
                    md={6}
                  >
                    <Form.Label className='d-flex justify-content-start'>
                      Table ID
                    </Form.Label>

                    <Form.Control
                      type='text'
                      placeholder='Enter Table ID'
                      maxLength={20}
                      required
                      value={tableID}
                      onChange={(e) => setTableID(e.target.value)}
                    />
                    <Form.Control.Feedback type='invalid'>
                      *Please enter valiad table id
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    controlId='formGridAddress'
                    item
                    xs={12}
                    md={6}
                  >
                    <Form.Label className='d-flex justify-content-start'>
                      Device
                    </Form.Label>

                    <Form.Control
                      type='text'
                      placeholder='Enter Device'
                      maxLength={20}
                      required
                      value={device}
                      onChange={(e) => setDevice(e.target.value)}
                    />
                    <Form.Control.Feedback type='invalid'>
                      *Please enter device
                    </Form.Control.Feedback>
                  </Form.Group>


                </Row>
                <Row className=' pb-2'>
                <Form.Group
                    as={Col}
                    controlId='formGridAddress'
                    item
                    xs={12}
                    md={6}
                  >
                    <Form.Label className='d-flex justify-content-start'>
                      Device Type
                    </Form.Label>

                    <Form.Control
                      type='text'
                      placeholder='Enter Device Type'
                      maxLength={20}
                      required
                      value={deviceType}
                      onChange={(e) => setDeviceType(e.target.value)}
                    />
                    <Form.Control.Feedback type='invalid'>
                      *Please enter device
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                </Row>

                <Row className=' pb-2'>
                <Form.Group
                    as={Col}
                    controlId='formGridAddress'
                    item
                    xs={12}
                    md={6}
                  >
                    <Form.Label className='d-flex justify-content-start'>
                      Operational
                    </Form.Label>

                    <Form.Control
                      type='text'
                      placeholder='Enter Operational Property '
                      maxLength={20}
                      required
                      value={operational}
                      onChange={(e) => setOperational(e.target.value)}
                    />
                    <Form.Control.Feedback type='invalid'>
                      *Please enter device
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <div class='container d-flex justify-content-center'>
                  <Button
                    variant='primary'
                    type='submit'
                    className=' mt-2 justify-content-center'
                  >
                    Send Request
                  </Button>
                </div>
                {/* move to login */}
                <div className='already__have__an__account'>
                  <p>
                    Go to Flow Table <Link to='/queueManage'>Go back</Link>
                  </p>
                </div>
              </Form>
            </div>
          </Col>
      </div>
    </Container>
  );
};

export default InsertQueue;
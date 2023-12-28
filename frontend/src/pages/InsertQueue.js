import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/insertqueue.css';
import swal from 'sweetalert';
import { v4 as uuidv4 } from 'uuid';
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
  const [id, setID] = useState(uuidv4());
  const [queueId, setqueueId] = useState('');
  const [maxRate, setmaxRate] = useState();
  const [minRate, setminRate] = useState();
  const [burst, setburst] = useState();
  const [priority, setpriority] = useState();


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
          id,
          queueId,
          maxRate,
          minRate,
          burst,
          priority,
         
        })
        .then(() => {
          swal('Send Request!', '', 'success'); // Show success message
          setID(uuidv4());
          setqueueId('');
          setmaxRate('');
          setminRate('');
          setburst('');
          setpriority('');
          navigate('/queueManage');
        })
        .catch((error) => {
          swal('Request Faild!', '', 'error'); // Show success message
          setID(uuidv4());
          setqueueId('');
          setmaxRate('');
          setminRate('');
          setburst('');
          setpriority('');
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
                      Queue ID
                    </Form.Label>

                    <Form.Control
                      type='text'
                      placeholder='Enter Queue ID'
                      maxLength={25}
                      required
                      value={queueId}
                      onChange={(e) => setqueueId(e.target.value)}
                    />
                    <Form.Control.Feedback type='invalid'>
                      *Please enter valid queue id
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
                      Max Rate
                    </Form.Label>
                    <Form.Control
                      type='number'
                      placeholder='Enter Max Rate'
                      maxLength={25}
                      required
                      value={maxRate}
                      onChange={(e) => setmaxRate(e.target.value)}
                    />
                    <Form.Control.Feedback type='invalid'>
                      *Please enter your correct max rate
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
                      Min Rate
                    </Form.Label>

                    <Form.Control
                      type='number'
                      placeholder='Enter Min Rate'
                      maxLength={20}
                      required
                      value={minRate}
                      onChange={(e) => setminRate(e.target.value)}
                    />
                    <Form.Control.Feedback type='invalid'>
                      *Please enter valiad min rate
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
                      Burst
                    </Form.Label>

                    <Form.Control
                      type='number'
                      placeholder='Enter Burst'
                      maxLength={20}
                      required
                      value={burst}
                      onChange={(e) => setburst(e.target.value)}
                    />
                    <Form.Control.Feedback type='invalid'>
                      *Please enter burst
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
                    Priority
                    </Form.Label>

                    <Form.Control
                      type='number'
                      placeholder='Enter Priority'
                      maxLength={20}
                      required
                      value={priority}
                      onChange={(e) => setpriority(e.target.value)}
                    />
                    <Form.Control.Feedback type='invalid'>
                      *Please enter priority
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
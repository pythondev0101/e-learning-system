import React from 'react'
import {Card, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

const BranchCard = ({branchName, picture}) => {
    return (
        <Card style={{ width: '18rem', backgroundColor: 'rgb(41, 120, 181)' }}>
            <Card.Img variant="top" src={picture} style={{opacity: 0.8}}/>
            <Card.Body>
                <Card.Title className='font-face' style={{
                    fontWeight: 'bold',
                    color: 'white'
                }}
                >{branchName}</Card.Title>
                <Card.Text>
                    <p className='font-face'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Voluptates nemo nobis consectetur laudantium commodi tempore, 
                    </p>
                </Card.Text>
                <Button style={{
                    color: 'black',
                    backgroundColor: 'white'
                }}
                >Details</Button>
            </Card.Body>
        </Card>
    )
}

BranchCard.prototype = {
    branchName: PropTypes.string,
    picture: PropTypes.any
}

export default BranchCard

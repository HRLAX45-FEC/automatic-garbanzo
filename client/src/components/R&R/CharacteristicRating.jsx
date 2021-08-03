import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const CharacteristicRating = ({char}) => {
  switch(char) {
  case 'Size':
    return(
      <div key='inline-recommend'>
        <br/>
        <Form.Label>{char}</Form.Label>
        <br/>
        <Form.Check inline label='Too small' name='group2' type='radio' id='size-1' />
        <Form.Check inline label='&#189; size too small' name='group2' type='radio' id='size-2' />
        <Form.Check inline label='Perfect' name='group2' type='radio' id='size-3' />
        <Form.Check inline label='&#189; size too big' name='group2' type='radio' id='size-4' />
        <Form.Check inline label='Too big' name='group2' type='radio' id='size-5' />
      </div>
    );
  case 'Width':
    return(
      <div key='inline-recommend'>
        <br/>
        <Form.Label>{char}</Form.Label>
        <br/>
        <Form.Check inline label='Too narrow' name='group3' type='radio' id='width-1' />
        <Form.Check inline label='Slightly narrow' name='group3' type='radio' id='width-2' />
        <Form.Check inline label='Perfect' name='group3' type='radio' id='width-3' />
        <Form.Check inline label='Slightly wide' name='group3' type='radio' id='width-4' />
        <Form.Check inline label='Too wide' name='group3' type='radio' id='width-5' />
      </div>
    );
  case 'Comfort':
    return(
      <div key='inline-recommend'>
        <br/>
        <Form.Label>{char}</Form.Label>
        <br/>
        <Form.Check inline label='Uncomfortable' name='group4' type='radio' id='comfort-1' />
        <Form.Check inline label='Slightly uncomfortable' name='group4' type='radio' id='comfort-2' />
        <Form.Check inline label='Average' name='group4' type='radio' id='comfort-3' />
        <Form.Check inline label='Comfortable' name='group4' type='radio' id='comfort-4' />
        <Form.Check inline label='Perfect' name='group4' type='radio' id='comfort-5' />
      </div>
    );
  case 'Quality':
    return(
      <div key='inline-recommend'>
        <br/>
        <Form.Label>{char}</Form.Label>
        <br/>
        <Form.Check inline label='Poor' name='group5' type='radio' id='quality-1' />
        <Form.Check inline label='Below average' name='group5' type='radio' id='quality-2' />
        <Form.Check inline label='Average' name='group5' type='radio' id='quality-3' />
        <Form.Check inline label='Above average' name='group5' type='radio' id='quality-4' />
        <Form.Check inline label='Perfect' name='group5' type='radio' id='quality-5' />
      </div>
    );
  case 'Length':
    return(
      <div key='inline-recommend'>
        <br/>
        <Form.Label>{char}</Form.Label>
        <br/>
        <Form.Check inline label='Runs short' name='group6' type='radio' id='length-1' />
        <Form.Check inline label='Runs slightly short' name='group6' type='radio' id='length-2' />
        <Form.Check inline label='Perfect' name='group6' type='radio' id='length-3' />
        <Form.Check inline label='Runs slightly long' name='group6' type='radio' id='length-4' />
        <Form.Check inline label='Runs long' name='group6' type='radio' id='length-5' />
     </div>
    );
  case 'Fit':
    return(
      <div key='inline-recommend'>
        <br/>
        <Form.Label>{char}</Form.Label>
        <br/>
        <Form.Check inline label='Runs tight' name='group7' type='radio' id='fit-1' />
        <Form.Check inline label='Runs slightly tight' name='group7' type='radio' id='fit-2' />
        <Form.Check inline label='Perfect' name='group7' type='radio' id='fit-3' />
        <Form.Check inline label='Runs slightly big' name='group7' type='radio' id='fit-4' />
        <Form.Check inline label='Runs big' name='group7' type='radio' id='fit-5' />
      </div>
    );
  }
};

export default CharacteristicRating;
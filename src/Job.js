import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Badge, Button, Collapse } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';

function Job({ job }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className='mb-3'>
      <Card.Body>
        <div className='d-flex justify-content-between'>
          <div>
            <Card.Title>
              {job.title} -{' '}
              <span className='text-muted font-weight-light'>
                {job.company}
              </span>
            </Card.Title>
            <Card.Subtitle className='text-muted mb-2'>
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <h6>
              <Badge variant='secondary' className='mr-2'>
                {job.type}
              </Badge>
              <Badge variant='secondary'>{job.location}</Badge>
            </h6>
            <div
              style={{
                fontSize: '1rem',
                fontWeight: '400',
                wordBreak: 'break-all',
              }}
            >
              <ReactMarkdown source={job.how_to_apply}></ReactMarkdown>
            </div>
          </div>
          <img
            className='d-none d-md-block ml-4'
            height='50'
            src={job.company_logo}
            alt={job.company}
          />
        </div>
        <Card.Text>
          <Button
            variant='primary'
            onClick={() => setOpen((isOpen) => !isOpen)}
          >
            {open ? 'Hide Details' : 'View Details'}
          </Button>
        </Card.Text>
        <Collapse in={open}>
          <div
            className='mt-4 font-weight-normal'
            style={{ fontSize: '0.9rem' }}
          >
            <ReactMarkdown source={job.description} />
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}

Job.propTypes = {
  job: PropTypes.object.isRequired,
};

export default Job;

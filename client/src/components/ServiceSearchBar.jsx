import { Button } from 'react-bootstrap';

function ServiceSearchBar() {
  return (
    <div className="m-5">
      <input className="p-1 mt-5" type="text" placeholder="Search services..." />
      <Button variant="light p-2">search</Button>
    </div>
  );
}

export default ServiceSearchBar;

import Container from 'react-bootstrap/Container';
import PropTypes from 'prop-types';
import AboutUsTimeline from '../components/AboutUsTimeline';
import AboutUsWallOfFame from '../components/AboutUsWallOfFame';
import AboutUsCharity from '../components/AboutUsCharity';

export default function AboutUs(props) {
  const { famous } = props;
  const { charity } = props;

  return (
    <div className="d-flex pt-5 w-100">
      <Container>
        <div>
          <AboutUsTimeline />
          <AboutUsWallOfFame famous={famous} />
          <AboutUsCharity charity={charity} />
        </div>
      </Container>
    </div>
  );
}

AboutUs.propTypes = {
  famous: PropTypes.string.isRequired,
};

AboutUs.propTypes = {
  charity: PropTypes.string.isRequired,
};

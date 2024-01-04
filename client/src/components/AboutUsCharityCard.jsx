import './AboutUsCard.css';

export default function AboutUsCharityCard() {
  return (
    <div
      className="flip-card"
      style={{
        backgroundColor: 'transparent',
        width: '300px',
        height: '300px',
        perspective: '1000px',
      }}
    >
      <div
        className="flip-card-inner text-center"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transition: 'transform 0.8s',
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          className="flip-card-front"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            webkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
          }}
        >
          <img src="https://picsum.photos/300" alt="Avatar" />
        </div>
        <div
          className="flip-card-back"
          style={{
            position: 'relative',
            paddingTop: '100px',
            width: '100%',
            height: '100%',
            webkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            backgroundColor: 'darkblue',
            color: 'white',
            transform: 'rotateY(180deg)',
          }}
        >
          <h1>Organization</h1>
          <p>Why do we support them</p>
        </div>
      </div>
    </div>
  );
}

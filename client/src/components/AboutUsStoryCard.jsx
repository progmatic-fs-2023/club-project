export default function AboutUsStoryCard() {
  return (
    <div className="flip-card bg-transparent">
      <div className="flip-card-inner position-relative w-100 h-100 text-center">
        <div className="flip-card-front w-100 h-100 position-absolute">
          <img src="https://picsum.photos/300" alt="Avatar" />
        </div>
        <div className="flip-card-back position-relative w-100 h-100 pt-5 text-white">
          <h1>Year</h1>
          <p>What happened</p>
        </div>
      </div>
    </div>
  );
}

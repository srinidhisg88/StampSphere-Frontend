import image from "../assets/images/Home/Shri Ram Janmbhoomi Temple.jpg"

const HeroSection = () => {
  return (
    <div>
      <div className="t py-20 px-4 text-center  text-custom-red">
       
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Discover, collect, and auction rare stamps
        </h2>
        <p className="text-lg mb-8">
          Explore the worlds largest marketplace for philatelic treasures
        </p>
        <img src={image}></img>
      </div>
    </div>
  );
}

export default HeroSection

  
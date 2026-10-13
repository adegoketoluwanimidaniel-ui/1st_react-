import laptop from "../assets/pages/laptop/laptop.png.jpeg";

const Body = () => {
  return (
    <div className="flex gap-100 bg-blue-200">
    <div className="bg-blue-200">
        <h1 className="text-3xl font-bold mb-4 px-3">Welcome to My Website</h1>
        <p className="text-lg mb-6 px-3">We build modern and responsive websites<br/> that help businesses grow.</p>
        <button className="bg-purple-400 rounded-2xl px-2 py-1.5 hover:bg-purple-500 mx-2">Get Started</button>
    </div>
    <div>
    <img src={laptop} alt="" className="w-80 h-auto"/>
    </div>
    </div>
  )
}

export default Body;
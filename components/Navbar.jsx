export default function Navbar() {
  return (
    <nav className="p-[20px] flex  items-center max-w-[600px] m-auto border-b-2 border-white o ">
      <h1 className="text-[#43aaed] font-bold text-2xl">ContentGen</h1>
      <div className="  ml-auto z-10">
        <div className="ml-16 no-underline space-x-3 text-[#1A8CD8] font-bold ">
          <a href="https://thelordzeus.vercel.app/" target="_blank">
            Developer
          </a>
        </div>
      </div>
    </nav>
  );
}

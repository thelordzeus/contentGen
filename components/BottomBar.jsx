export default function BottomBar() {
  return (
    <section className="block fixed  bottom-0 inset-x-0 z-50 shadow-lg text-white bg-black lg:w-2/5  w-11/12 md:w-3/4 m-auto pb-8">
      <div className=" flow-root">
        <div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center float-left">
            Clear
          </button>
        </div>
        <div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center  float-right">
            Add Post
          </button>
        </div>
      </div>
    </section>
  );
}

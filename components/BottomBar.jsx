import { Modal, Button } from "flowbite-react";
import { useState } from "react";
export default function BottomBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="block fixed  bottom-0 inset-x-0 z-50 shadow-lg text-white bg-black lg:w-2/5  w-11/12 md:w-3/4 m-auto pb-8">
      <div className=" flow-root">
        <div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center float-left">
            Clear
          </button>
        </div>
        <div>
          <button
            onClick={() => setOpen(true)}
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center  float-right"
          >
            Add Post
          </button>
          <Modal show={isOpen} onClose={() => setOpen(false)}>
            <Modal.Header>Generate new post</Modal.Header>
            <Modal.Body>
              <form class="space-y-6 " action="#">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Post Title
                  </label>
                  <input
                    type="string"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="What is life?"
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Create new post
                </button>
              </form>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </section>
  );
}

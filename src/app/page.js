"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import EmptyCard from "@/components/EmptyCard";
import Modal from "@/components/Modal";
import Link from "next/link";
import MyBeerCard from "@/components/MyBeerCard";
import LoadMore from "@/components/Atoms/LoadMore";
import AddNewBeer from "@/components/Molecules/AddNewBeer";

const getAllBeers = async (page) => {
  const baseUrl = "https://api.punkapi.com/v2";
  const res = await fetch(`${baseUrl}/beers?page=${page}&per_page=2`);
  return res.json();
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const [tab, setTab] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [mybeers, setMyBeers] = useState([]);
  const [mybeer, setMyBeer] = useState({
    name: "",
    description: "",
    tagline: "",
    image_url: "/default-beer-image.png",
  });
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMyBeer((prevBeer) => ({
      ...prevBeer,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setMyBeers([...mybeers, mybeer]);

    closeModal() //Close the modal
  };


  useEffect(() => {
    console.log(page);
    const loadMore = async () => {
      const newRows = await getAllBeers(page);
      setData([...data, ...newRows]);
    };
    loadMore();
  }, [page]);

  const updatePageNumber = (pageNumber) => {
      setPage(pageNumber);
  }

  return (
    <>
      <div className="container  mx-auto px-28  sm:grid-cols-1   mt-10">
        <div className="grid grid-cols-8 gap-4">
          <div class="col-span-1">
            <a
              href="#"
              onClick={() => setTab(1)}
              aria-current="page"
              className={classNames(
                tab === 1 ? "underline text-black " : " text-gray-500",
                "text-md px-4 py-2  font-medium  bg-white"
              )}
            >
              All Beers
            </a>
          </div>
          <div class="col-span-2">
            <a
              href="#"
              onClick={() => setTab(2)}
              className={classNames(
                tab === 2 ? " underline  text-black" : " text-gray-500",
                "px-4 py-2 text-md font-medium  bg-white"
              )}
            >
              My Beers
            </a>
          </div>
          {tab === 2 && (
            <AddNewBeer onClickddNewbeerBtn={openModal} />
          )}
        </div>
      </div>

      {tab === 1 ? (
        <>
          <div className="container grid gap-4  mx-auto px-28  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1  xl:grid-cols-2   mt-10">
            {data && data?.map((item) => <Card item={item} key={item.id} />)}
          </div>

          <LoadMore  onClickLoadMore={updatePageNumber} currentPage={page} />

      
        </>
      ) : (
        <>
          {/* <div className="container grid gap-4   mx-auto px-28  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2   mt-10"> */}

          {mybeers.length > 0 ? (
            mybeers?.map((item) => (
              // <Card item={item} />
              <MyBeerCard key={item.name} item={item} />
            ))
          ) : (

            <EmptyCard openModle={openModal} />
          )}

          {/* </div> */}
        </>
      )}

    
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <div className="px-6 py-6 lg:px-8">
          <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Add a new beer
          </h3>
          <form className="space-y-6" onSubmit={handleFormSubmit}>
            <div>
              <Image
                src={`/default-beer-image.png`}
                className="border mb-5"
                width={90}
                height={70}
              />

              <input
                onChange={handleInputChange}
                placeholder="Beer name*"
                type="text"
                name="name"
                id="beer"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>
            <div>
              <input
                onChange={handleInputChange}
                placeholder="Genre*"
                type="text"
                name="tagline"
                id="beer"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>

            <div>
              <textarea
                onChange={handleInputChange}
                defaultValue="Description*"
                placeholder="Description*"
                type="text"
                name="description"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required
              />
            </div>

            <div className="flex items-center p-6 space-x-2 border-gray-200 rounded-b dark:border-gray-600">
              <Link
                href={`#`}
                onClick={closeModal}
                className="ml-auto text-gray-500 bg-white  border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 "
              >
                {" "}
                Cancel{" "}
              </Link>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

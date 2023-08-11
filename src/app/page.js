"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Card from "@/components/Organisms/Card";
import EmptyCard from "@/components/Organisms/EmptyCard";
import Modal from "@/components/Organisms/Modal";
import Link from "next/link";
import MyBeerCard from "@/components/Organisms/MyBeerCard";
import LoadMore from "@/components/Atoms/LoadMore";
import AddNewBeer from "@/components/Molecules/AddNewBeer";
import TabSection from "@/components/Molecules/TabSection";
import { TAB } from "../../utils/constant";
import Loading from "@/components/Atoms/loading";
import toast from 'react-hot-toast';


const getAllBeers = async (page) => {
  const baseUrl = "https://api.punkapi.com/v2";
  const res = await fetch(`${baseUrl}/beers?page=${page}&per_page=10`);
  return res.json();
};


export default function Home() {
  const [tab, setTab] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [mybeers, setMyBeers] = useState([]);
  const [mybeer, setMyBeer] = useState({
    name: "",
    description: "",
    tagline: "",
    image_url: "/default-beer-image.png",
    id: new Date().valueOf()
  });
  const [tabs, setTabs] = useState([
    { name: "All Beers", key:1, current: true},
    { name: "My Beers", key:2,  current: false},
 
   ]);

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
    closeModal(); //Close the modal
    toast.success("You have successfully added a new beer.")
  };

  useEffect(() => {
    setLoading(true)
    const loadMore = async () => {
      const newRows = await getAllBeers(page);
      setData([...data, ...newRows]);
      setLoading(false)
    };
    loadMore();
  }, [page]);

  const updatePageNumber = (pageNumber) => {
    setPage(pageNumber);
  };
  
  const handleTabClick = (key) => {
      const updatedTabs = tabs.map((item) => {
        if(item.key === key) {
          item.current = true;
        }else{
          item.current= false
        } 
        return item
      })
      setTabs(updatedTabs);
      setTab(key)
  }

  

  return (
    <>

      <div className="container flex-col mx-auto   sm:grid-cols-1   mt-5">
        <div className="grid grid-cols-8 gap-1">
          {
          tabs.map((tab) => (
            <TabSection key={tab.id} item={tab} onTabSectionClick={handleTabClick} />
          ))
        }
        {tab === TAB.TWO && <AddNewBeer onClickddNewbeerBtn={openModal} />}
        </div>
      </div>



      {tab === TAB.ONE ? ( //Load All beers tab section and data 
        <>
        <div className="flex flex-center justify-center container mx-auto">
          <div className="grid gap-4 mx-auto sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2   mt-5">
            {data && data?.map((item) => <Card item={item} key={item.id} />)}
          </div>
          </div>

          {loading? 
          (<Loading/>):
          (<LoadMore onClickLoadMore={updatePageNumber} currentPage={page} />)
        }
          
        </>
      ) : ( //Load My beer tab section and data
        <>
          {mybeers.length > 0 ? (
            mybeers?.map((item) => <MyBeerCard key={item.id} item={item} />)
          ) : (
            <EmptyCard openModle={openModal} />
          )}
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
              <input type="hidden" name="id" value={new Date().valueOf()} />
              <input
                onChange={handleInputChange}
                placeholder="Beer name*"
                type="text"
                name="name"
                id="beer"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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

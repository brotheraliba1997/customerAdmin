import React, { useEffect, useState } from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import cardImage from "../images/table.png";
import Modal from "./modal";

function TableHead() {
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [cart, setCart] = useState([]);

  const array = [1, 2, 3];

  useEffect(() => {
    setCart([...array]);
  }, []);

  return (
    <>
    <div className="min-w-[800px] ">

   
      <div className="grid grid-cols-7 border  bg-[#57BC90] border-[#57BC90] border-opacity-50  bg-opacity-50 rounded-md  justify-center   items-center p-2 shadow-lg  ">
        <div></div>
        <div className="flex items-center justify-start ">
          <p className="text-[#015249] text-[16px] font-[600]">Customer ID</p>
          <div>
            <div className="text-[#015249] text-[12px] h-[6px]">
              <IoMdArrowDropup />
            </div>
            <div className="text-[#015249] text-[12px] h-[10px]">
              <IoMdArrowDropdown />{" "}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-start ">
          <p className="text-[#015249] text-[16px] font-[600]">Customer Name</p>
          <div>
            <div className="text-[#015249] text-[12px] h-[6px]">
              <IoMdArrowDropup />
            </div>
            <div className="text-[#015249] text-[12px] h-[10px]">
              <IoMdArrowDropdown />{" "}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-start ">
          <p className="text-[#015249] text-[16px] font-[600]">Email</p>
          <div>
            <div className="text-[#015249] text-[12px] h-[6px]">
              <IoMdArrowDropup />
            </div>
            <div className="text-[#015249] text-[12px] h-[10px]">
              <IoMdArrowDropdown />{" "}
            </div>
          </div>
        </div>
      </div>

      {cart.map((x) => (
        <>
          <div className="grid grid-cols-5 border border-[#FFFFFF] bg-[#FFFFFF]  justify-center gap-8  items-center p-2 shadow-lg my-5 rounded-md ">
            <div className="flex justify-between  items-center truncate overflow-hidden ">
              <div className="">
                <img
                  src={cardImage}
                  className="w-[60px] h-[60px] object-contain"
                />
              </div>
            </div>

            <div className="flex justify-between  items-center truncate overflow-hidden ">
              <p>001</p>
            </div>

            {/* scond */}
            <div className="truncate overflow-hidden ">
              <p className="text-[#57BC90]">Jordan Josepskaa</p>
            </div>
            {/* third */}
            <div className="truncate overflow-hidden">
              <p>randomemail@gmail.com</p>
            </div>

            <div className="truncate overflow-hidden">
              <p>randomemail@gmail.com</p>
            </div>

            <div className="truncate overflow-hidden">
              <p>randomemail@gmail.com</p>
            </div>
            {/* four */}
            <div className="flex gap-4">
              <div
                className="bg-[#39B54A] bg-opacity-50 rounded-md text-[#008212] text-[16px] w-[100px] p-2 text-center font-[500]"
                onClick={() => setModalEdit(true)}
              >
                Edit
              </div>
              <div
                className="bg-[#D80000] bg-opacity-50 rounded-md text-[#D80000] text-[16px] w-[100px] p-2 text-center font-[500]"
                onClick={() => setModalDelete(true)}
              >
                Delete
              </div>
            </div>
          </div>
        </>
      ))}
       </div>

      <Modal setModalEdit={setModalEdit} modalEdit={modalEdit} />
      <Modal setModalDelete={setModalDelete} modalDelete={modalDelete} />
    </>
  );
}

export default TableHead;

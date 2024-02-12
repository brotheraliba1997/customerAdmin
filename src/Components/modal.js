import React from "react";
import "../App.css";
import Container from "./Conatiner";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

function Modal({
  setModalDelete,
  setModalEdit,
  modalEdit,
  modalDelete,
  setModal,
  modal,
}) {
  return (
    <>
      {modalDelete && (
        <div
          className="bg-black bg-opacity-25 absolute top-0 left-0 h-full w-full flex justify-center items-center"
          onClick={() => setModalDelete(false)}
        >
          <div
            className="bg-white h-[350px] w-[350px] max-w-[90%] rounded-md  px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end pt-2" onClick={() => setModalDelete(false)}>
            <RxCross1 />
            </div>
            <div className="flex flex-col justify-center items-center mt-[40px]">
              <div>
                <RiDeleteBin6Line className="text-[80px] text-[#D80000]" />
              </div>
              <p className="text-[20px] font-[700]">Are you sure?</p>
              <p className="text-[14px] font-[600] text-center">
                Do you really want to delete this customer? This process can not
                be undone.
              </p>

              <div className="flex gap-4 justify-between items-center mt-7">
                <div className="bg-[#A5A5AF] rounded-md text-white text-[16px] md:w-[150px] w-[120px] p-2 text-center font-[500] ">
                  Edit
                </div>
                <div className="bg-[#D80000]  rounded-md text-white text-[16px] md:w-[150px] w-[120px] p-2 text-center font-[500]">
                  Delete
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {modalEdit && (
        <div
          className="bg-black bg-opacity-25 absolute top-0 left-0 h-full w-full flex justify-center items-center"
          onClick={() => setModalEdit(false)}
        >
          <div
            className="bg-[#FBFCFC] h-[380px] w-[380px] max-w-[90%] rounded-[20px]   "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 modalBackground_head ">
              <div
                className="text-right text-white font-[600] flex justify-end pt-2"
                onClick={() => setModalEdit(false)}
              >
               <RxCross1 />
              </div>
              <p className="text-[22px] text-center  text-white mt-4">
                Edit Customer
              </p>
            </div>

            <Container>
              <div className="my-[40px]">
                <div className="flex  my-4 justify-center items-center ">
                  <input
                    className="border border-gray-200 bg-gray-200 w-full rounded-md p-2 outline-none"
                    placeholder="Edit Name"
                  />
                </div>
                <div className="flex  my-4 justify-center items-center ">
                  <input className="border border-gray-200 bg-gray-200 w-full rounded-md p-2 outline-none" />
                </div>

                <div className="my-4">
                  <input type="file" className="hidden" id="fileInput" />
                  <label
                    htmlFor="fileInput"
                    className="cursor-pointer text-[#57BC90] py-2 px-4 rounded "
                  >
                    Upload Photo
                  </label>
                </div>

                <div className="border my-4 bg-gradient-to-r from-[#57BC90] to-teal-900 rounded-md flex justify-center gap-6 items-center p-3 shadow-lg  ">
                  <p className="text-[14px] text-white font-[500]">
                    EDIT CUSTOMER
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </div>
      )}

      {modal && (
        <div
          className="bg-black bg-opacity-25 absolute top-0 left-0 h-full w-full flex justify-center items-center"
          onClick={() => setModal(false)}
        >
          <div
            className="bg-[#FBFCFC] h-[380px] w-[380px] max-w-[90%] rounded-[20px]   "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 modalBackground_head ">
              <div
                className="text-right text-white font-[600] flex justify-end pt-2"
                onClick={() => setModal(false)}
              >
               <RxCross1 />
              </div>
              <p className="text-[22px] text-center  text-white mt-4">
                Add New Customer
              </p>
            </div>

            <Container>
              <div className="my-[40px]">
                <div className="flex  my-4 justify-center items-center ">
                  <input
                    className="border border-gray-200 bg-gray-200 w-full rounded-md p-2 outline-none"
                    placeholder="Customer Name"
                  />
                </div>
                <div className="flex  my-4 justify-center items-center ">
                  <input className="border border-gray-200 bg-gray-200 w-full rounded-md p-2 outline-none" />
                </div>

                <div className="my-4">
                  <input type="file" className="hidden" id="fileInput" />
                  <label
                    htmlFor="fileInput"
                    className="cursor-pointer text-[#57BC90] py-2 px-4 rounded "
                  >
                    Upload Photo
                  </label>
                </div>

                <div className="border my-4 bg-gradient-to-r from-[#57BC90] to-teal-900 rounded-md flex justify-center gap-6 items-center p-3 shadow-lg  ">
                  <p className="text-[14px] text-white font-[500]">
                    ADD CUSTOMER
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;

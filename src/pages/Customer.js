import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Container from "../Components/Conatiner";
import AddCoutomerButton from "../Components/AddCoutomerButton";
import TableHead from "../Components/TableHead";
import Modal from "../Components/modal";

function Customer() {
  const [modal, setModal] = useState(false);
  return (
    <>

    <Modal setModal={setModal}  modal={modal}/>
      

      <Container>
        <div className="pt-6 overflow-x-auto ">
          <div className="py-6 ">
            <AddCoutomerButton setModal={setModal} modal={modal} />
          </div>

          <TableHead />
        </div>
      </Container>
    </>
  );
}

export default Customer;

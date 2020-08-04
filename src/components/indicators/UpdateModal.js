import React, { useState } from "react";
import {
  Modal,
  ModalTitle,
  ModalContent,
  ModalActions,
  InputField,
  Button
} from "@dhis2/ui";
import { IndicatorsList } from './IndicatorsList';

const UpdateModal = ({ originalName, handleClick }) => {
  const [name, setName] = useState(originalName);
  console.log(name);

  const handleInputChange = e => {
    setName(e.value);
    
  };

  return (
    <Modal>
      <ModalTitle>Update Interpretation</ModalTitle>
      <ModalContent>
        <InputField
          label="Update text"
          name="update-text"
          value={name}
          onChange={handleInputChange}
        />
      </ModalContent>
      <ModalActions>
        <Button primary type="button" onClick={() => handleClick(name)}>
          Update
        </Button>
      </ModalActions>
    </Modal>
  );
};

export default UpdateModal;

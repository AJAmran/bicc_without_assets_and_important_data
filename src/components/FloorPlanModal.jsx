/* eslint-disable react/prop-types */
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const FloorPlanModal = ({ isOpen, onClose, floorPlanImage }) => {
  return (
    <Modal open={isOpen} onClose={onClose} center classNames={{ modal: 'custom-modal' }} >
      <div className="p-6 bg-white rounded">
        <h2 className="mb-4 text-2xl font-bold">Floor Plan</h2>
        <img src={floorPlanImage} alt="bicc floor plan" className="w-full h-[450px]" />
      </div>
    </Modal>
  );
};

export default FloorPlanModal;

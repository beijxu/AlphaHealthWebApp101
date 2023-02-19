import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import BoyOutlinedIcon from '@mui/icons-material/BoyOutlined';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




const draw = (cancerDeathCount, otherDeathCount) => {

    const nonDeathIcon = <BoyOutlinedIcon color="disabled" />
    const cancerDeathIcon = <BoyOutlinedIcon />;
    const otherDeathIcon = <BoyOutlinedIcon color='warning' />;
    const nonDeathCount = 100 - cancerDeathCount - otherDeathCount;
    const rows = [];
    const itemsPerRow = 20;
    // first push the non death items in, fill up each row fully
    drawFullRows(rows, nonDeathIcon, nonDeathCount);
    // now need to fill out the first mixed row considering non death count, cancer death count, and other death count
    const firstMixedItems = []
    for (let i=0; i< nonDeathCount % itemsPerRow; i++) {
        firstMixedItems.push(nonDeathIcon);
    }
    const firstCancerDeathRowItemCount = Math.min(itemsPerRow - nonDeathCount % itemsPerRow, cancerDeathCount);
    for (let i = 0; i < firstCancerDeathRowItemCount; i++) {
        firstMixedItems.push(cancerDeathIcon)
    }
    const firstOtherDeathRowItemCount = Math.min(itemsPerRow - nonDeathCount % itemsPerRow - firstCancerDeathRowItemCount, otherDeathCount);
    for (let i = 0; i < firstOtherDeathRowItemCount; i++) {
        firstMixedItems.push(otherDeathIcon)
    }
    rows.push(<div>{firstMixedItems}</div>)
    // now only consider the remaining cancer and other death count
    const remainingCancerDeathCount = cancerDeathCount - firstCancerDeathRowItemCount;
    const remainingOtherDeathCount = otherDeathCount - firstOtherDeathRowItemCount;
    drawFullRows(rows, cancerDeathIcon, remainingCancerDeathCount);
    
    const secondMixedItems = [];
    for (let i=0; i< remainingCancerDeathCount % itemsPerRow; i++) {
        secondMixedItems.push(cancerDeathIcon);
    }
    const secondOtherDeathRowItemCount = Math.min(itemsPerRow - remainingCancerDeathCount % itemsPerRow, remainingOtherDeathCount);
    for (let i =0; i<secondOtherDeathRowItemCount; i++) {
        secondMixedItems.push(otherDeathIcon);
    }
    rows.push(<div>{secondMixedItems}</div>);
    // now finished the second mix row with cancer death count and other death count, 
    // only other death count still has some left over
    const finalOtherDeathCount = remainingOtherDeathCount - secondOtherDeathRowItemCount;
    drawFullRows(rows, otherDeathIcon, finalOtherDeathCount);
    return rows;
}

const drawFullRows = (rows, icon, count) => {
    const itemsPerRow = 20;
    for (let i = 0; i < count / itemsPerRow; i++) {
        const items = [];
        for (let j = 0; j< itemsPerRow; j++) {
            items.push(icon);
        }
        rows.push(<div>{items}</div>);        
    }
}

export default function PredictionModal({openState, onCloseCallback, cancerDeathCount, otherDeathCount, years}) {

  const handleClose = () => onCloseCallback();


  return (
    <div>
      <Modal
        open={openState}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {draw(cancerDeathCount, otherDeathCount)}
          <p className='align-center'><b>Interpretation</b></p>
          <div className="font-tiny">{100 - cancerDeathCount - otherDeathCount} will likely survive in the next {years} years.</div>
          <div className="font-tiny">{cancerDeathCount} will likely die from prostate state cancer in the next {years} years.</div>
          <div className="font-tiny">{otherDeathCount}  will likely die from other causes in the next {years} years.</div>
        </Box>
      </Modal>
    </div>
  );
}

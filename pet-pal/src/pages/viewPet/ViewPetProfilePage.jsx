import { BackButton } from "../../common/components/Components";
import { useEffect, useState } from "react";
// import useOwnerContext from "../../contexts/useOwnerContext";

import { useParams } from "react-router-dom";
import { viewPetByOwnerId } from "../../service/PetPalService";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import JasminePetCard from "../../common/components/JasminePetCard";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ViewPetProfilePage = () => {
  const { ownerId } = useParams();
  const [owner, setOwner] = useState(null);
  const [currentPic, setCurrentPic] = useState(0);

  async function getViewPetByOwnerId() {
    const payload = await viewPetByOwnerId(ownerId);
    setOwner(payload.owner);
    return payload.owner;
  }

  useEffect(() => {
    getViewPetByOwnerId();
  }, [ownerId]);

  if (!owner) {
    return (
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress size={"6rem"} />
      </Box>
    );
  }

  const renderArrows = owner.petPicture.length > 1;

  const prevPic = () => {
    setCurrentPic((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const nextPic = () => {
    setCurrentPic((prev) =>
      prev < owner.petPicture.length - 1 ? prev + 1 : prev
    );
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <BackButton />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            width: "100%",
            alignItems: "center",
          }}
        >
          {renderArrows ? (
            <button
              style={{ border: "none", backgroundColor: "rgba(0,0,0,0)" }}
              onClick={prevPic}
            >
              <KeyboardArrowLeft />
            </button>
          ) : null}
          <JasminePetCard
            imageSrc={owner.petPicture[currentPic]}
            name={owner.petName}
            gender={owner.petGender}
            description={owner.petDescription}
            location={owner.areaLocation}
            petAge={owner.petAge}
            fullPicture={true}
          />
          {renderArrows ? (
            <button
              style={{ border: "none", backgroundColor: "rgba(0,0,0,0)" }}
              onClick={nextPic}
            >
              <KeyboardArrowRight />
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};

// const [currentpic, setCurrentPic] = useState(0);

// const renderArrows = context.owner.petPicture.length <= 1 ? false : true;

// const nextPic = () => {
//   if (currentpic >= context.owner.petPicture.length - 1) {
//     setCurrentPic(0);
//   } else {
//     setCurrentPic((prev) => prev + 1);
//   }
// };
// const prevPic = () => {
//   if (currentpic !== 0) {
//     setCurrentPic((prev) => prev - 1);
//   } else {
//     setCurrentPic(context.owner.petPicture.length - 1);
//   }
// };

// ? This sets the page title, is there a better way to do it, or to put it on each page?
// useEffect(() => {
//   document.title = "Pet Pal Profile";
// }, []);

//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           width: "100%",
//         }}
//       >
//         <BackButton />
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             gap: "1rem",
//             width: "100%",
//             alignItems: "center",
//           }}
//         >
//           {renderArrows ? (
//             <button
//               style={{ border: "none", backgroundColor: "rgba(0,0,0,0)" }}
//               onClick={prevPic}
//             >
//               <LeftArrowSVG />
//             </button>
//           ) : null}
//           <JasminePetCard
//             img={payload.owner.petPicture[currentPic]}
//             description={payload.owner.petDescription}
//             petName={payload.owner.petName}
//             petGender={payload.owner.petGender}
//             location={payload.owner.areaLocation}
//             petAge={payload.owner.petAge}
//             fullPicture={true}
//           />
//           {renderArrows ? (
//             <button
//               style={{ border: "none", backgroundColor: "rgba(0,0,0,0)" }}
//               onClick={nextPic}
//             >
//               <RightArrowSVG />
//             </button>
//           ) : null}
//         </div>
//       </div>
//     </>
//   );

export default ViewPetProfilePage;

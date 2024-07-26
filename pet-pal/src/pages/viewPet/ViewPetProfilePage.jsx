import { BackButton } from "../../common/components/Components";
import { useEffect } from "react";
// import useOwnerContext from "../../contexts/useOwnerContext";

// import { PetCard } from "../../common/components/Components";
// import { LeftArrowSVG, RightArrowSVG } from "../../common/svgs/SVGs";
import { useParams } from "react-router-dom";
import { viewPetByOwnerId } from "../../service/PetPalService";

// cardDetails props: img, petName, description, petGender, location, petAge
const ViewPetProfilePage = () => {

  const {ownerId} = useParams();

  async function getViewPetByOwnerId() {
    const payload = await viewPetByOwnerId(ownerId);
    return payload.owner;
  }

  useEffect(() => {
    getViewPetByOwnerId();
  }, []);

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
        {/* <div
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
              style={{ border: "none", backgroundColor: "rgba(0,0,0,0" }}
              onClick={prevPic}
            >
              <LeftArrowSVG />
            </button>
          ) : (
            <></>
          )}
          <PetCard
            img={context.owner.petPicture[currentpic]}
            description={context.owner.petDescription}
            petName={context.owner.petName}
            petGender={context.owner.petGender}
            location={context.owner.areaLocation}
            petAge={context.owner.petAge}
            fullPicture={true}
          />
          {renderArrows ? (
            <button
              style={{ border: "none", backgroundColor: "rgba(0,0,0,0" }}
              onClick={nextPic}
            >
              <RightArrowSVG />
            </button>
          ) : (
            <></>
          )}
        </div> */}
      </div>
    </>
  );
};

export default ViewPetProfilePage;

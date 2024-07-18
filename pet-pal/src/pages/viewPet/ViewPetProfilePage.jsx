import { BackButton } from "../../components/Components";
import OwnerContext from "../../contexts/OwnerContext";
import { useContext } from "react";

const ViewPetProfilePage = () => {
  const context = useContext(OwnerContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <BackButton />
      <img
        src={context.owner.petPicture}
        style={{ height: "260px", width: "260px" }}
      />
      <p>Owner: {context.owner.ownerName}</p>
      <p>Description: {context.owner.petDescription}</p>
      <button
        onClick={() =>
          context.dispatchOwner({
            type: "setOwner",
            payload: { ...context.owner, ownerName: "Jack" },
          })
        }
      ></button>
    </div>
  );
};

export default ViewPetProfilePage;

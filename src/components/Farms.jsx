import FarmSection from "./FarmSection.jsx";
import { phones } from "../data.jsx";

export default function Farms() {
  return (
    <>
      <FarmSection
        id="keady"
        eyebrow="County Armagh · Northern Ireland"
        title="Our Farm in Keady"
        location="Keady, Co. Armagh, Northern Ireland"
        phone={phones.uk}
        tint
      >
        <p>
          Our Keady farm is our base in Northern Ireland, serving buyers across Northern Ireland and
          the rest of the UK. Cattle here are reared on good grassland with the same care and
          attention to welfare that our family has practised for five generations.
        </p>
        <p>
          For UK enquiries, whether buying, selling or arranging transport, call our UK number.
        </p>
      </FarmSection>

      <FarmSection
        id="castleblayney"
        eyebrow="County Monaghan · Ireland"
        title="Our Farm in Castleblayney"
        location="Castleblayney, Co. Monaghan, Ireland"
        phone={phones.ie}
        reverse
      >
        <p>
          Just across the border, our Castleblayney farm serves buyers in Ireland and supports our
          export trade into Europe. Having a farm on each side of the border lets us move cattle
          smoothly between the UK and Irish markets.
        </p>
        <p>
          For enquiries in Ireland or about European export, call our Irish number.
        </p>
      </FarmSection>
    </>
  );
}

import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styles from "./MadLibList.module.css";
import { imageUrlBuilder, sanity } from "./sanity";

const query = `
  *[ _type == 'madLib' ] { title, image, slug }
`;

function MadLibList() {
  // Data is fetched from Sanity via client and stored in applicatio state
  const { data: madLibs } = useQuery("madLibsList", () => sanity.fetch(query));

  if (!madLibs) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Mad Libs</h1>

      <ul className={styles.list}>
        {/* Loop through the madLib and show in a list*/}
        {madLibs.map(({ title, slug, image }) => (
          <li key={slug.current}>
            {/*We use sanity slugs to create unique urls*/}
            <Link className={styles.tile} to={`/mad-libs/${slug.current}`}>
              <img
                alt={title}
                // sanity imageUrlBuilder optimizes images on the fly
                src={imageUrlBuilder.width(425).height(425).image(image).url()}
                width="425px"
                height="425px"
              />
              <h2 className={styles.tileTitle}>{title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MadLibList;

import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imageUrl: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'DANDI Integration',
    imageUrl: 'https://private-user-images.githubusercontent.com/3679296/293070400-d76d3d27-7710-4388-a9e4-32e696271889.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDM2OTY2OTcsIm5iZiI6MTcwMzY5NjM5NywicGF0aCI6Ii8zNjc5Mjk2LzI5MzA3MDQwMC1kNzZkM2QyNy03NzEwLTQzODgtYTllNC0zMmU2OTYyNzE4ODkucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQUlXTkpZQVg0Q1NWRUg1M0ElMkYyMDIzMTIyNyUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyMzEyMjdUMTY1OTU3WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9Zjc2MGU5ZjRmY2YyZGVkZWM1MmU1YTZhZGUyNzQ4MTE0Y2IyODM4NzMxN2RhODQ1NDdkN2E0OTgxMzRiZWM0YyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.CuVZZdg_WSE0CsKTmK0IJfeGQ1yN1O_cGBq9stI4o8I',
    description: (
      <>
        Dendro is integrated with <a href="https://dandiarchive.org/" target='_blank'>DANDI Archive</a>. Upload your data to DANDI and process it with Dendro.
      </>
    ),
  },
  {
    title: 'Spike Sorting',
    imageUrl: 'https://private-user-images.githubusercontent.com/3679296/293071260-0a3358c7-081a-40d5-8240-6054b6e35a44.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDM2OTcwNTgsIm5iZiI6MTcwMzY5Njc1OCwicGF0aCI6Ii8zNjc5Mjk2LzI5MzA3MTI2MC0wYTMzNThjNy0wODFhLTQwZDUtODI0MC02MDU0YjZlMzVhNDQucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQUlXTkpZQVg0Q1NWRUg1M0ElMkYyMDIzMTIyNyUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyMzEyMjdUMTcwNTU4WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZWZhZWIwMWFiYmI5MGYyZTg4NTU2MzgwMmE2OWViMjU5NDFjOWNlODVjODNmMmIzNWMyZWE2NGJjZGE1NzQ2ZiZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.A7D_PfvDmHm-cv--8Hq3pqEAj-H1k2OsHko8aFS_4cM',
    description: (
      <>
        Dendro simplifies the spike sorting process. Import electrophysiology datasets from DANDI and select from a variety of spike sorting algorithms available in Dendro to spike sort your data.
      </>
    ),
  },
  {
    title: 'Customizable Processing Apps',
    imageUrl: 'https://private-user-images.githubusercontent.com/3679296/293070869-d497035c-3c23-42c9-804a-7a4db3b2a48b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDM2OTY4OTMsIm5iZiI6MTcwMzY5NjU5MywicGF0aCI6Ii8zNjc5Mjk2LzI5MzA3MDg2OS1kNDk3MDM1Yy0zYzIzLTQyYzktODA0YS03YTRkYjNiMmE0OGIucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQUlXTkpZQVg0Q1NWRUg1M0ElMkYyMDIzMTIyNyUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyMzEyMjdUMTcwMzEzWiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9MjE3NjhmNTJlMGQ2OWNiNjY1M2M4MDdiMjI1NDNhY2RkNDY2YjdhYzcwMTJlNDgxMzRkZDZhMTc5ZDVlNWE1MCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QmYWN0b3JfaWQ9MCZrZXlfaWQ9MCZyZXBvX2lkPTAifQ.NswAnRfyezqXU5507cI-X8VvX-_dQwVK3MDN693pDvg',
    description: (
      <>
        Dendro supports custom processing apps. Tailor your workflows to your specific research needs and algorithms.
      </>
    ),
  },
];

function Feature({title, imageUrl, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" src={imageUrl} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

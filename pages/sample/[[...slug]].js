import React from 'react';

const Slug = ({ slugs }) => {
  return <span>{slugs}</span>;
};

export async function getStaticPaths() {
  const paths = [
    {
      params: { slug: [] },
    },
    {
      params: { slug: ['level1'] },
    },
    {
      params: { slug: ['level1', 'level2'] },
    },
  ];
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params,
    },
  };
}
export default Slug;

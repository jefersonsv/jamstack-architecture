// components/Image.js
import NextImage from 'next/image';
import React from 'react';

// opt-out of image optimization, no-op
const customLoader = ({ src }) => {
    return src;
};

export default function UnoptimizedImage(props) {
    return <NextImage {...props} loader={customLoader} />;
}

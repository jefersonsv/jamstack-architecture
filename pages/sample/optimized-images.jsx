/* eslint-disable @next/next/no-img-element */
const oneSize = require('/images/pexels-kaique-rocha-57652.jpg?resize&size=350');
const multipleSizes = require('../../images/pexels-kaique-rocha-57652.jpg?resize&sizes[]=300&sizes[]=600&sizes[]=1000&sizes[]=1300');

const OptimizedImagesSample = () => {
    return (<>
        <img src={require('../../images/pexels-kaique-rocha-57652.jpg')} alt="no resize no conversion" />
        <img src={oneSize.src} alt="specific size image and converted to webp by default" />
        <img srcSet={multipleSizes.srcSet} src={multipleSizes.src} alt="multiple sizes image to webp by default"/>
    </>)
}

export default OptimizedImagesSample
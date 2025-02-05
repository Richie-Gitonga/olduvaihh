import React from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

type GalleryProps = {
    children: React.ReactNode
}

const Gallery: React.FC<GalleryProps> = ( {children} ) => {

	return (
		<ResponsiveMasonry
                columnsCountBreakPoints={{350: 2, 900: 4}}
            >
                <Masonry gutter="10px">
                    {children}
                </Masonry>
            </ResponsiveMasonry>
	);
};

export default Gallery;

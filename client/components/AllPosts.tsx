import React, { useState, useEffect } from "react";
import MainNav from "./MainNav";
import { UserType } from "./callFunctions/singleUser";
import { PostType, getAllImages } from "./callFunctions/posts";

interface AllProps {
  user: UserType;
  setUser: (user: Object) => void;
}

const AllPosts: React.FunctionComponent<AllProps> = (props) => {
  const [images, setImages] = useState<PostType[] | null>(null);

  async function grabPosts() {
    const allImages: PostType[] | null = await getAllImages();
    setImages(allImages);
  }

  useEffect(() => {
    if (!images) {
      grabPosts();
    }
  });

  return (
    <div>
      <MainNav user={props.user} setUser={props.setUser} />
      {!images ? null : (
        <div id="galleryoutside">
          {images.map((image: PostType) => (
            <div className="image-outside" key={image.id}>
              <img src={image.imageUrl} width={300} />
              <p>{image.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllPosts;

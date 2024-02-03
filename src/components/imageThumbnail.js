import { useImage } from "../hooks/useImage";

export const ImageThumbnail = (props) => {
    console.log('props', props);
    const image = useImage(props.imageId);

    return image?.source_url ? (
        <img
            style={{
                display: "block",
                width: "100%",
                height: 150,
                objectFit: "cover"
            }}
            src={image.source_url}
        />
    ) : null
}

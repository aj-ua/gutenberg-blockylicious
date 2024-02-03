import { useBlockProps, MediaUploadCheck, MediaUpload } from '@wordpress/block-editor';
import "./editor.scss";
import { __ } from "@wordpress/i18n";
import metadata from './block.json';
import { useSelect } from "@wordpress/data";
// import { Icon } from "@wordpress/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPanorama } from "@fortawesome/free-solid-svg-icons";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function Edit(props) {
    const blockProps = useBlockProps();
    const image = useSelect(
        (select) => {
            const data = select("core").getEntityRecord("postType", "attachment", props.attributes.imageId);
            return data;
        },
        [props.attributes.imageId]
    );

    const imageSelected = !!props.attributes.imageId && !!image?.source_url;

    return <div {...blockProps}>
        <MediaUploadCheck>
            {!!imageSelected &&
                <img
                    style={{ display: "block", width: "100%", height: 150, objectFit: "cover" }}
                    src={image.source_url}
                />
            }

            {!imageSelected && (
                <div style={{ display: "flex", width: "100%", height: 150, backgroundColor: "#fff" }}>
                    {/* <Icon icon="format-image" style={{ margin: "auto" }} /> */}
                    <FontAwesomeIcon icon={faPanorama} style={{ margin: "auto" }} />
                </div>
            )}

            <MediaUpload
                allowedTypes={["image"]}
                render={({ open }) => {
                    return (
                        <button className="media-select" onClick={open}>
                            {imageSelected ? __("Replace image", metadata.textdomain) : __("Select an image", metadata.textdomain)}
                        </button>
                    )
                }}
                value={props.attributes.imageId}
                onSelect={(item) => {
                    props.setAttributes({
                        imageId: item.id
                    })
                }}
            />
        </MediaUploadCheck>
    </div>;
}

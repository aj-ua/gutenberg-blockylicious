import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

export default function Save(props) {
    const blockProps = useBlockProps.save();
    const innerBlocksProps = useInnerBlocksProps.save(blockProps);

    return innerBlocksProps.children;
}

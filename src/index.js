import { registerFormatType, applyFormat, removeFormat } from "@wordpress/rich-text"; // we could use toggleFormat instead of applyFormat
import { __ } from "@wordpress/i18n";
import { RichTextToolbarButton, ColorPalette } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";
import { Popover, PanelBody } from "@wordpress/components";
import lowHighlightIcon from "./assets/low-highlight.svg";
import lowHighlightActive from "./assets/low-highlight-active.svg";
import "./style.scss";

registerFormatType("blockylicious/low-highlight", {
    title: __("Low highlight", "blockylicious"),
    tagName: "span",
    className: "blockylicious-low-highlight",
    edit: ({ onChange, value, contentRef, isActive }) => {
        const [showColors, setShowColors] = useState(false);
        const lowHighlight = value.activeFormats?.find(
            (format) => format.type === "blockylicious/low-highlight"
        );
        const attributes = {
            ...(lowHighlight?.attributes || {}),
            ...(lowHighlight?.unregisteredAttributes || {})
        }
        console.log({ lowHighlight });

        return <>
            < RichTextToolbarButton
                icon={<img width={24} height={24} src={isActive ? lowHighlightIcon : lowHighlightActive} />}
                title={__("Low highlight", "blockylicious")}
                onClick={() => {
                    setShowColors(true);
                }}
            />
            {!!showColors &&
                <Popover
                    anchor={contentRef?.current}
                    onClose={() => {
                        setShowColors(false);
                    }}>
                    <PanelBody>
                        <ColorPalette
                            value={attributes?.['data-color']}
                            onChange={(newValue) => {
                                if (newValue) {
                                    onChange(applyFormat(value, {
                                        type: "blockylicious/low-highlight",
                                        attributes: {
                                            'data-color': newValue,
                                            style: `background-image: linear-gradient(to right, ${newValue}, ${newValue})`
                                        }
                                    }))
                                } else {
                                    onChange(removeFormat(value, "blockylicious/low-highlight"))
                                }
                            }} />
                    </PanelBody>
                </Popover>
            }
        </>
    }
})

import { HorizontalRule, RangeControl, ToggleControl, ColorPalette } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import metadata from "../block.json";

export const BottomCurveSettings = (props) => {
    return (
        <>
            <HorizontalRule />

            <RangeControl
                min={100}
                max={300}
                value={props.attributes.bottomWidth || 100}
                onChange={(newValue) => {
                    props.setAttributes({
                        bottomWidth: parseInt(newValue)
                    })

                }}
                label={__('Width (%)', metadata.textdomain)} />
            <RangeControl
                min={0}
                max={200}
                value={props.attributes.bottomHeight}
                onChange={(newValue) => {
                    props.setAttributes({
                        bottomHeight: parseInt(newValue)
                    })

                }}
                label={__('Height (px)', metadata.textdomain)} />

            <HorizontalRule />

            <div style={{ display: "flex" }}>
                <ToggleControl onChange={(isChecked) => {
                    props.setAttributes({
                        bottomFlipX: isChecked
                    })
                }} checked={props.attributes.bottomFlipX}></ToggleControl>
                <span>{__('Flip horizontally', metadata.textdomain)}</span>
            </div>

            <div style={{ display: "flex" }}>
                <ToggleControl onChange={(isChecked) => {
                    props.setAttributes({
                        bottomFlipY: isChecked
                    })
                }} checked={props.attributes.bottomFlipY}></ToggleControl>
                <span>{__('Flip vertically', metadata.textdomain)}</span>
            </div>

            <HorizontalRule />

            <div>
                <label>{__('Curve color', metadata.textdomain)}</label>
                <ColorPalette
                    // disableCustomColors
                    // colors={[{
                    //     name: "Red",
                    //     color: "#FF0000"
                    // },
                    // {
                    //     name: "Yellow",
                    //     color: "#FFF000"
                    // }]}
                    value={props.attributes.bottomColor}
                    onChange={(newValue) => {
                        props.setAttributes({
                            bottomColor: newValue,
                        })
                    }}
                />
            </div>
        </>
    )
}
